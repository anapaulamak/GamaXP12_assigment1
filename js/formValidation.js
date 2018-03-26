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

let btnEnviaForm = document.querySelector("#btn_enviaForm");
btnEnviaForm.addEventListener("click", function(event){
	
	//pegar informações do formulário
	let form = document.querySelector("#formCadastro");

	let nome = form.nome.value;
	let email =	form.email.value;
	let empresa = form.empresa.value;

	if (validaNome(nome) == true && validaEmail(email) == true && validaEmpresa(empresa) == true){
		alert("Cadastro realizado com sucesso!");
	}
})
