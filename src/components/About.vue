<template lang="jade">
  .About_component
    .fb-comments(data-href='https://sweetkitchen.github.io/sweetkitchen/#/topic/1742272759383174_1892967430980372', data-numposts='5')


</template>

<script>
// import data from '../../'
export default {
  name: 'About',
  data () {
    return {

    }
  },
  methods: {
    write: function(){

      //console.log( JSON.parse(JSON.stringify(this.member)) );
      //var m=JSON.parse(JSON.stringify(this.member));
      // $.ajax({
      //       url: '../../static/databace.json',
      //       type: 'post',
      //       // dataType: 'json',
      //       data: m,
      //       success: function (data) {
      //           // $('#target').html(data.msg);
      //           console.log(data)
      //       },

      //   });
      $.post('../../static/databace.json', {
            robot:"123",
            usertype:"0",
            userid:"22",
            shopid:"4",
            transToCondition:4
        });
    },

    json: function (){
       //console.log("succful")
       var vm = this;
        // $.getJSON(data, function (json) {
        //     //vm.json = json;
        //     console.log(json)
        // });
        //console.log(data);
        $.ajax({
        url: '../../static/data.json',
        complete: function (data) {
            vm.musics = data
            // readjson=
            //JSON.stringify(readjson,replacer,2)
            // console.log(JSON.parse(JSON.stringify(vm.musics)));
        }
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
.About_component{
  min-height:94vh;
}
.fb-comments{
  margin-top: 3em;
}

</style>
