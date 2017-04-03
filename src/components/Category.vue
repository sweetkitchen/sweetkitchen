<template lang="jade">
  .Categorycomponent 
    .ui.container
      .fat-only.ui.massive.breadcrumb
        router-link.section(to='/', exact='')
          h2 首頁
        i.right.chevron.icon.divider
        router-link.section(:to="'/category'")
          h2 烘培甜點  
    .fat-only
      .backgroundimg 
      .ui.container
        .ui.segment
          .ui.sticky.categoryfat-only
            .ui.fluid.three.item.tabular.menu
              a.item.active(data-tab='cookie',v-on:click="goAnchor" ) 
                h2 餅乾
              a.item(data-tab='dessert',v-on:click="goAnchor")
                h2 茶點
              a.item(data-tab='cake',v-on:click="goAnchor")
                h2 蛋糕
          
          .ui.vertical.attached.tab.segment.active(data-tab='cookie')
            .ui.cards.three
              router-link.card(:to="'/topic/'+cookie[index]['postid'] ", v-for="(item, index) in cookie")
                .ui.left.corner.label(v-if="index<3")
                  .h3 new
                .ui.bottom.left.attached.label
                  h2.center.aligned {{cookie[index]['title']}}
                span.image
                  img(:src="cookie[index]['img'][0]")
          .ui.vertical.bottom.attached.tab.segment(data-tab='dessert')
            .ui.cards.three
              router-link.card(:to="'/topic/'+dessert[index]['postid'] ", v-for="(item, index) in dessert")
                .ui.left.corner.label(v-if="index<3")
                  .h3 new
                .ui.bottom.left.attached.label
                  h2.center.aligned {{dessert[index]['title']}}
                span.image
                  img(:src="dessert[index]['img'][0]")
          .ui.vertical.bottom.attached.tab.segment(data-tab='cake')
            .ui.cards.three
              router-link.card(:to="'/topic/'+cake[index]['postid'] ", v-for="(item, index) in cake")
                .ui.left.corner.label(v-if="index<3")
                  .h3 new
                .ui.bottom.left.attached.label
                  h2.center.aligned {{cake[index]['title']}}
                span.image
                  img(:src="cake[index]['img'][0]")
    .thin-only
      // .backgroundleft
      // .backgroundright
      // .ui.sticky.cate
      //   .background
      .ui.segment.first
        .ui.sticky.categorythinonly
          .ui.fluid.three.item.tabular.menu
            a.item.active(data-tab='cookie',v-on:click="goAnchor" ) 
              h3 餅乾
            a.item(data-tab='dessert',v-on:click="goAnchor")
              h3 茶點
            a.item(data-tab='cake',v-on:click="goAnchor")
              h3 蛋糕
        
        .ui.vertical.attached.tab.segment.active(data-tab='cookie')
          .ui.cards.one
            router-link.card(:to="'/topic/'+cookie[index]['postid'] ", v-for="(item, index) in cookie")
              .ui.left.corner.label(v-if="index<3")
                .h3 new
              .ui.bottom.left.attached.label
                h3.center.aligned {{cookie[index]['title']}}
              span.image
                img(:src="cookie[index]['img'][0]")
        .ui.vertical.bottom.attached.tab.segment(data-tab='dessert')
          .ui.cards.one
            router-link.card(:to="'/topic/'+dessert[index]['postid'] ", v-for="(item, index) in dessert")
              .ui.left.corner.label(v-if="index<3")
                .h3 new
              .ui.bottom.left.attached.label
                h3.center.aligned {{dessert[index]['title']}}
              span.image
                img(:src="dessert[index]['img'][0]")          
        .ui.vertical.bottom.attached.tab.segment(data-tab='cake')
          .ui.cards.one
            router-link.card(:to="'/topic/'+cake[index]['postid'] ", v-for="(item, index) in cake")
              .ui.left.corner.label(v-if="index<3")
                .h3 new
              .ui.bottom.left.attached.label
                h3.center.aligned {{cake[index]['title']}}
              span.image
                img(:src="cake[index]['img'][0]")




</template>

<script>
import JsonData from '../../static/data.json'
export default {
  name: 'Category',
  data () {
    return {
        product:[],
        dessert:[],
        cake:[],
        cookie:[],
    }
  },
  methods: {
    tab: function(){
      $('.menu .item').tab();
      $('.categoryfat-only')
        .sticky({
          offset: 180,
          silent: 'true',
          // pushing: 'false',
          // context: 'true',
          // context '.Categorycomponent',
      });
      $('.ui.sticky.categorythinonly')
        .sticky({
          offset: 75,
          silent: 'true',
          context: '.ui.segment.first'
      });
    },
    goAnchor: function(anchor){
        /* go to top */
        $('html, body').animate({
          scrollTop: 0,
        }, 0)
    },
    getdata: function(){
      this.product=JsonData.data.reverse(); //.reverse()陣列顛倒
      for(var i in this.product){
        if(this.product[i].category.indexOf("餅乾")!=-1){
          this.cookie.push(this.product[i])
        }
        if(this.product[i].category.indexOf("甜點")!=-1){
          this.dessert.push(this.product[i])
        }
        if(this.product[i].category.indexOf("蛋糕")!=-1){
          this.cake.push(this.product[i])
        }
      }

      // getjsondata.getAllTopics()
      // .then((response) => {
      //   var val=response;
      //   this.product=val.data.data.reverse(); //.reverse()陣列顛倒
      //   for(var i in this.product){
      //     if(this.product[i].category.indexOf("餅乾")!=-1){
      //       this.cookie.push(this.product[i])
      //     }
      //     if(this.product[i].category.indexOf("甜點")!=-1){
      //       this.dessert.push(this.product[i])
      //     }
      //     if(this.product[i].category.indexOf("蛋糕")!=-1){
      //       this.cake.push(this.product[i])
      //     }
      //   }
      // })
    }
    
  },
  mounted: function(){
    this.tab();
  }, 
  updated: function(){
    this.tab();
  },
  created: function(){
    this.goAnchor();
    this.getdata();
    this.tab();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
@import "../../sass/global.scss";
.Categorycomponent{
  min-height:100vh;
}
.ui.massive.breadcrumb {
    font-size: 1.71428571rem;
    position: fixed;
    top: 5em;
    margin-left: 0.5em;
    z-index: 12;
}
.ui.item.menu .item {
  background-color: #ffffff;
  z-index: 11;
}
.ui.tabular.menu .active.item {
  border-top-width: 5px;
  border-color: $logo_color;
}
.ui.left.corner.label{ //標籤設定
  color: $label;
  .h3 {
    margin-top: 0.5em;
    margin-left: -1em;
    font-size: 1rem;
    font-family: $main_font;
    font-weight: 700;
    color: white;
  }
}
.ui.attached.label{ // 卡片標題
  width: 100% !important;
  z-index: 1;
  background: rgba(0, 0, 0, 0.52);
  h2,h3{
    color: white;
  }
}
.fat-only{
  .ui.vertical.segment:last-child {
    border-bottom: 1px solid #D4D4D5;
  }
  .ui.tab.active, .ui.tab.open {
    padding: 3em;
    margin-left: 0px;
    border-top: none;
    margin-bottom: 15em;
  }
  .ui.segment:first-child{ //取消segment外框
    border: none;
    box-shadow: none;
    top: 12em;
  }
  .backgroundimg { //設定主要背景圖
    width: 100%;
    height: 9.5em;
    background: #ffffff;
    position: fixed;
    z-index: 10;
  }

}
.thin-only{
  .ui.vertical.segment:last-child {
    border-bottom: 1px solid #D4D4D5;
  }
  .fixed.top{
    top: -1.5em;
  }
  // margin-top: -1.5em;
  .ui.tab.active, .ui.tab.open {
    padding: 3em;
    margin-left: 0px;
    border-top: none;
    margin-bottom: 5em;
  }
  .ui.fluid.three.item.tabular.menu{
    height: 1em;  
  }
  .ui.tab.active, .ui.tab.open {
    padding: 1em;
    margin-left: 0px;
    border-top: none;
    margin-bottom: 15em;
  }
  .first{ //取消segment外框
    border: none;
    box-shadow: none;
  }
  .backgroundleft { //設定主要背景圖
    width: 1.5em;
    left: 0em;
    height: 8.8em;
    background: white;
    position: fixed;
    z-index: 10;
    top: 0em;

  }


    
}

</style>
