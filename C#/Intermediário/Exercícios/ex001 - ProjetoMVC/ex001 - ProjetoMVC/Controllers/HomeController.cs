using ex001___ProjetoMVC.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace ex001___ProjetoMVC.Controllers
{
    public class HomeController : Controller
    {
        

        public IActionResult Index()
        {
            HomeModel home = new HomeModel();

            home.Nome = "Letícia";
            home.Email = "leticianinho@gmail.com";
            home.Telefone = "+553192303395";




            return View(home);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}