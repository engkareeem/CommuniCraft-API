const axios = require('axios');

module.exports.findPeopleWithSkill = async (skill) => {
    

    const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: {
        query: `${skill}`,
        page: '1',
        num_pages: '1'
    },
    headers: {
        'X-RapidAPI-Key': 'l1PUKpPqylmshmraKMLXOb4jr6g4p19ys8EjsnJAnL5OTEai2N',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        return response.data['data'];
    } catch (error) {
        console.error(error);
    }
} 