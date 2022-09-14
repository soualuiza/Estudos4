double numero;
double quantidade;

Console.WriteLine("Tabuada");

numero = double.Parse(Console.ReadLine());

Console.WriteLine("Digite a quantidade");

quantidade = double.Parse(Console.ReadLine());




for (int i = 0; i <= quantidade; i++)
{
    double total = numero * i;

    Console.WriteLine(numero + " * " + i + " = " + total);
}
