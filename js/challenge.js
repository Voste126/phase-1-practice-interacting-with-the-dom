const startStopBtn = document.querySelector('#pause')
const addTimeBtn = document.querySelector('#plus')
const minusTimeBtn = document.querySelector('#minus')
const likeBtn = document.querySelector("#heart")
let  counter = document.querySelector('#counter')

//the variables for the count
timercount = 0
//the variables for the start stop button
let timerinterval = null
let timerstatus = "stopped"
// test if the timmer works 
function myWatch(){
     timercount++
    let counter = document.querySelector('#counter').innerText = timercount

}
//window.setInterval(myWatch,1000)

startStopBtn.addEventListener('click',function(){
    //if my timer is on puase then the fisrt if statement is played
    if(timerstatus === "stopped"){
        timerinterval = window.setInterval(myWatch,1000);
        startStopBtn.innerText = `play`
        timerstatus = "started"
    }else{
        //else if my timer is started then we stop the timer
        window.clearInterval(timerinterval);
        startStopBtn.innerText = `pause`
        timerstatus = "stopped"
    }
})

addTimeBtn.addEventListener('click',function(){
    let newcount
    newcount = document.querySelector('#counter').innerText = timercount++
    return newcount
})

minusTimeBtn.addEventListener('click',function(){
    let mylesscount
    mylesscount = document.querySelector('#counter').innerText = timercount--
    return mylesscount
})

likeBtn.addEventListener('click',function(e){
    e.preventDefault();
    displayMySpecialCount()
})



function displayMySpecialCount(){
    //create a child inside the div class comments
    let p = document.createElement('p')
    //append child of di class comments
    document.querySelector('.comments').appendChild(p)
    // display the specific count 
    mynewdiplay = document.querySelector('#counter').innerText = timercount
    //the text inside the p tag created
    p.textContent = `${mynewdiplay} has been liked `
    // return the p tag 
    return p;
}



//call our form and add an event from the input type submit 
document.querySelector('#comment-form').addEventListener('submit',function(e){
    e.preventDefault();
    //to get the value user inputted in the input form 
    displayComment(document.getElementById('comment-input').value);

})
// function to display the comment
function displayComment(comment){
    //below the div.mycomment we append by adding new children for display
    let p = document.createElement('p')
    let btn = document.createElement('button')
    //click event to remove the comments 
    btn.addEventListener('click',deleteComment)
    // the display of the new comments in our new appended children
    p.textContent = `${comment} `
    btn.textContent = 'X'
    p.appendChild(btn)
    document.querySelector('.mycomment').appendChild(p)
}
// my function to delete the comments
function deleteComment(e){
    e.target.parentNode.remove()
}

