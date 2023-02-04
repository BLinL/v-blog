<template>
    <div
      style="width:100%"
      class="
        m-[10px]
        border-b-2 border-neutral-100
        rounded hover:cursor-pointer hover:bg-slate-50
      "
      @click.prevent="handleClick"
    >
      <h1 class="text-lg m-2">{{ blogData.tittle }}</h1>
      <div class="text-base mx-2 cusor-auto text-gray-400">
        {{ blogData.desc }}
      </div>
      <div class="text-sm text-gray-400 clear-f">
        <div class="m-2 fl"> {{ blogData.createTime }}</div>
        <div class="text-sm m-2 fr">{{ blogData.author }}</div>
      </div>
    </div>
</template>

<script>
import { useRouter } from "vue-router"
import { reactive, toRefs } from "vue"
export default {
  props: {
    blogData: {
      type: Object,
      default: ()=>{return {}}
    }
  },
  setup(props) {
    let router = useRouter()
    const handleClick = function(){
      router.push({name: 'post', params: { postId: 1 }})
    }
    const blogData = reactive(props.blogData)
    return {  blogData, handleClick }
  }
};
</script>

<style>

</style>