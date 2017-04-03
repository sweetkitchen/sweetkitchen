<template lang="jade">
  .Newproductcomponent
    .fat-only
      .ui.horizontal.divider.fat-only
        .h1 最新作品
      .ui.container
        .ui.center.aligned.segment
          DetailCard(:display="'three'",:number="6")
          router-link.ui.button(:to="'/category'")
            h2 閱讀更多
              i.arrow.right.icon
      
    .thin-only
      .ui.horizontal.divider
        h3 最新作品
      .ui.container
        .ui.center.aligned.segment
          DetailCard(:display="'two'",:number="6")
          router-link.ui.button(:to="'/category'")
            .h3.inverted 閱讀更多
              i.arrow.right.icon


</template>

<script>
import DetailCard from './Detail_Card.vue'
export default {
  name: 'Newproduct',
  components: {
    DetailCard
  },
  data () {
    return {
    }
  },
  methods: {
  },
  created: function(){
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
@import "../../sass/global.scss";

.Newproductcomponent{
  min-height:100vh;
  padding: 1em 0;
  .h1 {
    font-size: 3rem;
    font-family: $logo_font;
    font-weight: 700;
    color: $text_color;
  }
}
  .fat-only{
    .ui.container {
      margin-top: -3em;
      padding: 2em;
    }
  }
.ui.segment {
  background: transparent;
  border: none;
  box-shadow: none;
}
.thin-only{
  .ui.button{
    border-radius: 1em;
    margin-top: 3em;
    background-color: $logo_color;
    .h3{
      color: white;
      font-weight: 200;
      font-family: $logo_font;
    }
  }
}
.ui.button{
  background-color: $logo_color;
  border-radius: 1em;
  margin-top: 1.5em;
  h2{
      color: white;
      font-weight: 200;
    }
}
.center{
  width: 100%;
}

</style>
