// 7 Kyu | String ends with

function solution(str, ending) {
  return str.includes(ending) && str.slice(str.length - ending.length) == ending;
}
