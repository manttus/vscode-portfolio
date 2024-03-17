import Image from "next/image";
import { ReactNode } from "react";

export default function EditorBody({ children }: { children: ReactNode }) {
  const activity_top = [
    {
      icon: "svg/files.svg",
      alt: "Files",
      active: true,
    },
    {
      icon: "svg/vector.svg",
      alt: "Search",
      active: true,
    },
    {
      icon: "svg/github.svg",
      alt: "Github",
      active: false,
    },
  ];

  const activity_bottom = [
    {
      icon: "svg/setting.svg",
      alt: "Setting",
      active: false,
    },
  ];

  return (
    <>
      <main className="flex flex-grow">
        <aside className="flex flex-col justify-between items-center bg-activity w-11 py-1">
          <section className="w-full">
            {activity_top.map((activ) => {
              return (
                <div className="flex w-full justify-center cursor-pointer py-[0.80rem] border-l border-transparent hover:border-foreground">
                  <Image
                    className="h-6 w-6"
                    src={activ.icon}
                    alt={activ.alt}
                    width={0}
                    height={0}
                  />
                </div>
              );
            })}
          </section>
          <section className="w-full">
            {activity_bottom.map((activ) => (
              <div className="flex w-full justify-center cursor-pointer py-3 border-l border-transparent hover:border-foreground">
                <Image
                  className="h-6 w-6"
                  src={activ.icon}
                  alt={activ.alt}
                  width={0}
                  height={0}
                />
              </div>
            ))}
          </section>
        </aside>
        <section className="bg-background">{children}</section>
      </main>
    </>
  );
}
