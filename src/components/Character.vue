<template>
  <div class="charCard">
    <button class="addToButton" type="button" @click="onClick">
      {{ buttonText }}
    </button>
    <h2 class="charName">Name: {{ charName }}</h2>
    <p>Gender: {{ gender }}</p>
    <h2 v-if="fetching">Getting actor's film/s</h2>
    <ul v-else>
      <li v-for="film in films" :key="film.episode_id">
        {{ film.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Character",
  props: {
    charName: String,
    gender: String,
    buttonText: String,
    buttonAction: {
      type: Function,
      required: true
    },
    films: Array,
    fetching: Boolean
  },
  methods: {
    onClick() {
      this.buttonAction(this.charName);
    }
  }
};
</script>

<style>
.charCard {
  border: 1px solid #2c3e50;
  border-radius: 4px;
  padding: 1rem;
  width: 18rem;
  text-align: left;
}

.charCard:hover {
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.2);
}
.charName {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
.addToButton {
  padding: 0.5rem;
  color: #fff;
  background-color: #007bff;
  border: 1px solid #007bff;
  border-radius: 4px;
  outline-color: #3756f5;
}
</style>
