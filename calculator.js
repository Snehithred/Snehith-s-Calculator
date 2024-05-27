const display=document.getElementById("display");

function addinput(input){
    display.value+=input;
   

}

function result(){
    try{

        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }


}


function clearDisplay(){
    display.value="";
  
}
