$(document).ready(function(){

function id(element){return document.getElementById(element);};
var type=0;
//Выбор типа  
$('#list li').mouseup(function(){
    $('#calculator-result').html('');
    type=this.value;
    myForm="";
    var Button="<button type='submit' id='work' class='btn btn-default btn active'>Расчитать</button>";
    switch(type){
        case 1:myForm='<div class="input-group"><input type="text"  id="cluch1" class="form-control" placeholder="Введите диаметр" aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2">миллиметр</span></div>';break;
        case 2:myForm='<div class="input-group"><input type="text"  id="cluch1" class="form-control" placeholder="Номер шестигранника под ключ" aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2">номер</span></div>';break;
        case 3:myForm='<div class="input-group"><input type="text"  id="cluch1" class="form-control" placeholder="Толщина листа" aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2">миллиметр</span></div><div class="input-group"><input type="text"  id="cluch2" class="form-control" placeholder="Длинна листа" aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2">метр</span></div><div class="input-group"><input type="text"  id="cluch3" class="form-control" placeholder="Ширина листа" aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2">метр</span></div>';break;
        case 4:myForm='<div class="input-group"><input type="text"  id="cluch1" class="form-control" placeholder="Внешний диаметр" aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2">миллиметр</span></div><div class="input-group"><input type="text"  id="cluch2" class="form-control" placeholder="Толщина стенки" aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2">миллиметр</span></div>';break;
        case 5:myForm='<div class="input-group"><input type="text"  id="cluch1" class="form-control" placeholder="Сторона А" aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2">миллиметр</span></div><div class="input-group"><input type="text"  id="cluch2" class="form-control" placeholder="Сторона Б" aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2">миллиметр</span></div><div class="input-group"><input type="text"  id="cluch3" class="form-control" placeholder="Толщина стенки" aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2">миллиметр</span></div>';break;
        default:myForm="";break;
    }
    $('#list li').removeClass('activeelement');
    $(this).addClass('activeelement');
    $("#calculator-form").html('<form action="#" method="get">'+myForm+Button+'</form>');
    $('#cluch1').focus();
    
    //Расчёт
    $('#work').click(function(){
    var result=new Array;
    var density=7.85;var pi=Math.PI;
    var number1=0;var number2=0;var number3=0;
    switch(type){
        case 1:number1=parseData(id('cluch1').value);result[0]='Вес 1 метра ';result[1]=number1*number1*density*pi/4000;break;
        case 2:number1=parseData(id('cluch1').value);result[0]='Вес 1 метра ';result[1]=number1*number1*density*0.87/1000;break;
        case 3:number1=parseData(id('cluch1').value);number2=parseData(id('cluch2').value);number3=parseData(id('cluch3').value);result[0]='Вес 1 листа ';result[1]=number1*number2*number3*density;break;
        case 4:number1=parseData(id('cluch1').value);number2=parseData(id('cluch2').value);result[0]='Вес 1 метра ';result[1]=(number1-number2)*number2*pi*density/1000;break;
        case 5:number1=parseData(id('cluch1').value);number2=parseData(id('cluch2').value);number3=parseData(id('cluch3').value);result[0]='Вес 1 метра ';result[1]=(number1+number2-2*number3)*number3*0.0157;break;
        default:result[1]=0;break;
    }
    if(isNaN(result[1])||result[1]<=0){
        $('#calculator-result').html("<span class='calculator-bad'>Неверно введены данные.</span>");
    }else{
        $('#calculator-result').html("<span class='calculator-good'>"+result[0]+Math.round(result[1]*40)/40+" кг.</span>");
    }
    $('#cluch1').focus();
    });


});

//Парсер
function parseData(i){   
    pd=parseFloat(i.replace(',','.'));
    return pd;
}
 
//Показ для мобильных устройств
$('#link-calculator').click(function(){
   $('#calculator').toggleClass('hidden-xs');
});



    
    
    
    
    
    
});