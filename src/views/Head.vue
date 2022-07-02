<template>
  <div class="flex bg-blue-500 text-white">
    <div class="w-1/6 flex-none">
        <!-- empty -->
    </div>
    <div class="flex-1">
      <ul class="flex">
        <li class="px-4">
            <router-link to="/">Home</router-link>
        </li>
        <li class="px-4">
          <router-link to="/blog">Blog</router-link>
        </li>
        <li class="px-4">
          <router-link to="/about">About</router-link>
          </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
