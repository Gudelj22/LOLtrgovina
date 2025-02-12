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

    }
}
