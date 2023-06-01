<template>
    <div class="max-w-[1040px] mx-auto mb-[60px]" id="AboutUs">
        <div class="mb-9">
            <h2 class="text-center font-semibold text-[30px]">Countdown to Black Friday</h2>
        </div>
       <div class="bg-[#FBFCFD] rounded-3xl border-solid border-2 border-[#E6E9EF] flex justify-between pt-7 pb-7 pl-[90px] pr-[90px]">
            <div>
                <p class="font-bold text-[50px] text-center text-[#1E293B]">{{ days % 365 }}</p>
                <p class="font-semibold text-[16px] text-center text-[#1E293B]">DAYS</p>
            </div>
            <div class="mt-2 text-[#1E293B] text-[45px]">
                :
            </div>
            <div>
                <p class="font-bold text-[50px] text-center text-[#1E293B]">{{ hours % 24 }}</p>
                <p class="font-semibold text-[16px] text-center text-[#1E293B]" >HRS</p>
            </div>
            <div class="mt-2 text-[#1E293B] text-[45px]">
                :
            </div>
            <div>
                <p class="font-bold text-[50px] text-center text-[#1E293B]">{{ minutes % 60 }}</p>
                <p class="font-semibold text-[16px] text-center text-[#1E293B]">MIN</p>
            </div>
            <div class="mt-2 text-[#1E293B] text-[45px]">
                :
            </div>
            <div>
                <p class="font-bold text-[50px] text-center text-[#1E293B]">{{ seconds % 60 }}</p>
                <p class="font-semibold text-[16px] text-center text-[#1E293B]">SEC</p>
            </div>
       </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const lunchDate = new Date('30 December 2030');
setInterval(() => {
    const currentDate = new Date();
    const lunchTime = lunchDate - currentDate;

    seconds.value = parseInt(lunchTime / 1000);
    minutes.value = parseInt(seconds.value / 60);
    hours.value = parseInt(minutes.value / 60);
    days.value = parseInt(hours.value / 24);
}, 1000);
</script>
