<template>
  <nuxt-link
    :to="`/movement/${slug}`"
    class="mx-4 mb-3 flex justify-between rounded-md bg-sky-100 px-4 py-3"
  >
    <div>
      {{ name }}
    </div>
    <div>
      {{ record }}
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    record: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      pourcentage: 50
    }
  }
}
</script>
