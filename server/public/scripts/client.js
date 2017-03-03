console.log(new Date().getFullYear() + " Javascript sourced");
console.log('JS Sourced');
$(function(){
console.log('jQuery Sourced');

// SAM
getAndDisplayOwnersAndPets();
function getAndDisplayOwnersAndPets(){
  $.ajax({
  type: 'GET',
  url: '/pets/data',
  success: function(response) {
      console.log(response);
      var infoToAppend = '';
      for (var i = 0; i < response.length; i++) {
        var inOrOut = 'IN'
        if (response[i].check_in !== null){
          inOrOut = 'OUT';
        };
        infoToAppend += '<tr data-petID="' + response[i].pet_id +'">' +
                        '<td>' + response[i].first_name + ' ' + response[i].last_name + '</td>' +
                        '<td><input value="' + response[i].name + '" class="petsDisplayName"></td>' +
                        '<td><input value="' + response[i].breed + '" class="petsDisplayBreed"></td>' +
                        '<td><input value="' + response[i].color + '" class="petsDisplayColor"></td>' +
                        '<td><button class="updateButton">GO</button></td>' +
                        '<td><button class="deleteButton">GO</button></td>' +
                        '<td><button class="checkInOutButton">'+ inOrOut + '</button></td></tr>';

      };
      $('#petsDisplayTable').append(infoToAppend)
  },
  error: function(error){
    console.log('Ajax-GET failed', error);
  }
  })
} //end get pets and owners function



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

//END TOM SECTION
}); // NOTE: FOR: $(function(){
