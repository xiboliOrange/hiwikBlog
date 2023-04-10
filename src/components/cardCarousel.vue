<template>
  <el-carousel :interval="4000" type="card" :height=carouselHeight>
    <el-carousel-item v-for="item in imgwrap" :key="item.id">
      <div class="banner">
        <img :src="item.url"/>
        <h3>Read More</h3>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'cardCarousel',

  data() {
    return {
      carouselHeight : "400px",
      imgwrap: [
        {id: 1, url:require("@/img/carousel_life.jpg")},
        {id :2, url:require("@/img/carousel_notes.png")},
        {id :3, url:require("@/img/carousel_us.jpg")}
       
      ],
    }
  },

  mounted() {
    var distance  = window.innerWidth/16;
    let carousel = document.querySelector(".el-carousel");
    carousel.style.marginLeft = distance + "px";
    carousel.style.marginRight = distance + "px";
    this.carouselHeight = window.innerHeight*0.45 + "px";
    window.onresize = () => {
      this.carouselHeight = window.innerHeight*0.45 + "px";
    }
  }
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.banner {
  position: absolute;
  
}

.banner img {
  width: 100%;
  height: auto;
}

.banner h3 {
  position: absolute;
  line-height: 30px;
  width: 150px;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  
}
</style>
