import '../styles/index.scss';
import Axios from 'axios';

// jquery
// $.get("https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json",
//     function (response) {
        
//     },
//     "dataType"
// );
/*
Axios.get("https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json")
    .then(function (response){
        //handle succes
        console.log(response);
    })
    .catch(function (error){
        //handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
      });
*/
// function herladen (){

// }


setInterval (herladen, 10000);

function herladen()
{
    Axios.get("/public/fallback.json")
        .then(function (response){
        checkJson(response.data);
      
    });
}

function checkJson(data){

}

//   

//   if (windowlocation != url){
//       setItem
//   } 

//   );

