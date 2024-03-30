import SpriteIcon from "@/app/components/common/icon/sprites_icon";
import { cn } from "@/app/components/lib/utils";
import ActivityTooltip from "./side-tooltip";

interface IActivityTile {
  name: string;
  callback: () => void;
  status: boolean;
  size?: number;
  tooltip: string;
}

export default function SideTile({
  name,
  callback,
  status,
  size = 25,
  tooltip,
}: IActivityTile) {
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
        onClick={callback}
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
