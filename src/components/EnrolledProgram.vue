<script setup>
import ProgressBlock from './ProgressBlock.vue'
import * as MainServer from '@/apis/server'
import { onBeforeMount, ref } from 'vue'

const props = defineProps({
    program: Object
});

console.log(props.program.id)

const {id, title, image, enrolled} = props.program;
let yourProgress = ref('')

onBeforeMount(async () => {
    if(enrolled)
        MainServer.getProgramTeamDetails(id).then(res => {
            console.log("WE GET ArrrrrRES?")
            console.log(res)
            if(res.status == 200){
                let {your_progress, team_progress, color, initials, name} = res.data
                yourProgress = your_progress
                // teamProgress = team_progress
                // color = color
                // initials = initials
                // name = name
            }
        })
})

const handleRemoveProgram = function(){
    enrolled = false
    MainServer.updateProgramStatus(id, false).catch(() => {
        enrolled = true
    })
}


</script>

<template>
    <div class="enrolledProgram">
        <img :src="image" class="programImg"/>
        <div class="right-con">
            <div>
                <h2>{{title}}</h2>
                <ProgressBlock :text="'Your Progress'" :percent="yourProgress">
                    <img src='src/assets/avatar.png' class="top-img"/>
                </ProgressBlock>
                <ProgressBlock :text="`Your Team: ${props.teamName}`" :percent="teamProgress">
                    <span :style="{backgroundColor: color}" class="circle">
                        <p>{{initials}}</p>
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