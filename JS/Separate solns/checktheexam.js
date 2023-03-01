// 7 Kyu | Check the exam

function checkExam(array1, array2) {
  let score = 0;
  for (i = 0; i < array1.length; i++) {
    if (array2[i] == array1[i]) score += 4;
    else if (array2[i] !== array1[i] && array2[i] !== "") score--;
  }
  return score < 0 ? 0 : score;
}
