// 7 Kyu | Cat years, dog years

var ownedCatAndDog = function (catYears, dogYears) {
  let [ownedCat, ownedDog] = [0, 0];

  if (catYears >= 15) {
    ownedCat++;
  }
  catYears -= 15;

  if (catYears >= 9) {
    ownedCat++;
  }
  catYears -= 9;

  if (catYears > 0) {
    ownedCat += Math.floor(catYears / 4);
  }

  if (dogYears >= 15) {
    ownedDog++;
  }
  dogYears -= 15;

  if (dogYears >= 9) {
    ownedDog++;
  }
  dogYears -= 9;

  if (dogYears > 0) {
    ownedDog += Math.floor(dogYears / 5);
  }

  return [ownedCat, ownedDog];
};
