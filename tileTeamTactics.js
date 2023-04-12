/*Can you reach your friend's tile number in the next roll?
Create a function that takes your position a and your 
friend's position b and returns a boolean representation of whether 
it's possible to earn a bonus on any die roll.*/

function tileTeamTactics(myPosition,friendPosition){
    if(myPosition<friendPosition){
        return ((myPosition+6)>=friendPosition);
    }
    return false;
}

console.log(tileTeamTactics(8,8));