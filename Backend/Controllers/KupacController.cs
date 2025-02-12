using Backend.Data;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")] // Ruta ce se zvati /api/v1/HttpMetode
    public class KupacController : ControllerBase
    {

        // koristimo dependency injection
        // 1. definiramo privatno svojstvo
        private readonly BackendContext _context;


        // 2. u konstruktoru postavljamo vrijednost
        public KupacController(BackendContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_context.Kupci);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        

        [HttpPost]
        public IActionResult Post(kupac kupac)
        {
            kupac.Ime = "Hello " + kupac.Ime;
            return StatusCode(StatusCodes.Status201Created, kupac);
            kupac.Prezime = "Hello " + kupac.Prezime;
            return StatusCode(StatusCodes.Status201Created, kupac);
        }
        }


       
        [HttpPut]
        public IActionResult Put(Osoba osoba)
        {
            osoba.Ime = "Promjenio " + osoba.Ime;
            return Ok(osoba);
        }


       

        [HttpDelete]
        public IActionResult Delete(int sifra)
        {
            if (sifra <= 0)
            {
                return BadRequest(new { poruka = "Sifra mora biti veca od 0" });
            }
            else
            {
                return Ok(new { poruka = "Obrisano" });

            }
        }
    }
}
