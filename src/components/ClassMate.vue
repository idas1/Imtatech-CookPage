<template>
    <div class="ClassMate">
        <div class="ClassMate-items" v-for="item in ClassMateItem" :key="item.id">
                    <div class="class-logo-item">
                        <img v-bind:src="item.logoCate" alt="Category Logo" />
                    </div>
                    <div class="class-logo-content">
                        <div class="class-content-header">
                            <h2 >{{ item.name }}</h2>
                            
                        </div>
                        <div class="class-item-text">
                            <p>{{ item.cateTittle }}</p>
                        </div>
                    </div>
                    <ButtonPage content="learn"/>
                </div>
               
    </div>
</template>

<script>

import ButtonPage from './ButtonPage.vue';

export default {
    data() {
        return {
            ClassMateItem: [
                {
                    id: 1,
                    logoCate: "./src/img/classmate-2.jpg",
                    name: "Class for kids",
                    cateTittle: "Master baking: from rustic bread to delicate pastries",
                },
                {
                    id: 2,
                    logoCate: "./src/img/classmate-3.jpg",
                    name: "Class for husband",
                    cateTittle: "Master baking: from rustic bread to delicate pastries",
                },
                {
                    id: 3,
                    logoCate: "./src/img/classmate-1.jpg",
                    name: "Class for chefs",
                    cateTittle: "Master baking: from rustic bread to delicate pastries",
                },
                {
                    id: 4,
                    logoCate: "./src/img/classmate-4.jpg",
                    name: "Class for family",
                    cateTittle: "Master baking: from rustic bread to delicate pastries",
                },
                {
                    id: 5,
                    logoCate: "./src/img/classmate-5.jpg",
                    name: "Class for woman",
                    cateTittle: "Master baking: from rustic bread to delicate pastries",
                },
                {
                    id: 6,
                    logoCate: "./src/img/classmate-6.jpg",
                    name: "Class for couple",
                    cateTittle: "Master baking: from rustic bread to delicate pastries",
                },
            ],
        };
    },
    components: { ButtonPage, ButtonPage }
};
</script>
<style lang="css">
    .ClassMate{
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }
    .ClassMate-items{
        padding: 20px;
        border: 1px solid var(--color-mainpPage);
        border-radius: 16px;
        width: 30%;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    
</style>