<template>
    <button class="btt"><p>{{ content }}</p></button>
</template>
<script>
export default {
  name: 'btt',
  props:{
    content:{
      type: String,
      required: true
    },
  },
  data() {
    return {
      
    };
  },
};
</script>
<style lang="css">
.btt{
        display: flex;
        padding: 8px 16px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 4px;
background-color: var(--color-mainpPage);
border: none;
color: #fff;
cursor: pointer;
font-size: 16px;
}
</style>