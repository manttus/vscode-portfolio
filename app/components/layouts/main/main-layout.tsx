"use client";

import { ReactNode } from "react";
import StatusBar from "./components/status";
import Footer from "./components/footer";
import useTabStore from "@/app/feature/store/useTabsStore";
import TabBar from "./components/tabs/tab-bar";
import SidePanel from "./components/sidebar/side-panel";

export default function MainLayout({ children }: { children: ReactNode }) {
  const tabStore = useTabStore();
  return (
    <>
      <div className="h-screen flex flex-col no-scrollbar bg-background">
        <StatusBar />
        <SidePanel>
          {tabStore.tabs.length !== 0 && <TabBar />}
          {children}
        </SidePanel>
        <Footer />
      </div>
    </>
  );
}
