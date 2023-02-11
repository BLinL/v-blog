<template>
  <div class="m-2">
    <h1 class="text-xl mb-8">编辑</h1>
    <div class="blog-tittle"><input class="tittle-input" v-model="tittle" placeholder="请输入文章标题..."/> 标题</div>
    <h1 class="text-xl mb-2">内容</h1>
    <v-md-editor v-model="txt" height="600px" @save="save"></v-md-editor>
  </div>
</template>

<script>
import { ref } from "vue";
import request from "../utils/request.js";
import swal from 'sweetalert'

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
      if (text.length==0) {
        swal("请输入一些内容","","error")
        return
      }
      if(tittle.value.length == 0) {
        swal("请输入文章标题","","error")
        return
      }
      request
        .post("/api/blog/save",blogData)
        .then(function (response) {
          console.log(response);
          if (response.data.code != 200) {
            swal("非常抱歉，保存出现了一点问题","","error")
          } else {
            swal("文章发布成功啦！","","success")
          }
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
.tittle-input:focus {
  outline: none;
  border: 2px solid #9595f3;
}
.tittle-input{
  background: #fff;
  border: 2px solid #eee;
  padding: 10px;
  border-radius:10px;
  box-shadow: none;
  transition: width .3s;
}
.blog-tittle {
  margin: 30px;
}
</style>