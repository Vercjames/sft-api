"use client"
import axios from "axios";

export default function Home() {
  const url = 'https://vult-dev.vultpayments.dev/api/branding/domain';
  const params = { domain: 'https://vult-dev.vultpayments.dev' };
  const headers = {
    accept: 'application/json',
  };

  const getBrandingDetails = async () => {
    try {
      const response = await axios.get(url, { params, headers });
      console.log('Response data:', response.data);
    } catch (error) {
      console.error('Error occurred:', error.response || error.message);
    }
  };

  return (
    <div>
      <button type="button" onClick={getBrandingDetails}>
        Click For Branding
      </button>
    </div>
  );
}
