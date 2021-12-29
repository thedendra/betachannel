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

function mobmenutxtpad(Lnum, Fsize)
{
    var rot = document.querySelector(':root');
    

    var res = (95 - (Lnum * Fsize)) / (Lnum + 1);
    var pad = res + 'vmax';

    rot.style.setProperty('--mob-menu-txt-pad', pad);

    return pad;
}