function toString(tempArray){
    var string = '\n';
    tempArray.forEach(function(element){
        string += element + '\n';
    });
    return string;
}
module.exports = toString;