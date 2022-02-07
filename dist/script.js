//global variable for signals
var gens=document.getElementById("GenS");
var gas=document.getElementById("GaS");
var gate1=document.getElementById("Gate1");
var gate2=document.getElementById("Gate2");
var gens2=document.getElementById("GenS2");
var gas2=document.getElementById("GaS2");
var Sgens=gens.value;
var Sgas=gas.value;
var Sgate1=gate1.value;
var Sgate2=gate2.value;
var Sgens2=gens2.value;
var Sgas2=gas2.value;

function RailLink() {
  var link=document.getElementById("raillink");
 var L1=link.value;
  var L2=L1.indexOf("0");
  var L3=L1.indexOf("O");
 var dispL=document.getElementById("CL");
 dispL.style.backgroundColor="white"
var dispL1=dispL.getContext("2d");
dispL1.font="14px TimesNewRoman";
dispL1.fillStyle="black";
dispL1.clearRect(0,0,dispL.width,dispL.height); 
 if (L2==-1) {
   dispL1.fillText("The train link is safe",10,30);
 }
else if (L2>-1) {
  dispL1.fillText("Emergency brakes on as the",10,15);
  dispL1.fillText("Coaches got seperated with",10,30);
 dispL1.fillText("the locomotive from/ near the coach" +L2,10,45);
}
  else {
   dispL1.fillText("Please enter a valid input",10,30);
    
  }
}

function RailGate() {
if (Sgas2="#00FF00")
  {
    var a=confirm("sensor feed after certain timer setting done(if gates closed press ok else press cancel )");
    if (a==true) {
  GatesRed();      
    }
     else { GatesGreen();document.getElementById("denied").innerHTML = "ROUTE DENIED";}
  }
  if ((Sgas="#00FF00"))
  {
    var b=confirm("sensor feed after certain timer setting done(if gates closed press ok else press cancel )");
    if (b==true) {
  GatesRed();    
    }      
    else { GatesGreen();document.getElementById("denied").innerHTML = "ROUTE DENIED";}
 
  }
}
function GatesRed()
{
 Sgate1="#FF0000";
 Sgate2="#FF0000";
  if ((Sgate1="#FF0000") && (Sgate2="#FF0000")) 
    {
      gate1.value="#FF0000";
      gate2.value="#FF0000";
      gas.value="#00FF00";
      gens.value="#00FF00";
      gas2.value="#00FF00";
      gens2.value="#00FF00";
      
    }
}

function GatesGreen() {
  gate1.value="#00FF00";
  gate2.value="#00FF00";
  if ((Sgate1="#00FF00") && (Sgate2="#00FF00")) 
  {
    gas.value="#FF0000";
    gas2.value="#FF0000";
  }
  if ((Sgas="#FF0000") ) 
  {
    gens.value="#FFFF00";
  }
if  (Sgas2="#FF0000") {
  gens2.value="#FFFF00";
}
}
function Reset(){
document.getElementById("denied").innerHTML = " "; GatesGreen();
}