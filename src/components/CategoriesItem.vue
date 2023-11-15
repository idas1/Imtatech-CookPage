<template>
    <div class="categories">
        <div class="categori-items" v-for="item in CategoriesItem" :key="item.id">
                    <div class="cate-logo-item">
                        <img v-bind:src="item.logoCate" alt="Category Logo" />
                    </div>
                    <div class="cate-logo-content">
                        <div class="item-header">
                            <h2 class="item-header-text">{{ item.name }}</h2>
                            
                        </div>
                        <div class="item-text">
                            <p class="font-text">{{ item.cateTittle }}</p>
                        </div>
                    </div>
                </div>
               
    </div>
</template>
<script>

export default {
    data(){
        return{
            
            CategoriesItem:
           
            [
                
                {
                    id: 1,
                    logoCate:"./src/img/cate-item-1.png",
                    name:"Bakery",
                    cateTittle:"Master baking: from rustic bread to delicate pastries",
                },
                {
                    id: 2,
                    logoCate:"./src/img/cate-item-2.png",
                    name:"Vegan Cooking",
                    cateTittle:"Master baking: from rustic bread to delicate pastries",
                },
                {
                    id: 3,
                    logoCate:"./src/img/cate-item-3.png",
                    name:"Seafood",
                    cateTittle:"Master baking: from rustic bread to delicate pastries",
                },
                {
                    id: 4,
                    logoCate:"./src/img/cate-item-4.png",
                    name:"BBQ & Grilling",
                    cateTittle:"Master baking: from rustic bread to delicate pastries",
                },
                {
                    id: 5,
                    logoCate:"./src/img/cate-item-5.png",
                    name:"Wine Pairing",
                    cateTittle:"Master baking: from rustic bread to delicate pastries",
                },
                {
                    id: 6,
                    logoCate:"./src/img/cate-item-7.png",
                    name:"Cake Decorating",
                    cateTittle:"Master baking: from rustic bread to delicate pastries",
                },
            ],

        };

    },
};
</script>
<style scoped lang="css">
    .categories{
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    margin: 50px auto;
    gap: 24px;
    justify-content: center;
}

.categori-items{
    width: 30%;
    display: flex;
    padding: 24px 34px;
    gap: 10px;
    border-radius: 16px;
    border: #D27722 1px solid;
    
}
.item-header-text{
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    
}
.categori-items:first-child{
    background-color: var(--color-mainpPage);
    color: #fff;
}
.cate-logo-item{
    width: 30%;
    display: flex;
    align-items: center;
}
.cate-logo-content{
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 10px;

}

</style>