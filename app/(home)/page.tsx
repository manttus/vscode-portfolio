"use client";

import SpriteIcon from "../components/common/icon/sprites_icon";
import CodeBlock from "../components/ui/code-block";
import useTabStore from "../feature/store/useTabsStore";
import Image from "next/image";

export default function Home() {
  const { tabs, current } = useTabStore();

  function tabContent() {
    switch (current.type) {
      case "image": {
        return (
          <div className="flex flex-grow justify-center items-center">
            <div className="flex w-5/6 h-5/6 justify-center relative items-center">
              <Image
                src={current.content}
                style={{ objectFit: "contain" }}
                alt="showcase"
                fill
                priority
              />
            </div>
          </div>
        );
      }
      case "file": {
        return (
          <>
            <div className="flex-grow">
              <CodeBlock
                text="0.75rem"
                content={current.content ? current.content : ""}
                showLine
              />
            </div>
            <div className="px-2 pt-4 cursor-pointer">
              <CodeBlock
                text="0.22rem"
                content={current.content ? current.content : ""}
              />
            </div>
          </>
        );
      }
    }
  }

  return (
    <main className="flex h-full">
      {tabs.length > 0 && tabContent()}
      {tabs.length === 0 && (
        <div className="flex w-full flex-grow justify-center items-center">
          <SpriteIcon name="vscode" size={200} className="fill-[#121212]" />
        </div>
      )}
    </main>
  );
}
