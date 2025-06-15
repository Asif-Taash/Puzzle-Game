let sutun, satir;
let mevcutKare, digerKare;
let deneme;

function ikiXiki()
{
    if(sutun == 2) return;
    deneme = 0;
    sutun = 2;
    satir = 2;
    
    document.getElementById("Deneme").innerHTML = "0";
    document.getElementById("kare").innerHTML = "";

   PuzzleOlustur(sutun, satir);
 
}

function dortXdort()
{
    if(sutun == 4) return;
    deneme = 0;
    sutun = 4;
    satir = 4;

    document.getElementById("Deneme").innerHTML = "0";
    document.getElementById("kare").innerHTML = "";

    PuzzleOlustur(sutun, satir);

}

function sekizXsekiz()
{
    if(sutun == 8) return;
    deneme = 0;
    sutun = 8;
    satir = 8;

    document.getElementById("Deneme").innerHTML = "0";
    document.getElementById("kare").innerHTML = "";

    PuzzleOlustur(sutun, satir);
 
}



function PuzzleOlustur(sutun, satir)
{
    let sira = [];
    for (let i = 1; i <= sutun * satir; i++) 
    {
        sira.push(i);
    }

    for (let i = 0 ; i < sira.length; i++) 
    {
        let a = Math.floor(Math.random() * (i + 1));
        let temp = sira[i];
        sira[i] = sira[a];
        sira[a] = temp;
    }
    for (let i = 0; i < satir; i++) 
    {
        for (let j = 0; j < sutun; j++) 
        {
            let kare = document.createElement("img");
            kare.id = i.toString() + "-" + j.toString();
            kare.src = "images/" + sutun + "X" + satir + "/" + sira.shift() + ".jpg";

            switch(sutun)
            {
                case 2:
                    kare.style.width = "400px";
                    kare.style.height = "400px";
                    break;
                case 4:           
                    kare.style.width = "200px";
                    kare.style.height = "200px";
                    break;
                case 8:
                    kare.style.width = "100px";
                    kare.style.height = "100px";
                    break;
            }
            
            kare.addEventListener("dragstart", function() {mevcutKare = this});
            kare.addEventListener("dragover", (e) => { e.preventDefault() });
            kare.addEventListener("dragenter", (e) => { e.preventDefault() });
            kare.addEventListener("drop", function() { digerKare = this});
            kare.addEventListener("dragend", dragEnd);

            document.getElementById("kare").append(kare);
        }
    }


    function dragEnd() 
    {
        if(mevcutKare.src == digerKare.src)
        {
            return;
        }
        else
        {
            let temp = mevcutKare.src;
            mevcutKare.src = digerKare.src;
            digerKare.src = temp;

            deneme += 1;
            document.getElementById("Deneme").innerText = deneme;
             
        }
    
    }
}
function Karistir()
{
    document.getElementById("kare").innerHTML = "";
    deneme = 0;
    document.getElementById("Deneme").innerHTML = "0";
    PuzzleOlustur(sutun, satir);
}
function Gosterme()
{
    let orijinalResim = document.getElementById("orijinalResim")
    orijinalResim.style.display = "block";
}

function Durma()
{
    let orijinalResim = document.getElementById("orijinalResim")
    orijinalResim.style.display = "none";
}

window.onload = dortXdort;
