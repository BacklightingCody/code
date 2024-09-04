/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
  if(trips.length === 0) return true
  for(let i = 0; i < trips.length; i++) {
    capacity -= trips[i][0]
    if(capacity > 0) return true
    if(trips[i+1][1] - trips[i][2]< 0) {
      capacity -= trips[i+1][0]
      console.log(capacity)
      if(capacity < 0) return false
    }
  }

};
const trips = [[2,1,5],[3,3,7]]
const capacity = 4
console.log(carPooling(trips, capacity))