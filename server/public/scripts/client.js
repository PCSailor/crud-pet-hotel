console.log(new Date().getFullYear() + " Javascript sourced");
console.log('JS Sourced');
$(function(){
console.log('jQuery Sourced');

// SAM

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


//END SAM SECTIOn
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
});
//PHIL SECTION

// NOTE: FOR: $('#registerButton').on('click', function(){
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

//END PHIL SECTION

//KRIS SECTION


//END KRIS SECTION

//TOM SECTION


// appends <option> elements for the drop down for each owner record returned from the server

$.ajax({
    type: "GET",
    url: "/pets/getOwnerNames",
    success: function(response){
      for (var i = 0; i < response.length; i++) {
        $('#ownersDropdown').append('<option data-petId="'+ response[i].id+'">'+
        response[i].first_name +
        ' '+ response[i].last_name+'</option>'
      } // end FOR loop
    }//end suxcess function
  });//end ajax for /pets/getOwnerNames





//END TOM SECTION
}); // NOTE: FOR: $(function(){
