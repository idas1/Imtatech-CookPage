<script>

import FooterPage from '../components/FooterPage.vue';

import HeaderMain from '../components/HeaderMain.vue';
import ClassMate from '../components/ClassMate.vue';

export default{
   name:"HomeCookClass",
   components:
   { ClassMate,  HeaderMain, FooterPage },
};

</script>
<template>
    
        <HeaderMain/>
        <div class="CookClassContainer">
            <ClassMate/>
            <FooterPage/>
        </div>
        
</template>

<style lang="css">

.CookClassContainer{
display: flex;
align-items: center;
flex-direction: column;
gap: 50px;
}
</style>