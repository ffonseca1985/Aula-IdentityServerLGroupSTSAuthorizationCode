using Microsoft.Owin;
using Owin;
using System.Web.Http;
using IdentityServer3.AccessTokenValidation;
using IdentityServerShared;

[assembly: OwinStartup(typeof(IdentityServer.WebApi1.Startup))]

namespace IdentityServer.WebApi1
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseIdentityServerBearerTokenAuthentication(
             new IdentityServerBearerTokenAuthenticationOptions
             {
                 Authority = Urls.STSIdentity, 
                 RequiredScopes = new[] { "gerenciamentoUsuarios", "scope2" }
             });


            var config = new HttpConfiguration();

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
               name: "DefaultRouting",
               routeTemplate: "api/{controller}/{id}",
               defaults: new { id = RouteParameter.Optional }
           );

            app.UseWebApi(config);   
        }
    }
}
