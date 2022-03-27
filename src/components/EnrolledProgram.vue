<script setup>
import ProgressBlock from './ProgressBlock.vue'
import * as MainServer from '@/apis/server'
import { onBeforeMount, ref } from 'vue'

const props = defineProps({
    program: Object
});

const handleRemoveProgram = function(){
    MainServer.updateProgramStatus(props.program.id, false).catch(() => {
    })
}


</script>

<template>
    <div class="enrolledProgram">
        <img :src="program.image" class="programImg"/>
        <div class="right-con">
            <div>
                <h2>{{program.title}}</h2>
                <ProgressBlock :text="'Your Progress'" :percent="program.your_progress">
                    <img src='src/assets/avatar.png' class="top-img"/>
                </ProgressBlock>
                <ProgressBlock :text="`Your Team: ${program.name}`" :percent="program.team_progress">
                    <span :style="{backgroundColor: `#${program.color}`}" class="circle">
                        <p>{{program.initials}}</p>
                    </span>
                </ProgressBlock>
            </div>
            <div class="between">
                <button class="bubbleButton startProgram">Start Program</button>
                <button class="bubbleButton remove" @click="handleRemoveProgram">Remove</button>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    h2{
        margin-bottom: 20px;
        color: white;
        font-weight: 700;
        font-family: 'Roboto';
    }

    .enrolledProgram{
        display: flex;
        border-radius: 15px;
        background-color: #0072EF;
        padding: 20px;
        font-family: 'Roboto';
        gap: 20px;
    }

    .right-con{
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .circle{
        height: 60px;
        width: 60px;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .top-img{
        height: 60px;
        width: 60px;
        border-radius: 30px;
    }

    .startProgram{
        flex-grow: 1;
        background-color: white;
        border: 1px solid #0072EF;
        margin-right: 20px;
    }

    .remove{
        background-color: #0072EF;
        border: 1px solid white;
        color: white;
    }

    .programImg{
        height: 296px;
        border-radius: 6px;
    }
</style>