import SpriteIcon from "@/app/components/common/icon/sprites_icon";
import Accordian from "@/app/components/ui/accordian";
import ExplorerFile from "./explorer-file";

export default function ActivityExplorer() {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex w-full h-8 justify-between items-center text-[0.60rem] text-inactive py-2 px-3">
          <p>EXPLORER</p>
          <SpriteIcon
            name="kebab"
            size={14}
            className="fill-inactive cursor-pointer"
          />
        </div>
        <div>
          <Accordian title={".github"} />
          <Accordian title={".next"} />
          <Accordian title={"node_modules"} />
          <Accordian title={"data"}>
            <ExplorerFile name={"json"} title={"_data.json"} />
          </Accordian>
          <Accordian title={"public"}>
            <Accordian title={"certificates"}>
              <div>
                <ExplorerFile name={"image"} title={"power-user.png"} />
                <ExplorerFile name={"image"} title={"flutter.png"} />
              </div>
            </Accordian>
          </Accordian>
          <Accordian title={"src"} />
          <ExplorerFile name={"config"} title={".editorconfig"} />
          <ExplorerFile name={"config"} title={".env"} />
          <ExplorerFile name={"gitignore"} title={".gitignore"} />
        </div>
      </div>
    </>
  );
}
