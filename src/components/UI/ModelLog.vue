<template>
  <div>
      <div class="modal fixed z-[1] left-0 top-0 w-[100%] h-[100%] pt-[50px] overflow-auto">
			<div class="bg-[#fefefe]  rounded-[5px] w-[30%] mx-auto lgMax:w-[50%] lg2:w-[60%] lgMax1:w-[40%]">
				  <div class="container">
            <span class="close text-[#aaa] float-right text-[28px] mb-[30px] font-semibold" @click="TogglePopup()">&times;</span>
          <form class="model-content">
            <input type="text" class="outline-none    font-normal  leading-4 text-[#212529] bg-clip-padding border-solid  rounded-[8px]" placeholder="Your name">
            <input type="email" class="outline-none   font-normal  leading-4 text-[#212529] bg-clip-padding border-solid   rounded-[8px]" placeholder="rossmartin@gmail.com">
            <input type="password" class="outline-none    font-normal  leading-4 text-[#212529] bg-clip-padding border-solid  rounded-[8px]" placeholder="Your password">
            <button class="text-[#fff] bg-[#1971F5] w-[100%] pt-3 pb-3 rounded-[12px] hover:bg-[#1452B0] text-[16px] text-center">{{ btn }}</button>
          </form>
          </div>
			</div>
		</div>
  </div>
</template>


<script setup>

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
    margin: 0 auto; 
    padding: 40px;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  input[type=text], input[type=password],input[type=email] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
}
.container {
    margin-top: 15%;
    padding: 40px;
} 
</style>
