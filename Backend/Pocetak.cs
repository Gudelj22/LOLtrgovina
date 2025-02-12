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
            return Ok(new { Ime = ime, Prezime = prezime, Godina = godina });
            try
            {
                if (godina < 18)
                {
                    return BadRequest(new { poruka = "nisi punoljetan" });

                }
                else
                {
                    return Ok(new { poruka = "punoljetan si" });
                }
            }
            catch 
            {
                Console.WriteLine("uspiješno si  unjeo/la podatke");


            }
           
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
        

        [HttpPost]
        public IActionResult Post(int heroja, decimal cijena, int kolicina, int kupac = sifra)
        {
            Post { heroja = jhin};
            Post { cijena = 1500}; 
            Post { kolicina = 1 }; 
            Post { kupac = 1 };

        }

        [HttpGet]
        public IActionResult GetActionResult(int kupac,string roba)
        {
            GetActionResult(narudzba);

            for ( kupac  || roba  ) ;

            try
            {
                foreach (kupac=sifra++ roba=sifra) ; 
            }
            catch 
            {
                Post.sifra;
               
            }

        }
    }
}
