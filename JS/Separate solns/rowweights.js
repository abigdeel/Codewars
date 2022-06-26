// 7 Kyu | Row Weights

function rowWeights(array){
    let r1 = 0;
    let r2 = 0;
    array.forEach((person, index) => {
      if (index % 2 == 0) r1 += person;
      else r2 += person
    });
    return [r1, r2];
  }