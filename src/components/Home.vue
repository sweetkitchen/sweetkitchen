<template lang="jade">
  .Home_component
    .fat-only
      img.img(src='../assets/sweet-kitchen3.jpg')
    .thin-only
      #backgroundimg
      Slider
    Newproduct


</template>

<script>
import jsondata from '../../static/data.json'
import Newproduct from './New_product.vue'
import Slider from './Slider.vue'
export default {
  name: 'Home',
  components: {
    Newproduct,
    Slider
  },
  data () {
    return {

    }
  },
    methods: {
    goAnchor: function(anchor){
      // var ee= $('.img').height();
      // $('html, body').animate({
      //         scrollTop: ee+50,
      //       }, 1000)       
    },
  },
  mounted: function(){
  },
  created: function(){
    this.goAnchor()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
@import "../../sass/global.scss";
.Home_component{
  min-height:80vh;
}
.fat-only{
  img{
    border: 0;
    width: 100%;
    margin-top: $navHeight;
  }
}


.ui.orange.button {
    margin-top: -2em;
    margin-left: 47vw;
    padding: 0.2em;
    font-size: 2em;
}
.background{
    width: 338px;
  height: 204px;
  margin:30px;
  background-color: #ffffff;
  border: 1px solid black;
  /* for IE */
  filter:alpha(opacity=60);
  /* CSS3 standard */
  opacity:0.6;
}
.thin-only{
  .h1{
    position: absolute;
    top: 18rem;
    left: calc(50% - 4.2em);
    color: white;
    font-size: 2.5rem;
    font-family: $logo_font !important;
    font-weight: 700;
  }
  img{
    border: 0;
    width: 100%;
    margin-top: 115px;
    -webkit-filter: brightness(0.6);
  }
}







</style>



