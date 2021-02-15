function myFunction() {

    var x = document.getElementById("navbar");
  
    if (x.className === "top") {
      x.className += " responsive";
    } 
  
    else {
      x.className = "top";
    }
  }