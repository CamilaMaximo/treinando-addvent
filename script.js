



function changeImage(){
  var image = document.getElementById("image");
  if(image.src === "https://pngfre.com/wp-content/uploads/You-Tube-1-1024x439.png"){
      image.src = "https://www.pngall.com/wp-content/uploads/13/Logo-Youtube-PNG-Free-Image.png";
  }
  else if(image.src === "https://www.pngall.com/wp-content/uploads/13/Logo-Youtube-PNG-Free-Image.png"){
      image.src = "https://pngfre.com/wp-content/uploads/You-Tube-1-1024x439.png";
  }
}