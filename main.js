var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

plr_x = 10;
plr_y = 10;

var plr_object = "";

function plr_update()
{
    fabric.Image.fromURL("player.png",function(Img){
        plr_object = Img;
        
        plr_object.scaleToWidth(150);
        plr_object.scaleToHeight(140);
        plr_object.set({
            top:plr_y,
            left:plr_x
        });

        canvas.add(plr_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:plr_y,
            left:plr_x
        });
        canvas.add(block_image_object);
    });
}