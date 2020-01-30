
const userName = $("#userName").val().trim()
const userEmail = $("#email").val().trim()
const subject = $("#emailSubject").val().trim()
const message = $("#message").val().trim()

// href = "mailto:caitlanjeffrey@gmail.com?&subject=Big%20News&body=message" > Email Us</a>

const sendMailAddress = "caitlanjeffrey@gmail.com"

var str = "mailto:" + sendMailAddress + "?subject=" + subject + "&body=" + message;

$("#send-message-btn").on("click", function(){
    event.preventDefault();
    window.location = str
})
