import { create } from "zustand";

interface ITab {
  id: string;
  title: string;
}

interface ITabState {
  tabs: ITab[];
  current: number;
}

interface ITabAction {}

const useTabStore = create<ITabState & ITabAction>((set) => ({
  tabs: [],
  current: 1,
}));

export default useTabStore;
