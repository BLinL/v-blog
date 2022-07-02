<template>
  <div class="flex justify-center">
    <button v-if="pageProps.curPage > 1" @click="handleClick(pageProps.curPage - 1)">&lt;上一页</button>
    <template v-for="(item, index) in pageNumberArr" :key="index">
      <button
        type="button"
        class="rounded-sm min-w-fit w-10 h-10"
        :class="{ 'bg-blue-400 text-white': item === pageProps.curPage }"
        @click="handleClick(item)"
      >
        {{ item }}
      </button>
    </template>
    <button v-if="pageProps.curPage < maxPage" @click="handleClick(pageProps.curPage + 1)">下一页&gt;</button>
  </div>
</template>

<script>
import { reactive, toRefs , ref} from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  props: {
    pageProps: {
      type: Object,
      require: true,
    },
  },
  methods: {
    handleClick(curPage) {
      console.log(curPage);
      this.$emit("handPage", curPage);
    },
  },
  setup(props) {
    const pageCount = computed(() => {
        return Math.ceil(props.pageProps.total / props.pageProps.pageSize);
    });

    const minPage = computed(()=>{
        let min = props.pageProps.curPage - (Math.floor(props.pageProps.visibleNumber / 2))
        if (min < 1) {
            min = 1
        }

        return min
    })

    
    const maxPage = computed(()=>{
        let max = minPage.value + (props.pageProps.visibleNumber - 1)
        if (max > pageCount.value) {
            max = pageCount.value
        }

        return max
    })

    const pageNumberArr = computed(()=>{
        const arr = []
        for(let i = minPage.value; i <= maxPage.value; i++) {
            arr.push(i)
        }
        return arr
    })
   
    return {
      pageCount,
      minPage,
      maxPage,
      pageNumberArr
    };
  },
};
</script>

<style>
</style>