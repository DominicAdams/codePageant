/* Here is the basic skeleton on how it will function, we do need to add or change to some of the arrays, feel free to do so*/
const genre = ['Bank', 'Music Streaming Company', 'movie streaming company', 'software development company']
var ranGenre = genre[Math.floor(Math.random() * 5)]

const primaryColor = ['red', 'blue', 'green', 'yellow', 'orange']
var ranPrimary = primaryColor[Math.floor(Math.random() * 5)]

const secondaryColor = ['black', 'white', 'grey']
var ranSecondary = secondaryColor[Math.floor(Math.random() * 3)]

const optionalDevTools = ['React', 'JQuery']
var ranOptional = optionalDevTools[Math.floor(Math.random() * 2)]

const viewPort = ['mobile', 'desktop', 'tablet']
var ranViewPort = viewPort[Math.floor(Math.random() * 3)]

const targetAudience = ['adults', 'kids', 'teens']
var ranTarget = targetAudience[Math.floor(Math.random() * 3)]

console.log("Develop a website for a " + ranGenre +", that appeals to "+ ranTarget +". "+"Using only " + ranPrimary + ' and ' + ranSecondary +', build the site so it fits suitably on '+ ranViewPort + "."+ "You're only allowed to use HTML, CSS and JavaScript, but if you can, also use "+ ranOptional+"." )