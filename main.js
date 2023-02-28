//Function 1//
function Hi(hw) {
    console.log("Hello, World!")
}

//Function 2//
function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("Kenzhe");

//Function 3//
function findGreatest(num1, num2, num3) {
    let greatest = num1;
  
    if (num2 > greatest) {
      greatest = num2;
    }
  
    if (num3 > greatest) {
      greatest = num3;
    }
  
    return greatest;
  }
  
  let num1 = 34;
  let num2 = 52;
  let num3 = 76;
  
  let greatestNum = findGreatest(num1, num2, num3);
  
  console.log(greatestNum);
    