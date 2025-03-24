function newImage() {
    var image = document.getElementById("Footimage");
   //   console.log(image.src); 
    if (image.src.includes("image2")) {
       image.src = "image1.jpg";
    } else {
       image.src = "image2.jpg";
    }
}
