const display = document.querySelector('#fonts');

const fontStyle = document.getElementById('font-text');

fontStyle.addEventListener("change",function() {
    var font = fontStyle.options[fontStyle.selectedIndex].value;
    if(font == 'Sans-Serif')
    {
        display.classList=[];
        display.classList.add('Sans-Serif');
        
        
    }
    else if(font == 'Times-New-Roman')
    {
        // display.classList.remove('arial');
        display.classList = [];
        display.classList.add('Times-New-Roman');
        
        
    }
    else if(font == 'Fantasy')
    {
        display.classList = [];
        display.classList.add('Fantasy');
        
    }
    else if(font == 'Cursive')
    {
        display.classList = [];
        display.classList.add('Cursive');
        
    }
});

const sizePannel = document.getElementById('size');
var fontsInput = document.getElementById('fonts');

sizePannel.addEventListener("input",function() {
    // var sizeValue = sizePannel.value;
    fontsInput.style.fontSize = sizePannel.value + 'px';
});

const colorSet = document.getElementById('color');

colorSet.addEventListener("input",function() {
    var selectedColor = colorSet.options[colorSet.selectedIndex].value;
    fontsInput.style.color = selectedColor;
});

const addText = document.getElementById('add');
addText.addEventListener("input",function() {
    var text = addText.value;

    fontsInput.value=text;
})


