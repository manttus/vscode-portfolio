import SpriteIcon from "@/app/components/common/icon/sprites_icon";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between w-full h-6 bg-footer text-foreground text-[0.65rem]">
      <div className="flex items-center h-full cursor-pointer gap-2">
        <div className="h-full flex justify-center items-center w-8 bg-remote flex-grow">
          <SpriteIcon
            name="remote"
            size={12}
            className={"fill-foreground stroke-2"}
          />
        </div>
        <div className="h-full flex justify-center items-center flex-grow gap-1 font-semibold">
          <SpriteIcon
            name="branch"
            size={14}
            className={"fill-foreground stroke-2"}
          />
          <p>Raymon*</p>
        </div>
      </div>
      <div className="flex h-full items-center px-2 gap-3 cursor-pointer"></div>
    </footer>
  );
}
