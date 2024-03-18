"use client";

import SpriteIcon from "@/app/components/common/icon/sprites_icon";
import { cn } from "@/app/components/lib/utils";
import { useRouter } from "next/navigation";
import ActivityTooltip from "./activty-tooltip";

interface IActivityTile {
  name: string;
  path: string;
  status: boolean;
  size?: number;
  tooltip: string;
}

export default function ActivityTile({
  name,
  status,
  path,
  size = 26,
  tooltip,
}: IActivityTile) {
  const router = useRouter();
  return (
    <>
      <div
        className={cn(
          "flex border-l w-full justify-center items-center py-3 cursor-pointer relative group",
          {
            "border-white": status,
            "border-transparent": !status,
          },
        )}
        onClick={() => router.push(path)}
      >
        <SpriteIcon
          className={cn("fill-foreground hover:fill-foreground ", {
            "fill-foreground": status,
            "fill-inactive": !status,
          })}
          name={name}
          size={size}
        />
        <ActivityTooltip tooltip={tooltip} />
      </div>
    </>
  );
}
