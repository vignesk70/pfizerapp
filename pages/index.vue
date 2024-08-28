
<template>
    <div>
        <div class="relative w-full min-h-screen bg-[url('/images/1.png')] bg-cover">
            <img class="w-full object-cover" src="/images/Vaccine_Header.jpg" alt="">
            <div class=" p-[100px] mx-auto justify-center items-center  ">
                <p class=" text-white dark:text-white  font-opensans font-semibold text-7xl text-left ">Dear HCP,
                </p>
                <p class=" text-white dark:text-white font-opensans font-semibold text-7xl w-4/5">
                    PFive Questions
                </p>
                <p class=" text-white dark:text-white font-opensans font-semibold text-7xl w-4/5">
                    ~ from us to you
                </p>
                <p class="mt-10 text-white dark:text-white font-opensans text-5xl font-extralight ">This survey will take ~1
                    min to answer.</p>
                <p class="mt-10 text-white dark:text-white font-opensans text-5xl font-extralight leading-relaxed">Your response will help us
                    improve & customise
                    our medical education & initiatives in the future.
                    Thank you.</p>

                
            </div>
            <div class="grid justify-items-end p-0">
                    <ULink to="/page2">
                    <img src="/images/take_survey_button.png" alt="" class="flex mt-24"></ULink>
                </div>
                <img src="/images/Pfizer_Medical_Logo.png" alt="" class="absolute flex p-6 mt-6 bottom-0 justify-end">
        </div>
    </div>
</template>