function getValue(a, b, c) {

    if (a === undefined)
     a=3;
     if (b === undefined)
    b= 4;
    return a * b + c;
    
    }
    
    getValue = (a, b=3,c=4) => (a* b+ c);