console.log(new Date().getFullYear() + " Javascript sourced");
console.log('JS Sourced');
$(function(){
console.log('jQuery Sourced');


// TODO: function for ajax GET

// $.ajax({
// type: 'GET',
// url: '/pets',
// success: function(response) {
//     console.log('/pets response: ', response);
// },
// error: function(error){
//   console.log('Ajax-GET failed', error);
// }
// }) // NOTE: FOR: Ajax-GET



//////////////// NOTE: Owner Name
// function for ajax POST
$('#registerButton').on('click', function(){
  console.log('#registerButton clicked');
var newOwner = {
  firstName: $('#ownerFirstNameInput').val(),
  lastName: $('#ownerLastNameInput').val()
}
$.ajax({
  type: 'POST',
  url:'pets/registration',
  data: newOwner,
  success: function(response){
    console.log('ajax-registration: ', response);
  },
  error: function(response){
    console.log('ajax-registration: ', response);
  }
})
}); // NOTE: FOR: $('#registerButton').on('click', function(){
//////////////// NOTE: Pet Details
// $('#addPetButton').on('click', function(){
//   console.log('#addPetButton clicked');
// var newPet = {
//   pet: $('petNameInput').val(),
//   breed: $('petBreedInput').val(),
//   color: $('petColorInput').val()
// }
// $.ajax({
//   type: 'POST',
//   url: '/addPet',
//   data: newPet;

// )} // NOTE: FOR: $('#addPetButton').on('click', function(){
// // TODO: function for ajax POST
// // $.ajax({
// //   type: 'POST'
// //
// //
// // })
//
}); // NOTE: FOR: $(function(){
