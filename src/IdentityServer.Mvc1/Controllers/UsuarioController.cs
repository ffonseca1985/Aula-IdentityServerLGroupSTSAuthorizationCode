using IdentityServer.Mvc1.Helpers;
using IdentityServer.Mvc1.Views.Usuario;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace IdentityServer.Mvc1.Controllers
{
    public class UsuarioController : Controller
    {
        // GET: Usuario
        public async Task<ActionResult> Index()
        {
            var httpClient = HttpHelper.GetClient();

            var usuarioApi = await httpClient.GetAsync("api/Usuario").ConfigureAwait(false);

            if (usuarioApi.IsSuccessStatusCode)
            {
                var usuarios = await usuarioApi.Content.ReadAsStringAsync().ConfigureAwait(false);

                var model = JsonConvert.DeserializeObject<IList<UsuarioViewModel>>(usuarios).ToList();

                return View(model);
            }
            else
            {
                var controller = this.ControllerContext.RouteData.Values["Controller"].ToString();
                var view = this.ControllerContext.RouteData.Values["Action"].ToString();

                return View("Error", new HandleErrorInfo(new ApplicationException("Não autorizado"), controller, view));
            }
        }
    }
}