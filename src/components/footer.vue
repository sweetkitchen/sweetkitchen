<template lang="jade">
  .footer_component
    .ui.inverted.vertical.footer.segment
        .ui.center.aligned.container
          .ui.stackable.inverted.divided.grid
            .three.wide.column
              h2 影音專區
              .ui.inverted.link.list
                a.item(href="" title="Youtube" target="_blank") 
                  h3 Youtube
                a.item(href="https://www.facebook.com/%E7%94%9C%E8%87%BB%E8%87%BB%E5%B9%B8%E7%A6%8F%E5%B0%8F%E5%BB%9A%E6%88%BF-1742272759383174/" title="Fackbook" target="_blank") 
                  h3 Fackbook
                router-link.m-logo.item(to='/subscribe', exact='', title="訂閱電子報") 
                  h3 訂閱電子報
            .three.wide.column
              h2 相關連結
              .ui.inverted.link.list
                router-link.m-logo.item(:to="'/about'")
                  h3 關於我們
                router-link.m-logo.item(to='/Contactus', exact='', title="聯絡我們")
                  h3 聯絡我們
                a.item(href="https://github.com/" title="Github" target="_blank")
                  h3 Github
            .seven.wide.column
              h2 甜臻臻幸福小廚房
              h3 喜歡手工餅乾的朋友歡迎點讚關注我們唷! 這裡也會不定時上傳新作品與大家分享
        .ui.inverted.section.divider
        .ui.centered
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
@import "../../sass/global.scss";
.footer_component{
margin-top:0em
}
h2,h3,h4,p{
  color: white;
}
.ui.inverted.segment, .ui.primary.inverted.segment {
    background:#ffa226;
    color: rgba(255,255,255,.9);
}

</style>
