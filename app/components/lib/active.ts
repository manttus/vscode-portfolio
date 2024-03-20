import { Tab } from "@/app/enums/TabEnums";
import useActivityStore from "@/app/feature/store/useActivityStore";

export default function active(tab: Tab) {
  const activityStore = useActivityStore();
  return activityStore.tab === tab;
}
