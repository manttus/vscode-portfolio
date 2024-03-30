import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ITab {
  id: string;
  title: string;
  name: string;
  extension: string;
  content: string;
  type: string;
}

interface ITabState {
  tabs: ITab[];
  current: {
    id: string | null;
    content: string;
    type: string;
  };
}

interface ITabAction {
  remove: (id: string) => void;
  open: (tab: ITab) => void;
  active: (id: string, content: string, type: string) => void;
}

const useTabStore = create<ITabState & ITabAction>()(
  persist(
    (set) => ({
      tabs: [],
      current: {
        id: null,
        content: "",
      },
      active: (id: string, content: string, type: string) =>
        set(() => {
          return {
            current: {
              id,
              content,
              type,
            },
          };
        }),
      open: (tab: ITab) =>
        set((state) => {
          const previous = state.tabs.find((prev) => prev.id === tab.id);
          if (previous) {
            return {
              current: {
                id: previous.id,
                content: previous.content,
                type: previous.type,
              },
            };
          }
          let current = [...state.tabs];
          current = current.concat(tab);
          return {
            tabs: current,
            current: {
              id: tab.id,
              content: tab.content,
              type: tab.type,
            },
          };
        }),
      remove: (id: string) =>
        set((state) => {
          const filtered = state.tabs.filter((tab) => tab.id !== id);
          const selected =
            filtered.length > 0 ? filtered[filtered.length - 1] : null;
          return {
            tabs: filtered,
            current: {
              id: selected ? selected.id : state.current.id,
              content: selected ? selected.content : state.current.content,
              type: selected ? selected.type : state.current.type,
            },
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
