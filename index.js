const axios = require("axios");

const AllLanguages = async () => {
  try {
    let api = `https://restcountries.com/v2/all`;
    const res = await axios.get(api);

    // console.log(res);
    const data = res.data;
    // console.log(data)
    let array = [];
    for (let object of data) {
      for (let language of object.languages) {
        // console.log(language)
        if (array.includes(language.name) == false) {
          array.push(language.name);
        }
      }
    }
    console.log("Total languages: ", array.length);
  } catch (error) {
    console.error(error);
    console.log("somthing Error");
  }
};

AllLanguages();