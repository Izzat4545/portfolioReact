import { create } from "zustand";

interface InViewState {
  isAboutInView: boolean;
  setAboutInView: (value: boolean) => void;
  isExperienceInView: boolean;
  setExperienceInView: (value: boolean) => void;
  isProjectsInView: boolean;
  setProjectsInView: (value: boolean) => void;
}

const useStore = create<InViewState>((set) => ({
  isAboutInView: false,
  isExperienceInView: false,
  isProjectsInView: false,
  setAboutInView: (by) => set({ isAboutInView: by }),
  setExperienceInView: (by) => set({ isExperienceInView: by }),
  setProjectsInView: (by) => set({ isProjectsInView: by }),
}));

export default useStore;
