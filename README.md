# Jamila Qadiri - Real Estate Broker Portfolio

A modern, interactive portfolio website showcasing the expertise of Jamila Qadiri, a Real Estate Broker with 20 years of experience in Southern California residential and commercial real estate.

![Portfolio Preview](https://via.placeholder.com/800x400/1a1a1a/00ff00?text=Jamila+Qadiri+Portfolio)

## 🌟 Features

- **Interactive AI Chat**: Ask questions about Jamila's experience and expertise through an intelligent chat interface
- **Responsive Design**: Beautifully crafted UI that works seamlessly across all devices
- **Modern Tech Stack**: Built with Next.js, React, TypeScript, and Python FastAPI backend
- **Real-time Streaming**: Smooth, real-time AI responses using OpenAI's API
- **Project Showcase**: Detailed overview of experience in residential, commercial, and real estate finance

## 🛠️ Technologies Used

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Vercel AI SDK**: Streaming AI responses

### Backend
- **Python FastAPI**: High-performance API framework
- **OpenAI API**: Intelligent chat responses using GPT models
- **Vercel**: Deployment and hosting

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/pnpm
- Python 3.9+
- OpenAI API key

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/jamila-portfolio.git
cd jamila-portfolio
```

2. **Install frontend dependencies**
```bash
npm install
# or
pnpm install
```

3. **Install Python dependencies**
```bash
pip install -r requirements.txt
```

4. **Set up environment variables**

Create a `.env.local` file in the root directory:
```bash
OPENAI_API_KEY=your_openai_api_key_here
```

5. **Run the development server**

Frontend:
```bash
npm run dev
# or
pnpm dev
```

The app will be available at `http://localhost:3000`

Backend (FastAPI):
```bash
cd api
uvicorn index:app --reload
```

## 📁 Project Structure

```
jamila-portfolio/
├── app/                    # Next.js app directory
│   ├── (chat)/            # Chat page
│   ├── layout.tsx         # Root layout
│   ├── projects/          # Projects page
│   ├── resume/            # Resume/About Me page
│   └── why-hire-me/       # Why Work With Me page
├── components/            # React components
│   ├── chat.tsx          # Main chat component
│   ├── navbar.tsx        # Navigation bar
│   ├── overview.tsx      # Landing page overview
│   └── ui/               # UI components
├── api/                   # Python FastAPI backend
│   ├── index.py          # Main API routes
│   └── utils/            # Utility functions
├── public/               # Static assets
└── lib/                  # Utility functions
```

## 🚀 Deployment

### Vercel Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Set environment variables in Vercel dashboard:
   - `OPENAI_API_KEY`

## 💼 About Jamila Qadiri

**Jamila Qadiri** - Real Estate Broker

- **Experience**: 20 years in Southern California real estate
- **Education**: BS in Business (Finance & Management) from Chapman University
- **Specialties**: Residential, Commercial, Real Estate Finance
- **Background**: Corporate finance experience with private equity firm in NYC

---

Built with ❤️ by Jamila Qadiri
