const axios = require("axios");

const AllLanguages = async () => {
    try {
        let api = `https://restcountries.com/v2/all`;
        const res = await axios.get(api);

        // console.log(res);
        const data = res.data;
        // console.log(data)
        const lan = data.map((ele) => ele.language)
        console.log(lan);

    } catch (error) {
        console.error(error);
        console.log("somthing Error");
    }
};
AllLanguages()