<template>
  <div class="m-2">
    <h1 class="text-xl mb-8">编辑</h1>
    <v-md-editor v-model="txt" height="600px" @save="save"></v-md-editor>
  </div>
</template>

<script>
import Dialog from "../components/Dialog.vue";
export default {
  components: { Dialog },
  setup() {
    let txt = "";

    const save = (text, html) => {
      //   console.log(text);
      //   console.log(html);
    };

    const diglogSave = () => {
        console.log('save ...');
    };
    return { txt, save, diglogSave };
  },
};
</script>

<style>
</style>