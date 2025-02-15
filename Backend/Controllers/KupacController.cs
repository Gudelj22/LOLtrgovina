using Backend.Data;
using Backend.Models;
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
        s
        

        [HttpPost]
        public IActionResult Post(Kupac kupac)
        {
            _context.Kupci.Add(kupac);
            _context.SaveChanges();
            return StatusCode(StatusCodes.Status201Created, kupac);
           
        
        }


       
        [HttpPut]
        public IActionResult Put(Kupac kupac)
        {
            var kupacIzBaze = _context.Kupci.Find(kupac.Sifra);
            if(kupacIzBaze == null)
            {
                return NotFound(new { poruka = "Kupac nije pronadjen" });
            }
            kupacIzBaze.Ime =  kupac.Ime;
            kupacIzBaze.Prezime = kupac.Prezime;
            kupacIzBaze.Godine = kupac.Godine;
            kupacIzBaze.Oib = kupac.Oib;
            _context.SaveChanges();

            return Ok(kupacIzBaze);
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
                var kupacIzBaze = _context.Kupci.Find(sifra);
                if (kupacIzBaze == null)
                {
                    return NotFound(new { poruka = "Kupac nije pronadjen" });
                }
               _context.Kupci.Remove(kupacIzBaze);
                _context.SaveChanges();
                return Ok(new { poruka = "Obrisano" });

            }
        }
    }
}
