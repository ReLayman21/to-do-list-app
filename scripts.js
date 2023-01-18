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
