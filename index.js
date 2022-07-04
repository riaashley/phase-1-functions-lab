function distanceFromHqInBlocks(x) {
    let distance;
        if (x > 42) {
            distance = x - 42
        }
        else if (x <= 42) {
            distance = 42 - x
        }
        return distance;
}

function distanceFromHqInFeet(x) {
    let blocks = distanceFromHqInBlocks(x);
    return blocks * 264;
}
function distanceTravelledInFeet(x, y){
    let travelled;
    if (x >= y) {
        travelled = (x - y) * 264;
    }
    else if (x < y){
        travelled = (y - x) * 264
    }
    return travelled;
}

function calculatesFarePrice(x, y) {
    let fare;
 let calc = distanceTravelledInFeet(x, y);
    if (calc <= 400) {
        fare = 0
    }
    else if ((calc >401) && (calc <=2000)) {
        fare = (calc - 400) * .02;
    }
    else if (calc > 2001 && calc <= 2500) {
        fare = 25
    }
    else if (calc > 2500) {
        fare = 'cannot travel that far';
    }
    return fare;
}
  
  