// 8 Kyu | Grasshopper - Grade book

function getGrade(s1, s2, s3) {
  avg = (s1 + s2 + s3) / 3;

  switch (true) {
    case avg < 60:
      return "F";
    case avg < 70 && avg >= 60:
      return "D";
    case avg < 80 && avg >= 70:
      return "C";
    case avg < 90 && avg >= 80:
      return "B";
    case avg >= 90:
      return "A";
  }
}
