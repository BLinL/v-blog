<template>
  <div>
    <section class="flex flex-wrap justify-center">
      <template v-for="i in pageParam.pageSize">
        <Card />
      </template>
    </section>
    <div class="mt-[60px] mb-10">
      <Page :pageProps="pageParam" @handPage="handleClick"/>
    </div> 
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { defineComponent } from "@vue/runtime-core";
import Card from "@/components/Card.vue";
import Page from "@/components/Page.vue";


export default {
  components: {
    Card,
    Page,
  },
  methods: {
    handleClick(curPage) {
      console.log("parent " + curPage)
      this.pageParam.curPage = curPage
    }
  },
  setup(props) {
    const pageParam =reactive({
      curPage: 1,
      pageSize: 8,
      total: 100,
      visibleNumber:10
    })


    return { pageParam }
  }
};
</script>

<style>
</style>