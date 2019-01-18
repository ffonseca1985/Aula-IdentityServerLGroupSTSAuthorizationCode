using IdentityServer3.Core.Models;
using IdentityServerShared;
using System.Collections.Generic;
using System.Security.Claims;

namespace IdentityServer.STS
{
    public static class Clients
    {
        public static IEnumerable<Client> Get()
        {
            return new List<Client>() {

                new Client
                {
                     ClientId = Urls.ClientCredentiaisClientId,
                     ClientName = "Api de acesso a usuarios",
                     Flow = Flows.ClientCredentials,
                     AllowedScopes = new List<string>() {
                         "gerenciamentoUsuarios"
                     },
                     ClientSecrets = new List<Secret>()
                     {
                        new Secret()
                        {
                            Value =  Urls.ClientCredentiaisSecret.Sha256()
                        }
                     }
                },
                new Client
                {
                    ClientId = Urls.ClienteCredentiaisClientIdCode,
                    ClientName = "Api de acesso a usuarios",
                    Flow = Flows.AuthorizationCode,
                    AllowedScopes = new List<string>() {
                         "gerenciamentoUsuarios"
                    },
                    Claims = new List<Claim>()
                    {
                        new Claim(ClaimTypes.Name, "Maria"),
                        new Claim(ClaimTypes.Email, "ffonseca@lgroup.com"),
                    },
                    ClientSecrets = new List<Secret>()
                    {
                        new Secret(Urls.ClientCredentiaisSecret.Sha256())
                    },
                    RedirectUris = new List<string>()
                    {
                        Urls.ClientMvc1CallBack
                    }
                },
                new Client
                {
                    ClientId = Urls.ClientImplicitClientId,
                    ClientName = "Client Name ClientImplicitClient",
                    Flow = Flows.Implicit,
                    RedirectUris = new List<string>
                    {
                        Urls.ClientMvc1CallBack
                    }
                }
            };
        }
    }
}
