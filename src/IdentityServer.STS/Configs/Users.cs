using IdentityServer3.Core.Services.InMemory;
using System.Collections.Generic;

namespace IdentityServer.STS
{
    public static class Users
    {
        public static List<InMemoryUser> Get()
        {
            return new List<InMemoryUser>() {
                 
                new InMemoryUser
	            {
	                Username = "ffonseca",
	                Password = "ffonseca",                    
	                Subject = "b05d3546-6ca8-4d32-b95c-77e94d705ddf"
	             }
            };
        }
    }

}
