

<template>
    
    <header>
            <div class="header-left">
               
                <RouterLink to="/">
                    <div class="header-logo">
                    <img src="../img/Logo.png" alt="">
                </div>
                </RouterLink>

                <div class="header-nav-button">
                    <RouterLink to="/HomeCookClass">
                        <div class="header-btt-text font-text" href="#">
                                 <p>Cooking Classes</p>
                        </div>
                    </RouterLink>

                    <RouterLink to="/AboutUs">
                        <div class="header-btt-text font-text" href="#">
                                 <p>About Us</p>
                        </div>
                    </RouterLink>
             </div>
            </div>
            <div class="menu-button">
                <svg width="24px" height="25px" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </div>
            <div class="header-right">
                
                <div>ENG
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Polygon 1" d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#D27722"/>
</svg>
                </div>
                <div  class="currency space">USD
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path id="Polygon 1" d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#D27722"/></svg>
                    <div class="drop-down">
                        <h4 class="drop-down-header">Select a currency</h4>
                        <ul class="drop-down-item">
                            <li class="drop-down-item-li">USD</li>
                            <li class="drop-down-item-li">EUR</li>
                            <li class="drop-down-item-li">UAH</li>
                            <li class="drop-down-item-li">GBP</li>
                            <li class="drop-down-item-li">CHF</li>
                        </ul>
                    </div>
                </div>
                <RouterLink to="/cartshopping">
                    <div class="infor-icon">
                    <IconInfor/>
                    <div class="count-item">{{ CountItem }}</div>
                </div>
                </RouterLink>
                
                
            <RouterLink v-if="!isLoggedIn" to="/login">
                  <ButtonPage :content="getUserContent()" />
            </RouterLink>
            <RouterLink v-else to="#" @click="handleLogout">
                <ButtonPage :content="'Logout ' + user.email" />
            </RouterLink>
            <!-- <RouterLink to="/login">
                <ButtonPage :content="getUserContent()" />
            </RouterLink>  -->

            </div>
        </header>
</template>

<script>

import ButtonPage from './ButtonPage.vue';
import IconInfor from './icons/IconInfor.vue';
import { mapActions } from 'vuex';


export default {
    
    components: { IconInfor, ButtonPage },
    computed:{
        CountItem(){
            return this.$store.state.ClassMateItem.filter(item => item.IsCart).length;
      },
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    user() {
      return this.$store.state.user;
    },  
    },
    
    
methods: {
  getUserContent() {
    
    return this.isLoggedIn ? ` ${this.user.displayName || this.user.email}` : 'Login';
  },
  ...mapActions(['signOut']),

    handleLogout() {
      this.signOut();
    },
},

    

};
</script>

<style lang="css">
    header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px;
    
}

header >.header-left{
    display: flex;
    align-items: center;
    
}

.header-left .header-logo{
    margin: 0 10px;
}
.header-nav-button{
    display: flex;
    gap: 25px;
    margin: 0 20px;
}

.header-btt-text{
    color: black;
    font-weight: 400;
}

header .header-right{
    display: flex;
    align-items: center;
    gap:10px
    
}
.header-right .menu-button{
    
    width: 2rem;
    height: 2rem;
    background-color: var(--color-mainPage);
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    color: #fff;
    padding: 8px;
    display: none;
}
.space{
    padding: 10px 15px;
    cursor: pointer;
}
.currency{
    position: relative;
}

.drop-down{
    position: absolute;
    display: none;
    width: max-content;
    padding: 10px;
    border: 1px #D27722 solid;
    padding: 16px;
    background-color: #fff;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 4px 8px 0px rgba(0, 0, 0, 0.10), 0px 15px 15px 0px rgba(0, 0, 0, 0.09), 0px 33px 20px 0px rgba(0, 0, 0, 0.05), 0px 59px 23px 0px rgba(0, 0, 0, 0.01), 0px 92px 26px 0px rgba(0, 0, 0, 0.00);
}
.currency:hover .drop-down{
    display: block;
}
.fa-caret-down{
    margin: 5px;
    color: #D27722;
}
.fa-circle-info{
    color: #D27722;
    display: block;
    padding: 5px 20px;
    border: 0 1px solid;
    border-right: 1px solid;
    border-left: 1px solid;
}
.drop-down-header{
    margin: 5px 0;
    font-family: 'Outfit',sans-serif;
}
.drop-down-item{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.drop-down-item-li{
    display: inline-block;
    padding: 5px 10px;
    border-bottom: 1px solid #FFDBB8;
    cursor: pointer;
}
.drop-down-item-li:first-child{
    background-color: #FFDBB8;
}
.infor-icon{
    padding: 5px 10px;
    display: flex;
    border-left: 1px solid #D27722;
    border-right: 1px solid #D27722;
}
.header-right .header-right-login{
    padding: 8px 15px;
    color: white;
    background-color: #D27722;
    border-radius: 4px;
    margin: 0 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    gap: 5px;
}
.menu-button{
    background-color: #D27722;
    padding: 7px 9px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    display: none;
}
.count-item{
    position: absolute;
    width: 44%;
    height: 50%;
    background-color: #D27722;
    top: -16%;
    right: 7%;
    color: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
}
.infor-icon{
    position: relative;
}
</style>