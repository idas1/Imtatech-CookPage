<template>
    <HeaderMain/>
    
    <div class="parent-image">
      <div class="content-about">
        <div class="content-scope-up">
          <div class="header-content-up">
            <h1>About Us.</h1>
            <div class="avatar-ceo" v-for="item in images" :key="item.id">
              <img :src="item.img" alt="">
            </div>
          </div>
          <p>Here you will learn the knowledge of making delicious and beautiful dishes</p>
        </div>
        
        <div class="content-scope-down">
          <div class="content-scope-down">
            <p>"Working with page has been a breeze from start to finish!"</p>
          <div class="note-scope-down">
            <h3>Joe Smith</h3>
            <p>Founder @ Company</p>
          </div>
          </div>
          <div class="rate-value">
            <div class="degree of satisfaction">
              <p>100%</p>
              <p>guarantee</p>
            </div>
            <div class="ranked">
              <p class="color-rate">#1 on Google!</p>
              <p>Rate agency</p>
            </div>
          </div>
        </div>
      </div>

      <div class="image-about">
        <div class="parent-image fix-img">
          <img src="../img/classmate-1.png" alt="">
          <div class="child-image up fix-img"><img src="../img/Hero Img.png" alt=""></div>
          <div class="child-image down fix-img"><img src="../img/Rectangle 17.png" alt=""></div>
        </div>
      </div>
    </div>

    <div class="card-profile">
      <h1>Members of the team</h1>
      <div class="wrap-card">
        <div class="card-user" v-for="item in images" :key="item.id">
        <div class="image-user">
          <img :src="item.img" alt="">
          <div class="indexUser"><p>{{ item.id }}</p></div>
        </div>
        <div class="info-user"><p>Name: {{ item.name }}</p>
          <p>Sevice: {{ item.service }}</p>
        </div>
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
                img:"/avt-about-1.png",
                name:"John Paul",
                service:"CEO",
              },
              
              
              { id:2, 
                img:"/avt-about-2.png",
                name:"Alex Sen",
                service:"DEV",
              },
              { id:3,
                img:"/avt-about-3.png",
                name:"Victor Leo",
                service:"Marketing",
            },
              
            ],
                
                
                
                
        };
    },
   
    
    components: { HeaderMain, FooterPage }
};
  </script>
  
  <style scoped lang="css">
  .parent-image{
    display: flex;
    flex-direction: row;
    margin: 100px auto;
    gap: 20px;
    background-color: #d27722;
    justify-content: space-around;
  }
  .content-scope-up{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .content-about{
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 30px 50px;
  }
  .image-about{
    width: 50%;
    height: max-content;
    padding: 20px;
  }
  .header-content-up{
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .avatar-ceo{
    width: 50px;
    height: 50px;
    border-radius: 16px;
    background-color: #7cd580;
  }
  .content-scope-down{
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px 0;
  }
  .note-scope-down{
    display: flex;
    gap: 10px;
  }
  .rate-value{
    display: flex;
    gap: 30px;
    border-top: 1px solid brown;
    padding: 20px 0;
  }
  .color-rate{
    color: antiquewhite;
    
  }
 
  .parent-image{
    position: relative;
  }
  .child-image{
    position: absolute;
  }
  .up{
    top: -25%;
    right: -30%;
  }
  .down{
    right: -30%;
    bottom: -30%;
  }
  .fix-img{
    width: 60%;
  }
  .card-profile{
    width: 70%;
    margin: 40px auto;
    text-align: center;
  }
  .wrap-card{
    display: flex;
    gap: 30px;
    justify-content: center;
  }
  .card-user{
    width: 30%;
    border: dashed 3px #d27722;
    border-radius: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }
  .indexUser{
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    background-color: #f9b84a;
    top: 2%;
    left: 2%;
  }
  .image-user{
    background-color: rgb(50 221 83 / 52%);
  }
  </style>
  