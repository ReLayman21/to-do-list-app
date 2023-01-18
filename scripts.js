function newItem() {
  // Adding items to the list
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === " ") {
    alert("Please enter item to To Do list");
  } else {
    let list = $("#list");
    list.append(li);
  }
  //   Crossing out item from list
  function crossOut() {
    li.toggleClass("strike");
  }
  // Removes crossed out line from item
  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  // Deleting item from list
  let deleteButton = $("<deleteButton></deleteButton>");
  deleteButton.append(document.createTextNode("X"));
  li.append(deleteButton);

  deleteButton.on("click", deleteItem);
  function deleteItem() {
    li.addClass("delete");
  }

  // Chaning order of the list
  $("#list").sortable();
}

//   let button = $("#button");
//   $("#button").on("click", function (event) {
//     li.append(inputValue);
//   });
//   "#button".off("click");

//   let newElement = $('<div class= "new-class"> Content is here!</div>');
//   $("body").append(newElement);

//   inputs.show();
//   $("body").append(input);
// }

//   $('input').each(function (i)){
//     let inputValue= $(this).val();
//     let inputName = $(this).attr('name');
//     if(inputValue().length <1){
//         alert("Please add item to To Do list!")
//     }
//   }
