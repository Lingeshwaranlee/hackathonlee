let div=document.createElement("div");
div.className="container";


let div1=document.createElement("div");
div1.className="row";

let div2=document.createElement("div");
div2.className="col-1";

let a=document.createElement("a");
a.href="https://cataas.com/#/about" ;
a.target= "_blank" ;
a.innerHTML="CATAAS";

div2.append(a);
div1.append(div2);
div.append(div1);
document.body.append(div);



let div3=document.createElement("div");
div3.className="container";


let div4=document.createElement("div");
div4.className="row";

let div5=document.createElement("div");
div5.className="col-1";

let a1=document.createElement("a");
a1.href="https://simple.wikipedia.org/wiki/Cat"  ;
a1.target= "_blank" ;
a1.innerHTML="EXPLORE";

div5.append(a1);
div4.append(div5);
div3.append(div4);
document.body.append(div3);


let div6=document.createElement("div");
div6.className="container";


let div7=document.createElement("div");
div7.className="row";

let div8=document.createElement("div");
div8.className="col-1";

let a2=document.createElement("a");
a2.href="https://www.britannica.com/animal/cat"   ;
a2.target= "_blank" ;
a2.innerHTML="POST";

div8.append(a2);
div7.append(div8);
div6.append(div7);
document.body.append(div6);

var h2=document.createElement("h2");
h2.innerHTML="Your Search Result"
document.body.append(h2);





var x = document.getElementById("generate");
x.addEventListener("click", generate);
async function generate(){
    try {
        let res= await fetch("https://cataas.com/api/cats?tags=cute");
        let result=await res.json();
        console.log(result);
       generate.innerHTML=`<img src="${result.tags}"/>`
       for(var i in result)
       {
           console.log(result[i].tags);
       }

    } catch (error) {
        console.log(error);
    }
}
generate();