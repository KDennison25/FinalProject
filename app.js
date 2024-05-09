let score = 0

const hint1 = document.querySelector(`#hint1`)

hint1.onclick = function () {
    alert(`BAHHHHHHHHH`)
}

const answ1 = document.querySelector(`#correctAnsw1`)

answ1.onclick = function () {
    alert(`THE CORRECT ANSWER IS: \n MICHAEL JORDAN`)
    answ1() = ""
}

let numbrques2 = [
    2009,
    2004,
    2015,
    2017
]

const newH1 = document.createElement(`p`)
newH1.innerText = `Years to chose from: \n${numbrques2}`
const p1 = document.querySelector(`#question2`)
p1.append(newH1)

const answ2 = document.querySelector(`#correctAnsw2`)

answ2.onclick = function () {
    alert(`THE CORRECT ANSWER IS: \n 2004`)
}

const optNO = document.querySelector (`#optNo1`)

optNO.onclick = function () {
    alert(`Wrong`)
}

const optNO2 = document.querySelector (`#optNo2`)

optNO2.onclick = function () {
    alert(`Wrong`)
}

const optNO3 = document.querySelector (`#optNo3`)

optNO3.onclick = function () {
    alert(`Wrong`)
}

const optYes = document.querySelector (`#optYes`)

optYes.onclick = function () {
    alert(`Correct!!!!`)
}

p1.classList.add(`font-weight`)

const survive1 = document.querySelector(`#survive1`)

survive1.onclick = function () {
    alert(`CORRECT!!! 2018 POTY from Villanova...`)
}

const lose1 = document.querySelector(`#lose1`)
lose1.onclick=function () {
    alert(`WRONG!!! Lebron didn't even go to college... he went from HS to the NBA`)
}

const lose2 = document.querySelector (`#lose2`)
lose2.onclick = function () {
    alert(`WRONG!!! Gru did not go to college as he was drafted to the NBA from Serbia during a Taco Bell Commercial, Hope that guy turned out ok...`)
}
const survive2 = document.querySelector (`#survive2`)
survive2.onclick = function () {
    alert(`Correct!!! Oscar won POTY during the 2022 season and currently lives rent free in Giannis Anthropologist's head... `)
}

const lose3 = document.querySelector (`#lose3`)
lose3.onclick = function () {
    alert(`WRONG!!! CP3 wasn't player of the year, but he was still good going 4th overall in the draft, but you chose Chris Paul to win you anything.... \n THAT'S ON YOU!!!`)
}

const survive3 = document.querySelector (`#survive3`)
survive3.onclick = function () {
    alert(`CORRECT!!! Despite his mediocrity in the NBA, Bogut was the 2005 NPOY and was the #1 overall pick in the same year's  draft`)
}

const bonus = document.querySelector(`#bonusques`)

bonus.onclick = function () {
    userinput = prompt(`Well What is it???`)
    if (userinput = `the dentist`) {
    alert(`2:30!!!`)
    } else {
        alert(`:( WRONG`)
    }
}

const finale = document.querySelector(`#KY`)
finale.onclick = function () {
    alert(`Known playoff choker D'LO is actually from Louisville even though he went to college at Ohio St`)
}

const finale2 = document.querySelector(`#KY2`)
finale2.onclick = function () {
    alert(`Rondo is from Louisville and actually played for Kentucky in college, Even though he went to High School at Oak Hill Academy`)
}

const finale3 = document.querySelector(`#KY3`)
finale3.onclick = function () {
    alert(`Lofton is from Maysville, Kentucky, even though he decided to rep Orange in college...`)
}

const finaleWin = document.querySelector(`#NoKY`)
finaleWin.onclick = function () {
    alert(`One of the best Kentucky Wildcats players of all time is actually from Tennessee, CORRECT!`)
}

const bonusReal = document.querySelector(`#bonusAnswer`)
bonusReal.onclick = function () {
    alert(`If you answered: \n OREGON \n YOU ARE CORRECT!!!!\n `)
}

const NZ1 = document.querySelector(`#noZ1`)
NZ1.onclick = function (){
    alert(`Sorry! incorrect`)
}

const NZ2 = document.querySelector(`#noZ2`)
NZ2.onclick = function (){
    alert(`Sorry! incorrect`)
}

const NZ3 = document.querySelector(`#noZ3`)
NZ3.onclick = function (){
    alert(`Sorry! incorrect`)
}

const Z = document.querySelector(`#yesZ`)
yesZ.onclick = function (){
    alert(`Correct! within the first minute of the game, Zion blew out his shoe and left the game with an injury, Duke would go on to lose the game. `)
}