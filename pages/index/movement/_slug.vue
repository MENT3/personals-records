<template>
  <div>
    <div class="absolute inset-0 z-40 bg-black/50" @click="closeModal" />
    <div
      class="fixed inset-x-0 bottom-0 top-64 z-50 rounded-t-xl bg-white px-4 shadow-xl"
    >
      <div class="flex w-full items-center justify-between py-8 px-6 text-left">
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
      {{ movement }}

      <input
        v-model="currentPourcentage"
        class="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
        type="number"
        placeholder="Pourcentage"
      />

      <div class="mt-8 grid w-full grid-cols-5 gap-4">
        <div
          v-for="(pourcentage, i) in $options.definedPourcentages"
          :key="i"
          class="w-full rounded-md bg-sky-100 py-4"
          :class="currentPourcentage === pourcentage ? 'ring ring-sky-500' : ''"
          @click="currentPourcentage = pourcentage"
        >
          {{ pourcentage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const definedPourcentages = [
  20, 25, 30, 35, 40, 45, 50, 60, 70, 75, 80, 85, 90, 95, 100
]

export default {
  name: 'MovementDetail',
  transition: 'home',
  definedPourcentages,

  computed: {
    currentPourcentage: {
      get() {
        return this.$store.state.currentPourcentage
      },

      set(value) {
        return this.$store.commit('SET_CURRENT_POURCENTAGE', value)
      }
    },

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
