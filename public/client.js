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

$("#submitDate").submit(function (i) {
  i.preventDefault();
  var convertInput = (!$("#inputDate").val()) ? $("#inputDate").attr("placeholder") : $("#inputDate").val()
  var tar = window.open(window.location.href+convertInput, "_blank");
  tar.focus();
 
  });
 
