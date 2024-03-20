export default function StatusBar() {
  const topBar = [
    "File",
    "Edit",
    "Selection",
    "View",
    "Go",
    "Run",
    "Terminal",
    "Help",
  ];

  return (
    <>
      <div className="flex py-1 h-6 px-2 list-none gap-4 w-full bg-bar text-foreground text-status">
        {topBar.map((link, index) => (
          <li className="cursor-pointer hidden md:flex" key={index}>
            {link}
          </li>
        ))}
      </div>
    </>
  );
}
