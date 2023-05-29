<template>
    <div class="mt-8">
        <header class="max-w-[1040px] mx-auto bg-[#fff] rounded-3xl border-solid border-2 border-[#E6E9EF] flex justify-between p-6 text-center">
            <!-- Logo -->
            <img src="/img/Logo.svg" alt="">
            <!-- nav -->
            <nav class="">
                <ul class="flex gap-6 cursor-pointer text-[#4A5E7B] font-medium text-[16px] p-[10px]">
                    <li class="hover:underline decoration-2" v-for="(navs, index) in nav"><a :href="navs.path">{{ navs.name }}</a></li>
                </ul>
            </nav>
            <!-- btns -->
            <div class="font-medium text-[16px]">
                <button class="mr-6 text-[#0D2344] hover:underline decoration-2">Login</button>
                <button class="text-[#fff] bg-[#1971F5] pt-3 pb-3 pr-4 pl-4 rounded-[12px] hover:bg-[#1452B0]">Sign Up</button>
            </div>
        </header>
    </div>
</template>

<script setup>
import { ref } from 'vue';

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


