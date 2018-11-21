console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: $( '#nameIn' ).val( ),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      readyForTransfer: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val(),
    };
    console.log( koalaToSend );
    // check to make sure inputs are valid before sending to server
    if (koalaToSend.name == '' || koalaToSend.age == '' || koalaToSend.gender == '' || koalaToSend.readyForTransfer == '' ){
      alert( 'One or more inputs are invali.  Please try again.' );
    }
    else{
      // call saveKoala with the new obejct
      saveKoala(koalaToSend);
    }
  }); 
}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    type: 'GET',
    url: '/koalas'
  }).then(function(response){
    console.log('GET response from server', response);
    $('#viewKoalas').empty();
    for(let koalas of response ) {
      let koalaItem = $(`<tr>
      <td>${koalas.name}</td>
      <td>${koalas.age}</td>
      <td>${koalas.gender}</td>
      <td>${koalas.readyForTransfer}</td>
      <td>${koalas.notes}</td>
      <td><button class="deleteBtn">Delete Me</button></td></tr>`);

      $('#viewKoalas').append( koalaItem);
    }
  }).catch(function(error){
    console.log('error in GET', error);
    
  })
} // end getKoalas


function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
  
}

