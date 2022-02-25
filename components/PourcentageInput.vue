<template>
  <div>
    <input
      v-model="currentPourcentage"
      class="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
      type="number"
      placeholder="Pourcentage"
      pattern="[0-9]*"
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
</template>

<script>
export default {
  definedPourcentages: [
    20, 25, 30, 35, 40, 45, 50, 60, 70, 75, 80, 85, 90, 95, 100
  ],

  computed: {
    currentPourcentage: {
      get() {
        return this.$store.state.currentPourcentage
      },

      set(value) {
        return this.$store.commit('SET_CURRENT_POURCENTAGE', value)
      }
    }
  }
}
</script>
