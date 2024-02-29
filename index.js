const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")
const box3 = document.querySelector(".box3")
const box4 = document.querySelector(".box4")
const box5 = document.querySelector(".box5")
const box6 = document.querySelector(".box6")
const box7 = document.querySelector(".box7")
const box8 = document.querySelector(".box8")
const box9 = document.querySelector(".box9")
const player = document.querySelector(".player")
const newgame = document.querySelector(".newgame")

player.innerHTML = "Current Player - O";
player.innerHTML = "Current Player - X";
let val = 1;
let arr = Array(3).fill().map(() => Array(3).fill(-1));

box1.addEventListener('click',()=>{
    if(arr[0][0] == -1){

        arr[0][0] = val;

        if(val === 1){
            box1.textContent = 'X';
            val = 0;
            player.innerHTML = "Current Player - O";
            
        }else{
            box1.textContent = 'O';
            val = 1;
            player.innerHTML = "Current Player - X";
        }
    
        checkForWin(0,0);
    }
})
box2.addEventListener('click',()=>{
    if(arr[0][1] == -1){

        arr[0][1] = val;

        if(val === 1){
            box2.textContent = 'X';
            val = 0;
            player.innerHTML = "Current Player - O";

        }else{
            box2.textContent = 'O';
            val = 1;
            player.innerHTML = "Current Player - X";
        }
    
        checkForWin(0,1);
    }
})
box3.addEventListener('click',()=>{
    if(arr[0][2] == -1){

        arr[0][2] = val;

        if(val === 1){
            box3.textContent = 'X';
            val = 0;
            player.innerHTML = "Current Player - O";
            
        }else{
            box3.textContent = 'O';
            val = 1;
            player.innerHTML = "Current Player - X";
        }
    
        checkForWin(0,2);
    }
})
box4.addEventListener('click',()=>{
    if(arr[1][0] == -1){

        arr[1][0] = val;

        if(val === 1){
            box4.textContent = 'X';
            val = 0;
            player.innerHTML = "Current Player - O";
            
        }else{
            box4.textContent = 'O';
            val = 1;
            player.innerHTML = "Current Player - X";
        }
    
        checkForWin(1,0);
    }
})
box5.addEventListener('click',()=>{
    if(arr[1][1] == -1){

        arr[1][1] = val;

        if(val === 1){
            box5.textContent = 'X';
            val = 0;
            player.innerHTML = "Current Player - O";
            
        }else{
            box5.textContent = 'O';
            val = 1;
            player.innerHTML = "Current Player - X";
        }
    
        checkForWin(1,1);
    }
})
box6.addEventListener('click',()=>{
    if(arr[1][2] == -1){

        arr[1][2] = val;

        if(val === 1){
            box6.textContent = 'X';
            val = 0;
            player.innerHTML = "Current Player - O";
            
        }else{
            box6.textContent = 'O';
            val = 1;
            player.innerHTML = "Current Player - X";
        }
    
        checkForWin(1,2);
    }
})
box7.addEventListener('click',()=>{
    if(arr[2][0] == -1){

        arr[2][0] = val;

        if(val === 1){
            box7.textContent = 'X';
            val = 0;
            player.innerHTML = "Current Player - O";
            
        }else{
            box7.textContent = 'O';
            val = 1;
            player.innerHTML = "Current Player - X";
        }
    
        checkForWin(2,0);
    }
})
box8.addEventListener('click',()=>{
    if(arr[2][1] == -1){

        arr[2][1] = val;

        if(val === 1){
            box8.textContent = 'X';
            val = 0;
            player.innerHTML = "Current Player - O";
            
        }else{
            box8.textContent = 'O';
            val = 1;
            player.innerHTML = "Current Player - X";
            
        }
    
        checkForWin(2,1);
    }
})
box9.addEventListener('click',()=>{
    if(arr[2][2] == -1){

        arr[2][2] = val;

        if(val === 1){
            box9.textContent = 'X';
            val = 0;
            player.innerHTML = "Current Player - O";
            
        }else{
            box9.textContent = 'O';
            val = 1;
            player.innerHTML = "Current Player - X";
        }
    
        checkForWin(2,2);
    }
})


// check for win
function checkForWin(x,y){
    let horizontal = true;
    let vertical = true;

    let curr = arr[x][y];

    for(let i = 0; i< 3; i++){

        if(horizontal && arr[x][i] !== curr){
            horizontal = false;
            break;
        }
        
    }
    for(let i = 0; i< 3; i++){

        if(vertical && arr[i][y] !== curr){
            vertical = false;
            break;
        }
        
    }


    if(((x == 0 || x == 2 ) && (y == 0 || y == 2)) || (x == 1 && y == 1)){

        if(x == y){
            if(arr[0][0] == curr && arr[1][1] == curr && arr[2][2] == curr){
                arr = Array(3).fill().map(() => Array(3).fill(1));
                paintGreen(1)
                paintGreen(5)
                paintGreen(9)
                winner()
            }

            if((x == 1 && y == 1) && (arr[0][2] == curr && arr[1][1] == curr && arr[2][0] == curr)){
                arr = Array(3).fill().map(() => Array(3).fill(1));
                paintGreen(3)
                paintGreen(5)
                paintGreen(7)
                winner()
            }
        }else{
            if(arr[0][2] == curr && arr[1][1] == curr && arr[2][0] == curr){
                arr = Array(3).fill().map(() => Array(3).fill(1));
                paintGreen(3)
                paintGreen(5)
                paintGreen(7)
                winner()
            }
        }


    }


    for(let i = 0; i< 3; i++){

        if(horizontal){
            let box_no = x*3 + i + 1;
             arr = Array(3).fill().map(() => Array(3).fill(1));
             winner()
            paintGreen(box_no)
        }

        if(vertical){
            let box_no = i*3 + y + 1;
             arr = Array(3).fill().map(() => Array(3).fill(1));
             winner()
            paintGreen(box_no)
        }

    }
}

// painting green

function paintGreen(box_no){
    switch(box_no){
        case 1: box1.classList.add("win");
                break
        case 2: box2.classList.add("win");
                break
        case 3: box3.classList.add("win");
                break
        case 4: box4.classList.add("win");
                break
        case 5: box5.classList.add("win");
                break
        case 6: box6.classList.add("win");
                break
        case 7: box7.classList.add("win");
                break
        case 8: box8.classList.add("win");
                break
        case 9: box9.classList.add("win");
                break
    }
}

// new game

newgame.addEventListener('click',()=>{
    arr = Array(3).fill().map(() => Array(3).fill(-1));
    box1.textContent = '';
    box2.textContent = '';
    box3.textContent = '';
    box4.textContent = '';
    box5.textContent = '';
    box6.textContent = '';
    box7.textContent = '';
    box8.textContent = '';
    box9.textContent = '';

    box1.classList.remove("win");
    box2.classList.remove("win");
    box3.classList.remove("win");
    box4.classList.remove("win");
    box5.classList.remove("win");
    box6.classList.remove("win");
    box7.classList.remove("win");
    box8.classList.remove("win");
    box9.classList.remove("win");

    val = 1;
    player.innerHTML = "Current Player - X";
})

// declare winner

function winner(){
    if(val == 0){
        player.innerHTML = "Winner - X";
    }else{
        player.innerHTML = "Winner - O";
    }
}