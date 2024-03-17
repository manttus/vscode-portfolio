"use client";

import { ReactNode } from "react";
import StatusBar from "./components/status";
import EditorBody from "./components/editor-body";
import Footer from "./components/footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex flex-col h-screen w-screen bg-background">
        <StatusBar />
        <EditorBody>{children}</EditorBody>
        <Footer />
      </div>
    </>
  );
}
