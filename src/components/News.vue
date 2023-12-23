<template>
    <div class="news">
        <div class="hastag">
                    <div class="hastag-tittle">
                        <IconNews/>
                          <h1>Popular online classes</h1>
                    </div>
                   <div class="hastag-manager">
                        <h3>Find a tutor by category</h3>
                        <div class="category" >
                            
                            <ul class="tag-name" v-for="item in CateManager" :key="item.id">
                                <li class="list-item">{{ item.name }}</li>
                    
                            </ul>
                        </div>
                        <h3>Find a tutor by country</h3>
                        <div class="country" >
                            
                            <ul class="tag-name" v-for="country in CountryManager" :key="country.id">
                                <li class="list-item">{{ country.name }}</li>
                                
                            </ul>
                        </div>
                      </div>
        </div>

        <div class="img-blog">
            <div class="blog-tittle">
                          <IconBlog/>
                          <h1>COOK Blog</h1>
                    </div>
            <div class="blog-content">
                <div class="blog-content-item" v-for="item in BlogItem" :key="item.id">
                            <div class="img-item">
                                <img  :src="item.image" alt="">
                            </div>
                            <div class="describe">
                                <div class="calender">
                                    <IconCalendar/>
                                    <p>24 Apr, 2023</p>

                                </div>
                                <div class="describe-title">
                                    <p>{{ item.title }}</p>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    </div>
</template>
<script>
import IconCalendar from './icons/IconCalendar.vue';
import IconNews from './icons/IconNews.vue';
import IconBlog from './icons/IconBlog.vue';

export default {
    data() {
        return {
            CateManager:
            [
                {
                    id:1,
                    name:"usa",
                },
                {
                    id:2,
                    name:"japan sushi making",
                },
                {
                    id:3,
                    name:"thai",
                },
                {
                    id:4,
                    name:"seafood",
                },
                {
                    id:5,
                    name:"italian",
                },
                {
                    id:1,
                    name:"vegan",
                },
                {
                    id:6,
                    name:"bbq",
                },
            ],
            CountryManager:[
                {
                    id:1,
                    name:"USA",
                },
                {
                    id:2,
                    name:"Mexico",
                },
                {
                    id:3,
                    name:"Germany",
                },
            ],
            BlogItem:[
                {
                    id:1,
                    image:"/blog-item-1.png",
                    title:"Mastering the Art of Homemade Pizza",

                },
                {
                    id:2,
                    image:"/blog-item-2.png",
                    title:"Delectable Homemade Ice Cream",

                },
                {
                    id:3,
                    image:"/blog-item-3.png",
                    title:"How to Prepare Authentic Mexican Tacos",

                },
                {
                    id:4,
                    image:"/blog-item-4.png",
                    title:"Tips and Techniques for a Restaurant-Quality Steak",

                },
            ],
        };
    },
    components: { IconNews, IconCalendar,IconBlog },
};
</script>
<style lang="css">
.news{
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 50px auto;
    
}

.hastag-tittle{
    display: flex;
    margin: 30px 0;
    gap: 10px;
    align-items: center;
}
.hastag-manager .category{
    
    display: flex;
    width: 330px;
    flex-wrap: wrap;
}
.hastag-manager .country{
    
    display: flex;
}
.list-item{
    padding: 5px;
    margin: 5px;
    background-color: #FFFDF4;
    color: #D27722;
    border: 1px solid #FFDBB8;
    border-radius: 15px;
    cursor: pointer;

}
.img-blog{
    width: 50%;
}
.blog-tittle{
    display: flex;
    margin: 30px 0;
    gap: 10px;
    align-items: center;
}
.blog-title h1{
    font-size: 26px;
}

.blog-content{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    
}
.blog-content-item{
    width: 40%;
    margin: 5px;
    border: 1px solid #D27722;
    border-radius: 16px;
    overflow: hidden;
}

.calender{
    display: flex;
    align-items: center;
    padding: 10px;
}
.describe-title{
    font-size: 20px;
    font-weight: 600;
    padding: 10px; 
}    
</style>