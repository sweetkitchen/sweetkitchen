<template lang="jade">
  .slider_component

    .fat-only.swiper-container
      .swiper-wrapper
        .swiper-slide(v-for="(item, idx) in product", style="width:100%", v-if="check= true" )
          img.background(:src="product[idx]")            
      .swiper-pagination
      .swiper-button-prev
      .swiper-button-next
      // .swiper-scrollbar
    .thin-only.swiper-container
      .swiper-wrapper
        .swiper-slide(v-for="(item, idx) in product", style="width:100%", v-if="check= true" )
          img.background(:src="product[idx]")            
      .swiper-pagination
      .swiper-button-prev
      .swiper-button-next
    

    
</template>

<script>
export default {
  name: 'sliderall',
  props:['imglink','page'],
  data () {
    return {
      product:[],
      check: false,
    }
  },
  methods: {
    initialize: function(page){
      this.product = this.imglink
      setTimeout(function(){
        this.check=false;
        this.product = this.imglink
        $(".swiper-container").each(function(index, element){
            var $this = $(this);
            var swiper = new Swiper(this, {
              nextButton: $this.find(".swiper-button-next")[0],
              prevButton: $this.find(".swiper-button-prev")[0],
              pagination: $this.find(".swiper-pagination")[0],
              loop: true,
              observer: true,
              initialSlide: 0,
              direction: 'horizontal',
              slidesPerView: 1,
              keyboardControl: true,
              autoplay: 8000,
            });
            swiper.slideTo(page,300,true) 
            swiper.update()
        });
        this.check=true       
      }, 1)
    }
  },
  updated: function () {
    // this.initialize(1);
  },
  created: function(){
    this.initialize(1);
  },
  watch:{
    imglink:function(){
      this.initialize(1);
    },
    page:function(){
      if(isNaN(this.page) == false){
        this.initialize(this.page);
      }
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
@import "../../sass/global.scss";
.slider_component{

}
img{
    width:100%;
  }

</style>
