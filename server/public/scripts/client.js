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


// NOTE: Owner Name
// TODO: function for ajax POST
var owner {
  firstName: $('').val();
  lastname: $('').val();
}
$.ajax({
  type: 'POST',
  url: '/registration',
  data: owner,
  success: function(response){
    console.log('ajax-registration: ', response);
  }
  error: function(error){
    console.log('ajax-registration: ', console.error(););
  }
})

// NOTE: Pet Details
var addPet = {
  pet: $('').val();
  breed: $('').val();
  color: $('').val();

}
$.ajax({
  type: 'POST',
  url: '/addPet',
  data: addPet;
})




}) // NOTE: FOR: $(function(){
