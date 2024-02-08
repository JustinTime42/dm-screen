import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { montserrat, merriweather } from '@/app/ui/fonts';
import "./globals.css";
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DM Screen",
  description: "Manage your campaign with ease using our AI powered tools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${merriweather.variable}`}>
        <Layout>
          {children}
        </Layout>        
      </body>
    </html>
  )
}
