<script setup lang="ts">

defineProps<{
    helloWorld: {
        title: string
        num: number
    }
}>()

const emit = defineEmits(['updateContent'])
const subUpdateContent = () => {
    emit('updateContent')
}

</script>

<template>

    <div>
        emit 子组件 ： {{ helloWorld.title }}
        <button @click="subUpdateContent">emit 点击改变父组件的值</button>
    </div>

</template>
