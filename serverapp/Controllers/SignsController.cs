using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using serverapp.Models;

namespace serverapp.Controllers
{
    [Route("api/")]
    [ApiController]

    public class SignsController : ControllerBase
    {
        private static List<Sign> signs = new List<Sign>();
        private static Disc phaistosDisc = new Disc();

        [HttpGet]
        public ActionResult<List<Sign>> Get()
        {
            return signs;
        }

        [HttpGet("discString")]
        public ActionResult<String> GetDiscString()
        {
            return phaistosDisc.getDiscString();
        }

        [HttpPost]
        public void Post([FromBody] List<Sign> newSigns)
        {
            signs.Clear();
            newSigns.ForEach(val => { signs.Add(val); });

            phaistosDisc.setDiscSigns(signs);
        }
    }
}
 
 