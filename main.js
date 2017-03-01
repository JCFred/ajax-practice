document.querySelector('#testP').textContent ="working"

//search by id
$('#idSearch').click(function(){
  let pokeId = $('#idInput').val();
  var $query = $.get('http://pokeapi.co/api/v2/pokemon/' + pokeId);
  $query.done((data) => {
    if($query.status !== 200){
      return;
    }
    console.log(data);
    displayPokemon(data);
  })
})

//search by name
$('#nameSearch').click(function(){
  let pokeName = $('#nameInput').val();
  var $query = $.get('http://pokeapi.co/api/v2/pokemon/' + pokeName);
  $query.done((data) => {
    if($query.status !== 200){
      return;
    }
    console.log(data);
    displayPokemon(data);
  })
})


function displayPokemon(poke){
  $('#resultSection').empty();
  $('#resultSection').append("<p>name: " + poke.name + "</p>");
  $('#resultSection').append("<p>id: " + poke.id + "</p>")
  $('#resultSection').append("<img src='" + poke.sprites.front_default + "'>");
  if(poke.types.length <2){
    $('#resultSection').append("<p>type: " + poke.types[0].type.name + "</p>");
  } else {
    $('#resultSection').append("<p>types: " + poke.types[0].type.name + " and " + poke.types[1].type.name + "</p>");
  }
}
