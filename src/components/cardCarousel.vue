<template>
  <el-carousel :interval="4000" type="card" :height=carouselHeight>
    <el-carousel-item v-for="item in imgwrap" :key="item.id" style="border-radius: 10px;">
      <div class="banner">
        <img :src="item.url" width="100%" height="100%"/>
        <h3 @click="toPage(item.id)">Read More</h3>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>

export default {
  name: 'cardCarousel',

  data() {
    return {
      carouselHeight : window.innerHeight*0.45 + 'px',
      imgwrap: [
        {id: 0, url:require("@/img/carousel_life.jpg")},
        {id :1, url:require("@/img/carousel_notes.png")},
        {id :2, url:require("@/img/carousel_us.jpg")}
      ],
      pages: ['life', 'notes', 'us'],
    }
  },

  methods: {
    changeCarousel() {
      this.carouselHeight = window.innerWidth*0.88*0.28 + "px";
    },

    toPage(index) {
      console.log('index'+this.pages[index]);
      this.$router.push(this.pages[index]);
      
    }
  },

  mounted() {
    
    var distance  = window.innerWidth/16;
    let carousel = document.querySelector(".el-carousel");
    carousel.style.marginTop = window.innerHeight*0.05 + "px";
    carousel.style.marginLeft = distance + "px";
    carousel.style.marginRight = distance + "px";
    this.carouselHeight = window.innerWidth*0.88*0.28 + "px";
    
    window.addEventListener('resize', () => this.changeCarousel());
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
  background-color: white;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: white;
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
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
}

.banner h3:hover {
  background-color: orange;
  color: white;
}
</style>
