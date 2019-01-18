using IdentityModel.Client;
using IdentityServerShared;
using System;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;

namespace IdentityServer.Mvc1.Helpers
{
    public class HttpHelper
    {
        public static HttpClient GetClient()
        {
            HttpClient client = new HttpClient();

            var accessToken = RequestAccessTokenAuthorizationCode();
            
            if (accessToken != null)
            {
                DebugToken(accessToken);
                client.SetBearerToken(accessToken);
            }
            
            client.BaseAddress = new Uri(Urls.WebApi1);

            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));

            return client;
        }


        //Install-packge IdentityModel
        //Classe utilitario para fazer toda a parte de requisições e seguranças
        private static string RequestAccessTokenAuthorizationCode()
        {
            var cookie = HttpContext.Current.Request.Cookies.Get("lGroupAutorizationCode");
            if (cookie != null && cookie["access_token"] != null)
            {
                return cookie["access_token"];
            }
            
            var urlAtual = HttpContext.Current.Request.Url.OriginalString;

            var authorizeRequest = new AuthorizeRequest(Urls.STSAutorizeEndPoint);

            var url = authorizeRequest.CreateAuthorizeUrl(Urls.ClienteCredentiaisClientIdCode, "code", "gerenciamentoUsuarios",
                Urls.ClientMvc1CallBack, urlAtual);

            HttpContext.Current.Response.Redirect(url);

            // return the token
            return null;
        }

        public static void DebugToken(string token)
        {
            var handler = new JwtSecurityTokenHandler();

            var jsonToken = handler.ReadToken(token) as JwtSecurityToken;
            Debug.Write(jsonToken);
        }
    }
}