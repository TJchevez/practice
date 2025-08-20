var createCounter = function(n) {
    
    return function() {
        return n++;
        console.log(counter()); 
        console.log(counter());
        console.log(counter());
    };
};


