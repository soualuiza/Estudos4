Console.WriteLine("Aprendendo a usar Arrays");


//Declarando um string  e um int de arrays, atribuindo um espaço de 5 slots "new string[5]" e "new int[5]"
string[] fruta = new string[5];
int[] calorias = new int[5];


// array de frutas
fruta[0] = "Morango";
fruta[1] = "Laranja";
fruta[2] = "Abacaxi";
fruta[3] = "Uva";
fruta[4] = "Abacate";

//array de calorias
calorias[0] = 53;
calorias[1] = 42;
calorias[2] = 50;
calorias[3] = 3;
calorias[4] = 322;






Console.WriteLine("Lista de Frutas Favoritas");

Console.WriteLine("                          ");

Console.WriteLine("Fruta 1: " + fruta[0] + " (" + calorias[0] + " calorias).");
Console.WriteLine("Fruta 2: " + fruta[1] + " (" + calorias[1] + " calorias).");
Console.WriteLine("Fruta 3: " + fruta[2] + " (" + calorias[2] + " calorias).");
Console.WriteLine("Fruta 4: " + fruta[3] + " (" + calorias[3] + " calorias).");
Console.WriteLine("Fruta 5: " + fruta[4] + " (" + calorias[4] + " calorias).");


