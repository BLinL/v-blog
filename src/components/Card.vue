<template>
  <a class="hover:cursor-pointer" @click.prevent="handleClick">
    <div
      class="
        flex-grow
        max-w-xs
        m-[10px]
        border-2 border-neutral-100
        rounded
        p-1
      "
    >
      <h1 class="text-lg m-2">title</h1>
      <div class="text-base mx-2 cusor-auto">
        描述：Now it no longer deps on Vue Router, meaning you can do components
        transition even on the same page (statefully!)https://t.co/8ATxrqLpnv
        pic.twitter.com/Fl0fjewqaENow it no longer deps on Vue Router, meaning
        you can do components transition even on the same page
        (statefully!)https://t.co/8ATxrqLpnv pic.twitter.com/Fl0fjewqaE
      </div>
      <div class="text-sm flex text-gray-400">
        <div class="m-2">2022-02-02</div>
        <div class="text-sm m-2">author: me</div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
    methods: {
        handleClick() {
            this.$router.push({name: 'post', params: { postId: 1 }})
        }
    }
};
</script>

<style>
</style>