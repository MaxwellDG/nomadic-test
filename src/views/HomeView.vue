<script setup lang="ts">
import ProgramTile from "@/components/ProgramTile.vue";
import EnrolledProgram from "@/components/EnrolledProgram.vue"
import { useProgramsStore } from "@/stores/programs";

const store = useProgramsStore();
store.loadPrograms();

</script>

<template>
  <main>
    <section>
      <h2>Enrolled Programs</h2>
      <p v-if="store.enrolledPrograms.length == 0">
        You have not enrolled in any Programs yet. Click on a Program below to
        enrol.
      </p>
        <div class="enrolled-con">
          <EnrolledProgram 
            v-for="program in store.enrolledPrograms" 
            :key="program.id"
            :program="program"  
          />
        </div>
    </section>
    <section>
      <h2>All Programs</h2>
      <div class="tiles" v-if="store.programs !== null">
        <ProgramTile
          :program="program"
          v-for="program in store.programs"
          :key="program.id"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
section {
  margin-bottom: 3em;
}

h2 {
  margin-bottom: 1em;
}

.enrolled-con{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.tiles {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
}
</style>
