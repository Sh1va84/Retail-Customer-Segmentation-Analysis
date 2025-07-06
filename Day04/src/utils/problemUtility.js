const axios = require('axios');


const getLanguageById = (lang)=>{

    const language = {
        "c++":54,
        "java":62,
        "javascript":63
    }


    return language[lang.toLowerCase()];
}


const submitBatch = async (submissions)=>{


const options = {
  method: 'POST',
  url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
  params: {
    base64_encoded: 'true'
  },
  headers: {
 'x-rapidapi-key': '8618e69373msha995f40452de078p13b6bdjsnef65508ea0f8',  // may error here
    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    submissions// submission object mai bheja hai 
  }
};

async function fetchData() {
	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}

 return await fetchData();

}


module.exports = {getLanguageById,submitBatch};








// 
// const axios = require('axios');

// const options = {
//   method: 'POST',
//   url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
//   params: {
//     base64_encoded: 'true'
//   },
//   headers: {
    // 'x-rapidapi-key': '8618e69373msha995f40452de078p13b6bdjsnef65508ea0f8',
    // 'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
    // 'Content-Type': 'application/json'
//   },
//   data: {
//     submissions: [
//       {
//         language_id: 46,
//         source_code: 'ZWNobyBoZWxsbyBmcm9tIEJhc2gK'
//       },
//       {
//         language_id: 71,
//         source_code: 'cHJpbnQoImhlbGxvIGZyb20gUHl0aG9uIikK'
//       },
//       {
//         language_id: 72,
//         source_code: 'cHV0cygiaGVsbG8gZnJvbSBSdWJ5IikK'
//       }
//     ]
//   }
// };

// async function fetchData() {
// 	try {
// 		const response = await axios.request(options);
// 		console.log(response.data);
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// fetchData();

