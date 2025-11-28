import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Jamila Qadiri - Real Estate Broker",
  description:
    "Experienced Real Estate Broker with 20 years of expertise in Southern California residential and commercial real estate. Specializing in real estate finance and complex deal structuring.",
  openGraph: {
    images: [
      {
        url: "/og?title=Jamila Qadiri - Real Estate Broker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/og?title=Jamila Qadiri - Real Estate Broker",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(poppins.variable, inter.variable, "antialiased dark h-full overflow-hidden font-sans")}>
        <Toaster position="top-center" richColors />
        <div className="flex flex-col h-full">
          <Navbar />
          <div className="flex-1 overflow-y-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};
