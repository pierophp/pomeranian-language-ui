<template>
  <v-flex v-bind="{ [`xs4`]: true }" class="deck">
    <v-card>
        <v-card-title>
      <div>
        <span class="grey--text">
          <a href="javascript:void(0)" @click="goToDeck()">{{deck.name}}</a>
        </span><br/>
        <span>Teste</span><br/>
        <span>Teste 2</span>
      </div>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>bookmark</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>share</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'deck',
  props: {
    deck: {},
  },
  methods: {
    goToDeck() {
      this.$router.push(`/deck/${this.deck.id}`);
    },
  },
};
</script>


<style scoped>
.deck {
  padding: 5px;
}
</style>
