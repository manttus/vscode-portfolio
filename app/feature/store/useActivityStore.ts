import { Tab } from "@/app/enums/TabEnums";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IActivityState {
  extended: boolean;
  tab: Tab;
}

interface IActivityAction {
  setExpanded: (tab: string) => void;
}

const useActivityStore = create<IActivityState & IActivityAction>()(
  persist(
    (set) => ({
      extended: false,
      tab: Tab.EXPLORER,
      setExpanded: (tab: string) =>
        set((state) => {
          if (state.extended && state.tab !== tab) {
            return {
              tab,
            };
          }
          if (!state.extended && state.tab !== tab) {
            return {
              extended: !state.extended,
              tab,
            };
          }
          return {
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
