<script setup lang="ts">

const props = defineProps<{
    helloWorld: {
        title: string
        num: number
    }
}>()

const emit = defineEmits(['update:content'])
const subUpdateContent = () => {
    emit('update:content', { num: props.helloWorld.num + 1, title: 'hello world sub chagne ' })
}

</script>

<template>

    <div>
        emit 子组件 ： {{ helloWorld.title }} -- {{ helloWorld.num }}
        <button @click="subUpdateContent">emit 点击改变父组件的值</button>
    </div>

</template>
