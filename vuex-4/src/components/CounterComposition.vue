<template>
  <h2>CounterComposition component</h2>
  <p>Count: {{ count }}</p>
  <p>Name: {{ name }}</p>
  <p>Age: {{ age }}</p>
  <div>
    <button @click="incrementCount">Increase count</button>
    <button @click="decrementCount">Decrease count</button>
  </div>
  <div>
    <input type="text" v-model="newName" />
    <button @click="() => changeName(newName)">Change name</button>
  </div>
  <div>
    <button @click="incrementAge">Increase age</button>
    <button @click="decrementAge">Decrease age</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const newName = ref("");

const count = computed(() => store.state.count.count);
const name = computed(() => store.state.user.name);
const age = computed(() => store.state.user.age);

const incrementCount = () => store.commit("incrementCount");
const decrementCount = () => store.commit("decrementCount");

const changeName = (newName) => store.commit("changeName", newName);

const incrementAge = () => store.commit("incrementAge");
const decrementAge = () => store.commit("decrementAge");
</script>
