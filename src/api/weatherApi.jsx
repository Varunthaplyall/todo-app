import axios from "axios";

export const getWeather = async () => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather`,
    {
      params: {
        lat: 33.44,
        lon: -94.04,
        exclude: "hourly,daily",
        appid: import.meta.env.VITE_API_KEY,
      },
    }
  );
  return response.data;
};

export default getWeather;
