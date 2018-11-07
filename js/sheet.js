$(function(){

    $('span').mousedown(function(e){ 
        if (e.detail > 1) {
            e.preventDefault();
        } 
    });

    function swap(text, index, charIn, charOut){
        var len = text.length;
        var newText = "";
        for(i = 0; i < len; i++){
            var curText = text.substring(i, i+1);
            if(curText === " "){
                newText += " ";
                continue;
            }
            if(i < index){
                newText += charOut;
                continue;
            }
            if (i === index && curText === charIn){
                newText += charOut;
                continue;
            }
            newText += charIn;
        }

        return newText;
    }

    $(".wod-att").click(function(){
        var getSelection = window.getSelection();
        var selection = getSelection.focusOffset;
        var text = $(this).text();
        var newText = swap(text, selection, "d", "e");
        $(this).text(newText);
    });

    $(".wod-square").click(function(){
        var getSelection = window.getSelection();
        var selection = getSelection.focusOffset;
        var text = $(this).text();
        var newText = swap(text, selection, "f", "a");
        $(this).text(newText);
    });

    $(".wod-att1").click(function(){
        var getSelection = window.getSelection();
        var selection = getSelection.focusOffset;
        var text = $(this).text();
        var newText = "";

        for(i = 0; i < 5; i++){
            
            if(i < selection){
                newText += "e";
            }
            else if(i === selection){
                var f = text.substring(i,i+1);
                if(f === 'd'){
                    newText += "e";
                }
                else{
                    newText += "d"
                }
            }
            else{
                newText += "d"
            }
        }

        $(this).text(newText);
    });
});