<template lang="jade">
  .Navigation_component
    .fat-only.ui.massive.secondary.menu
      .left.menu
        .ui.segment
          router-link.item(to='/', exact='')
            img(src='../assets/lo5.png')
            .h1 甜臻臻幸福小廚房
      .right.menu
        
        router-link(:to="'/category'")
          a.item(v-on:click="menuClick") 
            h2 烘培甜點
        a.item(href="https://www.facebook.com/%E7%94%9C%E8%87%BB%E8%87%BB%E5%B9%B8%E7%A6%8F%E5%B0%8F%E5%BB%9A%E6%88%BF-1742272759383174/" title="Fackbook" target="_blank")
          h2 粉絲專頁
        router-link(:to="'/about'")
          a.item(v-on:click="menuClick") 
            h2 關於我們
    .thin-only
      .logo
        router-link.item(to='/', exact='')
          img(src='../assets/lo5.png') 
          span.h1 甜臻臻幸福小廚房
      #Navigation  
        .ui.fixed.top.sticky 
          .thin-only.ui.massive.secondary.menu
            router-link(:to="'/category'")
              a.item(v-on:click="menuClick") 
                h3 烘培甜點
            a.item(href="https://www.facebook.com/%E7%94%9C%E8%87%BB%E8%87%BB%E5%B9%B8%E7%A6%8F%E5%B0%8F%E5%BB%9A%E6%88%BF-1742272759383174/" title="Fackbook" target="_blank")
              h3 粉絲專頁
            router-link(:to="'/about'")
              a.item(v-on:click="menuClick") 
                h3 關於我們
      //  router-link.item(to='/', exact='')
      //     img(src='../assets/lo5.png') 
      //     span.h1 甜臻臻幸福小廚房
      //   .thin-only.ui.massive.secondary.menu
      //     router-link(:to="'/category'")
      //       a.item(v-on:click="menuClick") 
      //         h3 烘培甜點
      //     a.item(href="https://www.facebook.com/%E7%94%9C%E8%87%BB%E8%87%BB%E5%B9%B8%E7%A6%8F%E5%B0%8F%E5%BB%9A%E6%88%BF-1742272759383174/" title="Fackbook" target="_blank")
      //       h3 粉絲專頁
      //     router-link(:to="'/about'")
      //       a.item(v-on:click="menuClick") 
      //         h3 關於我們
</template>

<script>

export default {
  name: 'Navigation',
  components: {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isActive: false,
    }
  },
  methods: {
    tab: function(){
      $('.ui.fixed.top.sticky ')
      .sticky({
        context: '.footer_component',
        silent: 'true',
      })
    },
    menuClick: function (e){
        $('.menu .item').removeClass('active')
        $(e.target).addClass('active')
    },
    scrolle: function(){
      var vm=this;
      $('html')
        .visibility({
          onUpdate: function(calculations) {
            if(calculations.pixelsPassed==0){
              vm.isActive=false;
            }
            else{
              vm.isActive=true;
            }

          }
        })
      ;
    }
  },
  updated: function(){
    this.tab();
  },
  mounted: function(){
    this.scrolle();
    this.tab();
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
@import "../../sass/global.scss";
.Navigation_component{
}
.ui.secondary.menu .item {
  margin:0;
  // padding: 0.5em !important;
}

.fat-only.ui.massive.secondary.menu{  
  z-index: 900;
  background-color: $logo_color;
  margin: 0;
  padding: 0.5em;
  font-size: 1.5rem;
  box-shadow: 0px 3px 3px 0px rgba(34, 36, 38, 0.15);
  position: fixed;
  width: 100%;
  .h1{
    font-size: 3rem;
    font-family: $logo_font !important;
    color: white;
    font-weight: 700;
    margin: 0;
  }
  h2{
    color: white;
  }
  .ui.segment {
    position:fixed;
    background: transparent;
    border: none;
    box-shadow: none;
    margin-top: -3em;
    margin-left: -3em;
    img{
      width: 7em;
    }
    .item:hover { 
    background-color: transparent;
    }
  }
}
.thin-only.ui.massive.secondary.menu{
  background-color: $logo_color;
  margin: 0;
  font-size: 1.3rem;
  width: 100%;
  z-index: 900;
  a{
    text-align: center;
    margin: 0 auto;
  }
}
.thin-only{
  h3{
    color: white;
  }
  .logo{
    text-align: center;
    // position: fixed;
    width: 100%;
    height: $navHeight;
    background-color: $logo_color;
    box-shadow: 0px 3px 3px 0px rgba(34, 36, 38, 0.15);
    z-index: 900;
    .item:hover { 
      background-color: transparent;
    }
    img{
      width: 73px;
      vertical-align: bottom;
      margin-top: 0em;
      vertical-align: -26px;
    }
    .h1{
      font-size: 2rem;
      font-family: $logo_font !important;
      color: white;
      font-weight: 700;
    }
    
  }
}

</style>
