<script setup>
const props = defineProps(["cards"]);
</script>

<template>
  <div class="grid lg:grid-cols-3 gap-3">
    <Card
      v-for="(card, index) in cards"
      :key="`tab-card-${index}`"
      :card="card"
    />
  </div>
</template>
