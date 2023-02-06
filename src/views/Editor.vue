<template>
  <div class="m-2">
    <h1 class="text-xl mb-8">编辑</h1>
    <div class="blog-tittle"><input v-model="tittle" /> 标题</div>

    <v-md-editor v-model="txt" height="600px" @save="save"></v-md-editor>
  </div>
</template>

<script>
import { ref } from "vue";
import request from "../utils/request.js";
export default {
  setup() {
    let txt = "";
    let tittle = ref("");
    const save = (text, html) => {
      console.log(text);
      let blogData = {
        tittle: tittle.value,
        content: text,
        author: "bliu",
        createTime: new Date(),
      };
      console.log(blogData);

      request
        .post("/api/blog/save",blogData)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    return { tittle, txt, save };
  },
};
</script>

<style>
input {
  background: #eee;
}
.blog-tittle {
  margin: 30px;
}
</style>