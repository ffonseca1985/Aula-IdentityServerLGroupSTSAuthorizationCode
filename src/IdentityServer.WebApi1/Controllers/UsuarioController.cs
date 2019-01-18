using IdentityServer.WebApi1.Models;
using System.Web.Http;
using System.IdentityModel;
using Thinktecture.IdentityModel.WebApi;

namespace IdentityServer.WebApi1.Controllers
{
    //[ScopeAuthorize("sasasd")]
    [ScopeAuthorize("gerenciamentoUsuarios")]
    [Authorize]
    public class UsuarioController : ApiController
    {
        public IHttpActionResult Get()
        {
            var model = new UsuarioModel();
            return Ok(model.GetAll());
        }
        [ScopeAuthorize("scope2")]
        [Authorize]
        public IHttpActionResult Get2()
        {
            var model = new UsuarioModel();
            return Ok(model.GetAll());
        }
    }
}
