<template lang="jade">
  .DetailCardcomponent
    .ui.cards(v-bind:class="display")
      router-link.card(:to="'/topic/'+product[index]['postid'] ", v-for="(item, index) in product",v-if="index<number")
        .ui.left.corner.label
          .h3 new
        .thin-only.ui.bottom.left.attached.label
          p.thin-only.center.aligned  
            p {{product[index]['title']}}
        .fat-only.ui.bottom.left.attached.label          
          h2.fat-only.center.aligned  
           h2 {{product[index]['title']}}
        span.image
          img(:src="product[index]['img'][0]") 


        //   div.ui.orange.ribbon.label new
        // span.image
        //   img(:src="product[index]['img'][0]")
        // .extra
        //   h2.center.aligned {{product[index]['title']}}


</template>

<script>
import JsonData from '../../static/data.json'
export default {
  name: 'DetailCard',
  props:['display','number'],
  data () {
    return {
      product:[],
    }
  },
  methods: {
    getdata: function(){
      this.product = JsonData.data.reverse()
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

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
@import "../../sass/global.scss";
.Newproductcomponent{
  min-height:100vh;
  padding: 1em 0;
  h1 {
      font-size: 4rem;
      font-family: $logo_font;
      font-weight: normal;
      text-transform: initial;
      margin: .5em;
      color: salmon;
  }

background: linear-gradient(to bottom right, #f2cda6, #ffffff);//設定漸層顏色
}
.ui.four.cards>.card {
    width: calc(25% - 1.5em);
    margin-left: .75em;
    margin-right: .75em;
    padding: 0.2em;
}
.ui.ribbon.label {
    left: calc(-0.2rem - 1.2em);
    width: 15%;
    position: absolute;
    z-index: 1;
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
.thin-only.ui.bottom.left.attached.label{
  padding: 0.5em;
  p{
    color: white;
    font-size:1rem;
    margin:0;
  }
}

</style>
