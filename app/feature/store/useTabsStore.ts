import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ITab {
  id: string;
  title: string;
  name: string;
}

interface ITabState {
  tabs: ITab[];
  current: string;
}

interface ITabAction {
  remove: (id: string) => void;
  open: (tab: ITab) => void;
  active: (id: string) => void;
}

const useTabStore = create<ITabState & ITabAction>()(
  persist(
    (set) => ({
      tabs: [],
      current: " ",
      active: (id: string) =>
        set(() => {
          return { current: id };
        }),
      open: (tab: ITab) =>
        set((state) => {
          const previous = state.tabs.find((prev) => prev.id === tab.id);
          if (previous) {
            return { current: previous.id };
          }
          let current = [...state.tabs];
          current = current.concat(tab);
          return { tabs: current, current: tab.id };
        }),
      remove: (id: string) =>
        set((state) => {
          const filtered = state.tabs.filter((tab) => tab.id !== id);
          const selected =
            filtered.length > 0 ? filtered[filtered.length - 1].id : null;
          return {
            tabs: filtered,
            current: selected ? selected : state.current,
          };
        }),
    }),
    {
      name: "tabs-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useTabStore;
