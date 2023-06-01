<template>
    <div class="max-w-[1040px] mx-auto" id="Plans">
        <div class="mb-6">
            <h2 class="text-center text-[30px] font-semibold text-[#0D2344] mb-5">Need more info?</h2>
            <p class="font-normal text-[16px] leading-7 text-[#6E7B8F] text-center tracking-[0.8px] mb-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut adipiscing sit pretium amet nam volutpat adipiscing lacus. Id nibh ut augue feugiat in. Lobortis velit bibendum felis nibh ultrices quis consectetur lorem. Gravida risus.</p>
            <p class="text-[#1971F5] text-[16px] leading-7 text-center tracking-[0.8px] italic">N.B: Refer a friend and stand a chance to win a free doctor consultation.</p>
        </div>
        <div>
            <BoxLeft img="/img/f1.png" title="Plan Type 1" ul1="50% Off for the first month" ul2="80% Off for 6 months" ul3="Terms and Conditions apply" btns="Get discount on plan"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio pharetra nec aliquam facilisi phasellus. Eleifend.
            </BoxLeft>
            <BoxRight img="/img/f2.png" title="Plan Type 2" ul1="25% Off for the first month" ul2="90% Off for 6 months" ul3="Terms and Conditions apply" btns="Get discount on plan">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio pharetra nec aliquam facilisi phasellus. Eleifend.
            </BoxRight>
            <BoxLeft img="/img/f3.png" title="Plan Type 3" ul1="15% Off for the first month on Black Friday" ul2="20% Off for the first month on Cyber Monday" ul3="90% Off for 6 months" btns="Get discount on plan"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio pharetra nec aliquam facilisi phasellus. Eleifend.
            </BoxLeft>
            <BoxRight img="/img/f4.png" title="Plan Type 4" ul1="25% Off for the first month" ul2="90% Off for 6 months" ul3="Terms and Conditions apply" btns="Contact Support">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio pharetra nec aliquam facilisi phasellus. Eleifend.
            </BoxRight>
            <BoxLeft img="/img/f5.png" title="Plan Type 5" ul1="90% Off on 26th" ul2="40% Off on Cyber Monday" ul3="30% off Everyday" btns="Contact Support"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio pharetra nec aliquam facilisi phasellus. Eleifend.
            </BoxLeft>
        </div>
    </div>
</template>

<script setup>
import BoxLeft from './UI/BoxLeft.vue';
import BoxRight from './UI/BoxRight.vue';
</script>
