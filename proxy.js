const fetch = require('node-fetch');

exports.handler = async (event) => {
    const url = event.queryStringParameters.url;
    try {
        const response = await fetch(url);
        const data = await response.text();
        return {
            statusCode: 200,
            body: data,
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
