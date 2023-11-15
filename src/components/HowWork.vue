<template>
    <div class="how-work">
                <div class="how-left">
                    <IconHowWork/>
                      <div class="work-content" style="margin: 0 10px;">
                        <h1>How it work</h1>
                        <p class="content-text">Getting Started with the COOK Platform</p>
                      </div>
                </div>
                <div class="how-right">
                    <IconSearch/>
                    <p class="content-text">Search tutors by category</p>
                </div>
            </div>
</template>
<script>
import IconHowWork from './icons/IconHow-work.vue';
import IconSearch from './icons/IconSearch.vue';

export default{
    components:{
    "IconHowWork": IconHowWork,
    IconSearch,
},
};


</script>
<style lang="css">
.how-work{
    width: 80%;
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
}
.how-left{
    display: flex;
}
.content-text{
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
}
.fa-magnifying-glass{
    color: #D27722;
}
.how-right{
    display: flex;
    gap: 5px;
    cursor: pointer;
}
</style>