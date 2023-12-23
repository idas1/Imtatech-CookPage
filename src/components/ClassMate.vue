<template>
    <div class="ClassMate">
        <div v-if="showModal">
            <Modal @cancel="Toggle"/>
        </div>
       
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
                    <ButtonPage content="learn" @click="addToCart(item)"/>
                </div>
              
    </div>

</template>

<script>

import ButtonPage from './ButtonPage.vue';
import { mapState } from 'vuex';
import Modal from './Modal.vue';

export default {
    data() {
        return {
            showModal: false,
            
        };
    },
  
    computed: {
  ...mapState(['ClassMateItem'])
},
    // computed:{
    //     ClassMateItem()
    //     {
    //         return this.$store.mapState(['ClassMateItem']),
    //         console.log(this.$store.mapState(['ClassMateItem']))
    //     },

    // },
    methods:{
        addToCart(item){
            this.$store.commit('setIsCart', { id: item.id, value: true });
            console.log(item);
            this.showModal = true;
            
        },
        Toggle(){
            this.showModal= !this.showModal;
        },

    },
    components: { ButtonPage,Modal}
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
    
    @media only screen and (max-width:739px) {
    .ClassMate-items{
        width: 80%;
    }
    
    
    }
    @media only screen and (min-width:739px) and (max-width:1023px){
        .ClassMate-items{
        width: 49%;
        }
    }
</style>