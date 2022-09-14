


using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ControleDeContatos.Models


{
    [Table("Contatos")]
        public class ContatoModel

    {
        [Key]
        public int ID { get; set; }

        public string Nome { get; set; }

        public string email { get; set; }

        public string celular { get; set; }
    }
}
