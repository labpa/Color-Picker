const colorsArray = ['#d92114', '#e91e63', '#9c27b0','#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#704535', '#857a7a', '#607d8b', '#13252e'];

var colorPicker = document.getElementById('color-picker');

for(var i=0; i<20; i++){
    var colorElement = "<div style='background-color:"+colorsArray[i]+"' onclick='changeColor(this)' class='colors' id='"+i+"'></div>";
    colorPicker.innerHTML+=colorElement;
}

function changeColor(e){
    var elements = document.getElementsByClassName('colors');
    for(var j=0; j<elements.length; j++){
        elements[j].classList.remove('color-move');
    }
    e.classList.add('color-move');

    colorPicker.style.backgroundColor=colorsArray[e.id];
    document.getElementById('title').style.color='#fff';
}