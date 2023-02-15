// 7 Kyu | List Filtering

function filter_list(l) {
    return l.filter(val => typeof val == 'number');
}

console.log(filter_list([1, 2, "a", "b", 5]));
