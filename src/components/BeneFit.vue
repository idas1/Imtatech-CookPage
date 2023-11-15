<template>
    <div class="benefit-landing">
        <div class="benefit-item" v-for="item in BenefitItem" :key="item.id">
                    <div class="benefit-logo">
                        <img v-bind:src="item.logoBene" alt="">
                    </div>
                    <div class="item-title">
                        <h3 class="font-heading">{{ item.name }}</h3>
                    </div>
                    <p class="font-text text-center">{{ item.beneTittle }}</p>

                </div>
        
    </div>
</template>
<script>

export default {
    data(){
        return{
            
            BenefitItem:
           
            [
                
                {
                    id: 1,
                    logoBene:"./src/img/benefit-1.png",
                    name:"Expert Chefs",
                    beneTittle:"Learn from the best. Our platform features professional chefs from around the world who bring their unique experiences and culinary secrets to every class.",
                },
                {
                    id: 2,
                    logoBene:"./src/img/benefit-2.png",
                    name:"Save Time and Money",
                    beneTittle:"Learn from the best. Our platform features professional chefs from around the world who bring their unique experiences and culinary secrets to every class.",
                },
                {
                    id: 3,
                    logoBene:"./src/img/benefit-3.png",
                    name:"Accessible Cooking",
                    beneTittle:"Learn from the best. Our platform features professional chefs from around the world who bring their unique experiences and culinary secrets to every class.",
                },
                
                
            ],

        };

    },
};
</script>
<style scoped lang="css">
    .benefit{
    width: 80%;
    margin: 0 auto;
    text-align: center;
}
.benefit-logo{
  
display: flex;
width: 100px;
height: 100px;
padding: 25px;
align-items: flex-start;
gap: 10px;
background-color: var(--color-mainpPage);
border-radius: 50px;
}
.benefit-text{
    text-align: center;
font-size: 50px;
font-style: normal;
font-weight: 600;
line-height: normal;
color: #252422;
}
.benefit-landing{
    display: flex;
width: 80%;
margin: 30px auto;
justify-content: center;
align-items: center;
gap: 15px;
}
.benefit-landing .benefit-item{
    display: flex;
    width: 30%;
flex-direction: column;
align-items: center;
gap: 27px;
flex: 1 0 0;

}
.benefit-item .item-title{
  
font-size: 32px;
font-style: normal;
font-weight: 600;
line-height: normal;
color: #252422;
align-items: center;
text-align: center;
}

</style>