function DNAtoRNA(dna) {
  dna = dna.split("T").join("U");
  return dna;
}

console.log(DNAtoRNA("CGATCGCGATATACGCCCG"));
