
// Behaviour of features Buttons
var noOfButtons = $(".four-btn").length;
$(".features .feature-2, .feature-3, .feature-4").hide();

for (var i = 0; i < noOfButtons; i++) {
  document.querySelectorAll(".four-btn")[i].addEventListener("click", function() {
    $(".four-btn").removeClass("add-color");
    $(".four-btn").addClass("hover-btn");
    $(".four-btn").removeClass("active-btn");
    addStyleByClick(this.id);
  });
}

function addStyleByClick(btnId) {
  $("#" + btnId).addClass("active-btn");
  $("#" + btnId).removeClass("hover-btn");
  $("#" + btnId).addClass("add-color");
  $(".features .feature-1, .feature-2, .feature-3, .feature-4").hide();
  var noOfFeature=btnId[4];
  if (noOfFeature == 1) {
    $(".features .feature-1").show();
  }
  else if (noOfFeature == 2) {
      $(".features .feature-2").show();
  }
  else if (noOfFeature == 3) {
      $(".features .feature-3").show();
  }
  else if (noOfFeature == 4) {
      $(".features .feature-4").show();
  }
}
