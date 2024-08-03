// countryDetector.js
import axios from 'axios';

const getCountry = async () => {
  try {
    const response = await axios.get('https://ipinfo.io?token=<YOUR_TOKEN>');
    return response.data.country;
  } catch (error) {
    console.error('Error fetching country data:', error);
    return 'US'; // Default country
  }
};

export default getCountry;