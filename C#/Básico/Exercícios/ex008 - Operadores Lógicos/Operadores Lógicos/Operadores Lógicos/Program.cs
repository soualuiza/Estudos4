// See https://aka.ms/new-console-template for more information
Console.WriteLine("Operadores Lógicos");


string nome = null;
int idade = 0;

Console.WriteLine("Inicializando sistema...");
Console.WriteLine("-------------------------------------");
Console.WriteLine("-------------------------------------");
Console.WriteLine("-------------------------------------");
Console.WriteLine("-------------------------------------");


//Solicita Nome

Console.WriteLine("Diga seu nome...");

nome = Console.ReadLine();

// Solicita Idade

Console.WriteLine(nome + ", diga sua idade...");

idade = int.Parse(Console.ReadLine());

//Verificando se todas as condições são verdadeiras 

   if (idade >= 18 && nome == "Carlos")
{
     Console.WriteLine("Você pode acessar nosso conteúdo," + " " + nome + ".");
}

// Verificando se pelo menos uma condição é verdadeira


   if (idade >= 18 || nome == "Carlos")
{
    Console.WriteLine("Seu nome pode ser Carlos, ou sua idade é =/> 18 anos.");
}

  else
{
   Console.WriteLine("Sentimos muito, nenhuma credencial é válida.");
}


