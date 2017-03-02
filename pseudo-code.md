console.log(new Date().getFullYear() + " Javascript sourced");
console.log('JS Sourced');
$(function(){
console.log('jQuery Sourced');


// TODO: function for ajax GET

$.ajax({
type: 'GET',
url: /namesuccess: function(response) {
    console.log('ajax-GET response: ', response);
},
error: function(error){
  console.log('Ajax-GET failed', error);
}
}) // NOTE: FOR: Ajax-GET



// TODO: function for ajax POST
$.ajax({
  type: 'POST',
  url: '/FOLDER',
  data: NAME,

})



}) // NOTE: FOR: $(function(){
