<template>
  <div class="flex bg-green-600 text-white p-4">
    <div class="w-1/6 flex-none">
      <!-- empty -->
    </div>
    <div class="flex-1">
      <ul class="flex">
        <li class="px-4">
          <router-link class="hover:text-green-300" to="/">
            <font-awesome-icon icon="fa-solid fa-house" />/</router-link
          >
        </li>
        <li class="px-4">
          <router-link class="hover:text-green-300" to="/blog"
            ><font-awesome-icon
              icon="fa-solid fa-file-pen"
            />Article</router-link
          >
        </li>
        <li class="px-4">
          <router-link class="hover:text-green-300" to="/about"
            ><font-awesome-icon icon="fa-solid fa-bed" />Aboubt</router-link
          >
        </li>
        <li class="px-4">
          <router-link class="hover:text-green-300" to="/editor">
            <font-awesome-icon icon="fa-solid fa-house" />写文章</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
</style>

