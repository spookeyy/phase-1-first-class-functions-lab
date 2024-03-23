// Code your solution in this file!

// Functions for selecting drivers:
// function returnFirstTwoDrivers(drivers) {
//     return drivers.slice(0, 2); // Get the first two elements
//   }
  
//   function returnLastTwoDrivers(drivers) {
//     return drivers.slice(-2); // Get the last two elements
//   }
  
//   // Array containing the driver selection functions:
//   const selectingDrivers1 = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
//   // Example usage:
//   const myDrivers = ["Alice", "Bob", "Charlie", "David"];
//   const firstTwo = returnFirstTwoDrivers(myDrivers);
//   const lastTwo = returnLastTwoDrivers(myDrivers);
//   console.log(firstTwo); // Output: ["Alice", "Bob"]
//   console.log(lastTwo); // Output: ["Charlie", "David"]


const returnFirstTwoDrivers = (mydrivers) =>
{
    let firstTwoDrivers = []
    firstTwoDrivers = [mydrivers[0], mydrivers[1]];
    return firstTwoDrivers
}


const returnLastTwoDrivers = (mydrivers) =>
{
    let lastTwoDrivers = []
    lastTwoDrivers = [mydrivers[mydrivers.length-2], mydrivers[mydrivers.length - 1]];
    return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



function createFareMultiplier(x)
{
    return  function(y){ return x*y};
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);



function selectDifferentDrivers(mydrivers,driversToReturn)
{
    return driversToReturn(mydrivers);
}