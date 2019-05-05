/* global $ */
$(document).ready(function(){
  $.getJSON("/api/todos")
  .then(addTodos)

  $('#todoInput').keypress(function(event){
    if(event.which == 13) {
      createTodo();
    }
  });

  $('.list').on('click', 'li', function(){
    updateTodo($(this));
  })

  $('.list').on('click', 'span', function(e){
    e.stopPropagation();
    removeTodo($(this).parent());
  })
});

function addTodos(todos) {
  //add todos to page here
  todos.forEach(function(todo){
    addTodo(todo);
  });
}


function addTodo(todo){
  var newTodo = $('<li class="task">'+todo.name +' <span>X</span></li>');
  newTodo.data('id', todo._id);
  newTodo.data('completed', todo.completed);
  if(todo.completed){
    newTodo.addClass("done");
  }
  $('.list').append(newTodo);
}

function createTodo(){
  //send request to create new todo
  var name = $('#field1').val();
  var system = $('#field2').val();
  var beds = $('#field3').val();
  var census = $('#field4').val();
  var outrev = $('#field5').val();
  var readRate = $('#field6').val();
  // var fte = $('#field7').val();
  // var laborCost = $('#field8').val();
  // var retRev = $('#field9').val();
  // var cash = $('#field10').val();
  // var ratio = $('#field11').val();
  // var dToC = $('#field12').val();
  $.post('/api/todos',{name: name, system: system, beds: beds, census: census, outrev: outrev, readRate: readRate})
  .then(function(newTodo){

 // stuff , system: system, beds: beds, census: census, outrev: outrev, readRate: readRate, fte: fte, laborCost: laborCost, netRev: netRev, cash: cash, ratio: ratio, dToC: dToC


    $('#field1').val('');
    $('#field2').val('');
    $('#field3').val('');
    $('#field4').val('');
    $('#field5').val('');
    $('#field6').val('');
    // $('#field7').val('');
    // $('#field8').val('');
    // $('#field9').val('');
    // $('#field10').val('');
    // $('#field11').val('');
    // $('#field12').val('');
    addTodo(newTodo);
  })
  .catch(function(err){
    console.log(err);
  })
}

function removeTodo(todo){
  var clickedId = todo.data('id');
  var deleteUrl = '/api/todos/' + clickedId;
  $.ajax({
    method: 'DELETE',
    url: deleteUrl
  })
  .then(function(data){
    todo.remove();
  })
  .catch(function(err){
    console.log(err);
  })
}

function updateTodo(todo){
  var updateUrl = '/api/todos/' + todo.data('id');
  var isDone = !todo.data('completed');
  var updateData = {completed: isDone}
  $.ajax({
    method: 'PUT',
    url: updateUrl,
    data: updateData
  })
  .then(function(updatedTodo){
    todo.toggleClass("done");
    todo.data('completed', isDone);
  })
}
