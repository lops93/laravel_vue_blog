<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import MainLayout from "../layouts/MainLayout.vue";
import { TailwindPagination } from "laravel-vue-pagination";
import { TrashIcon, PencilSquareIcon } from "@heroicons/vue/24/outline";

const posts = ref([]);

const getPosts = (page = 1) => {
  axios
    .get(`/api/posts?page=${page}`)
    .then((res) => (posts.value = res.data))
    .catch((error) => console.log(error));
};

const destroyPost = async (id) => {
  if (!window.confirm("Are you sure?")) {
    return;
  }
  await axios.delete("api/posts/" + id);
  await getPosts();
};

onMounted(() => getPosts());
</script>
<template>
  <MainLayout>
    <div class="flex items-center">
      <PencilSquareIcon class="w-10 h-10 mt-2" />
      <p
        class="ml-2 mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        Posts
      </p>
      <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <router-link
          to="/posts/create"
          class="bg-blue-500 m-10 mb-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Post
        </router-link>
      </div>
    </div>
    <div>
      <ul role="list" class="divide-y divide-gray-100">
        <li
          v-for="post in posts.data"
          :key="post.id"
          class="flex justify-between gap-x-6 py-5"
        >
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">
              {{ post.title }}
            </p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500">
              {{ post.content }}
            </p>
          </div>
          <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <router-link
              :to="{ name: 'PostEdit', params: { id: post.id } }"
              class="bg-green-700 rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2"
            >
              <p><PencilSquareIcon class="w-4 h-4" /></p>
            </router-link>
            <button
              @click="destroyPost(post.id)"
              class="bg-red-700 rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2"
            >
              <p><TrashIcon class="w-4 h-4" /></p>
            </button>
          </div>
        </li>
      </ul>
      <TailwindPagination
        :data="posts"
        @pagination-change-page="getPosts"
        class="rounded-md shadow-sm relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-300 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      />
    </div>
  </MainLayout>
</template>