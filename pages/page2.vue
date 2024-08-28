
import QuestionView2 from '~/components/QuestionView2.vue';

<template>
    <div>
        <div class="relative w-full min-h-screen bg-[url('/images/1.png')] ">
             <Header />
            <div class=" p-[100px] mx-auto justify-center items-center  ">
               <!-- <QuestionView :id=1 />
               <QuestionView :id=2 />
               <QuestionView :id=3 /> -->
                    <QuestionView2 :id=1 />
                    <QuestionView2 :id=2 />
                    <QuestionView2 :id=3 />
            </div>
            <div class="grid justify-items-end p-0">
                    <img src="/images/Next_Button.png" alt="" class="flex" @click="goNext">
                </div>
        </div>
       
    </div>
</template>

<script setup lang="ts">
const storeresult = useState('results')
const router = useRouter()
function goNext(){
    const lenofanswers = Object.keys(storeresult.value).length
    if (lenofanswers === 3){
        router.push('page3')
    } else {
        alert("Please answer all questions")
    }
}
</script>