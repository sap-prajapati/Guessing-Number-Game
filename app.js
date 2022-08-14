const output = document.querySelector('.output');
const main = eleMaking('div', output,'main', 'guess the number');
const guess = eleMaking('input', output,'guess', '');
const btn = eleMaking('button', output,'btn', 'click ME');
guess.setAttribute('type' , 'number');
guess.style.display = 'none';
const game = {
    hiddenNumber : 0,
    inplay : false,
    max : 10
}
btn.addEventListener('click',(e)=>{
    if(!game.inplay){
        game.hiddenNumber = ranNumber(game.max);
        game.inplay = true;
        btn.textContent = 'Guess the number';
        guess.style.display = 'inline-block';
        main.innerHTML = `guess the number ranging from 0 - ${game.max}`;
    }
    else{
        let val = Number(guess.value);
        if( val === game.hiddenNumber)
        main.innerHTML = `correct number = ${game.hiddenNumber}`;
        else
        if( val > game.hiddenNumber)
        {
            main.innerHTML = `${val} was too high`;
        }
        else if( val < game.hiddenNumber){
            main.innerHTML = `${val} was too low`;
        }
    }

});

function ranNumber(max){
    return Math.floor(Math.random()*max);
}



function eleMaking(elType, elParent ,elClass, elHtml){
    const ele = document.createElement(elType);
    elParent.appendChild(ele);
    ele.innerHTML = elHtml;
    ele.classList.add(elClass);
    return ele;
}

