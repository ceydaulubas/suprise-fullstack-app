const newYearTemplate = (message) => `
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    background-color: #ffcc00;
    font-family: Arial, sans-serif;
  }
  .card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    text-align: center;
    overflow: hidden;
    position: relative;
  }
  .card img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  .card .message {
    font-size: 18px;
    padding: 20px;
    text-align: left;
  }
  .card h1 {
    font-size: 36px;
    margin: 0 0 20px;
  }
</style>
</head>
<body>
  <div class="card">
    <h1>Happy New Year!</h1>
    <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1683899722/newyear_nirkbz.jpg" alt="New Year">
    <div class="message">${message}</div>
  </div>
</body>
</html>
`;

const mothersDayTemplate = (message) => `
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    background-color: #ff8a9e;
    font-family: Arial, sans-serif;
  }
  .card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    text-align: center;
    overflow: hidden;
    position: relative;
  }
  .card img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  .card .message {
    font-size: 18px;
    padding: 20px;
    text-align: left;
  }
  .card h1 {
    font-size: 36px;
    margin: 0 0 20px;
  }
</style>
</head>
<body>
  <div class="card">
    <h1>Happy Mother's Day!</h1>
    <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1683899651/mothersday_pxtddi.webp" alt="Happy Mother's Day!">
    <div class="message">${message}</div>
  </div>
</body>
</html>
`;

const fathersDayTemplate = (message) => `
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    background-color: #008c8c;
    font-family: Arial, sans-serif;
  }
  .card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    text-align: center;
    overflow: hidden;
    position: relative;
  }
  .card img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  .card .message {
    font-size: 18px;
    padding: 20px;
    text-align: left;
  }
  .card h1 {
    font-size: 36px;
    margin: 0 0 20px;
  }
</style>
</head>
<body>
  <div class="card">
    <h1>Happy Father's Day!</h1>
    <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1683900054/fathersDay_wn3kns.jpg" alt="Happy Father's Day!">
    <div class="message">${message}</div>
  </div>
</body>
</html>
`;

const valentinesDayTemplate = (message) => `
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    background-color: #001616;
    font-family: Arial, sans-serif;
  }
  .card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    text-align: center;
    overflow: hidden;
    position: relative;
  }
  .card img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  .card .message {
    font-size: 18px;
    padding: 20px;
    text-align: left;
  }
  .card h1 {
    font-size: 36px;
    margin: 0 0 20px;
  }
</style>
</head>
<body>
  <div class="card">
    <h1>Happy Valentine's Day!</h1>
    <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1683900310/valentinesDay_qp94e1.jpg" alt="Happy Valentine's Day!">
    <div class="message">${message}</div>
  </div>
</body>
</html>
`;

const birthdayTemplate = (message) => `
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    background-color: #0e9441;
    font-family: Arial, sans-serif;
  }
  .card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    text-align: center;
    overflow: hidden;
    position: relative;
  }
  .card img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  .card .message {
    font-size: 18px;
    padding: 20px;
    text-align: left;
  }
  .card h1 {
    font-size: 36px;
    margin: 0 0 20px;
  }
</style>
</head>
<body>
  <div class="card">
    <h1>Happy Birthdayy!</h1>
    <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1683900964/happyBirthday_mzgxtf.jpg" alt="Hapy Birthday!">
    <br/>
    <div class="message">${message}</div>
  </div>
</body>
</html>
`;

module.exports = {
    newYearTemplate,
    mothersDayTemplate,
    valentinesDayTemplate,
    fathersDayTemplate,
    birthdayTemplate
};
