function shwmbbar()
{
    document.getElementById("mobshwn").style.display = "flex";
    document.getElementById("mobshwn").style.animation = "mobmenuin .4s both";
    
    
    

    document.getElementById("mobmenush").setAttribute('onclick', 'hdmbbar(), hdmbbartxt(), clrmbmenu()');
}

function hdmbbar()
{
    
    document.getElementById("mobshwn").style.animation = "mobmenuout .4s both";
    //document.getElementById("mobshwn").style.display = "none";
    
    document.getElementById("mobmenush").setAttribute('onclick', 'shwmbbar(), shwmbbartxt()');
}

function shwmbbartxt()
{
    
    document.getElementById("xtxt").style.display = "flex";
    document.getElementById("xtxt").style.animation = "mobmenutxtin .4s both";
    document.getElementById("xtxt1").style.display = "flex";
    document.getElementById("xtxt1").style.animation = "mobmenutxtin .4s both";
    document.getElementById("xtxt2").style.display = "flex";
    document.getElementById("xtxt2").style.animation = "mobmenutxtin .4s both";
    document.getElementById("xtxt3").style.display = "flex";
    document.getElementById("xtxt3").style.animation = "mobmenutxtin .4s both";
    
    /*var moblli = document.getElementsByClassName("txtt");
    

    for(var i = 0; i < moblli.length; i++)
    {
        moblli[i].setAttribute('display', 'flex');
        moblli[i].classList.add("moblli");
    }*/
}

function hdmbbartxt()
{

    document.getElementById("xtxt").style.animation = "mobmenutxtout .4s both";
    //document.getElementById("xtxt").style.display = "none";
    document.getElementById("xtxt1").style.animation = "mobmenutxtout .4s both";
    //document.getElementById("xtxt1").style.display = "none";
    document.getElementById("xtxt2").style.animation = "mobmenutxtout .4s both";
    //document.getElementById("xtxt2").style.display = "none";
    document.getElementById("xtxt3").style.animation = "mobmenutxtout .4s both";
    //document.getElementById("xtxt3").style.display = "none";

    /*var moblli = document.getElementsByClassName("txtt");
    

    for(var i = 0; i < moblli.length; i++)
    {
        moblli[i].classList.remove("moblli");
    }*/
}

function clrmbmenu()
{
    /*document.getElementById("xtxt").style.display = "none";
    document.getElementById("xtxt1").style.display = "none";
    document.getElementById("xtxt2").style.display = "none";
    document.getElementById("xtxt3").style.display = "none";

    document.getElementById("mobshwn").style.display = "none";*/
    setTimeout(() => {  
        document.getElementById("xtxt").style.display = "none";
        document.getElementById("xtxt1").style.display = "none";
        document.getElementById("xtxt2").style.display = "none";
        document.getElementById("xtxt3").style.display = "none"; }, 350);

    setTimeout(() => { document.getElementById("mobshwn").style.display = "none"; }, 400);
}




function mobmenutxtpad(Fsize)
{
    var rot = document.querySelector(':root');
    var Lnum = document.getElementsByClassName("txtt").length;

    var res = (95 - (Lnum * Fsize)) / (Lnum + 1);
    var pad = res + 'vmax';

    rot.style.setProperty('--mob-menu-txt-pad', pad);
    
    return pad;
}

function cenpar()
{
    var toCenr = document.querySelectorAll(".mottor");
    var toCenl = document.querySelectorAll(".mottol");
    var noAnim = document.querySelectorAll(".mottopar");
    
    for(var i = 0; i < toCenr.length; i++)
    {
        toCenr[i].classList.add("mottocen");
        toCenr[i].classList.remove("mottor");
    }

    for(var i = 0; i < toCenl.length; i++)
    {
        toCenl[i].classList.add("mottocen");
        toCenl[i].classList.remove("mottol");
    }

    for(var i = 0; i < toCenl.length; i++)
    {
        noAnim[i].classList.add("provv");
        noAnim[i].classList.remove("mottopar");
    }
    
    return toCenl.length;
}

function setpar()
{
    var toSet = document.querySelectorAll(".mottocen");
    var toAnim = document.querySelectorAll(".provv");

    for(let i = 0; i < toSet.length; i++)
    {
        if(i % 2 == 0)
        {
            toSet[i].classList.add("mottol");
            toSet[i].classList.remove("mottocen");
        }
        else
        {
            toSet[i].classList.add("mottor");
            toSet[i].classList.remove("mottocen");
        }
    }

    for(var i = 0; i < toAnim.length; i++)
    {
        toAnim[i].classList.add("mottopar");
        toAnim[i].classList.remove("provv");
    }
    
}

const mediaQuery = window.matchMedia("(max-width: 768px)");

function sizeList(e)
{
    if(e.matches)
    {
        cenpar();
    }
    else
    {
        setpar();
    }
}

mediaQuery.addListener(sizeList);

sizeList(mediaQuery);