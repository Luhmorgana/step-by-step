var aluno = [
    { nome:"Tyler Durden",  nota:8.5 },
    { nome:"Vito Corleone", nota:5.5 },
    { nome:"Marla Singer",  nota:9.5 }
];
var tamanhoArrayAluno = aluno.length;

for(i=0; i<tamanhoArrayAluno ; i++) {
    if ( aluno[i].nota >=7.0 ){
    console.log("Aluno(a): " +aluno[i].nome+" está aprovado(a) com nota " +aluno[i].nota);
    } else {
    console.log("Aluno(a): " +aluno[i].nome+ " está reprovado(a) com nota " +aluno[i].nota);
    }
}