let score=0;
let score1=0;
let box=document.querySelectorAll('div');
let btn=document.querySelector('.button-up');
let re=document.querySelector('.button-down');
let img=document.querySelector('img')
let player1=document.querySelector('.player1')
let player2=document.querySelector('.player2');
player1.innerText='PLAYER 1 TURN'
player1.style.backgroundColor='yellow';
let prev=0;
let prev1=0;
let f=0;
let c=0;
btn.addEventListener('click',function(){
    let n=diceroll();
    img.setAttribute('src',arr[n-1]);
    if(f==0){
    
    
     if(score!==score1){
        degrade(score);
     }
     

         player1.style.backgroundColor='white'
     player1.innerText='PLAYER 1'
     player2.style.backgroundColor='orange'
     player2.innerText='PLAYER 2 TURN'
     
     score=score+n;
    update(score,f);
    if(score===100){
        
        setTimeout(function(){
             restart();
            alert('PLAYER 1 WIN'); 
        },150)
    }
    else if(score>100){
         score=prev;
         update(score)
    }
    else{
        
        prev=score;

    }
    let x=checksnake(score)
    if(x!=0){
       
        setTimeout(function(){
            degrade(score)
            update(x,0);
            score=x;
        },350)
       
    }
    let y=checkladder(score);
    if(y!=0){
        
        setTimeout(function(){
            degrade(score)
            update(y,0);
            score=y;
        },350)
       
    }
    f=1;

    }
    else{
        player2.style.backgroundColor='white'
        player2.innerText='PLAYER 2'
        player1.style.backgroundColor='yellow'
        player1.innerText='PLAYER 1 TURN'
        if(score!==score1){
            degrade(score1);
         }
        score1=score1+n;
        update(score1,f);
        if(score1===100){
            setTimeout(function(){
                restart();
                alert('PLAYER 2 WIN');
            },150) 
        }
        else if(score1>100){
             score1=prev1;
             update(score1);
        }
        else{
            prev1=score1;
        }
        let x=checksnake(score1)
        if(x!=0){
           
            setTimeout(function(){
                degrade(score1)
                update(x,1);
                score1=x;
            },350)
           
        }
        let y=checkladder(score1);
        if(y!=0){
            
            setTimeout(function(){
                degrade(score1)
                update(y,1);
                score1=y;
            },350)
           
        }
        f=0;
    }
})
let snake = [[17 , 7] , [54 , 34] , [62 , 19] , [64 , 60] , [87 , 36] , [93 , 73], [95 , 75], [98 , 79]];
let ladder = [[1 , 38] , [4 , 14] , [9 , 31] , [21 , 42] , [28 , 84] , [51 , 67] , [72 , 91],[80,99]];

function checksnake(s){
      for(let item of snake){
        if(item[0]===s){
            return item[1];
        }
      }
      return 0;
}

function checkladder(s){
   for(let item of ladder){
    if(item[0]===s){
        return item[1];
    }
   }
   return 0;
}


function update(s,fk){
for(let cell of box){
        if(parseInt(cell.innerText)===s){
            if(fk===0)
           cell.parentElement.style.backgroundColor='yellow'  ;
          else{
            cell.parentElement.style.backgroundColor='orange'  ;
          }
        }
}
}
function diceroll(){
    return Math.floor(Math.random()*6+1);
}
let arr=['https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/900px-Dice-4-b.svg.png?20231029222734',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/900px-Dice-5-b.svg.png?20231029222800',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/900px-Dice-6-b.svg.png?20231029222821'
]

function degrade(s){
    for(let cell of box){
        if(parseInt(cell.innerText)===s){
            if(checkladder(s)!=0){
                cell.parentElement.style.backgroundColor='green';
            }
            else if(checksnake(s)!=0){
                cell.parentElement.style.backgroundColor='red';
            }
            else{
                cell.parentElement.style.backgroundColor='white';
            }
}
}
}
re.addEventListener('click',function(){
    restart()
})
function restart(){
    player2.style.backgroundColor='white'
        player2.innerText='PLAYER 2'
    player1.innerText='PLAYER 1 TURN'
player1.style.backgroundColor='yellow';
      degrade(score)
      degrade(score1);
      score1=0;
      score=0;
}
