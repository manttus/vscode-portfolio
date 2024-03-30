import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QueryWrapper from "./components/wrapper/query-wrapper";

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
      <QueryWrapper>
        <body className={jetBrains.className}>
          <>{children}</>
          <ToastContainer />
        </body>
      </QueryWrapper>
    </html>
  );
}
