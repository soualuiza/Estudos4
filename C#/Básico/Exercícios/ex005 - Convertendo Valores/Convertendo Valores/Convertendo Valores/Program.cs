// See https://aka.ms/new-console-template for more information
Console.WriteLine("Digite seu nome");

//Declarando as variáveis 
string nome = null;
int idade = 0;
double renda = 0;

 //Solicitnado nome e idade
nome = Console.ReadLine();

Console.WriteLine("Olá, " + nome);

Console.WriteLine(nome + ", informe sua idade.");


//Convertendo os valores e dizendo a idade inserida.

idade = int.Parse(Console.ReadLine());

Console.WriteLine("Idade: " + idade);


//Repetindo o processo, com o salário

Console.WriteLine("Qual é a sua renda?");

renda = double.Parse(Console.ReadLine());

Console.WriteLine("Sua renda é: " + "$" + renda);





