<script setup>
import ProgressBlock from './ProgressBlock.vue'
import * as MainServer from '@/apis/server'
import { useProgramsStore } from "@/stores/programs";

const props = defineProps({
    program: Object
});

const store = useProgramsStore();
store.getDetails(props.program.id)

const handleRemoveProgram = function(){
    let program = store.getProgram(props.program.id);
    program.enrolled = false
    MainServer.updateProgramStatus(props.program.id, false).catch(() => {
        program.enrolled = true;
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
                        <div class="circle-con">
                            <span :style="{backgroundColor: `#${program.color}`}" class="circle">
                                <p>{{program.initials}}</p>
                            </span>
                        </div>
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

    .enrolledProgram{
        display: flex;
        border-radius: 15px;
        background-color: #0072EF;
        padding: 20px;
        gap: 20px;

            h2{
                margin-bottom: 20px;
                color: white;
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 28px;
            }

    }

    .right-con{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }

    .circle-con{
        height: 60px;
        width: 60px;

            .circle{
                height: 60px;
                width: 60px;
                border-radius: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
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
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */

        text-align: center;
    }

    .remove{
        background-color: #0072EF;
        border: 1px solid white;
        color: white;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
    }

    .programImg{
        height: 296px;
        border-radius: 6px;
    }
</style>