import useActivityStore from "@/app/feature/store/useActivityStore";
import { Tab } from "@/app/enums/TabEnums";
import Explorer from "./explorer/explorer";
import Settings from "./setting/setting";
import Search from "./search/search";

function switcher(tab: Tab) {
  switch (tab) {
    case Tab.EXPLORER: {
      return <Explorer />;
    }
    case Tab.SEARCH: {
      return <Search />;
    }
    case Tab.SETTING: {
      return <Settings />;
    }
  }
}

export default function Extended() {
  const activityBar = useActivityStore();
  return (
    <>
      <div className="justify-center w-52 bg-expanded">
        {switcher(activityBar.tab)}
      </div>
    </>
  );
}
