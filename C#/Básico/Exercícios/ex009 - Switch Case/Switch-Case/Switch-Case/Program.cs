// See https://aka.ms/new-console-template for more information


int nota;



Console.WriteLine("Simulador de Nota");
Console.WriteLine("------------------------////////////////------------------////////////////-------------");
Console.WriteLine("Digite sua nota");

nota = int.Parse(Console.ReadLine());

switch (nota)
{
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        {
            Console.WriteLine("Reprovado");
            break;
        }

    case 6:
    case 7:
    case 8:
    case 9:

        {
            Console.WriteLine("Aprovado");
            break;
        }
    case 10:
        {
            Console.WriteLine("Nota total, parabéns!");
            break;
        }

        
}

if (nota > 10)
{
    Console.WriteLine("[ERRO 1] - Insira uma nota MENOR ou IGUAL a 10!");

}


