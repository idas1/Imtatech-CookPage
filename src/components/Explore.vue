<template>
    <div class="explore-our" v-for="item in Explore" :key="item.id">
        <div class="explore">
                <div class="explore-img" >
                    <img :src="item.img" alt="cook">
                    <div class="explore-num-1">{{ item.number }}</div>
                </div>
                <div class="explore-content">
                    <h1 class="space ">{{ item.header }}</h1>
                    <p class="space">{{ item.title }}</p>
                    <ButtonPage content="Sign up for free"/>
                </div>
            </div>
    </div>
    
</template>
<script>
import ButtonPage from './ButtonPage.vue';
export default {
//   name: 'ExploreOur',
  components:{
    "ButtonPage":ButtonPage,
  },
  data() {
    return {
        Explore:[
            {
                id:1,
                img:"./src/img/explore-our.png",
                header:"Explore Our Culinary Experts",
                number:1,
                content:"Browser button",
                title:"Begin by browsing through our diverse selection of professional tutors and cooking groups. Each tutor brings their unique culinary expertise and passion, ensuring you have a variety of cooking styles and cuisines to choose from.",
            },
            {
                id:2,
                img:"./src/img/pefect match.png",
                header:"Select Your Perfect Match",
                number:2,
                content:"",
                title:"Once you've explored our range of tutors, choose the one that resonates most with you. Their profiles provide detailed information, such as their areas of expertise, availability, and reviews. Scheduling a lesson has never been easier..",
            },
            {
                id:1,
                img:"./src/img/enjoy.png",
                header:"Enjoy Your Interactive Lesson",
                number:3,
                content:"Sign up for free",
                title:"Begin by browsing through our diverse selection of professional tutors and cooking groups. Each tutor brings their unique culinary expertise and passion, ensuring you have a variety of cooking styles and cuisines to choose from.",
            },

        ],
        
    };
  },
};
</script>

<style lang="css">
.explore-our{
    
    height: max-content;
    width: 80%;
    margin: 4rem auto;
}
.explore{
    display: flex;
    justify-content: center;
}
.explore-img{
    position: relative;
    margin-right: 20px;
}
.explore-num-1{
    position: absolute;
    top: -20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    background-color: var(--color-mainpPage);
    border-radius: 10px;
    color: #fff;
    font-size: 49px;
    font-family: fantasy;
    
    
}
.explore-content{
    width: 40%;
    text-align: start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px
}
</style>