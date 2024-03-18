export default function ActivityTooltip({ tooltip }: { tooltip: string }) {
  return (
    <>
      <div className="z-10 hidden tracking-wider absolute p-1 bg-background text-foreground text-[0.60rem] border border-inactive rounded-sm left-11  group-hover:flex">
        <div className="relative flex justify-between items-center text-center">
          <div className="w-[0.40rem] h-[0.40rem] border-l border-b border-l-inactive border-b-inactive rotate-45 absolute -left-2 bg-background"></div>
          {tooltip}
        </div>
      </div>
    </>
  );
}
