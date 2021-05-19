///Assignment 1
function convertFahrToCelsius(value){
    if(value === 0){
        return "-17.7778";
    }else if(value === "0") {
        return "-17.7778";
    }else if(Array.isArray(value)){
        return value + " is not a valid number but a/an array.";
    }else if(typeof value === "object"){
        return value + "is not a valid number but a/an object.";
    }

    let response = (value - 32) * 5/9;
    return response.toFixed(4);
}


///Assignment 2

function checkYuGiOh(value){

    if(typeof value === "string"){
        return "invalid parameter: " + value;
    }

    let range = createArrayRange(value);

    var response = [];

    for(var i = 0; i < range.length; i++){

        if(range[i] % 2 == 0 && range[i] % 3 == 0 && range[i] % 5 == 0){
            range[i] = "yu-gi-oh";
        }

        if(range[i] % 2 == 0 && range[i] % 5 == 0){
            range[i] = "yu-oh";
        }

        if(range[i] % 2 == 0 && range[i] % 3 == 0){
            range[i] = "yu-gi";
        }

        if(range[i] % 3 == 0 && range[i] % 5 == 0){
            range[i] = "gi-ho";
        }

        if(range[i] % 2 == 0){
            range[i] = "yu";
        }
        
        if(range[i] % 3 == 0){
            range[i] = "gi";
        }
        
        if(range[i] % 5 == 0){
            range[i] = "oh";
        }


        response.push(range[i]);
    }
    return response;
}

function createArrayRange(max){
   let  min = 1;
    var range = [];
    for (let i = min; i <= max; i++) {
        range.push(i);
    }
    return range;

}