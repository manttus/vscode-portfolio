import SpriteIcon from "@/app/components/common/icon/sprites_icon";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between w-full h-5 bg-footer text-foreground text-[0.65rem]">
      <div className="flex items-center h-full cursor-pointer">
        <div className="h-full flex justify-center items-center w-8 bg-remote flex-grow">
          <SpriteIcon name="remote" size={12} className={"fill-foreground"} />
        </div>
      </div>
      <div className="px-2 cursor-pointer">Go Live</div>
    </footer>
  );
}
