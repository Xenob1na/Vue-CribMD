<template>
    <div class="max-w-[1300px] mx-auto mb-[140px] lg:px-5 sm:max-w-[550px] sm:mx-auto lgMax:px-5">
        <hr class="sm:max-w-[410px]">
        <div class="mt-10 flex sm:flex-col">
            <div class="mr-[73px] lg2:mr-[30px]">
                <img src="/img/logo2.svg" alt="">
                <div class="flex mt-5 mb-5">
                    <div v-for="(socila, index) in socilamedia" class="mr-4">
                        <img :src="socila.img" alt="">
                    </div>
                </div>
                <div class="max-w-[240px] sm:max-w-[550px]">
                    <p class="text-[#202046] text-[12px] font-normal leading-[20px] tracking-[0.8px] mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium pellentesque sem fringilla eu.</p>
                    <hr>
                    <div class="mt-5 mb-5">
                        <div class="flex gap-2 mb-4">
                            <img src="/img/f11.png" alt="">
                            <p class="text-[#1971F5] text-[12px] leading-[20px] tracking-[0.8px] font-normal">
                                <a href="mailto:johndoe@xyz.com">johndoe@xyz.com</a>
                            </p>
                        </div>
                        <div class="flex gap-2">
                            <img src="/img/f11.png" alt="">
                            <p class="text-[#1971F5] text-[12px] leading-[20px] tracking-[0.8px] font-normal">
                                <a href="mailto:janedoe@xyz.com">janedoe@xyz.com</a>
                            </p>
                        </div>
                    </div>
                    <hr>
                    <p class="mt-4 text-[#6E7B8F] text-[12px] leading-[20px] tracking-[0.8px] font-normal">© 2021 CribMD. All rights reserved.</p>
                </div>
            </div>
            <div class="mr-[140px] lg:mr-[100px] lg2:mr-[30px] sm:mt-7 lgMax:mr-[120px]">
                <ul>
                    <ul class="text-[#6E7B8F] font-semibold text-[12px] uppercase leading-[18px] tracking-[1px] mb-2">For Patients</ul>
                    <li class="text-[#6E7B8F] font-normal text-[12px]  leading-[18px] tracking-[1px] mb-2">Search Doctors</li>
                    <li class="text-[#6E7B8F] font-normal text-[12px]  leading-[18px] tracking-[1px] mb-2">Login</li>
                    <li class="text-[#6E7B8F] font-normal text-[12px]  leading-[18px] tracking-[1px] mb-2">Register</li>
                    <li class="text-[#6E7B8F] font-normal text-[12px]  leading-[18px] tracking-[1px] mb-2">Booking</li>
                    <li class="text-[#6E7B8F] font-normal text-[12px]  leading-[18px] tracking-[1px] mb-2">Patient Dashboard</li>
                </ul>
            </div>
            <div class="mr-[140px] lg:mr-[100px] lg2:mr-[30px] sm:mt-7 lgMax:mr-[120px]">
                <ul>
                    <ul class="text-[#6E7B8F] font-semibold text-[12px] uppercase leading-[18px] tracking-[1px] mb-2">For Doctors</ul>
                    <li class="text-[#6E7B8F] font-normal text-[12px]  leading-[18px] tracking-[1px] mb-2">Appointments</li>
                    <li class="text-[#6E7B8F] font-normal text-[12px]  leading-[18px] tracking-[1px] mb-2">Login</li>
                    <li class="text-[#6E7B8F] font-normal text-[12px]  leading-[18px] tracking-[1px] mb-2">Register</li>
                </ul>
            </div>
            <div class="mr-[140px] lg:mr-[100px] lg2:mr-[30px] sm:mt-7 lgMax:mr-[120px]">
                <ul>
                    <ul class="text-[#6E7B8F] font-semibold text-[12px] uppercase leading-[18px] tracking-[1px] mb-2">COMPANY</ul>
                    <li class="text-[#6E7B8F] font-normal text-[12px]  leading-[18px] tracking-[1px] mb-2">About Us</li>
                </ul>
            </div>
            <div class="sm:mt-7">
                <ul>
                    <ul class="text-[#6E7B8F] font-semibold text-[12px] uppercase leading-[18px] tracking-[1px] mb-2">CONATCT</ul>
                    <li class="text-[#6E7B8F] font-normal text-[12px]  leading-[22px] tracking-[0.8px] mb-4 max-w-[276px]">14 Williams Onoh Drive, ChevyView Estate, Chevron Drive, Lekki, Lagos.</li>
                </ul>
                <hr>
                <div class="flex gap-2 mb-4 mt-4">
                    <img src="/img/f12.png" alt="">
                    <p class="text-[#1971F5] text-[12px] leading-[20px] tracking-[0.8px] font-normal">
                        <a href="tel:+10001112222">+1 000-111-2222</a>
                    </p>
                </div>
                <div class="flex gap-2 mb-4">
                    <img src="/img/f12.png" alt="">
                    <p class="text-[#1971F5] text-[12px] leading-[20px] tracking-[0.8px] font-normal">
                        <a href="tel:+2349012345678">+234 901 234 5678</a>
                    </p>
                </div>
                <div class="flex gap-2 mb-4">
                    <img src="/img/f12.png" alt="">
                    <p class="text-[#1971F5] text-[12px] leading-[20px] tracking-[0.8px] font-normal">
                        <a href="tel:+2349012345678">+234 901 234 5678</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const socilamedia = ref([
    {
        img: '/img/f7.png'
    },
    {
        img: '/img/f8.png'
    },
    {
        img: '/img/f9.png'
    },
    {
        img: '/img/f10.png'
    }
])
</script>
