import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "./components/layouts/main/main-layout";

const jetBrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vscode",
  description: "Vscode portfolio lookalike",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrains.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
