<template>
  <div class="decks">
      <h1>Decks</h1>
       <v-layout row wrap>
          <Deck v-for="(deck, deckId) in decks" v-bind:key="deckId" :deck="deck"/>  
       </v-layout>
  </div>
</template>

<script>
import Deck from '../components/decks/Deck';
export default {
  name: 'decks',
  data() {
    return { decks: [] };
  },
  components: { Deck },
  async mounted() {
    const response = await fetch('/api-mock/decks.json');

    if (response.ok) {
      this.decks = await response.json();
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
