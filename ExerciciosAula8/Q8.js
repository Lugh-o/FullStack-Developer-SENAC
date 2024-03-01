let seconds = 3603
let originalSec = seconds
let minutes; let hours


minutes = parseInt(seconds / 60)
seconds -= minutes*60

hours = parseInt(minutes / 60)
minutes -= hours*60

console.log(`${originalSec} segundos equivalem a ${hours}h ${minutes}m ${seconds}s`)