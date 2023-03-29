<template>
  <div class="signup">
    好呀
  </div>
</template>

<script>
export default {
  name: "signUpView",
  
  methods: {
    showView(val){
      if(val === true){
        console.log("展示");
        let elem = document.querySelector(".signup");
        elem.style.visibility = "visiable";
        elem.style.transform = "rotateY(0deg)";
      }
     
    }
  },
}
</script>

<style>
.signup {
  position: absolute;
  display: grid;
  place-items: center;
  height: 400px;
  width: 480px;
  background-color: white;
  border-radius: 3%;
  box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.3);
  text-align: center;
  transform: rotateY(-180deg);
  backface-visibility: hidden;
  transition: all 1s;
}
</style>