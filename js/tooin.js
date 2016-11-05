$(document).ready(function(){

function id(element){return document.getElementById(element);};
  
$('#list>li').mouseup(function(){
    var type=this.value;
    myForm="";
    var Button="<button type='button' id='work' class='btn btn-default btn active'>Расчитать</button>";
    switch(type){
        case 1:myForm='<div class="input-group"><input type="text"  id="cluch1" class="form-control" placeholder="Введите диаметр" aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2">миллиметр</span></div>';break;
        case 2:myForm='<div class="input-group"><input type="text"  id="cluch1" class="form-control" placeholder="Номер шестигранника под ключ" aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2">номер</span></div>';break;
        case 3:myForm='<div class="input-group"><input type="text"  id="cluch1" class="form-control" placeholder="Толщина листа" aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2">миллиметр</span></div><div class="input-group"><input type="text"  id="cluch2" class="form-control" placeholder="Длинна листа" aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2">миллиметр</span></div><div class="input-group"><input type="text"  id="cluch3" class="form-control" placeholder="Ширина листа" aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2">миллиметр</span></div>';break;
        case 4:myForm='<div class="input-group"><input type="text"  id="cluch1" class="form-control" placeholder="Внешний диаметр" aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2">миллиметр</span></div><div class="input-group"><input type="text"  id="cluch2" class="form-control" placeholder="Толщина стенки" aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2">миллиметр</span></div>';break;
        case 5:myForm='<div class="input-group"><input type="text"  id="cluch1" class="form-control" placeholder="Сторона А" aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2">миллиметр</span></div><div class="input-group"><input type="text"  id="cluch2" class="form-control" placeholder="Сторона Б" aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2">миллиметр</span></div><div class="input-group"><input type="text"  id="cluch3" class="form-control" placeholder="Толщина стенки" aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2">миллиметр</span></div>';break;
        default:"";break;
    }
    $("#calculator-form").html(myForm+Button);
});
    
    
    
    
    
    
    
    
    
});