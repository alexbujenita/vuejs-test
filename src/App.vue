<template>
  <div id="app">
    <div class="navBar">
      <router-link class="link" to="/">Characters List</router-link>
      <router-link class="link" to="/my-characters"
        >My Personal List</router-link
      >
    </div>
    <router-view v-bind="myProps"></router-view>
  </div>
</template>

<script>
import { characters } from "./data/characters";

export default {
  name: "app",
  data() {
    return {
      characters,
      personalList: [],
      films: [],
      fetching: true
    };
  },
  async mounted() {
    const { results } = await fetch("https://swapi.co/api/films/")
      .then(resp => resp.json())
      .then(data => data);
    this.films = results;
    this.characters.forEach(character => {
      character.films = character.films.map(filmUrl =>
        this.films.find(film => film.url === filmUrl)
      );
    });
    this.fetching = false;
  },
  methods: {
    addCharacterToList(characterName) {
      const elementExists = this.personalList.findIndex(
        char => char.name === characterName
      );
      if (elementExists === -1) {
        const elementPosition = this.characters.findIndex(
          char => char.name === characterName
        );
        this.personalList.push(characters[elementPosition]);
      }
    },
    removeFromPersonalList(characterName) {
      const elementPosition = this.personalList.findIndex(
        char => char.name === characterName
      );
      this.personalList.splice(elementPosition, 1);
    }
  },
  computed: {
    myProps() {
      if (this.$route.name === "myList") {
        return {
          characters: this.personalList,
          buttonAction: this.removeFromPersonalList,
          fetching: this.fetching,
          buttonText: "Remove from list"
        };
      }
      return {
        characters: this.characters,
        buttonAction: this.addCharacterToList,
        fetching: this.fetching,
        buttonText: "Add to list"
      };
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navBar {
  display: flex;
  justify-content: flex-end;
}
.link {
  text-decoration: none;
  padding: 0 1rem;
  border: 1px solid black;
  margin-left: 1rem;
  border-radius: 4px;
}
</style>
