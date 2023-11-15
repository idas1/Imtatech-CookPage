<template>
    <div class="footer">
        <div class="about">
                <div class="logo-homepage">
                    <h1 class="text-logo">COOK</h1>
                </div>
                <div class="about-infor">
                    <div class="about-infor-item" v-for="item in AboutItem" :key="item.id">
                    <h3 class="about-h3">{{item.header}}</h3>
                    <p class="color-p-about" v-for="(tittle, index) in item.titles" :key="index">{{tittle}}</p>
                </div>
                </div>

                    
        </div>
            
            <div class="contact-footer">
                <div class="phone">
                    <p class="color-p-about">USA</p>
                    <p class="color-p-about">Your address goes there</p>
                    <p class="color-p-about">+00000000</p>
                </div>
                
                <div class="social-media">
                    <div class="about-infor-item">
                    <h3 class="about-h3">COOK'S SOCIAL</h3>
                    <IconInsta/>
                    <IconTw/>
                    <IconFB/>
                    <IconLn/>
                    </div>

                    <div class="about-infor-item">
                        <h3 class="about-h3" >LEGAN</h3>
                        <p class="color-p-about">Terms Of Serivce</p>
                        <p class="color-p-about">Privacy Policy</p>
                       
                    </div>

                </div>
                <p class="about-footer-text">2023 Copyrights</p>
            </div>
    </div>
</template>
<script>
import IconFB from './icons/IconFB.vue';
import IconInsta from './icons/IconInsta.vue';
import IconLn from './icons/IconLn.vue';
import IconTw from './icons/IconTw.vue';

export default{
    data() {
        return {
            AboutItem: [
                {
                    id: 1,
                    header: "ABOUT US",
                    titles: ["who we are", "how it work", "COOK review"],
                },
                {
                    id: 2,
                    header: "FOR SRUDENTS",
                    titles: ["Cooking blog", "find a tutor"],
                },
                {
                    id: 3,
                    header: "FOR TUTOR",
                    titles: ["Become an online chef", "Teach cooking online"],
                },
                {
                    id: 4,
                    header: "SUPPORT",
                    titles: ["Need a help"],
                },
            ],
        };
    },
    components: { IconInsta, IconTw, IconFB, IconLn }
};
</script>

<style lang="css">
    .footer{
    background-color: #D27722;
    width: 80%;
    margin: 0 auto;
    bottom: 0;
    color: #fff;
    border-radius: 16px 16px 0 0 ;
    padding: 30px;
    position: relative;
}

.about{
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #FFDBB8;
    padding: 10px;
}
.about-infor{
    display: flex;
}
.about-infor-item{
    margin: 0 20px;
}
.text-logo{
    color: #FFDBB8;
}
.color-p-about{
    color: #FFDBB8;
    
}

.contact-footer{
    display: flex;
    justify-content: space-around;
    width: 70%;
    padding: 30px;
    
}
.social-media{
    display: flex;
}
.about-footer-text{
    position: absolute;
    bottom: 10px;
    right: 10px;
}
.about-h3{
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    padding: 10px 0;
    
}
.phone{
    text-align:start;
}

</style>