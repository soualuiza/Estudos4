using Microsoft.AspNetCore.Mvc;

namespace ControleDeContatos.Controllers
{
    public class ContatoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult criar()
        {
            return View();
        }

        public IActionResult editar()
        {
            return View();
        }

        public IActionResult apagarConfirmacao()
        {
            return View();
        }

       
    }
}
