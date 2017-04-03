<template lang="jade">
  #app
    Navigation
    transition(name='fade', mode='out-in')
      router-view.view(:allTopics="allTopics")
    Footercomponent
</template>

<script>
import Navigation from './components/Navigation_bar.vue'
import Footercomponent from './components/footer.vue'
export default {
  name: 'app',
  components: {
    Navigation,
    Footercomponent,
  },
  data () {
    return {
      allTopics: [],
    }
  },
  mounted: function(){
    this.allTopics='test';
  }
}
</script>

<style lang="scss"  >
@import "../sass/global.scss";

</style>

