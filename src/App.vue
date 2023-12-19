<template>
  
  <RouterView/>
</template>
      


<style lang="css">
:root{
  --color-mainpPage:#D27722;
 
}
img{
  width: 100%;
}
h1,h2,h3{
  font-family:'Rubik', sans-serif;
}
p{
  font-family: 'Outfit', sans-serif;
}
body {
  margin: 0;
}
.icon-header{
  width: 24px;
  height: 24px;
}
.font-heading{
  font-family: 'Rubik', sans-serif;
}
.font-text{
  font-family: 'Outfit',sans-serif;
}
.far{
    font-size: 40px;
    color: var(--color-mainpPage);
}
.container{
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    gap: 60px;
}
.text-center{
    text-align: center;
}
.benefit{
  margin: 0 auto;
}
.benefit-text{
  text-align: center;
font-size: 50px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
</style>