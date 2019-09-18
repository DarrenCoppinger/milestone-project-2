function sendMail(contactForm) {
    emailjs.send("gmail", "example", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
                document.getElementById("myform").reset();
                // document.getElementById("fullname").value=" ";
                // document.getElementById("emailaddress").value=" ";
                // document.getElementById("projectsummary").value=" ";

            },
            function(error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}
