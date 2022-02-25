<template>
  <div>
    <div class="absolute inset-0 z-40 bg-black/50" @click="closeModal" />
    <div
      class="fixed inset-x-0 bottom-0 z-50 rounded-t-xl bg-white px-8 pb-12 shadow-xl"
    >
      <div class="flex w-full items-center justify-between py-8">
        <h3 class="text-xl font-semibold text-gray-800">
          {{ movement.name }}
        </h3>
        <div
          class="rounded-full bg-gray-100 p-3 font-semibold transition active:bg-gray-300"
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

      <PourcentageShow v-bind="movement" />

      <PourcentageInput />
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
