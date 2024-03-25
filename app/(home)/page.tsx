"use client";

import { getStruture } from "@/actions/structure";
import SpriteIcon from "../components/common/icon/sprites_icon";
import CodeBlock from "../components/ui/code-block";
import useTabStore from "../feature/store/useTabsStore";
import { useEffect } from "react";

export default function Home() {
  const { active, tabs } = useTabStore();

  async function getData() {
    const data = await getStruture();
    console.log("Structure", data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="flex h-full">
      {tabs.length > 0 && (
        <>
          <div className="flex-grow">
            <CodeBlock text="0.65rem" showLine />
          </div>
          <div className="px-2 pt-4 cursor-pointer">
            <CodeBlock text="0.18rem" />
          </div>
        </>
      )}
      {tabs.length === 0 && (
        <div className="flex w-full flex-grow justify-center items-center">
          <SpriteIcon name="vscode" size={200} className="fill-[#121212]" />
        </div>
      )}
    </main>
  );
}
