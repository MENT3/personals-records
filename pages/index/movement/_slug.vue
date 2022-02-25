<template>
  <div class="absolute inset-0 bg-black/50" @click="closeModal">
    <div
      class="fixed inset-x-0 bottom-0 top-64 rounded-t-xl bg-white shadow-xl"
    >
      <div class="flex w-full items-center justify-between py-8 px-6 text-left">
        <h3 class="text-xl font-semibold text-gray-800">
          {{ movement.name }}
        </h3>
        <div
          class="rounded-full bg-gray-100 p-3 font-semibold transition hover:bg-gray-200"
          @click="closeModal"
        >
          <svg
            class="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
      </div>
      {{ movement }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovementDetail',
  transition: 'home',
  computed: {
    movement() {
      return this.$store.getters.getMouvementFromSlug(this.$route.params.slug)
    }
  },
  methods: {
    closeModal() {
      this.$router.push('/')
    }
  }
}
</script>
