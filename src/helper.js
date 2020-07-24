
export const rand = (min, max) => {
    let randomNum = Math.random() * (max - min) + min;
    return Math.round(randomNum);
}


export const generateColor = () => {
    // hex numbers 
    var hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var color = '#';
    // we will generate hex color with 6 digit length
    for (var i = 0; i < 6; i++) {
        let index = rand(0,15);
    // Append hex value at the index
    color += hex[index];
    }
    return color;
};