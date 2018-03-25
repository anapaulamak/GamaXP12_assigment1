function validaNome(nome){
	console.log(nome);
	if (nome.match(/[A-z][A-z]+\ [A-z][A-z]+/) == null){
		console.log("Nome Completo Inválido!");		
		return false;
	}else{
		return true;
	}
}	

function validaEmail(email){
	if( email ==""){
		console.log( "Email Inválido!" );	
		return false;
	}else{
		return true;
	}
}

function validaEmpresa(empresa){
	if (empresa  == ""){
		console.log("Empresa inválida!");
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

	//teste para ver se está funcionando
	//console.log(nome);
	//console.log(email);
	//console.log(empresa);

	if (validaNome(nome) == true && validaEmail(email) == true && validaEmpresa(empresa) == true){
		//insere do documento de persistencia!! rs
		alert("Cadastro realizado com sucesso!");
	}
})
