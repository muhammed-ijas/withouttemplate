function emailsend(){
    var userName = document.getElementById('name').value; 
    var email = document.getElementById('email').value; 
    var message = document.getElementById('message').value; 
    var messageBody = "Name" + userName +"<br>Email " +email+"<br>message"+message;



    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "muhammedijas793@gmail.com",
        Password : "4D35D1A23F58AA30DE97EC703BBAC3D68AD4",
        To : 'rishalmuhammedup@gmail.com',
        From : "muhammedijas793@gmail.com",
        Subject : "This is the subject",
        Body :  messageBody
    }).then(
      message => alert(message)
    );
} 