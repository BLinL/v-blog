<template>
  <main class="px-7 py-10">
    <button @click="this.$router.go(-1)">返回</button>
    <div style="max-width: 60%;" class="m-auto p-2 border">
      <div class="mb-8">
        <h1 class="text-2xl font-blod">{{ tittle }}</h1>
        <p class="text-gray-400 text-sm">{{ author }} - {{ date }}</p>
      </div>
      <article>
        <v-md-preview
          :text="main"
          preview-class="vuepress-markdown-body"
        ></v-md-preview>
      </article>
    </div>
  </main>
</template>

<script>
// import VueMarkdown from 'vue-markdown'
// import VueMarkdown from "vue-markdown/src/VueMarkdown";
import request from "../utils/request.js";

export default {
  components: {
    // VueMarkdown
  },
  props: {
    article: {
      type: Object,
      default: {
        title: "AAa",
        date: "2022-02-02",
        main: "<h1>haha</h1><code>import from 'vue'</code>",
      },
    },
  },
  data: function () {
    return {
      tittle: "",
      date: "",
      main: "",
      author: ""
    };
  },
  mounted() {
    const param = this.$route.params;
    console.log(param.postId);
    let that = this
    request.get("/api/blog/query/" + param.postId).then(function ({ data }) {
      console.log(data);
      that.tittle = data.data.blogInfo.tittle
      that.date = data.data.blogInfo.createTime
      that.main = data.data.blogInfo.content
      that.author = data.data.blogInfo.author
    });
  },
};
</script>

<style>
</style>