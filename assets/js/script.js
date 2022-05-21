//Recordar sacar comillas de lienas de codigo write//

document.write ('<div class=container mt-3>')
document.write('<img class=float-right src=https://desafiolatam.com/assets/home/logo-academia-bla-790873cdf66b0e681dfbe640ace8a602f5330bec301c409744c358330e823ae3.png alt=imagen logo>')
document.write('<h1>Notas Finales</h1>')
//preguntas datos iniciales//
var nombre = prompt('Ingrese su nombre')
var apellido = prompt('Ingrese su apellido')
var carrera = prompt('Carrera')

//aqui va el encabezado info // agregar preguntas//
document.write('<dl class="row" >')
document.write('<dt class="col-2 p-0" >Nombre:</dt>')
document.write('<dd class="col-10"> '+nombre+' '+apellido+'</dd>')
document.write('<dt class="col-2 p-0">Carrera</dt>')
document.write('<dd class="col-10">'+carrera+'</dd></dl>')
// pregunta notas y HTML //
var n1 =prompt ('Ingrese nota 1 [HTML]')
var n2 =prompt ('Ingrese nota 2 [HTML]')
var n3 =prompt ('Ingrese nota 3 [HTML]')
//calculo promedio HTML//
var proHTML = (+n1 + +n2 + +n3) / 3;
//Preguntas notas CSS//
var c1 =prompt('Ingrese nota1 [CSS]')
var c2 =prompt('Ingrese nota2 [CSS]')
var c3 =prompt('Ingrese nota3 [CSS]')
//calculo promedio CSS//
var csprom =(+c1+ +c2 + +c3)/3;

//Preguntas Javascrip//
var j1 =prompt('Ingrese nota1 [JavaScrip]')
var j2 =prompt('Ingrese nota2 [JavaScrip]')
//calculo nota 3 con la cosntante del minimo 4 para aprobar//
var j3 = +12 -(+j1+ +j2);

//tabla que muestra los datos ingresados //
document.write('<table class="table">')
document.write('<thead class="thead-dark">')
document.write('<tr>')
document.write('<th scope="col">Ramo</th>')
document.write('<th scope="col">Nota 1</th>')
document.write('<th scope="col">Nota 2</th>')
document.write('<th scope="col">Nota 3</th>')
document.write('<th scope="col">Promedio</th></tr></thead>')
document.write('<tbody>')
document.write('<tr>')
// RAMO HTML//
document.write('<th scope="row">HTML</th>')
document.write('<td>'+n1+'</td>')
document.write('<td>'+n2+'</td>')
document.write('<td>'+n3+'</td>')
document.write('<td> '+proHTML.toFixed(1)+' </td></tr>')
document.write('<tr>')
// RAMO CSS//
document.write('<th scope="row">CSS</th>')
document.write('<td>'+c1+'</td>')
document.write('<td>'+c1+'</td>')
document.write('<td>'+c1+'</td>')
document.write('<td>'+csprom.toFixed(1)+'</td></tr>')
document.write('<tr>')
// RAMO JAVASCRIPT//
document.write('<th scope="row">JavaScript</th>')
document.write('<td>'+j1+'</td>')
document.write('<td>'+j2+'</td>')
document.write('<td>-</td>')
document.write('<td>-</td></tr></tbody></table>')
//texto aprovacion consulta //
document.write('<p class=text-left> Para aprobar el ramo [JavaScrip] con nota 4, necesita obtener un '+j3.toFixed(1)+' en la nota 3</p></div>')
