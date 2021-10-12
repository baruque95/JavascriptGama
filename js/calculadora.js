function somar()
{
    n1 = document.getElementById('n1').value;
    n2 = document.getElementById('n2').value;

    let msgError = document.getElementsByClassName('error')
    if(!validar(n1,n2))
    {
        msgError[0].innerHTML = "Um ou mais campos na soma está em branco.";
    } else
    {   
        msgError[0].innerHTML = "";
        resultado = Number.parseInt(n1) + Number.parseInt(n2);
        window.alert(resultado);   
    }
}

function subtrair()
{
    n1 = document.getElementById('n1').value;
    n2 = document.getElementById('n2').value;

    let msgError = document.getElementsByClassName('error')
    if(!validar(n1,n2))
    {
        msgError[1].innerHTML = "Um ou mais campos na subtração está em branco.";
    } else
    {   
        msgError[1].innerHTML = "";
        resultado = Number.parseInt(n1) - Number.parseInt(n2);
        window.alert(resultado);   
    }
}

function multiplicar()
{
    n1 = document.getElementById('n1').value;
    n2 = document.getElementById('n2').value;

    let msgError = document.getElementsByClassName('error')
    if(!validar(n1,n2))
    {
        msgError[2].innerHTML = "Um ou mais campos na multiplicação está em branco.";
    } else
    {   
        msgError[2].innerHTML = "";
        resultado = Number.parseInt(n1) * Number.parseInt(n2);
        window.alert(resultado);   
    }
}

function dividir()
{
    n1 = document.getElementById('n1').value;
    n2 = document.getElementById('n2').value;

    let msgError = document.getElementsByClassName('error')
    if(!validar(n1,n2))
    {
        msgError[3].innerHTML = "Um ou mais campos na divisão está em branco.";
    } else
    {   
        msgError[3].innerHTML = "";
        resultado = Number.parseInt(n1) / Number.parseInt(n2);
        window.alert(resultado);   
    }
}

function media()
{
    n1_media = document.getElementById('n1_media').value;
    n2_media = document.getElementById('n2_media').value;
    n3_media = document.getElementById('n3_media').value;

    let msgError = document.getElementsByClassName('error')
    if(!validarMedia(n1,n2,n3))
    {
        msgError[4].innerHTML = "Um ou mais campos na média está em branco.";
    } else
    {   
        msgError[4].innerHTML = "";
        resultado = (Number.parseInt(n1_media) + Number.parseInt(n2_media) + Number.parseInt(n3_media)) / 3;
        document.getElementById('mediaFinal').value = resultado.toFixed(2)  
    }    
}

function validar(n1, n2)
{
    if(n1.trim() === "" || n2.trim() === "")
    {
        return false;
    } else {
        return true
    }
}

function validarMedia(n1, n2, n3)
{
    if(n1.trim() === "" || n2.trim() === "" || n3.trim() === "")
    {
        return false;
    } else {
        return true
    }
}

function exampleLoop()
{
    let loop = document.getElementById('loop');
    let msgLoop = "";
    for(i = 0; i < 10; i++)
    {
        msgLoop += '<p>' + i + '< 10 </p>';
    }
    loop.innerHTML = msgLoop;
}

