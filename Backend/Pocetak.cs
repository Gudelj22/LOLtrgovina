using Microsoft.AspNetCore.Mvc;
using WebAPI9.Models;

namespace WebAPI9.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")] // Ruta ce se zvati /api/v1/HttpMetode
    public class HttpMetodeController : ControllerBase
    {




        
        [HttpGet]
        [Route("pozdrav")]
        public string HelloWorld(string kupcu)
        {
            return $"Pozdrav {kupcu}!";
        }


       



       
        [HttpGet]
        [Route("json")]
        public IActionResult GetJson(string ime, string prezime, int godina, )
        {
            return Ok(new { Ime = ime, Prezime = prezime, godina = godina });
        }


       





       

        [HttpPost]
        public IActionResult Post(Osoba osoba)
        {
            osoba.Ime = "Hello " + osoba.Ime;
            return StatusCode(StatusCodes.Status201Created, osoba); // StatusCode(201, osoba);
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
