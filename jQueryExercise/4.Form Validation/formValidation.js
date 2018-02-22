function validate() {
    //Regex for field validation
    const usernameRegex = /^[A-Za-z0-9]{3,20}$/g;
    const passwordRegex = /^[\w]{5,15}$/g;
    const emailRegex = /@.*\./;
    const companyNumberRegex = /^[1-9][0-9]{3}$/;

    let isCompany = false;
    let usernameInput = $("#username");
    let emailInput = $("#email");
    let passwordInput = $("#password");
    let confirmPasswordInput = $("#confirm-password");
    let companyNumberInput = $("#companyNumber");
    let validDivElement = $("#valid");

    //Company checkbox change event handler
    $("#company").change(function (){
        let companyInfoDiv = $("#companyInfo");
        if(this.checked) {
            companyInfoDiv.css("display", "block");
            isCompany = true;
            return;
        }
        companyInfoDiv.css("display", "none");
        companyNumberInput.css("border", "none");
        isCompany = false;
    })

    //Submit button click event handler
    $("#submit").click(function(event) {
        event.preventDefault();

        let isValid = true;

        //Validate username
        if(usernameInput.val().match(usernameRegex) !== null) {
            usernameInput.css("border", "none");
        }
        else {
            usernameInput.css("border", "2px solid red");
            isValid = false;
        }
        //Validate email
        if(emailInput.val().match(emailRegex) !== null) {
            emailInput.css("border", "none");
        }
        else {
            emailInput.css("border", "2px solid red");
            isValid = false;
        }
        //Validate password
        if(passwordInput.val().match(passwordRegex) !== null && passwordInput.val() === confirmPasswordInput.val()) {
            passwordInput.css("border", "none");
            confirmPasswordInput.css("border", "none");
        }
        else {
            passwordInput.css("border", "2px solid red");
            confirmPasswordInput.css("border", "2px solid red");
            isValid = false;
        }
        //Validate company number
        if(isCompany && companyNumberInput.val().match(companyNumberRegex) === null) {
            companyNumberInput.css("border", "2px solid red");
            isValid = false;
        }
        else {
            companyNumberInput.css("border", "none");
        }

        if(isValid) {
            validDivElement.css("display", "block");
            return;
        }
        validDivElement.css("display", "none");
    });
}
