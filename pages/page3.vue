<template>
    <div>
        <div class="relative w-full min-h-screen bg-[url('/images/1.png')] ">
            <Header />
            <div class=" p-[100px] mx-auto justify-center items-center  ">
                <!-- <QuestionView :id=4 />
               <QuestionView :id=5 />

  -->
                <QuestionView2 :id=4 />
                <QuestionView2 :id=5 />
                <p
                    class="mt-10 text-white dark:text-white font-opensans text-5xl font-extralight leading-relaxed text-center">
                    THANK YOU
                </p>
                <p
                    class=" text-white dark:text-white font-opensans text-5xl font-extralight leading-relaxed text-center">
                    FOR YOUR PARTICIPATION!</p>
            </div>

            <div class="grid justify-items-end p-0">

                <img src="/images/Submit_Button.png" alt="" class="flex" @click="submitResults">
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import QuestionView2 from '~/components/QuestionView2.vue';
const router = useRouter()
const results = useState('results')

async function submitResults() {
    console.log('Submit results')
    console.log(results.value)
    results.value['user']= Date.now()
    const result = results.value
    const response =
            await $fetch('/api/createprofile', {
                method: 'POST',
                body: {
                    result
                }
            })
    
    const lenofanswers = Object.keys(results.value).length
    if (lenofanswers === 6){
        results.value = {}
        router.push('/')
    } else {
        alert("Please answer all questions")
    }
    
}
</script>