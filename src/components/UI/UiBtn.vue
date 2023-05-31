<template>
    <div>
        <button class="text-[#1971F5] border-solid border-2 border-[#E6E9EF] pt-3 pb-3 pr-4 pl-4 rounded-[12px] hover:bg-[#1971F5] hover:text-[#fff] text-[16px] font-medium">{{ btn }}</button>
    </div>
</template>

<script setup>
const props = defineProps({
    btn: {
        type: String,
        required: true,
    }
})
</script>
