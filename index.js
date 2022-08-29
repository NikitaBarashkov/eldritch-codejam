'use sctrict'

const cardsWithOldMen = document.querySelectorAll('.box_oldmen');
const boxLevelGame = document.querySelector('.level-box')

let greenCards = [];
let brownCards = [];
let blueCards = [];

const nextCard = document.querySelector('.game-cards');

const getCards = () =>{
  const stage1 = [[], [], []]
  const stage2 = [[], [], []]
  const stage3 = [[], [], []]  
    
    
    if(cardsWithOldMen[0].classList.contains('cheked-oldmen')){
      for(let i = 0; i < 5; i++){
        let num = Math.floor(Math.random() * 10 * 2 - 2);

        if(num <= 0){
          num = 1;
        }
        const imgGreen = new Image();
        imgGreen.src = `./assets/MythicCards/green/green${num}.png`;
        greenCards.push(imgGreen)
      } 

      for(let i = 0; i < 9; i++){
        let num = Math.floor(Math.random() * 10 * 2 + 1);
        
        const imgBrown = new Image();
        imgBrown.src = `./assets/MythicCards/brown/brown${num}.png`;
        brownCards.push(imgBrown)
      }

      for(let i = 0; i < 2; i++){
        let num = Math.floor(Math.random() * 10 + 2);
        
        const imgBlue = new Image();
        imgBlue.src = `./assets/MythicCards/blue/blue${num}.png`;
        blueCards.push(imgBlue)
      }

      // console.log(greenCards.length)
      // console.log(brownCards.length)
      // console.log(blueCards.length)

      // nextCard.append(greenCards)

      for(let i = 0; i < greenCards.length; i++){
        if(stage1[0].length === 0){
          stage1[0].push(greenCards[i])
        } else if(stage2[0].length < 2){
          stage2[0].push(greenCards[i]) 
        } else if(stage3[0].length < 2){
          stage3[0].push(greenCards[i])
        }
      }

      for(let i = 0; i < brownCards.length; i++){
        if(stage1[1].length < 2){
          stage1[1].push(brownCards[i])
        } else if(stage2[1].length < 3){
          stage2[1].push(brownCards[i]) 
        } else if(stage3[1].length < 4){
          stage3[1].push(brownCards[i])
        }
      }

      for(let i = 0; i < blueCards.length; i++){
        if(stage1[2].length === 0){
          stage1[2].push(blueCards[i])
        } else if(stage2[2].length === 0){
          stage2[2].push(blueCards[i]) 
        } 
      }

      const boxGreenCards = document.querySelectorAll('.green')
      const boxBrownCards = document.querySelectorAll('.brown')
      const boxBlueCards = document.querySelectorAll('.blue')
      
      function showNumGreenCards(){
        boxGreenCards[0].innerHTML = stage1[0].length
        boxGreenCards[1].innerHTML = stage2[0].length
        boxGreenCards[2].innerHTML = stage3[0].length
      }
      showNumGreenCards()
      
      function showNumBrownCards(){
        boxBrownCards[0].innerHTML = stage1[1].length
        boxBrownCards[1].innerHTML = stage2[1].length
        boxBrownCards[2].innerHTML = stage3[1].length
      }
      showNumBrownCards()
      
      function showNumBlueCards(){
        boxBlueCards[0].innerHTML = stage1[2].length
        boxBlueCards[1].innerHTML = stage2[2].length
        boxBlueCards[2].innerHTML = stage3[2].length
      }
      showNumBlueCards()
      
      let numOfClick = 0;

      function showNextCard(){
        let randNum;
        function rand(){
          randNum = Math.floor(0 + Math.random() * 3)
          return randNum;
        }
        rand()
                
        if(numOfClick < 16){
          if(stage1[0].length + stage1[1].length + stage1[2].length > 0){
            if(stage1[randNum].length < 1){
              for(;stage1[randNum].length < 1;){
                rand();
              }
            }
           
            if(nextCard.firstElementChild){
              const firstCard = nextCard.querySelector('img');
              nextCard.removeChild(firstCard)
            } 
 
            nextCard.append(stage1[randNum][0])
            stage1[randNum].shift()
            showNumGreenCards()
            showNumBrownCards()
            showNumBlueCards()
            numOfClick++;
          } else if(stage2[0].length + stage2[1].length + stage2[2].length > 0){
            if(stage2[randNum].length < 1){
              for(;stage2[randNum].length < 1;){
                rand();
              }
            }

            if(nextCard.firstElementChild){
              const firstCard = nextCard.querySelector('img');
              nextCard.removeChild(firstCard)
            } 
    
            nextCard.append(stage2[randNum][0])
            stage2[randNum].shift()
            showNumGreenCards()
            showNumBrownCards()
            showNumBlueCards()
            numOfClick++;
          } else if(stage3[0].length + stage3[1].length + stage3[2].length > 0){
            if(stage3[randNum].length < 1){
              for(;stage3[randNum].length < 1;){
                rand();
              }
            }
            
            if(nextCard.firstElementChild){
              const firstCard = nextCard.querySelector('img');
              nextCard.removeChild(firstCard)
            } 
        
            nextCard.append(stage3[randNum][0])
            stage3[randNum].shift()
            showNumGreenCards()
            showNumBrownCards()
            showNumBlueCards()
            numOfClick++;
          } 
                  
        } else {
          console.log('old men not work')
          btnCard.classList.remove('active')
        }
      }


    } else {
      console.log('nooo')
    }

    btnCard.addEventListener('click', ()=>{
      showNextCard()
    })
    

  }

cardsWithOldMen.forEach(card => {
    card.addEventListener('click', ()=>{
        boxLevelGame.classList.add('level-box__active');

        for(let card of cardsWithOldMen){
          if(card.classList.contains('cheked-oldmen')){
            card.classList.remove('cheked-oldmen')
          }
        }
        card.classList.add('cheked-oldmen')
        getCards()
    })
    
})


const currentLevel = document.querySelectorAll('.game-level')
const btnStartGame = document.querySelector('.start-game');

function choseLevel(){
    currentLevel[0].addEventListener('click', ()=>{
        currentLevel.forEach(elem =>{
            elem.classList.remove('game-level__active');
        })
        currentLevel[0].classList.add('game-level__active');
        btnStartGame.classList.add('active')  
    })
    currentLevel[1].addEventListener('click', ()=>{
        currentLevel.forEach(elem =>{
            elem.classList.remove('game-level__active');
        })
        currentLevel[1].classList.add('game-level__active');
        btnStartGame.classList.add('active')  
    })
    currentLevel[2].addEventListener('click', ()=>{
        currentLevel.forEach(elem =>{
            elem.classList.remove('game-level__active');
        })
        currentLevel[2].classList.add('game-level__active');
        btnStartGame.classList.add('active')  
    })
    currentLevel[3].addEventListener('click', ()=>{
        currentLevel.forEach(elem =>{
            elem.classList.remove('game-level__active');
        })
        currentLevel[3].classList.add('game-level__active');
        btnStartGame.classList.add('active')  
    })
    currentLevel[4].addEventListener('click', ()=>{
        currentLevel.forEach(elem =>{
            elem.classList.remove('game-level__active');
        })
        currentLevel[4].classList.add('game-level__active');
        btnStartGame.classList.add('active')  
    })
}
choseLevel()

const stageGame = document.querySelector('.stage');
const btnCard = document.querySelector('.card-block');

btnStartGame.addEventListener('click', ()=>{
  stageGame.classList.add('active')
  btnCard.classList.add('active')
  btnStartGame.classList.remove('active')    
})


console.log('1. На выбор предоставляется минимум одна карта древнего +5 баллов (Азатот); 2. На выбор предоставляется несколько уровней сложности (максимум 5) +5 (Выполнен обычный уровень сложности); 3. Карты замешиваются согласно правилам игры +40 баллов; 4. Есть трекер текущего состояния колоды +20 баллов. Итого 70 баллов')