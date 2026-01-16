import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google"; // innovative code font
import "./globals.css";

const mono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krishna Rathore",
  description: "Math & Computing | IIT Patna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mono.className} bg-black text-white min-h-screen`}>
        {/* Dot Pattern Background */}
        <div className="fixed inset-0 z-[-1] h-full w-full bg-black bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Main Layout Container */}
        <div className="max-w-2xl mx-auto p-8 border-x border-neutral-800 min-h-screen bg-black/50 backdrop-blur-sm">
          <header className="mb-12 flex justify-between items-end border-b border-neutral-800 pb-4">
            <div>
              <h1 className="text-xl font-bold tracking-tighter">KRISHNA RATHORE</h1>
              <p className="text-sm text-neutral-400">Math & Computing @ IIT Patna</p>
            </div>
            <nav className="flex gap-4 text-sm">
              <a href="/" className="hover:underline decoration-neutral-500">~/home</a>
              <a href="/projects" className="hover:underline decoration-neutral-500">~/projects</a>
              <a href="/blog" className="hover:underline decoration-neutral-500">~/blog</a>
              <a href="/contact" className="hover:underline decoration-neutral-500">~/contact</a>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}