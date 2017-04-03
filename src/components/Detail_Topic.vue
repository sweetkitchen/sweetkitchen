<template lang="jade">
  .DetailTopicComponent
    

    .fat-only
      .ui.container
        .fat-only.ui.massive.breadcrumb
          router-link.section(to='/', exact='')
            h2 首頁
          i.right.chevron.icon.divider
          router-link.section(:to="'/category'")
            h2 烘培甜點
          i.right.arrow.icon.divider
          .active.section
            h2 {{product.title}}
        .ui.grid
          .nine.wide.column
            SliderAll(:imglink="product['img']",:page="mainpoto", v-if="product['img'] != undefined")
            .ui.center.aligned.three.small.cards
              a.red.card(v-on:click="menuClick",v-for="(item, index) in product['img']")
                .image
                  img.ui.rounded.image(:src="product['img'][index]")
          .seven.wide.column
            .h2.ui.dividing.header
              span: i.food.icon
              span.h2 {{product.title}}
            p {{experience}}
            .h2.ui.dividing.header
              span: i.list.layout.icon
              span.h2 成份
            p(v-for="(item, index) in ingredients")
              {{ingredients[index]}}

        .h2.ui.dividing.center.aligned.header.newproduct 
          .h2 最新作品
        .ui.segment
          DetailCard(:display="'four'",:number="4")
        
    .thin-only
      .ui.container
        SliderAll(:imglink="product['img']",:page="mainpoto", v-if="product['img'] != undefined")
        h2.ui.dividing.header
          span: i.food.icon
          span.h2 {{product.title}}
        p {{experience}}
        h2.ui.dividing.header
          span: i.list.layout.icon
          span.h2 成份
        .ui.segment
          p(v-for="(item, index) in ingredients")
            {{ingredients[index]}}
        

</template>

<script>
// import data from '../../'
import SliderAll from './SliderAll.vue'
import DetailCard from './Detail_Card.vue'
import JsonData from '../../static/data.json'
export default {
  name: 'About',
  components: {
    DetailCard,
    SliderAll
  },
  props: ['allTopics'],
  data () {
    return {
      product:[],
      mainpoto:Number,
      ingredients:[],
      experience:[],
      rtName:'',

    }
  },
  computed: {
    routername:function(){
        return this.$route.params.tRouteName;
    }

  },
  methods: {
    menuClick: function (e){          //將按到的圖片連結傳到mainpoto
        // $('.shape').shape('flip up');
        // this.mainpoto=e.toElement.src;
        var id = 0
        for(let i in this.product['img']){
          id++
          if(this.product['img'][i] == e.toElement.src){
            this.mainpoto = id
          }
        }
    },
    article:function(){
      this.$forceUpdate();
      this.rtName = this.$route.params.tRouteName;//抓取router name id /topic/2
      let index = JsonData.data.findIndex(img => img.postid === this.rtName);
      this.product=JsonData.data[index]; //使用id直接抓取資料
      this.ingredients=this.product.content.replace(/［成份］\n|［心得］(.*\n.*)+/g,"").split("\n");//抓取成分
      this.experience=this.product.content.replace(/［成份］(\n.*)+［心得］/g,"")//抓取心得
      this.mainpoto=this.product['img'][0];   

      // getjsondata.getAllTopics()
      // .then((response) => {
      //   var val=response;
      //   // val.indexOf(this.rtName);
      //   var index = val.data.data.findIndex(img => img.postid === this.rtName);
      //   // var index = imageList.map(function (img) { return img.value; }).indexOf(200);
      //   this.product=val.data.data[index]; //使用id直接抓取資料
        
      //   // console.log(index)
      //   // this.title=this.product.message.split("\n")[0].replace(/［品名］/,"");//抓取title
      //   this.ingredients=this.product.content.replace(/［成份］\n|［心得］(.*\n.*)+/g,"").split("\n");//抓取成分
      //   this.experience=this.product.content.replace(/［成份］(\n.*)+［心得］/g,"")//抓取心得
      //   // console.log(this.experience)
      //   // this.ingredients.length=this.ingredients.length-1;//刪除最後一空格
      //   this.mainpoto=this.product['img'][0];   //將一開始圖片設定為第一張圖
      //   // // console.log(this.experience)

      // })
    },
     goAnchor: function(anchor){

        /* go to top */
        $('html, body').animate({
          scrollTop: 0,
        }, 0)

    }
  },
  watch:{
    routername:function(){
      this.goAnchor();
      this.article();
    }
  },
  created: function(){
    this.goAnchor();
    this.article();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
@import "../../sass/global.scss";
.DetailTopicComponent{
  min-height:94vh;
  position: relative;
}

.h2{
  font-size: 2rem;
  font-family: $main_font !important;
  color: $text_color;
  font-weight: 700;
  margin: 0;
}  

.ui.section.divider{
  width:100%;
}
.fat-only{
  // margin-top: 1em;
  position: relative;
  top: 10em;
  .fat-only.ui.massive.breadcrumb{
    position: relative;
    top: -1.5em;
  }
  .ui.segment {
    border: none;
    box-shadow: none;
    margin-bottom: 20em;
  }
  .newproduct{
    margin-top: 2em;
  }
}
.thin-only{
  top: 2em;
  .ui.segment {
    border: none;
    box-shadow: none;
    margin-bottom: 20em;
    padding: 0;
  }
}


</style>
