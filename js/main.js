let hedSection = document.querySelector('#hed')
let elForm = document.querySelector('#site_form');
let elInputDistance = document.querySelector('#distance');
let elSubmitBtn = document.querySelector('#submit_btn');
let conculateDistance = document.querySelector('#wrapper') ;


let SPEED_ON_FOOT = 3.6;
let SPEED_BY_BIKE = 20.1;
let SPEED_BY_CAR = 100;
let SPEED_BY_PLANE = 800;

//////////////////////////////////////////////////////////////

let pre_wrapper = document.createElement('div');
pre_wrapper.setAttribute('class', 'calculate__page');
let calculateList = document.createElement('ul');
calculateList.setAttribute('class', 'calculate_list');

//////////////////////////////////////////////////////////

hedSection.appendChild(pre_wrapper);
pre_wrapper.appendChild(calculateList);
//////////////////////////////////////////////////////////////

let calculateListFoot = document.createElement('li');
calculateListFoot.setAttribute('class', 'list__item');
let calculateListBicycle = document.createElement('li');
calculateListBicycle.setAttribute('class', 'list__item');
let calculateListCar = document.createElement('li');
    calculateListCar.setAttribute('class', 'list__item');
let calculateListPlane = document.createElement('li');
    calculateListPlane.setAttribute('class', 'list__item');

////////////////////// ADD ELEMENT//////////////////////////////

let calculateFootSteps = document.createElement('p');
let calculate_Foot_StepsTitle = document.createElement('h2')
let calculateBicycleSteps = document.createElement('p');
let calculate_Bicycle_StepsTitle = document.createElement('h2')
let calculateCarSteps = document.createElement('p');
let calculate_Car_StepsTitle = document.createElement('h2')
let calculatePlaneSteps = document.createElement('p');
let calculate_Plane_StepsTitle = document.createElement('h2')

/////////////////////////////setAttribute//////////////////////////////////
calculateFootSteps.setAttribute('class', 'on_foot');
calculate_Foot_StepsTitle.setAttribute('class', 'steps-title');
calculateBicycleSteps.setAttribute('class', 'by_bike');
calculate_Bicycle_StepsTitle.setAttribute('class', 'steps-title');
calculateCarSteps.setAttribute('class', 'by_car');
calculate_Car_StepsTitle.setAttribute('class', 'steps-title');
calculatePlaneSteps.setAttribute('class', 'by_plane');
calculate_Plane_StepsTitle.setAttribute('class', 'steps-title');
/////////////////////////////////////////////////////////////////

calculateList.appendChild(calculateListFoot);
calculateListFoot.appendChild(calculate_Foot_StepsTitle);
calculateListFoot.appendChild(calculateFootSteps);
///////////////////////////BICYCLE////////////////////
calculateList.appendChild(calculateListBicycle);
calculateListBicycle.appendChild(calculate_Bicycle_StepsTitle);
calculateListBicycle.appendChild(calculateBicycleSteps);
///////////////////////////CAR////////////////////
calculateList.appendChild(calculateListCar);
calculateListCar.appendChild(calculate_Car_StepsTitle);
calculateListCar.appendChild(calculateCarSteps);
///////////////////////////Plane////////////////////
calculateList.appendChild(calculateListPlane);
calculateListPlane.appendChild(calculate_Plane_StepsTitle);
calculateListPlane.appendChild(calculatePlaneSteps);

//////////////////////////////////////////////////////////////////////////

calculate_Foot_StepsTitle.textContent = 'Piyoda :'
console.log(calculateListFoot);

calculate_Bicycle_StepsTitle.textContent = 'Bicycle :';
console.log(calculateListBicycle);

calculate_Car_StepsTitle.textContent = 'Car :';
console.log(calculateListCar);

calculate_Plane_StepsTitle.textContent = 'Plane :' ;
console.log(calculateListPlane);
//////////////////////////////////////////////////////////////////////////
// Funcsiyada hissoblash

// 3.9
function calculateDistance(distance, speed) {
    var hours = Math.floor(distance / speed);
    var minuts = Math.floor((distance / speed - hours) * 60);
    var seconds = Math.ceil(((distance / speed - hours) * 60 - minuts) * 60);
    
    var minutjon = minuts? `${minuts} minut` : "" ;
    var secundjon = seconds? `${seconds} secund` : "" ;
    
    if (hours === 0 && minuts === 0) {
        return `${minutjon} ${secundjon}`
    } else if(hours === 0) {
        return `${minutjon} ${secundjon}`
    } else {
        return `${hours} soat ${minutjon} ${secundjon}`
    }
    
    
}
////////////////////////////////////////////////////////////


elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    var inputDistance = Number(elInputDistance.value.trim());
    
    // Early return 
    if (inputDistance <= 0) {
        alert("Nuldan katta raqam kiriting");
        return console.log("Nuldan katta raqam kiriting");
    }
    else if (isNaN(inputDistance)) {
        alert("Raqam kiriting");
        return console.log("Raqam kiriting");
    }
    calculateFootSteps.textContent = calculateDistance(inputDistance, SPEED_ON_FOOT);
    calculateBicycleSteps.textContent = calculateDistance(inputDistance, SPEED_BY_BIKE);
    calculateCarSteps.textContent = calculateDistance(inputDistance, SPEED_BY_CAR)
    calculatePlaneSteps.textContent = calculateDistance(inputDistance, SPEED_BY_PLANE)
    
    // elFoot.textContent = calculateDistance(inputDistance, SPEED_ON_FOOT);
    // elBike.textContent = calculateDistance(inputDistance, SPEED_BY_BIKE);
    // elCar.textContent = calculateDistance(inputDistance, SPEED_BY_CAR);
    // elPlane.textContent = calculateDistance(inputDistance, SPEED_BY_PLANE);
    
});
