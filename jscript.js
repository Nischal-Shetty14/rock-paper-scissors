let humanscore=0;
let computerscore=0;
function getComputerchoice()
{
let random=Math.random();
if(random<0.33)
{
    return "rock";
}
else if(random<0.66)
{
    return "paper";
}
else
{
    return "scissors";
}
}
function getHumanchoice()
{
    let userinput=prompt("Do you select rock,paper or scissors")
    return userinput;
}
function playround(humanchoice,computerchoice)
{

humanchoice=humanchoice.toLowerCase();
if(humanchoice=="paper"&&computerchoice=="rock"||humanchoice=="rock"&&computerchoice=="scissors"||humanchoice=="scissors"&&computerchoice=="paper")
{
    humanscore++;
    console.log(`You win,${humanchoice} beats ${computerchoice}`);
}
else if(computerchoice==humanchoice)
{
    console.log("It's a tie");
}
else
{
    computerscore++;
    console.log(`Computer wins,${computerchoice} beats ${humanchoice}`);
}}
function playgame()
{
for(let i=0;i<5;i++)
{
    let humanchoice=getHumanchoice();
    let computerchoice=getComputerchoice();
    playround(humanchoice,computerchoice);//this is calling itself 5 times with new parameters for a fresh round
}
console.log(`Final Score - You: ${humanscore}, Computer: ${computerscore}`);
if(computerscore>humanscore)
{
    console.log("Computer wins");
}
else if(humanscore>computerscore)
{
    console.log("Human wins");
}
else
{
    console.log("draw");
}
}
playgame();
