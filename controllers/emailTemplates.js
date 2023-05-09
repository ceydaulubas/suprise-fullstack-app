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
    <img src="https://img.freepik.com/free-photo/new-year-banner-with-fireworks_23-2149539970.jpg?w=1060&t=st=1683584694~exp=1683585294~hmac=816d399bc45c2d51bf1a3c2bdf51e723eab344a33c9f031c7ef9aea6edbdbaa8" alt="New Year">
    <div class="message">${message}</div>
  </div>
</body>
</html>
`;

const mothersDayTemplate = (message) => `
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anneler Günü Kutlaması</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #ffe6f2;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-image: url('https://st3.depositphotos.com/1186033/19230/i/450/depositphotos_192307134-stock-photo-mothers-day-flowers.jpg');
            background-size: cover;
            background-position: center;
            height: 200px;
            border-radius: 10px 10px 0 0;
        }
        .title {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            color: #e60073;
            margin-top: 20px;
        }
        .content {
            font-size: 16px;
            color: #333;
            line-height: 1.5;
            text-align: center;
            margin-top: 10px;
        }
        .footer {
            text-align: center;
            font-size: 14px;
            color: #999;
            margin-top: 30px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header"></div>
        <h1 class="title">Anneler Günü Kutlu Olsun!</h1>
        <p class="content">
        ${message}
        </p>
    </div>
    <p>
    <a href="https://www.youtube.com/watch?v=MYqFPa1mrXo" target="_blank">
        <img src="https://static.vecteezy.com/system/resources/previews/007/100/604/original/happy-mothers-day-with-beautiful-flowers-on-soft-pink-background-vintage-greeting-or-invitation-card-illustration-design-for-mom-day-valentine-and-wedding-free-vector.jpg" alt="YouTube Video" width="480" height="360" style="border: none;">
    </a>
</p>

</body>
</html>
`;

module.exports = {
  newYearTemplate,
  mothersDayTemplate
};
