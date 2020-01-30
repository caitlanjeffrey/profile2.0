
const userName = $("#userName").val().trim()
const userEmail = $("#email").val().trim()
const subject = $("#emailSubject").val().trim()
const message = $("#message").val().trim()

// href = "mailto:caitlanjeffrey@gmail.com?&subject=Big%20News&body=message" > Email Us</a>

const sendMailAddress = "caitlanjeffrey@gmail.com"

var str = "mailto:" + sendMailAddress + "?subject=" + subject + "&body=" + message;

// document.getElementById('send-message-btn').href = str;

$("#send-message-btn").on("click", function(){
    event.preventDefault();
    window.location = str
})

// $(function () {
//     $('#emailLink').on('click', function (event) {
//         alert("Huh");
//         var email = 'test@theearth.com';
//         var subject = 'Circle Around';
//         var emailBody = 'Some blah';
//         window.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
//     });
// });