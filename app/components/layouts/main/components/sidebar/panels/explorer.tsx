import SpriteIcon from "@/app/components/common/icon/sprites_icon";
import Accordian from "@/app/components/ui/accordian";
import { v4 as uuidv4 } from "uuid";
import { useMemo } from "react";
import ExplorerFile from "./explorer-file";

export default function Explorer() {
  const files = useMemo(() => {
    return [
      {
        id: uuidv4(),
        title: ".github",
        files: [],
      },
      {
        id: uuidv4(),
        title: ".next",
        files: [],
      },
      {
        id: uuidv4(),
        title: "node_modules",
        files: [],
      },
      {
        id: uuidv4(),
        title: "data",
        files: [
          {
            id: uuidv4(),
            file: "user.json",
            name: "json",
          },
        ],
      },
      {
        id: uuidv4(),
        title: "certificates",
        files: [
          {
            id: uuidv4(),
            file: "power-user.jpg",
            name: "image",
          },
        ],
      },
      {
        id: uuidv4(),
        title: ".env",
        name: "config",
      },
      {
        id: uuidv4(),
        title: ".editorconfig",
        name: "config",
      },
      {
        id: uuidv4(),
        title: ".gitignore",
        name: "gitignore",
      },
      {
        id: uuidv4(),
        title: "package.json",
        name: "json",
      },
      {
        id: uuidv4(),
        title: "package-lock.json",
        name: "json",
      },
    ];
  }, []);

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
          {files.map((folder) => {
            if (folder.files) {
              return (
                <Accordian key={folder.id} title={folder.title}>
                  {folder.files.map((file) => (
                    <ExplorerFile
                      id={file.id}
                      key={file.id}
                      title={file.file}
                      name={file.name}
                    />
                  ))}
                </Accordian>
              );
            } else {
              return (
                <ExplorerFile
                  id={folder.id}
                  key={folder.id}
                  title={folder.title}
                  name={folder.name}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
