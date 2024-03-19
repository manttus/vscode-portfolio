import { create } from "zustand";

enum Tab {
  EXPLORER = "Explorer",
  SEARCH = "Search",
}

interface IActivityState {
  extended: boolean;
  tab: Tab;
}

interface IActivityAction {
  setExpanded: (extended: IActivityState["extended"]) => void;
}

const useActivityStore = create<IActivityState & IActivityAction>((set) => ({
  extended: false,
  tab: Tab.EXPLORER,
  setExpanded: () =>
    set((state: { extended: boolean }) => ({ extended: !state.extended })),
}));

export default useActivityStore;
