// var i = 0;
// for (i = 0; i<=10; i++){
//     alert(i + " : Hello world!")
//     document.write(i + " : Hello world! <br>");
// }

function try1(){
    const a = "cocoa";
    console.log("[try1] before", a); //cocoa
    if(true)
    {
    console.log("[if] before", a); //???
    const aa = "leaf";
    console.log("[if] after", aa); //????
    }

    console.log("[try1] after", a); //????
}

try1();