// const radius = [2,4,1,3];

// const calArea = (radius)=>{
//     let area = [];
//     for(let i = 0; i<radius.length; i++){
//         area.push(Math.PI * radius[i]*radius[i]);
//     }
//     console.log(area);
// }

// calArea(radius);


// const calCircum = (radius)=>{
//     let circum = [];
//     for(let i = 0; i<radius.length; i++){
//         circum.push(2 * Math.PI * radius[i]);
//     }
//     console.log(circum);
// }

// calCircum(radius);

// const calDiameter = (radius)=>{
//     let diameter = [];
//     for(let i = 0; i<radius.length; i++){
//         diameter.push(2 * radius[i]);
//     }
//     console.log(diameter);
// }

// calDiameter(radius);



const radius = [2,4,1,3];

const area = (radius)=>{
    return Math.PI * radius * radius;
}

const circum = (radius)=>{
    return 2 * Math.PI * radius;
}

const diameter = (radius)=>{
    return 2 * radius;
}

const calculate = (radius, logic)=>{
    let output = [];
    for(let i = 0; i<radius.length; i++){
        output.push(logic(radius[i]));
    }
    console.log(output);
}

calculate(radius, area);
calculate(radius, circum);
calculate(radius, diameter);