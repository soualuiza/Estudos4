// See https://aka.ms/new-console-template for more information

Console.WriteLine("Aprovação/Reprovação");

//Criando um Sistema de Aprovação ou Reprovação do Aluno

string nome;

double nota1, nota2, nota3, media;

Console.WriteLine("Olá, aluno. Digite seu nome.");

nome = Console.ReadLine();

Console.WriteLine("Olá, " + nome + ". Digite sua primeira nota.");

nota1 = double.Parse(Console.ReadLine());

Console.WriteLine("Sua primeira nota é: " + nota1 + ".");

Console.WriteLine("Digite sua segunda nota");

nota2 = double.Parse(Console.ReadLine());

Console.WriteLine("Sua segunda nota é: " + nota2 + ".");

Console.WriteLine("Agora digite sua terceira nota.");

nota3 = double.Parse(Console.ReadLine());

Console.WriteLine("Sua terceira nota é: " + nota3 + ".");

Console.WriteLine("Somando resultados...");

media = (nota1 + nota2 + nota3) / 3;

Console.WriteLine("Sua média é: " + media);

   if (media >= 6 )
{
    Console.WriteLine("Você foi aprovado.");

}
   else if (media < 6 )
{
    Console.WriteLine("Você foi reprovad@.");
}

   else if (media >= 8 )
{
    Console.WriteLine("Bela nota! Você foi aprovado, continue estudando para resultados melhores!");
}
   else if (media == 10 )
{
    Console.WriteLine("Você tirou a maior nota, INCRÍVEL! PARABÉNS!");
}






