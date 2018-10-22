$(document).ready(function() {
  var present = new Date();
  var dd = present.getDate();
  var month = present.getMonth();
  var yyyy = present.getFullYear();
  
  if (dd < 10) {
    dd = "0" + dd
  }
  
  var nameMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  present = nameMonths[month] + " " + dd + "," + yyyy;
  $("#inputDate").attr("placeholder", present)
  console.log(present)
  
  });

let submit = function(data) {
    const response = await fetch(url);
    // data object containing data payload
    const data = await response.json();
    $(".borderBox").innerText = JSON.stringify(data); // or whatever data you need from the data object
}

$("#submitDate").submit(function(i) {
  i.preventDefault();
  var convertInput = (!$("#inputDate").val()) ? $("#inputDate").attr("placeholder") : $("#inputDate").val()
  const response = await fetch(window.location.href + convertInput);
  const data = await response.json();
  document.getElementsByClassName('borderBox')[0].innerText = JSON.stringify(data);
});
 

