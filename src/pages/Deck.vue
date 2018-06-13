<template>
  <div class="decks">
      <h1>{{deck.name}}</h1>
      <div>

      </div>
  </div>
</template>

<script>
export default {
  name: 'decks',
  data() {
    return { deck: {} };
  },
  async mounted() {
    const id = this.$route.params.id;
    const response = await fetch(`/api-mock/deck-${id}.json`);

    if (response.ok) {
      this.deck = await response.json();
    }
  },
};
</script>


<style scoped>
.decks {
  color: #42b983;
  font-size: 16px;
}
</style>
