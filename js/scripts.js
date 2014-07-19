$(document).ready(function() {

  $("form#triangle").submit(function(event) {

    event.preventDefault();

    var inputSide1 = parseInt($("input#side1").val());
    var inputSide2 = parseInt($("input#side2").val());
    var inputSide3 = parseInt($("input#side3").val());

    if (!inputSide1 || !inputSide2 || !inputSide3) {
      alert("All three sides must be input; try again!");
    } else if ((inputSide1 + inputSide2 < inputSide3) ||
               (inputSide1 + inputSide3 < inputSide2) ||
               (inputSide2 + inputSide3 < inputSide1)) {
      alert("Input sides do not form a triangle; try again!")
    } else {

      var triangle = {side1: inputSide1,
                      side2: inputSide2,
                      side3: inputSide3,
                      whatAmI : function () {
                        if ((this.side1 === this.side2) && (this.side2 === this.side3)) { // all 3 sides equal}
                          return "equilateral";
                        } else if ((this.side1 === this.side2) || (this.side1 === this.side3) ||
                                   (this.side2 === this.side3)) { // 2 sides equal
                          return "isoceles";
                        } else {
                          return "scalene";
                        }
                      }};
    };

    var triangleType = triangle.whatAmI();

    $("input#side1").val("");
    $("input#side2").val("");
    $("input#side3").val("");

    $("#" + triangleType + " ul").append("<li>" + triangle.side1 + ", " + triangle.side2 + ", "
                                                + triangle.side3 + "</li>");


  });
});
