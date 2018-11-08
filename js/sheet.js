$(function(){

    $('span').mousedown(function(e){ 
        if (e.detail > 1) {
            e.preventDefault();
        } 
    });

    function swap(text, index, charIn, charOut){
        var len = text.length;
        var newText = "";
        for(i = 1; i <= len; i++){
            var curText = text.substring(i-1, i);
            if(curText === " "){
                newText += `<span vl="${i}"> </span>`;
                continue;
            }
            if(i < index){
                newText += `<span vl="${i}">${charOut}</span>`;
                continue;
            }
            if (i === index && curText === charIn){
                newText += `<span vl="${i}">${charOut}</span>`;
                continue;
            }
            newText += `<span vl="${i}">${charIn}</span>`;
        }

        return newText;
    }

    $(".wod-att").click(function(eventData){
        var selection = Number(eventData.target.attributes["vl"].value);
        var text = $(this).text();
        var newText = swap(text, selection, "d", "e");
        $(this).html(newText);
    });

    $(".wod-square").click(function(eventData){
        var selection = Number(eventData.target.attributes["vl"].value);
        var text = $(this).text();
        var newText = swap(text, selection, "f", "a");
        $(this).html(newText);
    });
});