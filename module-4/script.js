var names=["Jacob","Tom","James","Harry","john"];
//var firstLetter = names[i].charAt(0).toLowerCase();

for(var i=0;i < names.length;i++){
    if(names[i].charAt(0)==="j" || names[i].charAt(0)==="J" ){
        console.log("Goodbye "+ names[i]);
    } else{
        console.log("Hello " + names[i]);
    }
}