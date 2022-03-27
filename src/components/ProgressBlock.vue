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
            <div>
                <div></div>
            </div>
            <p>{{percent}}% Complete</p>
        </div>
    </div>

</template>

<style lang='less' scoped>
    .progressBlock{
        display: flex;
        align-items: center;
        color: white;
        margin-bottom: 20px;
    }

    .right-con{
        margin-left: 20px;
    }

</style>