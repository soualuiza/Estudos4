

int opcaonum = 0;
string opcaoletra = null;

Console.WriteLine("                                                           Olá! Eu sou a Atena - insira a opção desejada:                                      ");
Console.WriteLine("                                                                                                                                               ");

Console.WriteLine("                                                            ==============================================                                      ");

Console.WriteLine("                                                              1 - Desbloqueio de Cartão                                                         ");
Console.WriteLine("                                                            ==============================================                                      ");

Console.WriteLine("                                                              2 - Bloqueio de Cartão                                                            ");
Console.WriteLine("                                                            ==============================================                                      ");

Console.WriteLine("                                                              3 - Falar com nosso Atendimento                                                   ");
Console.WriteLine("                                                            ==============================================                                      ");

Console.WriteLine("                                                              4 - Sair do Sistema                                                               ");

opcaonum = int.Parse(Console.ReadLine());


switch (opcaonum)
{
    case 1:
        {
            Console.WriteLine("                                       Seu cartão foi desbloqueado com sucesso! Seu CVV é: 773.                                        ");
            break;
        }

    case 2:
        {
            Console.WriteLine("                        Seu cartão foi bloqueado com sucesso! Caso queira desbloquear, entre em contato com nosso atendimento (opção 3).");
            break;
        }

    case 3:

        {
            Console.WriteLine("                               Olá, sou seu ajudante Perdiz. No que deseja ser ajudado?");
            Console.WriteLine("                               ==========================================================                                      ");
            Console.WriteLine("                               A) Desbloquear um cartão bloqueado                                     ");
            Console.WriteLine("                               ==========================================================                                      ");
            Console.WriteLine("                               B) Sair do atendimento                                                                          ");

            opcaoletra = Console.ReadLine();

            switch (opcaoletra)
            {
                case "a":
                    {
                        Console.WriteLine("                Seu cartão com CVV 773 foi desbloqueado. Obrigado por usar nossos serviços.                          ");
                        break;
                    }

                case "b":
                    {
                        Console.WriteLine("               Fechando a aplicação...                          ");
                        Console.Clear();
                        break;
                    }


            }
            break;
        }

    case 4:
        {
            Console.WriteLine("                                                                                                              Obrigada por usar nossos serviços.                                                                   ");
            Console.Clear();
            break;

        }




        break;
}








