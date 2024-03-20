import SpriteIcon from "@/app/components/common/icon/sprites_icon";
import { cn } from "@/app/components/lib/utils";
import useTabStore from "@/app/feature/store/useTabsStore";

export default function TabBar() {
  const { tabs, remove, current, active } = useTabStore();
  return (
    <>
      <div
        className={cn("flex w-full h-6 bg-expanded", {
          "items-center justify-center": tabs.length === 0,
        })}
      >
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={cn(
              "flex gap-1 items-center border-none text-[0.65rem] text-foreground px-2 cursor-pointer",
              {
                "bg-background": current === tab.id,
                "bg-bar": current !== tab.id,
              },
            )}
          >
            <div
              className="flex items-center gap-1"
              onClick={() => active(tab.id)}
            >
              <SpriteIcon name={tab.name} size={10} />
              {tab.title}
            </div>
            <div className="pl-2 cursor-pointer" onClick={() => remove(tab.id)}>
              <SpriteIcon name={"close"} size={8} className="fill-foreground" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
