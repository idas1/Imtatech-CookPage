<script >
import BeneFit from '../components/BeneFit.vue';
import CategoriesItem from '../components/CategoriesItem.vue';
import ContSlide from '../components/ContSlide.vue';
import Explore from '../components/Explore.vue';
import LandingStart from '../components/LandingStart.vue';
import ExportLearnVue from '../components/ExportLearn.vue';
import FooterPage from '../components/FooterPage.vue';
import HeaderMain from '../components/HeaderMain.vue';
import HowWork from '../components/HowWork.vue';
import News from '../components/News.vue';





export default{
   name:"MainHome",
   components:
   { HeaderMain, ExportLearnVue, HowWork, News, FooterPage, BeneFit, CategoriesItem, ContSlide, LandingStart, Explore },
};

</script>

<template>
  
<div class="wrapper">
  
  <HeaderMain/>
  <div class="container">
    <ContSlide/> <LandingStart/> <ExportLearnVue/> <CategoriesItem/>
    <div class="benefit">
                <h2 class="benefit-text">Our Unique Benefits</h2>
                <p>Experience the perks of learning and teaching cooking on our platform</p>
                
            </div>
     <BeneFit/>
     <HowWork/>
     <Explore/>
     <News/>
  </div>
  <FooterPage/>

</div>
</template>