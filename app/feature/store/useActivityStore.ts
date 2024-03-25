import { Tab } from "@/app/enums/TabEnums";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IActivityState {
  extended: boolean;
  tab: Tab;
}

interface IActivityAction {
  setExpanded: (tab: Tab) => void;
}

const useActivityStore = create<IActivityState & IActivityAction>()(
  persist(
    (set) => ({
      extended: true,
      tab: Tab.EXPLORER,
      setExpanded: (tab: Tab) =>
        set((state) => {
          if (state.extended && state.tab !== tab) {
            return {
              ...state,
              tab,
            };
          }
          if (!state.extended && state.tab !== tab) {
            return {
              ...state,
              extended: !state.extended,
              tab,
            };
          }
          return {
            ...state,
            extended: !state.extended,
          };
        }),
    }),
    {
      name: "activity-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useActivityStore;
