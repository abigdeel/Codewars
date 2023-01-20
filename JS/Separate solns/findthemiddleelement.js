// 7 Kyu | Find the middle element

function gimme(triplet) {
  array = [...triplet];
  middle = triplet.sort((a, b) => a - b)[1];
  return array.indexOf(middle);
}
