//// 6 kyu | extract file name

function extractFileName(dirtyFileName) {
  return dirtyFileName
    .split("_")
    .filter((piece, index) => index > 0)
    .join("_")
    .split(".")
    .reverse()
    .filter((piece, index) => index > 0)
    .reverse()
    .join(".");
}

//alternatively

function getFileName(filename) {
  return filename.slice(filename.indexOf("_") + 1, filename.lastIndexOf("."));
}

//////////////////////////////////////////////////////////////////////////////

//// 6 kyu | Meeting

function meeting(s) {
  return (
    "(" +
    s
      .toUpperCase()
      .split(";")
      .map((fulln) => {
        return fulln.split(":").reverse().join(", ");
      })
      .sort()
      .join(")(") +
    ")"
  );
}
