
const sendMailAddress = "caitlanjeffrey@gmail.com"

var str = `mailto:${sendMailAddress}?`

$("#send-email-btn").on("click", function(event){
    event.preventDefault();

    window.location = str
})
