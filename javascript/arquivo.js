function menor_idade(){
  alert('Infelizmente não será possível realizar o acesso!');
}


function maior_idade(){
  alert('Ok, seja bem vindo!');
}

function validar(){
	
	var nome = formulario.nome.value;
	var nickname = formulario.nickname.value;
	var day = formulario.day.value;
	var month = formulario.month.value;
	var year = formulario.year.value;
	var cpf = formulario.cpf.value;
	var team_id = formulario.team_id.value;

	if(nome.length == ""){
		alert('Por favor, preencha o campo nome!');
		formulario.nickname;
		return false
	}else if(nome.length<10){
		alert('Por favor, prencha com no mínimo 20 caracteres')
		formulario.nickname;
		return false
	}else if (nome.length>80){
		alert('Quantidade máxima de 80 caracteres')
		formulario.nickname;
		return false
	}
	
	
	if(nickname == ""){
		alert('Por favor, preencha o campo apelido!');
		formulario.nickname;
		return false
	}else if (nickname.length<2){
		alert('Por favor, insira no mínimo dois caracteres');
		formulario.nickname;
		return false
	}else if (nickname.length>20){
		alert('Quantidade máxima de 20 caracteres');
		formulario.nickname;
		return false
	}
	
	if(day == ""){
		alert('Por favor, preencha a sua data de nascimento!');
		formulario.day;
		return false
	}else if(day>31){
		alert('Por favor, preencha a sua data de nascimento corretamente!');
		formulario.day;
		return false
	}else if (day<1){
		alert('Por favor, preencha a sua data de nascimento corretamente!');
		formulario.day;
		return false
	}
	
	if(month == ""){
		alert('Por favor, preencha o seu mês de nascimento!');
		formulario.month;
		return false
	}else if(month>12){
		alert('Por favor, preencha o seu mês de nascimento corretamente!');
		formulario.month;
		return false
	}else if (month<1){
		alert('Por favor, preencha o seu mês de nascimento corretamente!');
		formulario.month;
		return false
	}
	
	if(year == ""){
		alert('Por favor, preencha o seu ano de nascimento!');
		formulario.year;
		return false
	}else if(year>2021){
		alert('Por favor, preencha o seu ano de nascimento corretamente!');
		formulario.year;
		return false
	}else if (year<1900){
		alert('Por favor, preencha o seu ano de nascimento corretamente!');
		formulario.year;
		return false
	}
	
		if(cpf == ""){
		alert('Por favor, preencha o seu CPF!');
		formulario.cpf;
		return false
	}

		if(team_id == "Selecione"){
		alert('Por favor, preencha o campo Time!');
		formulario.cpf;
		return false
	}
	

}