<template>
    <HeaderMain/>
    <div class="parent-image">
      <div class="image-slider" v-for="item in images" :key="item.id">
      <div class="image-items">
        <img :src="item.img" alt="">

      </div>
      <div class="image-content">
        <p>{{ item.content }}</p>
      </div>
    </div>
    </div>
    <FooterPage/>
  </template>
  
  <script>
import FooterPage from '../components/FooterPage.vue';
import HeaderMain from '../components/HeaderMain.vue';

  export default {
    data() {
        return {
            
            images: [
              {
                id:1,
                img:"./src/img/classmate-1.png",
                content:"Our cooking course is not just a journey of flavor exploration, but also an opportunity to transform you into a skilled cook blogger. Here, you'll learn how to prepare delicious dishes, master advanced cooking techniques, and share your passion through blog writing. Join us, where cooking is not just a skill but an art, offering a continuous experience of creativity.",
              },
              
              
              { id:2, 
                img:"./src/img/classmate-3.jpg",
                content:"Our cooking course is not just a journey of flavor exploration, but also an opportunity to transform you into a skilled cook blogger. Here, you'll learn how to prepare delicious dishes, master advanced cooking techniques, and share your passion through blog writing. Join us, where cooking is not just a skill but an art, offering a continuous experience of creativity.",
              },
              { id:3,
                img:"./src/img/Hero Img.png",
                content:"Our cooking course is not just a journey of flavor exploration, but also an opportunity to transform you into a skilled cook blogger. Here, you'll learn how to prepare delicious dishes, master advanced cooking techniques, and share your passion through blog writing. Join us, where cooking is not just a skill but an art, offering a continuous experience of creativity.",
            },
              
            ],
                
                
                
                
        };
    },
    
    components: { HeaderMain, FooterPage }
};
  </script>
  
  <style lang="css">
  .parent-image{
    display: flex;
    flex-direction: column;
    margin: 100px auto;
    gap: 20px;
  }
  .image-slider {
    
    width: 55%;
    margin: 0 auto;
    display: flex;
    gap: 20px;
    flex-direction: column;
    
  }
  .image-items{
    border-radius: 20px;
  }
  
  
  
  </style>
  