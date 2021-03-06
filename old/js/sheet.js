var predatorTypes = [
    "Alleycat",
    "Bagger",
    "Blood Leech",
    "Cleaver",
    "Consensualist",
    "Farmer",
    "Osiris",
    "Sandman",
    "Scene Queen",
    "Siren"
];

var clanNames = [
    "Brujah",
    "Gangrel",
    "Malkavian",
    "Nosferatu",
    "Toreador",
    "Tremere",
    "Ventrue",
    "Caitiff",
    "Thin-Blooded"
];

var disciplines = [
    "Animalism",
    "Auspex",
    "Blood Sorcery",
    "Celerity",
    "Dominate",
    "Fortitude",
    "Obfuscate",
    "Potence",
    "Presence",
    "Protean",
    "Thin-Blood Alchemy",
];

var fillCircle = "e";
var voidCircle = "d";

var sheet = {
    str : 1,
    dex: 1,
    vit: 1
}

$(function(){

    fillComboBox("predator_type", predatorTypes, "#");
    fillComboBox("clans", clanNames, "#");
    fillComboBox("disciplines", disciplines, ".");

    $('span').mousedown(function(e){ 
        if (e.detail > 1) {
            e.preventDefault();
        } 
    });

    function fillComboBox(elementId, arrayTypes, selector){
        $element = $(selector+elementId);
        arrayTypes.forEach(function(element){
            $span = $(document.createElement("span"));
            $span.html(element);
            $element.append($span);
        });
    };

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

    function fieldValue(text, index, charFilled){
        var curText = text.substring(index-1, index);
        return curText === charFilled;
    }

    $(".wod-att").click(function(eventData){

        var selection = Number(eventData.target.attributes["vl"].value);
        var text = $(this).text();
        var newText = swap(text, selection, voidCircle, fillCircle);

        var value = selection;
        if(fieldValue(text, selection, fillCircle)){
            value -= 1;
        }

        var att = $(this).attr('id');
        sheet[att] = value;

        $(this).html(newText);
    });

    $(".dropdown-content").click(function(eventData){
        var value = eventData.target.innerText;
        $(this).siblings("input").val(value);
    });

    $(".wod-square").click(function(eventData){
        var selection = Number(eventData.target.attributes["vl"].value);
        var text = $(this).text();
        var newText = swap(text, selection, "f", "a");
        $(this).html(newText);
    });
});