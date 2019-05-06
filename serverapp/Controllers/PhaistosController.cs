using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using serverapp.Models;

namespace serverapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhaistosController : ControllerBase
    {
        private static Disc myDisc = new Disc();


        // GET api/Phaistos
        [HttpGet]
        public ActionResult<PhaistosDisc> Get()
        {
            return myDisc.getDisc();
        }

        // GET api/Phaistos/5
        [HttpGet("{id}")]
        public ActionResult<Symbol> Get(int id)
        {
            return myDisc.getSymbol(id);
        }

        // POST api/Phaistos
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/Phaistos
        [HttpPut]
        public void Put(int id, [FromBody] Symbol s)
        {
            myDisc.setSymbolSyllabe(s.Id, s.Syllabe);
        }

        // DELETE api/Phaistos/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            myDisc.setSymbolSyllabe(id, " ");
        }
    }
}
