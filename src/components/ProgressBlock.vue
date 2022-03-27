<script setup>

const props = defineProps({
    text: String,
    percent: Number
})

</script>

<template>
    <div class="progressBlock">
        <slot />
        <div class="right-con">
            <h3>{{text}}</h3>
            <div class="progressFull">
                <div :style="{width: `${percent}%`}" class="progress"></div>
            </div>
            <p>{{percent}}% Complete</p>
        </div>
    </div>

</template>

<style lang='less' scoped>
    h3{
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
    }

    .progressBlock{
        display: flex;
        align-items: center;
        color: white;
        margin-bottom: 20px;
    }

    .right-con{
        margin-left: 20px;
        width: 100%;

        .progressFull{
            margin: 6px 0;
            height: 6px;
            width: 100%;
            background-color: #005393;
            border-radius: 3px;
        }

        .progress{
            background-color: white;
            border-radius: 3px;
            height: 100%;
        }
    }

</style>