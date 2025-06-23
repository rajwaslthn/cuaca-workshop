async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'c0e7c70fcd6b3d030a56f9d144ff43b0'; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Kota tidak ditemukan");

    const data = await response.json();
    const resultDiv = document.getElementById('weatherResult');

    const weather = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Suhu: ${data.main.temp}°C</p>
      <p>🌥️ Cuaca: ${data.weather[0].description}</p>
      <p>💧 Kelembapan: ${data.main.humidity}%</p>
      <p>🌬️ Kecepatan Angin: ${data.wind.speed} m/s</p>
    `;

    resultDiv.innerHTML = weather;
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
