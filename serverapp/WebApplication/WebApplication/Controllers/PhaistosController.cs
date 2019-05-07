using Microsoft.AspNetCore.Mvc;
using serverapp.Models;
using System;
using System.Collections.Generic;
using System.IO;
using VoiceRSS_SDK;

namespace serverapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhaistosController : ControllerBase
    {
        // GET api/Phaistos/5
        [HttpPost("convert")]
        public void Get(List<string> text)
        {
            var apiKey = "c2e4f726d17e459796706e2436d73806";
            var isSSL = false;
            var lang = Languages.English_UnitedStates;

            var voiceParams1 = new VoiceParameters(text[0], lang)
            {
                AudioCodec = AudioCodec.MP3,
                AudioFormat = AudioFormat.Format_44KHZ.AF_44khz_16bit_stereo,
                IsBase64 = false,
                IsSsml = false,
                SpeedRate = 0
            };

            var voiceParams2 = new VoiceParameters(text[1], lang)
            {
                AudioCodec = AudioCodec.MP3,
                AudioFormat = AudioFormat.Format_44KHZ.AF_44khz_16bit_stereo,
                IsBase64 = false,
                IsSsml = false,
                SpeedRate = 0
            };

            var voiceProvider = new VoiceProvider(apiKey, isSSL);
            var voice1 = voiceProvider.Speech<byte[]>(voiceParams1);
            var voice2 = voiceProvider.Speech<byte[]>(voiceParams2);

            //To convert byte array to file
            var fileName1 = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "disk1.mp3");
            var fileName2 = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "disk2.mp3");

            System.IO.File.WriteAllBytes(fileName1, voice1);
            System.IO.File.WriteAllBytes(fileName2, voice2);
        }
    }
}
