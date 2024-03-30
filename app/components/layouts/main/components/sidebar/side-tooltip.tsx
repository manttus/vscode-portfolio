export default function ActivityTooltip({ tooltip }: { tooltip: string }) {
  return (
    <>
      <div className="flex z-10 items-center tracking-wider absolute py-[0.2rem] px-[0.5rem] bg-background text-foreground text-[0.55rem] border border-inactive rounded-sm left-10 top-4 invisible group-hover:visible">
        <div className="relative flex justify-between items-center">
          <div className=" w-[0.4rem] h-[0.4rem] border-l border-b border-l-inactive border-b-inactive rotate-45 absolute -left-3 bg-background"></div>
        </div>
        <p>{tooltip}</p>
      </div>
    </>
  );
}
