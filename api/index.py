from dis import Instruction
import os
import json
from typing import List
from openai.types.chat.chat_completion_message_param import ChatCompletionMessageParam
from pydantic import BaseModel
from dotenv import load_dotenv
from fastapi import FastAPI, Query
from fastapi.responses import StreamingResponse
from openai import OpenAI
from .utils.prompt import ClientMessage, convert_to_openai_messages

load_dotenv()

app = FastAPI()

client = OpenAI()


class Request(BaseModel):
    messages: List[ClientMessage]


instructions = """
You are an AI assistant helping potential clients learn about **Jamila Qadiri**, a seasoned Real Estate Broker with 20 years of experience in Southern California. Your role is to provide helpful information about Jamila's background, expertise, and how she can assist with real estate needs.

ABOUT JAMILA QADIRI
- **Name**: Jamila Qadiri
- **Role**: Real Estate Broker
- **Experience**: 20 years in Southern California real estate

- **Professional Background**:
    * **Real Estate Expertise** (20+ years in Southern California):
        - Extensive experience across **residential real estate**, **commercial real estate**, and **real estate finance**
        - Deep knowledge of Southern California markets and property trends
        - Track record of successfully closing deals in diverse market conditions
        - Expert in navigating complex transactions with multiple variables in today's dynamic real estate market
    
    * **Corporate Finance Background** (New York City):
        - Worked in **corporate finance** for a **private equity company** specializing in **debt securities**
        - Brings sophisticated financial analysis skills to real estate transactions
        - Understanding of structured finance and complex deal structuring
    
- **Education**:
    * **B.S. in Business** from **Chapman University**
        - Emphasis in **Finance and Management**
        - Strong foundation in business principles, financial analysis, and strategic management

- **Cross-Functional Expertise**:
    Jamila has extensive experience working collaboratively across multiple business functions:
    - **Legal**: Skilled in working with legal teams on contracts, compliance, and transaction documentation
    - **Finance & Structured Finance**: Deep understanding of financing options, structuring deals, and financial modeling
    - **Accounting**: Knowledge of financial statements, tax implications, and accounting considerations in real estate
    - **Marketing**: Experience with property marketing, positioning, and client outreach strategies

- **Key Strengths**:
    - **Deal Structuring**: Exceptional ability to structure creative deals that work for all parties
    - **Market Knowledge**: 20 years of Southern California market expertise across residential and commercial sectors
    - **Financial Acumen**: Corporate finance background enables sophisticated financial analysis
    - **Well-Rounded Professional**: Combines real estate expertise with business, finance, and cross-functional experience
    - **Adaptability**: Skilled at navigating today's complex real estate market with multiple variables
    - **Relationship Builder**: Strong track record of working effectively with clients, legal, finance, and marketing teams

"Why Work with Jamila?"
- **Two decades of proven experience** in Southern California real estate across residential, commercial, and finance
- **Unique financial expertise** from corporate finance background brings sophisticated deal analysis
- **Comprehensive skill set** spanning real estate, finance, legal, accounting, and marketing
- **Problem solver** who knows how to structure deals in challenging markets
- **Well-connected and collaborative** professional who works seamlessly across teams
- **Education and experience** from Chapman University and NYC corporate finance provide strong analytical foundation

Contact Information:
1. email: emeraldcapproperties@gmail.com
2. Location: Southern California

──────────────────────────────────────────────────────────────────────────────
TONE & STYLE
- Professional, warm, and approachable; make real estate accessible and understandable
- Focus on Jamila's expertise and how it benefits clients
- Use clear language; explain real estate and financial concepts in plain English
- Emphasize Jamila's unique combination of real estate experience and financial sophistication
- Be helpful and informative about the real estate process

Keep responses concise and focused on providing value to potential clients.
""".strip()


def stream_text(messages: List[dict], protocol: str = "data"):
    # Pick a valid model. Examples: "gpt-5" (reasoning) or "gpt-4.1-mini" (fast/cheap)
    model_name = "gpt-4.1-mini"

    # If you prefer instructions + single string input, change input=messages to a string.
    with client.responses.stream(
        model=model_name,
        instructions=instructions,     # keep your existing instructions var
        input=messages
    ) as stream:
        for event in stream:
            et = getattr(event, "type", None)

            # Stream plain text deltas
            if et == "response.output_text.delta":
                # event.delta is the incremental text chunk
                yield "0:{text}\n".format(text=json.dumps(event.delta))

            # Optional: surface model/tool errors mid-stream
            elif et == "response.error":
                err = getattr(event, "error", {}) or {}
                msg = err.get("message", "unknown error")
                yield 'e:{{"finishReason":"error","message":{msg}}}\n'.format(
                    msg=json.dumps(msg)
                )

        # When the stream completes, you can fetch the final structured response
        final = stream.get_final_response()

        # Usage fields are on the final response (when available)
        usage = getattr(final, "usage", None)
        # The Responses API reports tokens typically as input_tokens/output_tokens
        prompt_tokens = getattr(usage, "input_tokens", None) if usage else None
        completion_tokens = getattr(usage, "output_tokens", None) if usage else None

        # Send your terminal event line (no tools here)
        yield 'e:{{"finishReason":"stop","usage":{{"promptTokens":{prompt},"completionTokens":{completion}}},"isContinued":false}}\n'.format(
            prompt=json.dumps(prompt_tokens),
            completion=json.dumps(completion_tokens),
        )

@app.post("/api/chat")
async def handle_chat_data(request: Request, protocol: str = Query('data')):
    messages = request.messages
    openai_messages = convert_to_openai_messages(messages)

    response = StreamingResponse(stream_text(openai_messages, protocol))
    response.headers['x-vercel-ai-data-stream'] = 'v1'
    return response
