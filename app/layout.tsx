import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

// Use Inter font instead of Mona_Sans which might be causing issues
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "AI Art Gallery",
  description: "A virtual gallery of AI-generated art",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn("min-h-screen font-sans antialiased", inter.variable)}
        style={{
          background: "linear-gradient(to bottom, #000000, #0f0728, #1a0a40)",
          backgroundAttachment: "fixed",
        }}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {/* Futuristic background elements */}
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Grid lines */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            ></div>

            {/* Glow orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-900/20 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-fuchsia-900/20 blur-3xl"></div>
          </div>

          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
            <footer className="py-6 text-center text-sm text-purple-400">
              <p>© {new Date().getFullYear()} AI Art Gallery. All rights reserved.</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
