var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 block_obj="";

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
      block_obj=Img;
      block_obj.scaleToWidth(700);
      block_obj.scaleToHeight(500);
      block_obj.set({
        top: 0,
        left: 0
      });
      canvas.add(block_obj);

    });
	
}

function playSound(){
	x.play();
}
