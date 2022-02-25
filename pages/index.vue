<template>
  <div class="text-center">
    <h1 class="pt-12 pb-6 text-3xl font-semibold">Personal records</h1>
    <div @click.prevent.stop>
      <RecordItem
        v-for="record in records"
        :key="record.slug"
        v-bind="record"
      />
    </div>

    <div class="modal-route">
      <div class="modal-content">
        <NuxtChild />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomePage',
  transition: 'home',
  computed: mapState(['records'])
}
</script>
