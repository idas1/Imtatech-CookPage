<template>
  <div class="cont-slide">
    <div class="cont-slide-left">
      <p class="left-text-one">
        Master the Art of Cooking with <span class="expert">Experts</span> Worldwide
      </p>
      <p class="left-text-two">
        Experience the joy of cooking in a whole new way with our engaging online cooking classes.
        Learn from the chefs, share your unique culinary knowledge, and join our growing foodie
        community. With COOK, learning, and teaching becomes a shared passion.
      </p>
      <div class="cont-left-button" style="display: flex">
        <button
          style="
            background-color: #d27722;
            color: #fff;
            padding: 10px 15px;
            margin: 0 10px;
            border-radius: 4px;
            border: none;
          "
        >
          Find Your Tutor
        </button>
        <button
          style="
            background-color: unset;
            color: #d27722;
            border: #d27722 solid;
            padding: 10px 15px;
            margin: 0 10px;
            border-radius: 4px;
          "
        >
          Join Our Chefs
        </button>
      </div>
    </div>
    <div class="cont-slide-right">
      <img src="../img/Hero Img.png" alt="" />
    </div>
  </div>
</template>
<style scoped lang="css">
.container .cont-slide {
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
}
.container .cont-slide-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 50%;
}
.expert {
  color: #d27722;
  font-family: 'Pacifico', cursive;

  font-size: 61px;
  font-style: normal;
  font-weight: 700;
  line-height: 113.3%;
  letter-spacing: -2.44px;
}
.cont-slide-left .left-text-one {
  color: #252422;
  font-family: Rubik;
  font-size: 61px;
  font-style: normal;
  font-weight: 700;
  line-height: 113.3%; /* 69.113px */
  letter-spacing: -2.44px;
}
.cont-slide-left .left-text-two {
  color: #403d39;
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
}
.container .cont-slide-right {
  width: 50%;
}
</style>
