<script setup>
import axios from "axios";
import { ref, onMounted, defineProps } from "vue";
import MainLayout from "../layouts/MainLayout.vue";
import { useRouter } from "vue-router";

const getPost = async (id) => {
  const response = await axios.get("posts/" + id);
  post.value = response.data;
};

const post = ref({
  id: "",
  title: "",
  content: "",
});
const errors = ref([]);
const router = useRouter();

const updatePost = async (id) => {
  try {
    await axios.put("api/posts/" + id, post.value);
    await router.push({ name: "PostIndex" });
  } catch (error) {
    if (error.response && error.response.status === 422) {
      errors.value = error.response.data.errors;
    }
    console.error("Error updating post:", error);
  }
};

const props = defineProps({
  id: {
    required: true,
    type: String,
  },
});
console.log(post.id);
onMounted(() => getPost(props.id));
</script>
<template>
  <MainLayout>
    <form @submit.prevent="updatePost($route.params.id)">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Edit Post
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Please provide a descriptive title for your submission.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label
                for="username"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Title</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    type="text"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    v-model="post.title"
                  />
                  <div v-if="errors.title">
                    <span class="text-sm text-red-400">{{
                      errors.title[0]
                    }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="about"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Content</label
              >
              <div class="mt-2">
                <textarea
                  rows="5"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  v-model="post.content"
                />
              </div>
              <p class="mt-3 text-sm leading-6 text-gray-600">
                The content section is where you can share the main text or
                details of your submission.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <button
            type="submit"
            class="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </MainLayout>
</template>