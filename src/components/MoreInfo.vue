<template>
    <div class="max-w-[1040px] mx-auto">
        <div class="mb-6">
            <h2 class="text-center text-[30px] font-semibold text-[#0D2344] mb-5">Need more info?</h2>
            <p class="font-normal text-[16px] leading-7 text-[#6E7B8F] text-center tracking-[0.8px] mb-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut adipiscing sit pretium amet nam volutpat adipiscing lacus. Id nibh ut augue feugiat in. Lobortis velit bibendum felis nibh ultrices quis consectetur lorem. Gravida risus.</p>
            <p class="text-[#1971F5] text-[16px] leading-7 text-center tracking-[0.8px] italic">N.B: Refer a friend and stand a chance to win a free doctor consultation.</p>
        </div>
        <div>
            <BoxLeft />
            <BoxRight />
        </div>
    </div>
</template>

<script setup>
import BoxLeft from './UI/BoxLeft.vue';
import BoxRight from './UI/BoxRight.vue';
</script>
