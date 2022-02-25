<template>
  <div class="mb-8 flex space-x-4">
    <div class="rounded-md bg-sky-100 py-3 px-4">
      <h2 class="text-left text-3xl text-gray-900">
        {{ calculatedRecord }}{{ calculatedUnit }}
      </h2>
    </div>

    <div class="rounded-md bg-gray-100 py-3 px-4">
      <h2 class="text-left text-3xl text-gray-900">
        {{ record }}{{ calculatedUnit }}
      </h2>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    record: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapState(['currentPourcentage']),

    calculatedRecord() {
      const calcul = Math.round(this.record * (this.currentPourcentage / 100))

      if (isNaN(calcul)) {
        return ''
      } else {
        return calcul
      }
    },

    calculatedUnit() {
      if (this.type === 'w') return 'kg'
      else return ''
    }
  }
}
</script>
