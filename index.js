const axios = require("axios");

axios("https://api.adviceslip.com/advice").then(resp => {
  console.log("The best advice is don't put pineapple on pizza");
});
