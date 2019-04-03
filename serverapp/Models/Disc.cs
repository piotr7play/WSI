using System;
using System.Collections.Generic;

namespace serverapp.Models {
    public class Disc {
        private Dictionary<int, string> disc;
        private const string emptySyllabe = "  ";

        public Disc () {
            disc = new Dictionary<int, string> ();

            for (int i = 1; i <= 45; i++) {
                disc.Add (i, emptySyllabe);
            }

        }

        public void setSymbolSyllabe (int symbolNr, string symbolSyllabe) {
            try {
                disc[symbolNr] = symbolSyllabe;
            } catch (Exception e) {
                disc.Add (symbolNr, symbolSyllabe);
            }
        }

        public Symbol getSymbol (int symbolNr) {
            string syllabe;

            try {
                syllabe = disc[symbolNr];
            } catch (Exception e) {
                syllabe = emptySyllabe;
            }

            return new Symbol () { Id = symbolNr, Syllabe = syllabe };
        }

        public PhaistosDisc getDisc() {
            PhaistosDisc p = new PhaistosDisc();

            try {
                p.SiteA = disc[2] + disc[12] + disc[13] + disc[1] + disc[18] + " " + disc[24] + disc[40] + disc[12] + disc[29] + disc[45] + disc[7] + " " + disc[29] + disc[29] + disc[34] + disc[2] + disc[12] + disc[4] + disc[40] + disc[33] + disc[27] + disc[45] + disc[7] + disc[12] + disc[27] + disc[44] + disc[8] + disc[2] + disc[12] + disc[6] + disc[18] + disc[31] + disc[26] + disc[35] + disc[2] + disc[12] + disc[41] + disc[19] + disc[35] + disc[1] + disc[41] + disc[40] + disc[7] + disc[2] + disc[12] + disc[32] + disc[23] + disc[38] + " " + disc[39] + disc[11] +  disc[2] + disc[27] + disc[25] + disc[10] + disc[23] + disc[18] + disc[28] + disc[1] + " " + disc[2] + disc[12] + disc[31] + disc[26] + " " + disc[2] + disc[12] + disc[27] + disc[27] + disc[35] + disc[37] + disc[21] + disc[33] + disc[23] + disc[2] + disc[12] + disc[31] + disc[26] + " " + disc[2] + disc[27] + disc[25] + disc[10] + disc[23] + disc[18] + disc[28] + disc[1] + " " + disc[2] + disc[12] + disc[31] + disc[26] + " " + disc[2] + disc[12] + disc[27] + disc[14] + disc[32] + disc[18] + disc[27] + disc[6] + disc[18] + disc[17] + disc[19] + disc[31] + disc[26] + disc[12] + disc[2] + disc[12] + disc[13] + disc[1] + disc[23] + disc[19] + disc[35] + " " + disc[10] + disc[3] + disc[38] + disc[2] + disc[12] + disc[27] + disc[27] + disc[35] + disc[37] + disc[21] + disc[13] + disc[1] + disc[10] + disc[3] + disc[38];
                p.SiteB = disc[2] + disc[12] + disc[22] + disc[40] + disc[7] + disc[27] + disc[45] + disc[7] + disc[35] + disc[2] + disc[37] + disc[23] + disc[5] + " " + disc[22] + disc[25] + disc[27] + disc[33] + disc[24] + disc[20] + disc[12] + disc[16] + disc[23] + disc[18] + disc[43] + " " + disc[13] + disc[1] + disc[39] + disc[33] + disc[15] + disc[7] + disc[13] + disc[1] + disc[18] + disc[22] + disc[37] + disc[42] + disc[25] + disc[7] + disc[24] + disc[40] + disc[35] + disc[2] + disc[26] + disc[36] + disc[40] + disc[27] + disc[25] + disc[38] + disc[1] +  disc[29] + disc[24] + disc[24] + disc[20] + disc[35] + disc[16] + disc[14] + disc[18] + disc[29] + disc[33] + disc[1] + disc[6] + disc[35] + disc[32] + disc[39] + disc[33] + disc[2] + disc[9] + disc[27] + disc[1] + disc[29] + disc[36] + disc[7] + disc[8] + " " + disc[29] + disc[8] + disc[13] + disc[29] + disc[45] + disc[7] + " " + disc[22] + disc[29] + disc[36] + disc[7] + disc[8] + " " + disc[27] + disc[34] + disc[23] + disc[25] + disc[7] + disc[18] + disc[35] + disc[7] + disc[45] + disc[7] + " " + disc[7] + disc[23] + disc[18] + disc[24] + disc[22] + disc[29] + disc[36] + disc[7] + disc[8] + " " + disc[9] + disc[30] + disc[39] + disc[18] + disc[7] + disc[2] + disc[6] + disc[35] + disc[23] + disc[7] + disc[29] + disc[34] + disc[23] + disc[25] + disc[45] + disc[7];
            } catch (Exception e) {
                //never happend?
            }

            return p; //Method must have a return type 
        }
    }
}