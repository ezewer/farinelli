// JavaScript Document
window.onload =mostrarMenu();
function mostrarMenu(){
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("step2").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("POST","http://www.swci.com.ar/restoapp/server/includes/menu.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("cod=seg123");
}
function agregarAlChanguito(id){
var ses_id = window.sessionStorage.getItem("secion");
var cant = document.getElementById("pr_"+id).value;
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    //document.getElementById("Accordion1").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("POST","http://www.swci.com.ar/restoapp/server/includes/agregar_al_carrito.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("pr_id="+id+"&ses_id="+ses_id+"&cant="+cant);
}