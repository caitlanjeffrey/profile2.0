
const userName = $("#userName").val().trim()
const userEmail = $("#email").val().trim()
const subject = $("#emailSubject").val().trim()
const message = $("#message").val().trim()

const sendMailAddress = "caitlanjeffrey@gmail.com"

var str = `mailto:${sendMailAddress}?&subject:${subject}?&body=${message}`

$("#send-email-btn").on("click", function(event){
    event.preventDefault();

    window.location = str
})
