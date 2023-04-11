// Your code here


const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#FF69B4';

function moveDodgerLeft() {
    const currPosition = parseInt(dodger.style.left, 10);
    if(currPosition > 0) {
        dodger.style.left = `${currPosition - 1}px`;
    }
    
}


function moveDodgerRight() {
    const currPosition = parseInt(dodger.style.left, 10);
    if(currPosition < 360) {
        dodger.style.left = `${currPosition + 1}px`;
    }
}

document.addEventListener('keydown', (e) => {    
    if(e.key === 'ArrowLeft') {
        moveDodgerLeft();
    }

    if(e.key === "ArrowRight") {
        moveDodgerRight();
    }
})