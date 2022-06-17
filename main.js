function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

Webcam.set({
    width:500,
    height:400,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");