<template>
    <div class="flex justify-between">
        <div class="lg3:hidden">
            <img :src="img" alt="">
        </div>
        <div class="mt-[100px]">
            <h3 class="lg3:text-center text-[24px] font-semibold text-[#0D2344] leading-9 tracking-[0.8px] mb-4">{{ title }}</h3>
            <p class="lg3:text-center max-w-[530px] font-normal text-[16px] leading-7 text-[#6E7B8F] tracking-[0.8px] mb-4">
                <slot></slot>
            </p>
            <ul class="list-image-[url(/img/check.png)] list-inside">
                <li class="font-normal text-[16px] leading-7 text-[#6E7B8F] tracking-[0.8px]">{{ ul1 }}</li>
                <li class="font-normal text-[16px] leading-7 text-[#6E7B8F] tracking-[0.8px]">{{ ul2 }}</li>
                <li class="font-normal text-[16px] leading-7 text-[#6E7B8F] tracking-[0.8px] mb-4">{{ ul3 }}</li>
            </ul>
            <UiBtn :btn="btns" />
        </div>
    </div>
</template>

<script setup>
import UiBtn from './UiBtn.vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    ul1: {
        type: String,
        required:true,
    },
    ul2: {
        type: String,
        required:true,
    },
    ul3: {
        type: String,
        required:true,
    },
    img: {
        type: String,
        required: true,
    },
    btns: {
        type: String,
        required: true,
    }
})
</script>