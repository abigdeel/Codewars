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

//// 