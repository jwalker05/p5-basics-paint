var newWidth = 40;
var newHeight = 40;

//setup function executes once
function setup(){
    createCanvas(600,400);
    background(137, 237, 160);
    
    
  
}

//draw function loops forever
function draw(){
        // background(137, 237, 160);
        if(mouseIsPressed){
             noStroke();
            fill(103, 30, 109, 120);
            rect(mouseX,mouseY,newWidth,newHeight);
            
        
            
        }
            
          
}