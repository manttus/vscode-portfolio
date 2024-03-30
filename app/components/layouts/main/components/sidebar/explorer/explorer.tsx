import SpriteIcon from "@/app/components/common/icon/sprites_icon";
import Accordian from "@/app/components/ui/accordian";
import ExplorerFile from "./explorer-file";
import useSWR from "swr";
import { getStruture } from "@/actions/structure";

export default function Explorer() {
  const { data, isLoading, error } = useSWR("/", getStruture);

  if (isLoading) {
    return <></>;
  }

  if (error) {
    return <>error</>;
  }

  interface ITreeStructure {
    id: string;
    name: string;
    icon: string;
    extension: string;
    content: string;
    type: string;
    children: ITreeStructure[];
  }

  function explorerNestedTree(tree: ITreeStructure[]) {
    return tree.map((item) => {
      if (item.type === "folder") {
        return (
          <Accordian key={item.id} title={item.name}>
            {explorerNestedTree(item.children)}
          </Accordian>
        );
      } else {
        return (
          <ExplorerFile
            key={item.id}
            id={item.id}
            title={item.name}
            content={item.content}
            name={item.icon}
            extension={item.extension}
            type={item.type}
          />
        );
      }
    });
  }

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex w-full h-8 justify-between items-center text-[0.60rem] text-foreground py-2 px-2">
          <p>EXPLORER</p>
          <SpriteIcon
            name="kebab"
            size={20}
            className="fill-foreground cursor-pointer pb-1"
          />
        </div>
        <div>{explorerNestedTree(data as ITreeStructure[])}</div>
      </div>
    </>
  );
}
