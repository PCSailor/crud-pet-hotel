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
  $('.updateButton').on('click', function(){
    var petNameToSave = $(this).parent().prev().prev().prev().find('.petsDisplayName').val();
    var petBreedToSave = $(this).parent().prev().prev().find('.petsDisplayBreed').val();
    var petColorToSave = $(this).parent().prev().find('.petsDisplayColor').val();
    var petID = $(this).parent().parent().data('petID');

    var petUpdateObject = {
      petName: petNameToSave,
      breed: petBreedToSave,
      color: petColorToSave,
      petID: petID
    };
    $.ajax({
      type: 'PUT',
      url:'pets/updatePet' + petUpdateObject,
      data: petUpdateObject,
      success: function(response){
        console.log('ajax-registration: ', response);
      },
      error: function(response){
        console.log('ajax-registration: ', response);
      }
    })
  }); // end of update button click listener

  $('.deleteButton').on('click', function(){
    var petIDToDelete = $(this).parent().parent().data('petID');
    $.ajax({
      type: 'DELETE',
      url:'pets/deletePet' + petIDToDelete,
      success: function(response){
        console.log('ajax-registration: ', response);
      },
      error: function(response){
        console.log('ajax-registration: ', response);
      }
    })
  }); // end of delete button click listener


  //END KRIS SECTION

  //TOM SECTION

  //END TOM SECTION
}); // NOTE: FOR: $(function(){
