<template>
  <button>
    Button Stop Home
  </button>
</template>

<script>
import { defineComponent } from "vue";
defineComponent({
  name: 'ButtonStop'
})
</script>

<style scoped>
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #dd1313;
  cursor: pointer;
  transition: border-color 0.25s;
  color: white;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>
