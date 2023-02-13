// 5 Kyu | Extract the domain name from a URL

function domainName(url) {
  return url.includes("www.")
    ? url.split("www.")[1].split(".")[0]
    : url.includes("://")
    ? url.split("://")[1].split(".")[0]
    : url.split(".")[0];
}

url = "https://www.google.com";
console.log(domainName(url));
