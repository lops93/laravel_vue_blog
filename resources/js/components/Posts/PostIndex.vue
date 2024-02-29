<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import MainLayout from "../layouts/MainLayout.vue";

const posts = ref([]);
const currentPage = ref(1);
const totalPages = ref(0);

const getPosts = () => {
  axios
    .get("/api/posts")
    .then((res) => (posts.value = res.data.data))
    .catch((error) => console.log(error));
};

onMounted(() => getPosts());
</script>
<template>
  <MainLayout>
    <h1>Posts</h1>
    <div>
      <ul role="list" class="divide-y divide-gray-100">
        <li
          v-for="post in posts"
          :key="post.id"
          class="flex justify-between gap-x-6 py-5"
        >
          <p class="text-sm font-semibold leading-6 text-gray-900">
            {{ post.title }}
          </p>
        </li>
      </ul>
    </div>
  </MainLayout>
</template>