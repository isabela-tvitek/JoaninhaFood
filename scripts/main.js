window.onload = function () {
      setTimeout(function () {
            alert("Bem Vindo ao site");
      }, 100);
}


function confirmar() {
      if (window.confirm("Deseja cadastrar nova receita?") == true) {
            window.location = "./cadastro.html";
      }
      window.location = "#";
}

let $ = function (id) {
      return document.getElementById(id)
}

let validaCampo = function () {

      let valor = $("buscar").value;

      if ((valor == undefined) || (valor == "")) {
            alert("O campo não foi preenchido");
      }

      let myArrayReceita = JSON.parse(localStorage.getItem('dados'));
      let index = [];      

      for (let receita in myArrayReceita) {
            // console.log(receita.indexOf(receita));
            if (valor == receita.nomeReceita) {
                  index[i] = receita.indexOf(receita);
            }
      }
      console.log(index);

      // for(let i = 0; i < index.length; i++){
      //       console.log(myArrayReceita[i])
      //       console.log(index[i])
      // }
}