(function(i) {
    var json = JSON.parse(i);
    return ((json['state']['presence'])) == true ? "CLOSED" : "OPEN";
})(input)