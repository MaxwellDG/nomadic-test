import { defineStore } from "pinia";
import * as MainServer from '@/apis/server'
import type Program from '@/models/Program'

export type RootState = {
  programs: Program[];
};

export const useProgramsStore = defineStore({
  id: "programs",
  state: () => ({
    programs: [],
  } as RootState)
  ,
  getters: {
    enrolledPrograms: (state) => {
      console.log("called to get enrdolled")
      return state.programs.filter(j => j.enrolled)
    }
  },
  actions: {
    async loadPrograms() {
      if (this.programs.length == 0) {
        const response = await MainServer.allPrograms();
        this.programs = response.data;
      }
    },
  },
});
