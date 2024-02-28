<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const posts = ref([]);
const getPosts = () => {
  axios
    .get("/api/posts")
    .then((res) => (posts.value = res.data.data))
    .catch((error) => console.log(error));
};

onMounted(() => getPosts());
</script>
<template>
  <h1>Posts</h1>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h4>{{ post.title }}</h4>
      </li>
    </ul>
  </div>
</template>