let element = $("#my-class");

let inputs = $("#inputs");
inputs.addClass("my-class");

let list = $("#list");
list.append("<li>new item</li>");

let li = $("<li></li>");
li.append("li");

let button = $("#button");
$("#button").on("click", function (event) {
  li.append(inputValue);
});
"#button".off("click");

let inputValue = $("#inputs").val();
li.append(inputValue);

let newElement = $('<div class= "new-class"> Content is here!</div>');
$("body").append(newElement);

inputs.show();
$("body").append(inputs);
