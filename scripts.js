function newItem() {
  // Adding items to the list
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  //   Crossing out item from list
  li.on("click", function () {
    li.addClass("strike");
  });

  // Deleting item from list

  // Chaning order of the list
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
