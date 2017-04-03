<template lang="jade">
  .slider_component
    .fat-only.back
      .background
      .background1
      .background2
      // .background3
      // .h1_1 甜臻臻 
      // .h1_3 Sweet's	&nbsp;&nbsp;&nbsp;Kitchen
      // .h1_2 幸福小廚房
      .img: img(src='../assets/lo7.png')
    .fat-only.swiper-container
      .swiper-wrapper
        .swiper-slide(v-for="(item, idx) in product", style="width:100%" )
            img.background(:src="product[idx]['img'][0]")
            
      .swiper-pagination
      .swiper-button-prev
      .swiper-button-next
      .swiper-scrollbar
    .thin-only.swiper-container
      .swiper-wrapper
        .swiper-slide(v-for="(item, idx) in product", style="width:100%" )
            img(:src="product[idx]['img'][0]")
            span.h1 甜臻臻 幸福小廚房
      .swiper-pagination
      .swiper-button-prev
      .swiper-button-next
      .swiper-scrollbar

    
</template>

<script>
import JsonData from '../../static/data.json'
export default {
  name: 'slider',
  data () {
    return {
      product:[],
    }
  },
  methods: {
    getdata: function(){
      this.product=JsonData.data.reverse(); //.reverse()陣列顛倒
      // getjsondata.getAllTopics()
      // .then((response) => {
      //   var val=response;
      //   this.product=val.data.data.reverse(); //.reverse()陣列顛倒
      // })
    }

  },

  created: function(){
    this.getdata();
    
  },
  mounted: function () {

    setTimeout(function(){
      /* initialize swiper when document ready */
      var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        grabCursor: true,
        paginationClickable :true,
        slidesPerView: 1,
        // If we need pagination
        pagination: '.swiper-pagination',
        
        // Navigation arrows
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        
        // And if we need scrollbar
        scrollbar: '.swiper-scrollbar',
      })        
    }, 1000)

  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
@import "../../sass/global.scss";
.slider_component{


}



.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    right: 2em;

}

.thin-only.swiper-container{
  img{
    width:100%;
    -webkit-filter: brightness(0.6);
  }
  .h1{
    position: absolute;
    top: 18rem;
    left: calc(50% - 4.2em);
    color: white;
    font-size: 2.5rem;
    font-family: $logo_font !important;
    font-weight: 700;
  }
}
.fat-only.swiper-container{
  margin-top: 103px;
  position: absolute;
  width: 35em;
  left: 1em;
  img{
        width:100%;
    }  
}
.fat-only.back{
  .background{
    margin-top: 80px;
    position: absolute;
    background:rgb(198, 237, 236);
    height: 28em;
    width: 100%;
  }
}

@media screen and (min-width:1270px) { 
   .background1{
    margin-top: 80px;
    position: absolute;
    background: rgba(98, 220, 212, 0.62);
    z-index: 2;
    height: 28em;
    width: 100%;
    // -webkit-clip-path: polygon(100% 10%, 8% 100%, 100% 100%);
    // clip-path: polygon(100% 10%, 8% 100%, 100% 100%);
    -webkit-clip-path: polygon(100% 33%, 0% 100%, 100% 100%);
    clip-path: polygon(100% 33%, 0% 100%, 100% 100%);
  }
  .background2{
    margin-top: 80px;
    position: absolute;
    background: rgb(47, 203, 190);
    height: 28em;
    width: 100%;
    -webkit-clip-path: circle(19.9% at 79% 53%);
    clip-path: circle(19.9% at 79% 53%);
    z-index: 3;
    margin-left: calc(-30% + 18.5em);
  }
  .background3{
    margin-top: 80px;
    position: absolute;
    background: #ffffff;
    height: 28em;
    width: 100%;
    -webkit-clip-path: inset(46% 5% 42% 63%);
    clip-path: inset(46% 5% 42% 63%);
    z-index: 3;
    margin-left: calc(-30% + 18.5em);
  }
  .fat-only.back{

      .img{
    img{
      width: 14%;
      position: absolute;
      left: calc(74% - 2rem);
      top: 18.5em;
      z-index: 6;
    }
  }
    .h1_1{
        position: absolute;
        top: 20rem;
        left: calc(49.5% + 22rem);
        color: white;
            font-size: calc(1px + 5vw);
        font-family: "cwTeXYen", "Heiti TC", sans-serif !important;
        font-weight: 700;
        z-index: 5;
      }
    .h1_2{
      position: absolute;
      top: 36rem;
      left: calc(48% + 19rem);
      color: white;
          font-size: calc(1px + 5vw);
      font-family: "cwTeXYen", "Heiti TC", sans-serif !important;
      font-weight: 700;
      z-index: 5;
    }
    .h1_3{
      position: absolute;
      top: 28rem;
      left: calc(49.5% + 16rem);
      color: rgba(71, 71, 71, 0.9);
      font-size: 4rem;
      font-family: $logo_font !important;
      font-weight: 700;
      z-index: 5;
    }
  }
  
}
@media screen and (max-width:1269px) {
  .fat-only.swiper-container{
    margin-left: calc(50% - 18.5em) !important;
    top: 0em;
  }
} 
</style>
