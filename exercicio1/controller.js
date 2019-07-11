function SalvarItens() 
{
    var erro = 0;
    var tipo = document.getElementById("tipo").value
    var nome =document.getElementById("txtNome").value
    var telefone =document.getElementById("txtTelefone").value
    
  if(nome == "" || telefone == "")
  {
    erro =1;
    alert("Preencha todos os campos");
  }

  if(erro == 0 )
{
  var lista =  document.getElementById("GridSalva").innerHTML ;
  lista += "<tr> <td>" + tipo +"</td>" +"<td>"+nome+"</td>"+"<td>"+telefone+"</td>" + "<td> <button class='btn btn-danger' type='button' onclick='ExcluirItens(this.parentNode.parentNode.rowIndex)'>Excluir</button>" + "</td> </tr>" ;
  document.getElementById("GridSalva").innerHTML = lista;
}

}

function ExcluirItens(i){

  document.getElementById('GridSalva').deleteRow(i);

}