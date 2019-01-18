using IdentityModel.Client;
using IdentityServerShared;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace IdentityServer.Mvc1.Controllers
{
    public class UsuarioCallbackController : Controller
    {
        // GET: UsuarioCallback
        public async Task<ActionResult> Index()
        {
            var authCode = Request.QueryString["code"];

            // with the auth code, we can request an access token.
            var client = new TokenClient(
                Urls.STSTokenEndPoint,
                Urls.ClienteCredentiaisClientIdCode,
                Urls.ClientCredentiaisSecret);

            var tokenResponse = await client.RequestAuthorizationCodeAsync(
                authCode,
                Urls.ClientMvc1CallBack);

            // we save the token in a cookie for use later on
            Response.Cookies["lGroupAutorizationCode"]["access_token"] = tokenResponse.AccessToken;

            var handler = new JwtSecurityTokenHandler();
            var token = (handler.ReadToken(tokenResponse.AccessToken) as JwtSecurityToken);

            var state = Request.QueryString["state"];

            return Redirect(state);
        }
    }
}