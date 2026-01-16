import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${mono.className} min-h-screen`}>
        <ThemeProvider>
          {/* Dot Pattern Background */}
          <div className="dot-pattern" />
          
          {/* Main Layout Container */}
          <div className="main-container max-w-2xl mx-auto p-6 md:p-8 border-x min-h-screen">
            
            {/* Header */}
            <header className="header-border mb-8 md:mb-12 flex flex-col md:flex-row md:justify-between md:items-start border-b pb-6 md:pb-4 gap-4 md:gap-0">
              
              {/* Name Section */}
              <div>
                <h1 className="text-xl font-bold tracking-tighter">KRISHNA RATHORE</h1>
                <p className="text-muted text-xs md:text-sm mt-1">Math & Computing @ IIT Patna</p>
              </div>

              {/* Navigation with Theme Toggle above */}
              <div className="flex flex-col items-start md:items-end gap-3">
                {/* Theme Toggle - Above navigation */}
                <ThemeToggle />
                
                {/* Navigation tabs */}
                <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  <a href="/" className="nav-link">~/home</a>
                  <a href="/projects" className="nav-link">~/projects</a>
                  <a href="/blog" className="nav-link">~/blog</a>
                  <a href="/contact" className="nav-link">~/contact</a>
                </nav>
              </div>

            </header>
            
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}