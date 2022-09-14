// See https://aka.ms/new-console-template for more information


 
Console.WriteLine("Diga seu nome."); // É requisitado um nome a ser digitado no console;


string nomePessoa = null; // É declarado que o nome é nulo, ou seja, será atribuído o nome dentro do console, pelo próprio usuário.

nomePessoa = Console.ReadLine(); // O Console espera a informação do nome que for inserido, para ser atribuído à variável nomePessoa.

Console.WriteLine("Olá, " + nomePessoa + "."); // O nome inserido será mostrado junto com a mensagem de boas vindas do console.

Console.WriteLine("Insira seu salário, " + nomePessoa + "."); // O mesmo será requisitado abaixo, porém, com número.

string salario = null;

salario = Console.ReadLine();

Console.WriteLine("Seu salário é: " + "R$" + salario );




