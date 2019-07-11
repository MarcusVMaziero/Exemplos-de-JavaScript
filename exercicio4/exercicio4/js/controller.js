var _linha = null; // variavel global

$(document).ready(function(){

	$('#PessoaJ').hide();
	$('#PessoaS').hide();
	$('#PessoaF').hide();
	$('#GridPf').hide();
	$('#GridPs').hide();
	$('#GridPessoaS').hide();
	$('#GridPJ').hide();


	$("#inputGroupSelect01").change(function(){

		var verifica = $("#inputGroupSelect01").val();
		if(verifica == "1"){
			$('#PessoaF').show();
			$('#dependentesPf').hide();
			$('#PessoaJ').hide();
			$('#GridPJ').hide();
			$('#PessoaS').hide();
			$('#GridPs').hide();
			$('#GridPessoaS').hide();
		}if(verifica == "2"){
			$('#PessoaS').hide();
			$('#PessoaF').hide();
			$('#PessoaJ').show();
			$('#maiorLimite').hide();
			$('#GridPf').hide();
			$('#GridPs').hide();
			$('#GridPessoaS').hide();
		}if(verifica == "3"){
			$('#PessoaS').show();
			$('#PessoaF').hide();
			$('#PessoaJ').hide();
			$('#GridPJ').hide();
			$('#GridPf').hide();
		}if(verifica == ""){

			$('#PessoaJ').hide();
			$('#PessoaS').hide();
			$('#PessoaF').hide();
			$('#GridPf').hide();
			$('#GridPs').hide();
			$('#GridPessoaS').hide();
			$('#GridPJ').hide();
		}

	});
/////////////////////////////////////////////////PESSOA FISICA ///////////////////////////
	//Select da pessoa fisica

	$("#dependentesF").change(function(){

		var verifica = $("#dependentesF").val();
		if(verifica == "nao"){
			$('#dependentesPf').hide();
			$('#referenciaF').show();
		}if(verifica == "sim"){
			$('#referenciaF').hide();
			$('#dependentesPf').show();
		}

	});
	// botão salvar pessoa fisica
	$("#btnSalvarF").click(function(){
		var btn = $("#btnSalvarF").val();

		if(btn == "Salvar"){
			AddPessoaF();
			$('#FormPessoa input[type=text]').val("");

		}if(btn == "Atualizar"){

			$(_linha).remove();
			AddPessoaF();
			$('#FormPessoa input[type=text]').val("");
			var btn = $("#btnSalvarF").val("Salvar");

		}

	});

///////////////////////////////////PESSOA SEM CONTA //////////////////////////

	// botão salvar pessoa fisica
	$("#btnSalvarS").click(function(){
		var btn = $("#btnSalvarS").val();


		if(btn == "Salvar"){
			AddPessoaS();
			$('#FormPessoa input[type=text]').val("");
			$('#FormPessoa textarea').val("");

		}if(btn == "Atualizar"){

			$(_linha).remove();
			AddPessoaS();
			$('#FormPessoa input[type=text]').val("");
			var btn = $("#btnSalvarS").val("Salvar");
			$('#FormPessoa textarea').val("");

		}

	});

/////////////////////////////////////////////////PESSOA JURIDICA ///////////////////////////
	//Select da pessoa juridica

	$("#limite").change(function(){

		var valor = $("#limite").val();
		if(valor == "1"){
			$('#menorlimite').show();
			$('#maiorLimite').hide();
		}if(valor == "2"){
			$('#menorlimite').hide();
			$('#maiorLimite').show();
		}

	});

	// botão salvar pessoa juridica
	$("#btnSalvarJ").click(function(){
		var btn = $("#btnSalvarJ").val();

		if(btn == "Salvar"){
			AddPessoaJ();
			$('#FormPessoa input[type=text]').val("");
		}if(btn == "Atualizar"){

			$(_linha).remove();
			AddPessoaJ();
			$('#FormPessoa input[type=text]').val("");
			$("#btnSalvarJ").val("Salvar");

		}

	});

//////////////////////////////////////////////////////MASCARAS //////////////////////////////////
$('#FormPessoa input[name=telefone]').mask("(99) 9999-9999");
$('#FormPessoa input[name=cpf]').mask("000.000.000-00");
//$("#txtTelefoneA").mask("(99) 9999-9999");
//$("#txtDataA").mask("00/00/0000");
$('#FormPessoa input[name=valor]').mask('#.##0,00', {
	reverse: true
});

$("#sair").click(function(){

	window.location.replace("Index.html");
});
});
/////////PESSOA FISICA ////////////////////
function AddPessoaF(){
	

	$('#GridPf').show();
	$('#GridPessoaF').show();
	
	if ($("#GridPessoaF tbody").length == 0){
		$("#GridPessoaF").append("<tbody></tbody>");
	}
	$("#GridPessoaF tbody").append(
		"<tr>" +
		"<td>" + $("#txtNomeF").val() + "</td>" +
		"<td>" + $("#txtEnderecoF").val() + "</td>" +
		"<td>" + $("#txtTelefoneF").val() + "</td>" +
		"<td>" + $("#dependentesF").val() + "</td>" +
		"<td>" + $("#txtNomeRD").val() + "</td>" +
		"<td>" + $("#txtTelefoneDF").val() + "</td>" +
		"<td>" + $("#txtCpfF").val() + "</td>" +
		"<td>" + $("#txtNomeRF").val() + "</td>" +
		"<td>" + $("#txtTelefoneRF").val() + "</td>" +
		"<td><input type='button' " +
		"onclick='EditarPessoaF(this);' " +
		"class='btn btn-outline-warning' id='btnEditarF' value='Editar'>" +
		"</td>" +
		"<td><input type='button' " +
		"onclick='DeletePessoaF(this);' " +
		"class='btn btn-outline-danger' id='btnExcluirC' value='Excluir'>" +
		"</td>" +
		"</tr>"
		);
}
function DeletePessoaF(button_delete){
	_linha = $(button_delete).parents("tr");
	$(_linha).remove();

	var ver = $("#GridPessoaF").length;

}
function EditarPessoaF(button_edit){
	_linha = $(button_edit).parents("tr");
	var cols = _linha.children("td");


	$("#txtNomeF").val($(cols[0]).text());
	$("#txtEnderecoF").val($(cols[1]).text());
	$("#txtTelefoneF").val($(cols[2]).text());
	$("#dependentesF").val($(cols[3]).text());
	$("#txtNomeRD").val($(cols[4]).text());
	$("#txtTelefoneDF").val($(cols[5]).text());
	$("#txtCpfF").val($(cols[6]).text());
	$("#txtNomeRF").val($(cols[7]).text());
	$("#txtTelefoneRF").val($(cols[8]).text());

	$("#btnSalvarF").val("Atualizar");


}
//////////////////////////////// PESSOA SEM CONTA ///////////////////
function AddPessoaS(){
	
	$('#GridPs').show();
	$('#GridPessoaS').show();
	
	if ($("#GridPessoaS tbody").length == 0){
		$("#GridPessoaS").append("<tbody></tbody>");
	}

	$("#GridPessoaS tbody").append(
		"<tr>" +
		"<td>" + $("#txtNomeS").val() + "</td>" +
		"<td>" + $("#txtTelefoneS").val() + "</td>" +
		"<td>" + $("#txtCpfS").val() + "</td>" +
		"<td>" + $("#txtObsS").val() + "</td>" +
		"<td><input type='button' " +
		"onclick='EditarPessoaS(this);' " +
		"class='btn btn-outline-warning' id='btnEditarS' value='Editar'>" +
		"</td>" +
		"<td><input type='button' " +
		"onclick='DeletePessoaS(this);' " +
		"class='btn btn-outline-danger' id='btnExcluirS' value='Excluir'>" +
		"</td>" +
		"</tr>"
		);
}
function DeletePessoaS(button_delete){
	_linha = $(button_delete).parents("tr");
	$(_linha).remove();
	
}
function EditarPessoaS(button_edit){
	_linha = $(button_edit).parents("tr");
	var cols = _linha.children("td");


	$("#txtNomeS").val($(cols[0]).text());
	$("#txtTelefoneS").val($(cols[1]).text());
	$("#txtCpfS").val($(cols[2]).text());
	$("#txtObsS").val($(cols[3]).text());

	$("#btnSalvarS").val("Atualizar");


}
/////////PESSOA JURIDICA ////////////////////
function AddPessoaJ(){
	

	$('#GridPJ').show();
	$('#GridPessoaJ').show();
	
	if ($("#GridPessoaJ tbody").length == 0){
		$("#GridPessoaJ").append("<tbody></tbody>");
	}
	$("#GridPessoaJ tbody").append(
		"<tr>" +
		"<td>" + $("#txtNomeJ").val() + "</td>" +
		"<td>" + $("#txtEnderecoJ").val() + "</td>" +
		"<td>" + $("#txtTelefoneJ").val() + "</td>" +
		"<td>" + $("#txtValorL").val() + "</td>" +
		"<td>" + $("#txtNomeRJ").val() + "</td>" +
		"<td>" + $("#txtTelefoneRJ").val() + "</td>" +
		"<td>" + $("#banco").val() + "</td>" +
		"<td>" + $("#txtAgencia").val() + "</td>" +
		"<td>" + $("#txtConta").val() + "</td>" +
		"<td><input type='button' " +
		"onclick='EditarPessoaJ(this);' " +
		"class='btn btn-outline-warning' id='btnEditarJ' value='Editar'>" +
		"</td>" +
		"<td><input type='button' " +
		"onclick='DeletePessoaJ(this);' " +
		"class='btn btn-outline-danger' id='btnExcluirJ' value='Excluir'>" +
		"</td>" +
		"</tr>"
		);
}
function DeletePessoaJ(button_delete){
	_linha = $(button_delete).parents("tr");
	$(_linha).remove();
	
}
function EditarPessoaJ(button_edit){
	_linha = $(button_edit).parents("tr");
	var cols = _linha.children("td");


	$("#txtNomeJ").val($(cols[0]).text());
	$("#txtEnderecoJ").val($(cols[1]).text());
	$("#txtTelefoneJ").val($(cols[2]).text());
	$("#txtValorL").val($(cols[3]).text());
	$("#txtNomeRJ").val($(cols[4]).text());
	$("#txtTelefoneRJ").val($(cols[5]).text());
	$("#banco").val($(cols[6]).text());
	$("#txtAgencia").val($(cols[7]).text());
	$("#txtConta").val($(cols[8]).text());

	$("#btnSalvarF").val("Atualizar");


}