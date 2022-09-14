


//Criando a Array da lista de nomes a serem listados no prompt;
string[] nomes = new string[10];

nomes[0] = "Cecília";
nomes[1] = "Márcia";
nomes[2] = "Camila";
nomes[3] = "Ana";
nomes[4] = "Letícia";
nomes[5] = "Ágatha";
nomes[6] = "Carla";
nomes[7] = "Evelyn";
nomes[8] = "Caio";
nomes[9] = "Lua";


// Declarando o índice = "i", cujo valor inicial 0;
int i = 0;

// Laço de Repetição While - Atribuindo while e sua condição;
while (i < 10)
{
    // Enquanto o valor de índice < 10 = listagem de nomes, seguindo os valores do índice;
    Console.WriteLine("Nome " + i);
    Console.WriteLine(nomes[i]);

    // i++ fará com que o índice continue aumentando seu valor, até o seu limite (<10).
    i++;


}

