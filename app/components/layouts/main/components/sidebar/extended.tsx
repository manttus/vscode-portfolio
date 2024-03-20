import useActivityStore from "@/app/feature/store/useActivityStore";
import ActivityExplorer from "../atomic/activity-explorer";
import { Tab } from "@/app/enums/TabEnums";
import Explorer from "./panels/explorer";

function switcher(tab: Tab) {
  switch (tab) {
    case Tab.EXPLORER: {
      return <Explorer />;
    }
  }
}

export default function Extended() {
  const activityBar = useActivityStore();
  return (
    <>
      <div className="flex flex-grow w-52 bg-expanded">
        {switcher(activityBar.tab)}
      </div>
    </>
  );
}
