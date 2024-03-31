import { searchStructure } from "@/actions/structure";
import SpriteIcon from "@/app/components/common/icon/sprites_icon";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import ExplorerFile from "../explorer/explorer-file";

export default function Search() {
  const [search, setSearch] = useState<string>("");

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["search"],
    queryFn: () => searchStructure(search),
    retry: false,
  });

  useEffect(() => {
    const timeout = setTimeout(() => refetch(), 500);
    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <>
      <div className="flex flex-col items-start flex-grow">
        <div className="flex w-full h-8 justify-between items-center text-[0.60rem] text-foreground px-2">
          <p>SEARCH</p>
          <SpriteIcon
            name="kebab"
            size={20}
            className="fill-foreground cursor-pointer pb-1"
          />
        </div>
        <div className="w-full px-2 pb-2">
          <input
            className="w-full h-6 px-1 bg-bar ring-footer focus:ring-1 focus:outline-none text-foreground text-[0.65rem]"
            placeholder="Search (for files)"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-col px-2 gap-2">
          <p className="text-foreground text-[0.65rem]">{`${
            data ? data.length : 0
          } results`}</p>
          <div>
            {!isLoading &&
              data!.map((item) => {
                return (
                  <ExplorerFile
                    id={item.id!}
                    name={item.icon!}
                    type={item.type!}
                    title={item.name!}
                    content={item.content!}
                    extension={item.extension!}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
