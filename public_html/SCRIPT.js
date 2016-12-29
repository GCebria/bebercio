/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function eligeUno(){
var selected = [];
$('#checkboxes input:checked').each(function() {
    selected.push($(this).attr('value'));
    
});
function numeroRandom(){
 var randomNumber = Math.floor(Math.random()*((selected.length-1)+1));
 console.log(randomNumber);
 
 return randomNumber;
}
var r =confirm(selected[numeroRandom()]);

if (r== true){
    setTimeout(eligeUno, 5000);
}

}
var opciones= [];

function empieza(){
    function numeroRandom(){
 var randomNumber = Math.floor(Math.random()*((opciones.length-1)+1));
 console.log(randomNumber);
 
 return randomNumber;
}
var r =confirm(opciones[numeroRandom()]);

if (r== true){
    setTimeout(empieza, 5000);
}
}

function anadeNorma(){
    var bla = $('#norma').val();
    opciones.push(bla);
}