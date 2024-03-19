import SpriteIcon from "@/app/components/common/icon/sprites_icon";
import { cn } from "@/app/components/lib/utils";

export default function ExplorerFile({
  title,
  name,
}: {
  title: string;
  name: string;
}) {
  return (
    <>
      <div className="flex flex-col text-[0.65rem] text-foreground  transition ease-in-out duration-300">
        <div
          className={cn(
            "flex w-full cursor-pointer pb-1 items-center gap-1 px-3",
          )}
          onClick={() => {}}
        >
          <SpriteIcon name={name} size={11} className="fill-foreground" />
          <p>{title}</p>
        </div>
      </div>
    </>
  );
}
