double numero;
double quantidade;



Console.WriteLine("Tabuada do número: ");

numero = double.Parse(Console.ReadLine());

Console.WriteLine("Quantidade: ");

quantidade = double.Parse(Console.ReadLine());




for (int i = 0; i <= quantidade; i++)
{
    double resultado = numero * i;

    Console.WriteLine(numero + " * " + i + " = " + resultado); 
}
