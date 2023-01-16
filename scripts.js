let element = $("#my-class");

let inputs = $("#input");
inputs.addClass("my-class");

let list = $("#list");
list.append("<li>new item</li>");

let li = $("<li></li>");
let inputValue = $("#input").val();
li.append(inputValue);

let button = $("#button");
$("#button").on("click", function (event) {
  li.append(inputValue);
});
"#button".off("click");

let newElement = $('<div class= "new-class"> Content is here!</div>');
$("body").append(newElement);

inputs.show();
$("body").append(input);
