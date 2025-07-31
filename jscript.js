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
console.log(getHumanchoice());
