<template>
  <div class="w-2/5" style="margin: 0 auto;">
    <section class="flex flex-col flex-wrap justify-center items-center">
      <template v-for="blog in blogList">
        <Card :blogData="blog" />
      </template>
    </section>
    <div class="mt-[60px] mb-10">
      <Page :pageProps="pageParam" @handPage="handleClick"/>
    </div> 
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { onMounted } from "vue";
import { defineComponent } from "@vue/runtime-core";
import Card from "@/components/Card.vue";
import Page from "@/components/Page.vue";
import request from '../utils/request.js'

export default {
  components: {
    Card,
    Page,
  },
  setup(props) {
    const pageParam = reactive({
      curPage: 1,
      pageSize: 8,
      total: 100,
      visibleNumber:10
    })

    const handleClick = function(curPage) {
      console.log("parent " + curPage)
      pageParam.curPage = curPage
    }

    let blogList = reactive([])
    onMounted(()=> {
      console.log('mounted')
      request.get('/api/blog/list').then(({ data }) => {
        console.log(data, 'data')
        data.data.blogList.forEach((blog_data, _) => {
          blogList.push(blog_data)
        })
        pageParam.total = data.data.page.total
        pageParam.pageSize = Math.min(blogList.length, pageParam.pageSize)
        console.log(pageParam, 'pageParam')
       

      })
    })
    return { blogList, pageParam, handleClick }
  }
}
</script>

<style>
</style>