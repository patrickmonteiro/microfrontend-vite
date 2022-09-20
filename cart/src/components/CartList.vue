<template>
  <div class="border">
    <h4>My Cart</h4>
    <ul>
      <li>
        Produto 1
      </li>
      <li>
        Produto 2
      </li>
      <li>
        Produto 2
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
defineComponent({
  name: 'ButtonCheck'
})
</script>

<style scoped>
  .border {
    border: 1px solid black;
    margin-top: 10px;
  }
</style>
