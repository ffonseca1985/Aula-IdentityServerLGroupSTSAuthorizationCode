using IdentityServer3.Core.Models;
using System.Collections.Generic;

namespace IdentityServer.STS
{
    public static class Scopes
    {
        public static IEnumerable<Scope> Get()
        {
            return new List<Scope>
                {                    
                    new Scope
                    { 
                        Name = "gerenciamentoUsuarios",
                        DisplayName = "gerenciamentoUsuarios",
                        Description = "gerenciamentoUsuarios.",
                        Type = ScopeType.Resource 
                    }
                };
        }
    }
}
