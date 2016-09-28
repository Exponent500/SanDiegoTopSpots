
//sets the settings for all toaster alerts used
toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": true,
  "progressBar": false,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "100",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

function initMap() {
  //creates a new map and assigns it to the div that has an ID of map
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8 //zoom level that map is set to when loaded
  });


  // //creates a new marker and assigns it to  specific lat/lon location on a map
  // var marker = new google.maps.Marker({
  //   position: {lat: -25.363, lng: 131.044},
  //   map: map,
  //   title: 'Hello World!'
  // });


//Wraps entire jQuery to make sure no DOM manipulation is done until the DOM is rendered
$(document).ready(function(){

var locationHyperlink;

  /* iterates through topspots.json and uses that data to create an HTML table */
  $.getJSON("topspots.json", function(result){
    $(result.topspots).each(function(index, value){
      locationHyperlink = "https://www.google.com/maps?q=" + value.location[0] + "," + value.location[1];
      var latLng = {lat: value.location[0], lng: value.location[1]};
      //adds the google maps markers
      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: 'Hello World!'
      })
      //dynamically create the HTML table rows
      $("#table-data").append("<tr><td>" + value.name + "</td><td>" + value.description + "</td><td><a class='btn btn-primary' href='" + locationHyperlink + "'>Open In Google Maps</a></td></tr>");
    });
  });
});
}