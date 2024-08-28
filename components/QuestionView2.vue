<template>
    <div class="mb-14">
        <div class="flex pb-6">
            <div class="text-5xl text-white dark:text-white mr-6 font-opensans font-semibold">{{ questions[currentId].id }}</div>
            <div class="text-5xl text-white dark:text-white font-opensans items-baseline ">
                {{ questions[currentId].question }}
            </div>
        </div>
        <div class="ml-8">
            <div class="">

                <div class="space-y-1 text-white tex-3xl">
                    <URadio v-for="(question, index) of questions[currentId].options" :key="question.label"
                        v-model="selected" v-bind="question" :ui="{label:'text-2xl text-white dark:text-white mb-5 font-extralight font-opensans',wrapper:'items-baseline'}" @click="handleSelect" />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import questions from '~/assets/questions1.json'
const storeresult = useState('results',() => ({}))
const props = defineProps({
    id: Number
})
const answers = {}
const currentId = props.id - 1

const selected = ref({})

function handleSelect(event) {
    console.log(props.id,event)
    console.log(questions.find(x => x.id===props.id))
    const currentquestion = questions.find(x => x.id===props.id)
    const currentoption = event.target.value.toString().slice(-1)
    const theoption = currentquestion.options[currentoption-1]
    console.log('the option',theoption.label)
    console.log("theid", event.target.value.toString().slice(-1))
    storeresult.value[props.id]=theoption
    // console.log(storeresult)
}


</script>
