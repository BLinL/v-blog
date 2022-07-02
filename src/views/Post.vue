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
      </article>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: {
        title: "",
        date: "",
        main: "haha",
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