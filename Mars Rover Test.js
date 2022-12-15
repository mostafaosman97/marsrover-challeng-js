const textComands = document.getElementById("marsCommands"),
    showInfo = document.getElementById("show-info"),
    calcButton = document.getElementById("myButton");



    
//Rover Object
let mRover = { x: 0, y: 0, direction: 'N', obstacle: false };

//known Obstacles
let obstacleArray = [[1, 4], [3, 5], [7, 4]];




/************************************** Movement *******************************************************/


// rover turn Right

function turnR() {
    console.log('turning right !')

    switch (mRover.direction) {
        case 'N':
            mRover.direction = 'E'
            break;

        case 'E':
            mRover.direction = 'S'
            break;

        case 'S':
            mRover.direction = 'W'
            break;

        case 'W':
            mRover.direction = 'N'
            break;

    }

}



// rover turn Left

function turnL() {
    console.log('turning Left !')

    switch (mRover.direction) {
        case 'N':
            mRover.direction = 'W'
            break;

        case 'W':
            mRover.direction = 'S'
            break;

        case 'S':
            mRover.direction = 'E'
            break;

        case 'E':
            mRover.direction = 'N'
            break;

    }

}

// rover move forward

function moveForward() {
    console.log('move forward ! ')

    switch (mRover.direction) {
        case 'N':
            mRover.y += 1;
            break;

        case 'W':
            mRover.x -= 1;
            break;

        case 'S':
            mRover.y -= 1;
            break;

        case 'E':
            mRover.x += 1;
            break;
    }
}

// return to backward
function moveBackword() {
    console.log('move Backward !')

    switch (mRover.direction) {
        case 'N':
            mRover.direction = 'S'
            mRover.y -= 1;
            break;

        case 'W':
            mRover.direction = 'E'
            mRover.x += 1;
            break;

        case 'S':
            mRover.direction = 'N'
            mRover.y += 1;
            break;

        case 'E':
            mRover.direction = 'W'
            mRover.x -= 1;
            break;
    }
}


/************************************** Movement Commands & check Obstacles *******************************************************/


// commands array loop

function listOfCommands() {

    let myCommands = textComands.value.toLowerCase(),
        listOfOrders = myCommands.split("");

    listOfOrders.forEach(char => {
        if (char == 'f' || char == 'b' || char == 'r' || char == 'l') {

            switch (char) {
                case 'f':
                    moveForward();
                    break;
                case 'b':
                    moveBackword();
                    break;
                case 'l':
                    turnL();
                    break;
                case 'r':
                    turnR();
                    break;

            }


            let nextCoordinate = [mRover.x + 1, mRover.y + 1]

            //loop on obstacles
            for (let i = 0; i < obstacleArray.length; i++) {
                let currentObs = obstacleArray[i];
                console.log(currentObs)


                //check Obstacles in next coordinate

                if (nextCoordinate[0] === currentObs[0] && nextCoordinate[1] === currentObs[1]) {
                    mRover.obstacle = true;
                    console.log(mRover.obstacle, nextCoordinate, currentObs)
                }
            }


            if (mRover.obstacle) {

                showInfo.style.color = 'red';
                showInfo.innerHTML = `the current coordinate & direction for Rover is (${mRover.x},${mRover.y}) ${mRover.direction}    STOPPED !`
            } else {
                showInfo.style.color = 'black';
                showInfo.innerHTML = `the current coordinate & direction for Rover is (${mRover.x},${mRover.y}) ${mRover.direction}`
            }



        } else {
            showInfo.style.color = 'red';
            showInfo.innerHTML = ("you should use (F,B,L,R) Commands Only");
        }

    });
}

/************************************** Reset Coordibates & Direction [0,0] N *******************************************************/

function resetLocation() {
    mRover.x = 0, mRover.y = 0, mRover.direction = 'N', mRover.obstacle = false;
    showInfo.style.color = 'black';
    showInfo.innerHTML = `the current coordinate & direction for Rover is (${mRover.x},${mRover.y}) ${mRover.direction}`;
}
