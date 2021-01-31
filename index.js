const readline = require('readline-sync');

const spaceUpperLeft = (spaces) => {
  let totalSpaces = ''
  for(let i = 0; i < spaces - 1; i++){
    totalSpaces += " "
  }
  return totalSpaces
}

const slash = (slashes) => {
  let totalSlashes = ""
  for(let i = 0; i < slashes - 2; i++){
    totalSlashes += "/"
  } 
  return totalSlashes
}

const hollowSpace = (number) => {
  let totalHollowSpaces = ""
  for(let i = 0; i < number -2; i++){
    totalHollowSpaces += " "
  }
  return totalHollowSpaces
}

const fullColon = (number) => {
  let totalColons = ""
  for(let i = 0; i < number; i++){
    totalColons += ":"
  }
  return totalColons
}

const totalUpperExes = (count, number) => {
  let totalExes = ""
  for(let i = count; i < number - 1; i++){
    totalExes += "X"
  }
  return totalExes;
}

const totalLowerExes = (number) => {
  let totalExes = ""
  for(let i = 0; i < number - 2; i++){
    totalExes += "X"
  }
  return totalExes;
}

const waferUpperHalf = (number) => {
  let scanlines = []
  for(let i = number; i !== 0; i--){
    if(i === number){
      scanlines.push(spaceUpperLeft(i) + fullColon(number))
    } else if(i === 1){
      scanlines.push(spaceUpperLeft(i) + fullColon(number) + totalUpperExes(i, number) + ":")
    } else {
      scanlines.push(spaceUpperLeft(i) + ":" + slash(number) + ":" + totalUpperExes(i, number) + ":")
    }
  }
  return scanlines
}

const waferLowerHalf = (number) => {
  let scanlines = []
  for(let i = number - 1; i !== 0; i--){
    if(i === 1){
      scanlines.push(fullColon(number))
    } else {
      scanlines.push(":" + hollowSpace(number) + ":" + totalLowerExes(i) + ":")
    }
  }
  return scanlines
}

const input = Number(readline.question("Enter Wafer Side Units: "))
waferUpperHalf(input).map( x => {console.log(x)})
waferLowerHalf(input).map( x => {console.log(x)})