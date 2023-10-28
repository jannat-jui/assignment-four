function cubeNumber(number) {
    if (typeof (number) !== 'number') {
        return 'Please enter a positive number';
    }
    else if (number > 0) {
        let cube = Math.pow(number, 3);
        return cube;
    }
}


function matchFinder(string1, string2) {
    if (typeof (string1) != 'string' || typeof (string2) != 'string') {
        return 'Please enter a String';
    }
    else if (string1.includes(string2)) {
        return true;
    }
    else {
        return false;
    }
}


function sortMaker(arr) {
    if (arr[0] > 0 && arr[1] > 0) {
        if (arr[0] === arr[1]) {
            return "equal";
        }
        else {
            if (arr[1] > arr[0]) {
                return [arr[1], arr[0]];
            } else {
                return [arr[0], arr[1]];
            }
        }
    }
    else if(arr[0] < 0 || arr[1] < 0){
        return "Invalid Input";
    }
}


function findAddress(obj){
    
    let street = obj.street || "__";
    let house = obj.house || "__";
    let society = obj.society || "__";
    return street + ',' + house + ',' + society; 
}


function canPay(changeArray, totalDue) {

    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        sum += changeArray[i];
    }
    if (changeArray.length == 0) {
        return "Please enter some element in the array";
    }
    else if (sum >= totalDue) {
        return true;
    }
    else if (sum < totalDue) {
        return false;
    }
}