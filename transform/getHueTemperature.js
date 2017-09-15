(function(i) {
    var json = JSON.parse(i);
    return ((json['state']['temperature']))/100;
})(input)