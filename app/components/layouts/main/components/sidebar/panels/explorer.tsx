import SpriteIcon from "@/app/components/common/icon/sprites_icon";
import Accordian from "@/app/components/ui/accordian";
import { v4 as uuidv4 } from "uuid";
import { useMemo } from "react";
import ExplorerFile from "./explorer-file";
import useSWR from "swr";
import { getStruture } from "@/actions/structure";
import Image from "next/image";

export default function Explorer() {
  const { data, isLoading } = useSWR("/", getStruture);

  if (isLoading) {
    return <></>;
  }


  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex w-full h-8 justify-between items-center text-[0.60rem] text-foreground py-2 px-3">
          <p>EXPLORER</p>
          <SpriteIcon
            name="kebab"
            size={14}
            className="fill-inactive cursor-pointer"
          />
        </div>
        <div>
          {data.map((folder) => {
            if (folder.type === "folder") {
              return (
                <Accordian key={folder.id} title={folder.name}>
                  {folder.children.map((file) => (
                    <ExplorerFile
                      id={file.id}
                      key={file.id}
                      title={file.name}
                      name={file.icon}
                      extension={file.extension}
                      content={file.content}
                    />
                  ))}
                </Accordian>
              );
            } else {
              return (
                <ExplorerFile
                  id={folder.id}
                  key={folder.id}
                  title={folder.name}
                  name={folder.icon}
                  extension={folder.extension}
                  content={folder.content}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
