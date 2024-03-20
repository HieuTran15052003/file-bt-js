function outerF(){
    var x = "World";
    function innerFsetX(val){
    x = val;
    }
    return innerFsetX;
    }
    var a = outerF();
    a("Hello");