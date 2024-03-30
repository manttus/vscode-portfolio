import SpriteIcon from "@/app/components/common/icon/sprites_icon";
import { cn } from "@/app/components/lib/utils";
import useTabStore from "@/app/feature/store/useTabsStore";

interface IExplorerFileProps {
  id: string;
  title: string;
  name: string;
  extension: string;
  content: string;
  type: string;
}
export default function SearchFile({
  id,
  title,
  name,
  extension,
  content,
  type,
}: IExplorerFileProps) {
  const { open } = useTabStore();

  return (
    <>
      <div className="flex flex-col text-[0.65rem] text-foreground  transition ease-in-out duration-300">
        <div
          className={cn(
            "flex w-full cursor-pointer pb-1 items-center gap-1 px-3",
          )}
          onClick={() => open({ id, title, name, extension, content, type })}
        >
          <SpriteIcon name={name} size={10} className="fill-foreground" />
          <p>
            {title}
            {extension}
          </p>
        </div>
      </div>
    </>
  );
}

