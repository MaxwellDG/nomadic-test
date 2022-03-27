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
    async getDetails(id: string) {
      MainServer.getProgramTeamDetails(id).then(res => {
        let program = this.programs.find(j => j.id === id)
        const {name, initials, color, your_progress, team_progress} = res.data
        if(program){
          program.name = name;
          program.initials = initials;
          program.color = color;
          program.your_progress = your_progress;
          program.team_progress = team_progress;
        }
      }).catch(e => {
        
      })
    }
  },
});
