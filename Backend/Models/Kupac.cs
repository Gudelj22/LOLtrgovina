namespace Backend.Models
{
    public class Kupac:Entitet
    {
       public string Ime { get; set; } ="";

        public string Prezime { get; set; } = "";
        public int Godine { get; set; }
        public string? Oib { get; set; }
    }
}
