function comprar(item){
  console.log("Você comprou " + item)
}

comprar("Pão")
const pessoa ={
  nome:"jake",
   apelido:["jakezinho","ja","killer"]
};
function mensagem(objeto){
  console.log(`eu sou ${objeto.nome},
      mas pode me chamar de:${objeto.apelido[0]},
      ${objeto.apelido[2]},${objeto.apelido[1]}.`);
}
mensagem(pessoa);
const novoUsuario={
  ...pessoa,
     apelido:['tey','teu']
};
mensagem(novoUsuario)
const pessoa1 ={
  nome:"jake",
  idade:22,
  profissao:"programador"
};
