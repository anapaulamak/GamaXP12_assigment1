function validaNome(nome){
	console.log(nome);
	if (nome.match(/[A-z][A-z]+\ [A-z][A-z]+/) == null){
		alert("Nome Completo Inválido!");		
		return false;
	}else{
		return true;
	}
}	

function validaEmail(email){
	if( email.match(/^[a-z0-9.]+@[a-z0-9]+\.([a-z]+)?$/i) == null){
		alert( "Email Inválido!" );	
		return false;
	}else{
		return true;
	}
}

function validaEmpresa(empresa){
	if (empresa == ""){
		alert("Empresa inválida!");
		return false;
	}else{
		return true;
	}
}

function validaCadastro (){
	//pegar informações do formulário
	let form = document.querySelector("#formCadastro");
	let nome = form.nome.value;
	let email =	form.email.value;
	let empresa = form.empresa.value;

	return (validaNome(nome) && validaEmail(email) && validaEmpresa(empresa))
}


