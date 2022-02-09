//Validação Geral//
function validar_tudo() {
    
    let validar = true;

    //Validação de Formulários Vazios//
    if (boxVazio() == true) {
        validar = false;
    }

    //Validação de 14 caracteres do CPF//
    if (mascCPF().length < 14) {
        validar = false;
        alert('CPF Inválido!!');
    }

    //Validação do E-mail//
    if (boxEmail() == true) {
        validar = false;
        alert("Falta do ponto '.' no seu E-MAIL!");
    }

    //Validação do Celular//
    if (boxCelular().length != 15) {
        validar = false;
        alert("Numero de Celular Inválido!!")
    }

    //Validação da Data//
    if (boxDate() == true) {
        validar = false;
        alert("Site só para Maiores de 18 Anos!!");
    }

    //Validação de Salário//
    let salario = boxSalario();

    if (parseFloat(salario) < 300) {
        validar = false;
        alert("Valor minimo de Salário R$ 300,00!!"); 
    }
    
    //Validação de Marcação de Sexo//
    if (checkMF() != "Masculino" && checkMF() != "Feminino") {
        validar = false;
        alert("Escolha um Sexo!!");
    }

    //Validação de Escolha de Time//
    if (checkSelect() == true) {
        validar = false;
        alert("Escolha uma opção de Time!!");
    }

    //Validação de Marcação de Planos//
    if (retPlanos() != "Mensal" && retPlanos() != "Quadrimestral" && retPlanos() != "Anual") {
        validar = false;
        alert("Escolha um de nossos Planos!!");
    }

     //Validação de Marcação de Premiere//
     if (retPremiere() != "Economico" && retPremiere() != "Controle") {
        validar = false;
        alert("Escolha um de nossos Primere!!");
    }

    //Validação de Usuário e Senha//
    if (verfUsuarioSenha() == true) {
        validar = false;
        alert("Usuário ou Senha Incorretas!!");
    }

    //Abilitando Botão "Assinar"//
    let botao = document.getElementById('butassin');
   // botao.addEventListener("click",Assinar);

    if (validar == true) {
        botao.disabled = false;
        validar = false;
    }

    abstJson();      
    return validar;
}

//Função Jquery para apenas Letras//
function apenasLetras(){
    let nome = document.getElementById('nome').value;

    $(document).ready(function() {
        $('#nome').on('keypress', function(e) {
         var regex = new RegExp("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$");
         var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
         if (regex.test(str)) {
            return true;
         }
         e.preventDefault();
         return false;
        });
       });
}

//Verificação de Caixa Vazia//
function boxVazio() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let celular = document.getElementById('cel').value;
    let data_nasc = new Date(document.getElementById('nascimento').value);
    let salario = document.getElementById('salario').value;
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;
    let vazio = false

    if (nome == "") {
        vazio = true;
        alert("Campo de Nome VAZIO!");
    }

    if (email == "") {
        vazio = true;
        alert("Campo de E-mail VAZIO!");
    }

    if (celular == "") {
        vazio = true;
        alert("Campo de Celular VAZIO!");
    }

    if (data_nasc == "Invalid Date") {
        vazio = true;
        alert("Campo de Data de Nascimento INVÁLIDO!");
    }

    if (salario == "") {
        vazio = true;
        alert("Campo de Salário VAZIO!")
    }

    if (login == "" || senha == "") {
        vazio = true;
        alert("Coloque Login e Senha!")
    }
    
    return vazio; 
}

//Função Mascara CPF//
function mascCPF(){
    let mCPF = document.getElementById('cpf').value;

    mCPF = mCPF.replace(/\D/g,""); //verificação de Letras//

    if (mCPF.replace(/\D/g,"") == '') {
        document.getElementById('cpf').value = ''; //Recebe vazio caso Letra//
    }

    mCPF = mCPF.replace(/(\d{3})(\d)/,"$1.$2"); //Primeiro "."//

    SubCPF();

    mCPF = mCPF.replace(/(\d{3})(\d)/,"$1.$2"); //Segundo "."//

    SubCPF();

    mCPF = mCPF.replace(/(\d{3})(\d{1,2})$/,"$1-$2"); //Traço "-"//

    SubCPF();
    
    //Função de Substituição de Valor input//
    function SubCPF() {
        if (document.getElementById('cpf').valeu != mCPF) {
            document.getElementById('cpf').value = mCPF;
        }
    }

    return mCPF;
}

//Função do E-mail (Falta do Ponto)//
function boxEmail() {
    let email = document.getElementById('email').value;

    if (email.indexOf('.') < 0) {
        return true;
    }
}

//Função de Mascara de Celular//
function boxCelular() {
    let cel = document.getElementById('cel').value;

    cel = cel.replace(/\D/g,""); //Verificar Letras//
    if (cel == '') {
        document.getElementById('cel').value = ''; //Recebe vazio caso Letra//
    }

    cel = cel.replace(/^(\d)/,"($1"); //Primeiro "("//
    
    subCel();

    cel = cel.replace(/^(.{3})(\d)/,"$1) $2"); //Segundo ")" + " "//

    subCel();

    //Verificação do Traço "-"//
    if (cel.length == 11) {
        cel = cel.replace(/(.{1})$/,"-$1")}
    else if (cel.length == 12) {
        cel = cel.replace(/(.{2})$/,"-$1")}   
    else if (cel.length == 13) {
        cel = cel.replace(/(.{3})$/,"-$1")}
    else if (cel.length == 14) {
        cel = cel.replace(/(.{4})$/,"-$1")}
    else if (cel.length >= 15) {
        cel = cel.replace(/(.{4})$/,"-$1")
    }

    subCel();

    //Função de Substituição de Valor input//
    function subCel() {
        if (document.getElementById('cel').valeu != cel) {
            document.getElementById('cel').value = cel;
        }
    }

    return cel;
}

//Função de Data de Nascimento//
function boxDate() {
    let data = new Date(document.getElementById('nascimento').value);
    let anoAtual = new Date().getFullYear();
    let anoDig = data.getFullYear();
    let dataVal = false;

    if (anoDig > anoAtual) {
        document.getElementById('nascimento').value = null;} //Caso maior que Ano Aual//
    else if (anoDig > (anoAtual-18)) { //Maiores de 18 Anos//
        dataVal = true;
    }       

    return dataVal;
}

//Função da Mascara Salario//
function boxSalario() {
    let salario = document.getElementById('salario').value; 

    salario = salario.replace(/\D/g,""); //Verificar Letras//
    if (salario == '') {
        document.getElementById('salario').value = null; //Caso letra recebe Vazio//
    }

    //salario = salario.replace(/^(\d)/,"R$ $1"); //Recebe "R$ "//

   // subSalario();

    salario = salario.replace(/(\d)(\d{3})(\d{3})(\d{5}$)/,"$1.$2.$3.$4"); //Casa Bilhão//

    subSalario();

    salario = salario.replace(/(\d)(\d{3})(\d{5}$)/,"$1.$2.$3"); //Casa Milhão//

    subSalario();

    salario = salario.replace(/(\d)(\d{5}$)/,"$1.$2"); //Casa Milhar//

    subSalario();

    salario = salario.replace(/(\d{2}$)/,",$1"); //Recebe ",00"//

    subSalario();

    var interno = salario; //Variavel para Conversão//

    interno = interno.replace(/\D/g,""); //Retirando "." e "," //
    interno = parseFloat(interno.replace(/(\d{2}$)/,".$1")); //Colocando "." para casa decimal e convertendo para Numero//"

    //Função de Sabstituição da Caixa Salario//
    function subSalario() {
        if (document.getElementById('salario').value != salario) {
            document.getElementById('salario').value = salario;
        }
    }
    
    return interno;
}

//Função de Check Masculinoe Feminino//
function checkMF() {
    let MF = document.getElementsByName('sexo');
    let genero = "";

    for ( i = 0; i <= 1; i++) {
        if (MF[i].checked) {
            genero = MF[i].value;
        }    
    }

    return genero;
}

//Função do Select//
function checkSelect() {
    let select = document.getElementById('select').value;
    let retornar = false;

    if (select == "0") {
        retornar = true;
    } 

    return retornar;
}  

//Função de Retorno Time//
function retTime() {
    let time = document.getElementById('select').value;

    if (time == 1) {
        time = "Corinthians";}
    else if (time == 2) {
        time = "Palmeiras";} 
    else if (time == 3) {
        time = "Santos";}
    else if (time == 4) {
        time = "São Paulo";}
    else if (time == 100){
        time = "Nenhuma das Opções"
    }  

    return time;
}

//função para totalizar valor de assinatura mensal//
function totaliza()
{
    total = 0.00;
    //plano mensal
    if(document.form.planos[0].checked)
        total = total + 85.00;
    //plano quadrimestral
    if(document.form.planos[1].checked)
        total = total + 300.00 / 4;
    //plano anual
    if(document.form.planos[2].checked)
        total = total + 600.00 / 12;
    //Premiere econômico
    if(document.form.premiere[0].checked)
        total = total + 60.00;
    //Premiere controle
    if(document.form.premiere[1].checked)
        total = total + 80.00;
    document.form.total.value = total.toFixed(2);

    return total.toFixed(2);
}

//Função de Retorno de Planos//
function retPlanos() {
    let planos = document.getElementsByName('planos');
    let escolhido = "";

    for (let i = 0; i <= 2; i++) {
        if (planos[i].checked) {
            escolhido = planos[i].value;
        }
    }
    return escolhido;
}

//Função de Retorno do Premiere//
function retPremiere() {
    let premiere = document.getElementsByName('premiere');
    let escolhido = "";

    for (let i = 0; i <= 1; i++) {
        if (premiere[i].checked) {
            escolhido = premiere[i].value;
        }
    }
    return escolhido;
}

//JSON Geral//
var json = {
    "Nomej": "",
    "CPFj":"",
    "Emailj": "",
    "Celularj": "",
    "Dat_Nascj": "",
    "Salarioj": "",
    "Sexoj": "",
    "Timej": "",
    "Planoj": "",
    "Premierej": "",
    "Totalj": "",
    "Usuarioj": "Usuario",
    "Senhaj": "Abc$123"
}

//Abastecimento do JSON//
function abstJson() {
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let email = document.getElementById('email').value;
    let celular = document.getElementById('cel').value;
    let nascimento = document.getElementById('nascimento').value;
    let salario = document.getElementById('salario').value;
    let sexo = checkMF();
    let time = retTime();
    let plano = retPlanos();
    let premiere = retPremiere();
    let total = totaliza();

    //JSON//
    json.Nomej = nome;
    json.CPFj = cpf;
    json.Emailj = email;
    json.Celularj = celular;
    json.Dat_Nascj = nascimento;
    json.Salarioj = salario;
    json.Sexoj = sexo;
    json.Timej = time;
    json.Planoj = plano;
    json.Premierej = premiere;
    json.Totalj = total;
}

//Função de Verificação de Usuario e Senha//
function verfUsuarioSenha() {
    let usuario = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;
    let verificacao = false;

    if (usuario != json.Usuarioj || senha != json.Senhaj) {
        verificacao = true;
    }
   
    return verificacao;
}

//Função do Botão "Assinar"//
function Assinar() {

    alert('Parabéns! Assinatura Realizada com Sucesso!!');

    return true;
}

//Contador de Segundos//
setInterval(segundos,1000);

var segundo = 1;

function segundos() {
    document.getElementById('dataHJ').innerHTML = segundo; 
    segundo++;   
}