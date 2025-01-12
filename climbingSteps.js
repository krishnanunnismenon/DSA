//A person can climb a step either by taking one or two steps. Find the total number of ways a person can climb that step

function climbingSteps(numberOfSteps){
    if(numberOfSteps===0 || numberOfSteps===1){
        return numberOfSteps
    }

    return climbingSteps(numberOfSteps-1) + climbingSteps(numberOfSteps-2)
}


console.log(climbingSteps(2))