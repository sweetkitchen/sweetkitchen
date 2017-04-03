import axios from 'axios'
export default {

      
    getAllTopics: function() {



        function getTopics() {
            var str
            str=axios.get('../../static/data.json')
            .then(function (response) {
                return response
                // console.log(response);
            })
            .catch(function (error) {
                // console.log(error);
            }); 
            return str;   

        } 
        return getTopics()

    },   
}

    //    function getTopics(categoryUri, page)  {

    //     var str;
    //     return axios.get('../../static/data.json')
    //     .then(function (response) {
             
    //          console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
        
