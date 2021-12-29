function shwmbbar()
{
    document.getElementById("mobshwn").style.display = "flex";
    
    document.getElementById("mobshwn").style.animation = "mobmenuin .4s both";
    

    document.getElementById("mobmenush").setAttribute('onclick', 'hdmbbar()');
}

function hdmbbar()
{
    
    document.getElementById("mobshwn").style.animation = "mobmenuout .4s both";
    //document.getElementById("mobshwn").style.display = "none";
    
    document.getElementById("mobmenush").setAttribute('onclick', 'shwmbbar()');
}