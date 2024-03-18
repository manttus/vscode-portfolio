"use client";

import SpriteIcon from "@/app/components/common/icon/sprites_icon";
import Image from "next/image";
import { ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
import ActivityTile from "./atomic/activity-tile";
import active from "@/app/components/lib/active";

export default function EditorBody({ children }: { children: ReactNode }) {
  const activity_top = [
    {
      id: uuidv4(),
      icon: "files",
      alt: "Files Icon",
      active: active("/"),
      path: "/",
      tooltip: "Dashboard",
    },
    {
      id: uuidv4(),
      icon: "search",
      alt: "Search Icon",
      active: active("/search"),
      path: "/search",
      tooltip: "Search",
    },
    {
      id: uuidv4(),
      icon: "github",
      alt: "Github Icon",
      active: active("/github"),
      path: "/github",
      tooltip: "Github",
    },
  ];

  const activity_bottom = [
    {
      id: uuidv4(),
      icon: "setting",
      alt: "Setting Icon",
      active: active("/setting"),
      path: "/setting",
      tooltip: "Settings",
    },
  ];

  return (
    <>
      <main className="flex flex-grow">
        <aside className="flex flex-col justify-between items-center bg-activity w-11">
          <div className="w-full">
            {activity_top.map((activ) => (
              <ActivityTile
                key={activ.id}
                status={activ.active}
                name={activ.icon}
                path={activ.path}
                tooltip={activ.tooltip}
              />
            ))}
          </div>
          <div className="w-full">
            {activity_bottom.map((activ) => (
              <ActivityTile
                key={activ.id}
                status={activ.active}
                name={activ.icon}
                tooltip={activ.tooltip}
              />
            ))}
          </div>
        </aside>
        <section className="bg-background">{children}</section>
      </main>
    </>
  );
}
