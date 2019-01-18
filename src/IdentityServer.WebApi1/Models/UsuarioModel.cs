using System.Collections.Generic;

namespace IdentityServer.WebApi1.Models
{
    public class UsuarioModel
    {
        public int Id { get; set; }
        public string Nome { get; set; }

        public List<UsuarioModel> GetAll()
        {
            return new List<UsuarioModel>()
            {
                new UsuarioModel() {Id = 1, Nome = "Fábio Fonseca" },
                new UsuarioModel() {Id = 2, Nome = "Fábio Fonseca2" },
                new UsuarioModel() {Id = 3, Nome = "Fábio Fonseca3" },
            };
        }
    }
}