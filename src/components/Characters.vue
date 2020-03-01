<template>
  <div>
    <h1>Movie characters</h1>
    <div>
      <input type="text" placeholder="Search by name" v-model="searchString" />
    </div>
    <div class="charList">
      <h1 v-if="filteredChars.length === 0">
        No one found, please try another name!
      </h1>
      <div
        class="charListItem"
        v-for="character in filteredChars"
        :key="character.name"
      >
        <Character
          v-bind:charName="character.name"
          v-bind:gender="character.gender"
          v-bind:buttonText="buttonText"
          v-bind:buttonAction="buttonAction"
          v-bind:films="character.films"
          v-bind:fetching="fetching"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Character from "./Character";
export default {
  name: "Characters",
  components: {
    Character
  },
  props: {
    characters: {
      type: Array,
      required: true
    },
    buttonText: String,
    buttonAction: Function,
    fetching: Boolean
  },
  computed: {
    filteredChars() {
      return this.characters.filter(character =>
        character.name.toLowerCase().includes(this.searchString.toLowerCase())
      );
    }
  },
  data() {
    return {
      searchString: ""
    };
  }
};
</script>
<style scoped>
.charList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.charListItem {
  display: inline-flex;
  margin: 1rem;
}
</style>
