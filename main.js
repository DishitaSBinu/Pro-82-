var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
var canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
var color="pink";
width=1;

canvas.addEventListener("mousedown",my_mousedown);
functionmy_mousedown(e)
{

color=document.getElementById("color").value;
width=document.getElementById("width").value;
mouseEvent=mouseDown;

}

canvas.addEventListener("mousemove",my_mousemove);
functionmy_mousemove(e)
{

current_position_x=e.clientX-canvas.offsetLeft;
current_position_y=e.clientY-canvas.offsetTop;


}

if(mouseEvent=="mouseDown")
{

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(current_position_x , current_position_y);

}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{

mouseEvent="mouseUP";


}


canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{

mouseEvent="mouseleave";


}
