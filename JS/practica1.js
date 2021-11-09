function $(id){
	return document.getElementById(id); // Obtencion de elemento por retorno id

} // Fin de funcion acceso a elemento


var tabla=$("tabla");

class Juguete{
	constructor(modelo,articulo,marca,existencia, costo,iva){
		this.modelo=modelo;
		this.articulo=articulo;
		this.marca=marca;
		this.existencia=existencia;
		this.costo=costo;
		this.iva=iva;
	}

	jugueteEntry(){



tabla += "<tr>";

tabla += "<td  bgcolor='red'>" + contador + "</td>";
tabla += "<td  bgcolor='red'>" + this.modelo +"</td>";
tabla += "<td  bgcolor='red'>" + this.articulo +"</td>";
tabla += "<td bgcolor='red'>" + this.marca + " </td>";
tabla += "<td  bgcolor='red'>" + this.existencia + "</td>";
tabla += "<td  bgcolor='red'> "+ this.costo + "</td>";
tabla += "<td  bgcolor='red'> "+ this.iva + "</td>";

tabla += "</tr>";

return tabla;


/*
return"<div class = 'row'>" + 'modelo' + 'articulo' + 'marca' + 'existencia' + 'costo' +"</div>"  
 +"<div class ='row'> " +this.modelo+ ", " +this.articulo+ ", " +this.marca+ ", " +this.existencia+ ", " +this.costo+ "</div>";
*/









	}
}

    var contador=0;

//*******************************

var jugueteList=new Array();
function addJuguete(form){


var modelo;
var articulo;
var marca;
var existencia; 
var costo;
var iva;

modelo=form.elements['modelo'].value;
articulo=form.elements['articulo'].value;
existencia=form.elements['existencia'].value;
costo=form.elements['costo'].value;
iva=form.elements['iva'].value;
marca=form.elements['marca'].value;



    jugueteList.push(new Juguete(modelo,articulo,marca,existencia,costo,iva));
    displayList();

    contador++;
}




function displayList(){

	for (var i = 0; i < jugueteList.length; i++) {

		tabla+=jugueteList[i].jugueteEntry();

	}
	
	document.getElementById("tabla").innerHTML=tabla;
frm.reset();

} 


function remov(b){
   var a= b.parentNode.parentNode.removeChild(b.parentNode);
console.log(a);
    for (var i = 0; i < jugueteList.length; i++) {

	if (a==jugueteList[i]) {
		alert(jugueteList());
		jugueteList.remove();
	}
		
	}

}





function cancelar(){


frm.reset();


}




function llenarText(){


 tabla = "<table class='uno' id='tabla'>";
tabla += "<tr >";

tabla += "<td  bgcolor='red'>" + "<b>N°</b>" + "</td>";
tabla += "<td  bgcolor='red'>" + "<b>Modelo</b>" +"</td>";
tabla += "<td  bgcolor='red'>" + "<b>Articulo</b>" +"</td>";
tabla += "<td bgcolor='red'>" + "<b>Marca</b>" + " </td>";
tabla += "<td  bgcolor='red'>" + "<b>Existencia</b>" + "</td>";
tabla += "<td  bgcolor='red'>" + "<b>Costo</b>" + "</td>";
tabla += "<td  bgcolor='red'>" + "<b>IVA</b>" + "</td>";
tabla += "</tr>";


}


function llenar(form){


var modelo;
var articulo;
var marca;
var existencia; 
var costo;
var iva;

modelo=form.elements['modelo'].value;
articulo=form.elements['articulo'].value;
existencia=form.elements['existencia'].value;
costo=form.elements['costo'].value;
iva=form.elements['iva'].value;
marca=form.elements['marca'].value;


}
llenarText();