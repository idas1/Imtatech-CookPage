<template>
  <HeaderMain />
  <div class="container">
    <h2>Shopping Cart</h2>
    <div class="cart">
      <table class="wrap-table">
        <tr class="table-header">
          <th>Image</th>
          <th>Name Class</th>
          <th>Describe</th>
          <th>Edit</th>
        </tr>
        <tr v-for="item in cartItems" :key="item.id">
          <td>
            <img class="cart-img" v-bind:src="item.logoCate" alt="Category Logo" />
          </td>
          <td>
            <p>{{ item.name }}</p>
          </td>
          <td>
            <p>{{ item.cateTittle }}</p>
          </td>
          <td>
            <ButtonPage content="Delete" @click="RemoveItem(item)"/>
            
          </td>
        </tr>
      </table>
    </div>
    <ButtonPage content="Book" :CountItem="CountItem"/>
  </div>
  <FooterPage />
</template>

<script>
import HeaderMain from './HeaderMain.vue'
import FooterPage from './FooterPage.vue'
import ButtonPage from './ButtonPage.vue'


export default {
  
  
  computed: {
    cartItems() {
      // Lọc các mục có IsCart là true
      
      return this.$store.state.ClassMateItem.filter((item) => item.IsCart == true)
      
    },
    CountItem() {
      return this.cartItems.length
    },
  },
    methods: {
      RemoveItem(item) {
        let index = this.$store.state.ClassMateItem.indexOf(item);
        console.log(index);
        
        if (index !== -1) {
          this.$store.state.ClassMateItem.splice(index, 1);
        }
      },
    },
 
  components: { HeaderMain, FooterPage, ButtonPage },
};
</script>

<style scoped lang="css">
.cart-img {
  width: 300px;
}
table,
td,
th {
  border: 1px solid #958080;
  text-align: left;
}
table {
  border-collapse: collapse;
}
th,
td {
  padding: 15px;
}
.table-header {
  background-color: #d27722;
  color: wheat;
}
.wrap-table {
  margin: 0 auto;
  width: 90%;
}
.cart{
  width: 100%;
}
.container{
  align-items: center;
}
</style>
