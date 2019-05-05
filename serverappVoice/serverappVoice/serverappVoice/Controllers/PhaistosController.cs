using Microsoft.AspNetCore.Mvc;
using serverapp.Models;
using System;
using System.IO;
using VoiceRSS_SDK;

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

        // GET api/Phaistos/5
        [HttpGet("convert")]
        public byte[] Get(string text)
        {
            var apiKey = "c2e4f726d17e459796706e2436d73806";
            var isSSL = false;
            var lang = Languages.English_UnitedStates;

            var voiceParams = new VoiceParameters(text, lang)
            {
                AudioCodec = AudioCodec.MP3,
                AudioFormat = AudioFormat.Format_44KHZ.AF_44khz_16bit_stereo,
                IsBase64 = false,
                IsSsml = false,
                SpeedRate = 0
            };

            var voiceProvider = new VoiceProvider(apiKey, isSSL);
            var voice = voiceProvider.Speech<byte[]>(voiceParams);
            //To convert byte array to file
            var fileName = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "voice.mp3");
            System.IO.File.WriteAllBytes(fileName, voice);
            return voiceProvider.Speech<byte[]>(voiceParams);
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
