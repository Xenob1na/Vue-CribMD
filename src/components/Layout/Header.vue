<template>
    <body :class="{'overflow-y-hidden': !navBurger, 'overflow-scroll': navBurger}">
        <div class="mt-8 lg:px-5 overflow-y-hidden" id="Home">
        <header class="max-w-[1040px] mx-auto bg-[#fff] rounded-3xl border-solid border-2 border-[#E6E9EF] flex justify-between p-6 text-center">
            <!-- Logo -->
            <img src="/img/Logo.svg" alt="">
            <!-- nav -->
            <nav class="md:hidden">
                <ul class="flex gap-6 cursor-pointer text-[#4A5E7B] font-medium text-[16px] p-[10px]">
                    <li class="hover:underline decoration-2" v-for="(navs, index) in nav"><a :href="navs.path">{{ navs.name }}</a></li>
                </ul>
            </nav>
            <!-- btns -->
            <div class="font-medium text-[16px] md:hidden">
                <button class="mr-6 text-[#0D2344] hover:underline decoration-2">Login</button>
                <button class="text-[#fff] bg-[#1971F5] pt-3 pb-3 pr-4 pl-4 rounded-[12px] hover:bg-[#1452B0]">Sign Up</button>
            </div>
            <BurgerBtn @:click="OpenBurger" class="hidden md:block mb-2"/>
            <nav class="fixed left-[500px] top-0 right-0 bottom-0 items-center justify-center bg-[#0D2344] max-w-[350px] max-h-[100%]" v-if="navBurger">
                <ul class="flex flex-col items-center gap-10 mt-[130px] mr-10">
                    <li class="text-xl text-white" v-for="(navs, index) in nav"><a :href="navs.path">{{ navs.name }}</a></li>
                </ul>
            </nav>
        </header>
    </div>
    </body>
</template>

<script setup>
import { ref } from 'vue';
import BurgerBtn from '../UI/BurgerBtn.vue';

const navBurger = ref(false)
function OpenBurger() {
    navBurger.value = !navBurger.value
}
const nav = ref([
    {
        name: 'Home',
        path: '#Home'
    },
    {
        name: 'About Us',
        path: '#AboutUs'
    },
    {
        name: 'Plans',
        path: '#Plans'
    },
    {
        name: 'FAQ',
        path: '#FAQ'
    },
    {
        name: 'Blog',
        path: '#Blog'
    }
])
</script>



