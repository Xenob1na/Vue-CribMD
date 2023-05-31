<template>
    <div class="flex justify-between">
        <div class="mt-[100px]">
            <h3 class="text-[24px] font-semibold text-[#0D2344] leading-9 tracking-[0.8px] mb-4">Plan Type 1</h3>
            <p class="max-w-[530px] font-normal text-[16px] leading-7 text-[#6E7B8F] tracking-[0.8px] mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio pharetra nec aliquam facilisi phasellus. Eleifend.</p>
            <ul class="list-image-[url(/img/check.png)] list-inside">
                <li class="font-normal text-[16px] leading-7 text-[#6E7B8F] tracking-[0.8px]">50% Off for the first month</li>
                <li class="font-normal text-[16px] leading-7 text-[#6E7B8F] tracking-[0.8px]">80% Off for 6 months</li>
                <li class="font-normal text-[16px] leading-7 text-[#6E7B8F] tracking-[0.8px] mb-4">Terms and Conditions apply</li>
            </ul>
            <UiBtn btn="Get discount on plan" />
        </div>
        <div>
            <img src="/img/f1.png" alt="">
        </div>
    </div>
</template>

<script setup>
import UiBtn from './UiBtn.vue';
</script>
