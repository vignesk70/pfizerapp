<script lang="ts" setup>
import questions from '~/assets/questions1.json'

const props = defineProps({
    id: Number,
})

const selected = ref()
// console.log(props.id)
const currentquestion = questions[props.id - 1]

function handleSelect(id, key, value) {
    console.log(id, key, value)
}
</script>

<template>
    <div class="mb-14">
        <div class="flex pb-6">
            <div class="text-5xl text-white dark:text-white mr-6">{{ id }}</div>
            <div class="text-5xl text-white dark:text-white">
                {{ currentquestion.question }}
            </div>
        </div>
        <div class="ml-8">
            <div class="text-white text-3xl">

                <div class="">
                    <URadio color="primary" v-for="(value, key) in currentquestion.options" :key=props.id
                        v-model="selected" v-bind="currentquestion.options" legend="Choose something"
                        :options="currentquestion.options" :value="key" :label="value"
                        :ui="{ label: 'text-white text-3xl mb-5' }" @click="handleSelect(props.id, key, value)" />
                </div>

            </div>
        </div>

    </div>

</template>
