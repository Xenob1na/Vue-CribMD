<template>
  <div>
      <div class="modal fixed z-[1] left-0 top-0 w-[100%] h-[100%]">
			<div class="model-content bg-[#fefefe] w-[30%] rounded-[5px]">
				  <span class="close text-[#aaa] float-right text-[28px] mb-[30px] font-semibold" @click="TogglePopup()">&times;</span>
          <form>
            <input type="text" class="tex outline-none block min-w-[488px] h-[35px] p-2 mb-5 font-normal bg-[#fff] leading-4 text-[#212529] bg-clip-padding border-solid border-2 border-[#bdbdbd] rounded-[8px]" placeholder="Your name">
            <input type="email" class="tex outline-none block min-w-[488px] h-[35px] p-2 mb-5 font-normal bg-[#fff] leading-4 text-[#212529] bg-clip-padding border-solid border-2 border-[#bdbdbd] rounded-[8px]" placeholder="rossmartin@gmail.com">
            <input type="password" class="tex outline-none block min-w-[488px] h-[35px] p-2 mb-5 font-normal bg-[#fff] leading-4 text-[#212529] bg-clip-padding border-solid border-2 border-[#bdbdbd] rounded-[8px]" placeholder="Your password">
            <button class="text-[#fff] bg-[#1971F5] pt-3 pb-3 pr-4 pl-4 rounded-[12px] hover:bg-[#1452B0]">{{ btn }}</button>
          </form>
			</div>
		</div>
  </div>
</template>


<script setup>
import { ref } from 'vue';



defineProps({
    btn: {
        type: String,
        required: true,
    },
    TogglePopup: [Function]
})
</script>

<style scoped>
.modal {
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
  }

  .model-content {
    margin: 15% auto; 
    padding: 40px;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  
</style>
