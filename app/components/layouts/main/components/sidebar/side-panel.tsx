"use client";

import { v4 as uuidv4 } from "uuid";
import active from "@/app/components/lib/active";
import useActivityStore from "@/app/feature/store/useActivityStore";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Tab } from "@/app/enums/TabEnums";
import Extended from "./extended";
import SideTile from "./side-tile";

export default function SidePanel({ children }: { children: ReactNode }) {
  const bar = useActivityStore();
  const router = useRouter();

  const activity_top = [
    {
      id: uuidv4(),
      icon: "files",
      alt: "Files Icon",
      active: active(Tab.EXPLORER),
      callback: () => {
        bar.setExpanded(Tab.EXPLORER);
      },
      tooltip: "Dashboard",
    },
    {
      id: uuidv4(),
      icon: "search",
      alt: "Search Icon",
      active: active(Tab.SEARCH),
      callback: () => {
        bar.setExpanded(Tab.SEARCH);
      },
      tooltip: "Search",
    },
    {
      id: uuidv4(),
      icon: "github",
      alt: "Github Icon",
      active: active(Tab.GITHUB),
      callback: () => {
        router.push("https://github.com/manttus");
      },
      tooltip: "Github",
    },
    {
      id: uuidv4(),
      icon: "extension",
      alt: "Github Icon",
      active: active(Tab.GITHUB),
      callback: () => {},
      tooltip: "Projects",
    },
  ];

  const activity_bottom = [
    {
      id: uuidv4(),
      icon: "message",
      alt: "Setting Icon",
      active: active(Tab.SETTING),
      callback: () => {
        bar.setExpanded(Tab.SETTING);
      },
      tooltip: "Settings",
    },
    {
      id: uuidv4(),
      icon: "profile",
      alt: "Profile Icon",
      active: active(Tab.PROFILE),
      callback: () => {
        bar.setExpanded(Tab.PROFILE);
      },
      tooltip: "Profile",
    },
  ];

  return (
    <>
      <main className="flex flex-grow">
        <aside className="flex transition ease-in-out duration-500">
          <div className="flex flex-col justify-between items-center bg-activity">
            <div className="w-11">
              {activity_top.map((activ) => (
                <SideTile
                  key={activ.id}
                  status={activ.active}
                  name={activ.icon}
                  callback={activ.callback}
                  tooltip={activ.tooltip}
                />
              ))}
            </div>
            <div className="w-full">
              {activity_bottom.map((activ) => (
                <SideTile
                  key={activ.id}
                  status={activ.active}
                  name={activ.icon}
                  callback={activ.callback}
                  tooltip={activ.tooltip}
                />
              ))}
            </div>
          </div>
          {bar.extended && <Extended />}
        </aside>
        <section className="h-full flex-grow w-full bg-background">
          {children}
        </section>
      </main>
    </>
  );
}
