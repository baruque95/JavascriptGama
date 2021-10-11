function somar()
{
    n1 = document.getElementById('n1').value;
    n2 = document.getElementById('n2').value;

    resultado = Number.parseInt(n1) + Number.parseInt(n2);

    window.alert(resultado);
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
    n1 = document.getElementById('n1_media').value;
    n2 = document.getElementById('n2_media').value;
    n3 = document.getElementById('n3_media').value;

    resultado = (Number.parseInt(n1) + Number.parseInt(n2) + Number.parseInt(n3)) / 3;
    
    document.getElementById('mediaFinal').value = resultado.toFixed(2)
}