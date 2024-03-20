import { ReactNode, useState } from "react";
import SpriteIcon from "../common/icon/sprites_icon";
import { cn } from "../lib/utils";

export default function Accordian({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <div className="flex flex-col text-[0.65rem] text-foreground  transition ease-in-out duration-300">
        <div
          className={cn(
            "flex w-full cursor-pointer pb-1 items-center gap-1 px-3",
          )}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <SpriteIcon
            name={!isExpanded ? "arrow-right" : "arrow-down"}
            size={10}
            className="fill-foreground"
          />
          <p>{title}</p>
        </div>
        {isExpanded && <div className="flex flex-col px-4">{children}</div>}
      </div>
    </>
  );
}
