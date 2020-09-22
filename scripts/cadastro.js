function load() {
    alert("Cadastre aqui uma nova receita");
};

let cadastrar = () => {

    let confirma = window.prompt("confirme seu email para continuar");
    let email = document.getElementById('email').value;

    if (confirma == "") {
        alert("falha ao realizar o cadastro")
    } else if (confirma != email) {
        alert("falha ao realizar o cadastro")
    } else {
        alert("cadastro realizado com sucesso")
        saveArrayDados();
    }
}


let x = document.getElementById("cadastro");
x.addEventListener("focus", entrada, true );
x.addEventListener("blur", saida, true );

function entrada(){
    document.getElementById("nome-receita").style.backgroundColor = "#ff008d63";
    document.getElementById("img").style.backgroundColor = "#ff008d63";
    document.getElementById("pessoa").style.backgroundColor = "#ff008d63";
    document.getElementById("email").style.backgroundColor = "#ff008d63";
}
function saida(){
    document.getElementById("nome-receita").style.backgroundColor = "";
    document.getElementById("img").style.backgroundColor = "";
    document.getElementById("pessoa").style.backgroundColor = "";
    document.getElementById("email").style.backgroundColor = "";
}
function mouseOver () {
    document.getElementById("button").innerHTML = "clique para finalizar cadastro";
}
function mouseOut(){
    document.getElementById("button").innerHTML = "Cadastro";
}

function saveArrayDados() {
    console.log("Salvando um vetor de objetos no local storage.");

    let nomeReceita = document.getElementById("nome-receita").value;
    let img = document.getElementById("img").value;
    let pessoa = document.getElementById("pessoa").value;
    let email = document.getElementById("email").value;
    let descricao = document.getElementById("descricao").value;

    let myArrayReceitas = [];
    let receita = new Receita(nomeReceita, img, pessoa, email, descricao);

    myArrayReceitas.push(receita);
    localStorage.setItem("dados", JSON.stringify(myArrayReceitas));

    

    //     let receita = new Receita(nomeReceita, img, pessoa, email, descricao);


    // //     let myArrayReceitas = JSON.parse(localStorage.getItem('dados'));
    // //    console.log(myArrayReceitas == undefined);
    // //    console.log(myArrayReceitas);

    // let myArrayReceitas = localStorage.getItem('dados');
    //     if (myArrayReceitas == undefined) {
    //         myArrayReceitas = [];
    //     } else {
    //         myArrayReceitas = JSON.parse(myArrayReceitas);
    //         console.log(myArrayReceitas + 'aqui')
    //     }

    //     myArrayReceitas.push(receita);
    //     localStorage.setItem('dados', myArrayReceitas);
    //     // localStorage.setItem("dados", JSON.stringify(myArrayReceitas));



}