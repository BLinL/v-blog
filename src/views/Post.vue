<template>
  <main class="px-7 py-10">
    <button @click="this.$router.go(-1)">返回</button>
    <div class="max-w-screen-sm m-auto p-1 border">
      <div class="mb-8">
        <h1 class="text-2xl font-blod">{{ article.title }}</h1>
        <p class="text-gray-400 italic">{{ article.title }}</p>
      </div>
      <article>
        <div>
          {{ article.main }}
        </div>
          <v-md-preview-html :html="article.main" preview-class="vuepress-markdown-body"></v-md-preview-html>
      </article>
    </div>
  </main>
</template>

<script>
// import VueMarkdown from 'vue-markdown'
// import VueMarkdown from "vue-markdown/src/VueMarkdown";

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
  mounted() {
    const param = this.$route.params
    console.log(param.postId)
  },
};
</script>

<style>
</style>