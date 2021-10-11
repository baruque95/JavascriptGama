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

    resultado = Number.parseInt(n1) - Number.parseInt(n2);

    window.alert(resultado);
}

function multiplicar()
{
    n1 = document.getElementById('n1').value;
    n2 = document.getElementById('n2').value;

    resultado = Number.parseInt(n1) * Number.parseInt(n2);

    window.alert(resultado);
}

function dividir()
{
    n1 = document.getElementById('n1').value;
    n2 = document.getElementById('n2').value;

    resultado = Number.parseInt(n1) / Number.parseInt(n2);

    document.getElementById('calculo').value = resultado
}

function media()
{
    n1_media = document.getElementById('n1_media').value;
    n2_media = document.getElementById('n2_media').value;
    n3_media = document.getElementById('n3_media').value;

    resultado = (Number.parseInt(n1_media) + Number.parseInt(n2_media) + Number.parseInt(n3_media)) / 3;
    
    document.getElementById('mediaFinal').value = resultado.toFixed(2)
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