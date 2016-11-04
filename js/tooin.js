$(document).ready(function(){

function id(element){return document.getElementById(element);};
  
$('#list li').click(function(){
    var type=this.value;
    myForm="";
    var Button="<button id='work'>Рассчитать</button>";
    switch(type){
        case 1:myForm="<p>Диаметр в мм.</p><p><input type='text' id='cluch1'/></p>";break;
        case 2:myForm="<p>Номер шестигранника под ключ</p><p><input type='text' id='cluch1'/></p>";break;
        case 3:myForm="<p>Толщина листа в мм.</p><p><input type='text' id='cluch1'/></p><p>Длинна в метрах.</p><p><input type='text' id='cluch2'/></p><p>Ширина в метрах.</p><p><input type='text' id='cluch3'/></p>";break;
        case 4:myForm="<p>Внешний диаметр в мм.</p><p><input type='text' id='cluch1'/></p><p>Толщина стенки в мм.</p><p><input type='text' id='cluch2'/></p>";break;
        case 5:myForm="<p>Сторона А в мм.</p><p><input type='text' id='cluch1'/></p><p>Сторона Б в мм.</p><p><input type='text' id='cluch2'/></p><p>Толщина стенки в мм.</p><p><input type='text' id='cluch3'/></p>";break;
        default:"";break;
    }
    $("#calculator-form").html(myForm+Button);
});
    
    
    
    
    
    
    
    
    
});