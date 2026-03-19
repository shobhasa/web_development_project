// Registration form validation
function validateRegisterForm () { // error  message clearing. 
    document.querySelectorAll(".error").forEach(function(span) { //Adapted from https://www.w3schools.com/jsref/met_document_queryselector.asp
    span.innerText = "";
    });                                                               

    // declaring variables to get input values
    var firstname= document.getElementById ("firstname").value;
    var lastname= document.getElementById ("lastname").value;
    var male= document.getElementById ("male").checked;
    var female= document.getElementById ("female").checked;
    var email= document.getElementById ("email").value;
    var password= document.getElementById ("password").value;
    var fav = document.querySelectorAll('input[type="checkbox"]:checked');
    var findus = document.getElementById("findus").value;

    // Password regular expression 
    // adapted from https://edstem.org/au/courses/24476/lessons/83808/slides/571442
    var pwdregex = /^(?=.*[a-z])(?=.*[A-Z]).{9,}$/;  //Password requirement,at lease 9 characters, one uppercase, one lowercase

    var valid = true; // validation flag, if true = allow form submit, false = display errors.
    
    // validation checks,  display inline error messages. adapted from 
    if (firstname === "") {     //first name check
        document.getElementById("firstname_error").innerText = "Please enter first name.";
        valid= false;
    }    
    if (lastname === "") {     //last name check
        document.getElementById("lastname_error").innerText = "Please enter last name.";
        valid = false; 
    }
    if (!male && !female) {     //gender check
        document.getElementById("gender_error").innerText = "Please select a gender.";
        valid = false;        
    }
    if (email === "") {     //email check 
        document.getElementById("email_error").innerText = "Please enter an email.";
        valid = false;  
    }
        else if (email.indexOf('@') == 0 ) {
            document.getElementById("email_error").innerText = "Email cannot start with @.";
            valid = false;
        }
	    else if (email.indexOf('@') < 0 ) {
			 document.getElementById("email_error").innerText = "Email must contain @.";
            valid = false;
         }

    if (password === "") { //password check
        document.getElementById("password_error").innerText = "Password cannot be empty.";
        valid = false;
        } else if (!pwdregex.test(password)) {
        document.getElementById("password_error").innerText = "Password must be at least 9 characters, include uppercase & lowercase.";
        valid = false;
        }

    if (fav.length === 0) {
        document.getElementById("fav_error").innerText = "Please select at least one item.";
        valid = false;
    }
    if (findus == "") {    //dropdown check
        document.getElementById("findus_error").innerText = "Please select how you found us.";
        valid = false; 
    }
    return valid;  // stops form submit if false
}


// Pre-order form validation

function validatePreOrderForm() {   //clearing previours errors
    document.querySelectorAll(".error").forEach(function(span) {
        span.innerText = "";
    });

    //declaring variables to get delivery input values
    var delivery = document.querySelector('input[name="delivery_method"]:checked');
    var deliveryAdd1 = document.getElementById("delivery_addLine1").value;
    var deliverySuburb = document.getElementById("delivery_suburb").value;
    var deliveryState = document.getElementById("delivery_state").value;
    var deliveryPostcode = document.getElementById("delivery_postcode").value;
    var postcodePattern = /^[0-9]{4}$/;
    
    //declaring variables to get billing input values
    var billingSame = document.getElementById("sameas_delivery_address").checked;
    var billingAdd1 = document.getElementById("billing_addLine1").value;
    var billingSuburb = document.getElementById("billing_suburb").value;
    var billingState = document.getElementById("billing_state").value;
    var billingPostcode = document.getElementById("billing_postcode").value;

    //get contact information
    var contact = document.getElementById("contact").value;
    var phonePattern = /^(\+61|0)[2-478]\d{8}$/;
    var email = document.getElementById("email").value;

    // get payment informtion
    var payment = document.querySelector('input[name="payment_type"]:checked');
    var cardType = document.querySelector('input[name="card_type"]:checked');
    var cardHolder = document.getElementById("cardholder_name").value;
    var cardNumber = document.getElementById("card_no").value;
    var expDate = document.getElementById("exp_date").value;
    var cvv = document.getElementById("cvv").value;

    var valid = true;

    //check delivery address validation
    
    if (delivery && delivery.value === "D") {   
        if (deliveryAdd1 === "") {
            document.getElementById("delivery_addLine1_error").innerText = "Please enter delivery address line 1.";
            valid = false;
        }
        if (deliverySuburb === "") {
            document.getElementById("delivery_suburb_error").innerText = "Please enter delivery suburb.";
            valid = false;
        }
        if (deliveryState === "") {
            document.getElementById("delivery_state_error").innerText = "Please enter delivery state.";
            valid = false;
        }
        if (deliveryPostcode === "") {
            document.getElementById("delivery_postcode_error").innerText = "Please enter delivery postcode.";
            valid = false;
        }
        if (!postcodePattern.test(deliveryPostcode)) {
            document.getElementById("delivery_postcode_error").innerText = "Postcode must be 4 digits.";
            valid = false;
        }
    }

    // check billing address validation
    if (billingSame) {
        if (deliveryAdd1 === "" || deliverySuburb === "" || deliveryState === "" || deliveryPostcode === "") {
            document.getElementById("sameas_delivery_address_error").innerText = "Please enter your delivery address first.";
            valid = false;
        }
    } else {
        if (billingAdd1 === "") {
            document.getElementById("billing_addLine1_error").innerText = "Please enter billing address line 1.";
            valid = false;
        }
        if (billingSuburb === "") {
            document.getElementById("billing_suburb_error").innerText = "Please enter billing suburb.";
            valid = false;
        }
        if (billingState === "") {
            document.getElementById("billing_state_error").innerText = "Please enter billing state.";
            valid = false;
        }
        if (billingPostcode === "") {
            document.getElementById("billing_postcode_error").innerText = "Please enter billing postcode.";
            valid = false;
        }
         if (!postcodePattern.test(billingPostcode)) {
            document.getElementById("billing_postcode_error").innerText = "Postcode must be 4 digits.";
            valid = false;
        }
    }

    // Contact & email
    if (contact === "") {
        document.getElementById("contact_error").innerText = "Please enter contact number.";
        valid = false;
    } else if (!phonePattern.test(contact)) {
            document.getElementById("contact_error").innerText = "Phone number is not valid";
            valid = false;
        }
    if (email === "") {
        document.getElementById("email_error").innerText = "Please enter email.";
        valid = false;
    }
    

    // Payment type validation
    if (!payment) {
        document.getElementById("payment_type_error").innerText = "Please select a payment type.";
        valid = false;
    }

    // Credit card details only if online payment is selected
    
    if (payment && payment.value === "O") {
        if (!cardType) {
        document.getElementById("card_type_error").innerText = "Please select a credit card type.";
        valid = false;
        } else {
            if (cardType.value === "a" && cardNumber.length !== 15) {   // credit card number length validation
                document.getElementById("card_no_error").innerText = "American Express must have 15 digits.";
                valid = false;
            }
         if ((cardType.value === "v" || cardType.value === "m") && cardNumber.length !== 16) {
            document.getElementById("card_no_error").innerText = "Visa/Mastercard must have 16 digits.";
            valid = false;
            }
    }

    if (cardHolder === "") {
        document.getElementById("cardholder_name_error").innerText = "Please enter cardholder name.";
        valid = false;
    }
    if (expDate === "") {
        document.getElementById("exp_date_error").innerText = "Please enter expiry date.";
        valid = false;
    }
    if (cvv === "") {
        document.getElementById("cvv_error").innerText = "Please enter CVV.";
        valid = false;
    }
    }
    return valid;
}

//initialisaton order form for delivery and payment options
function initOrderForm() {
    var deliveryRadio = document.getElementById("delivery");
    var pickupRadio = document.getElementById("pickup_delivery");
    var deliveryContainer = document.getElementById("delivery_address_container");
    var sameCheckbox = document.getElementById("sameas_delivery_address");
    var sameContainer = document.getElementById("sameas_container");
    var pickupPayment = document.getElementById("pickup_payment");
    var onlinePayment = document.getElementById("online_payment");    
    var creditCardContainer = document.getElementById ("credit_card_container");
   
    
    
     // Defaults on page load
   
    deliveryRadio.checked = true;
    deliveryContainer.style.display = "block";
    sameContainer.style.display = "block";
    creditCardContainer.style.display = "none";
  

    // Toggle delivery/pickup
    deliveryRadio.onclick = function() {
        deliveryContainer.style.display = "block";
        sameContainer.style.display = "block";
    };

    pickupRadio.onclick = function() {
        deliveryContainer.style.display = "none";
        sameContainer.style.display = "none";
    };

    // Autofilling billing address if same as delivery address
    sameCheckbox.onclick = function() {
        if (sameCheckbox.checked) {
            var deliveryAdd1 = document.getElementById("delivery_addLine1").value;
            var deliveryAdd2 = document.getElementById("delivery_addLine2").value;
            var deliverySuburb = document.getElementById("delivery_suburb").value;
            var deliveryState = document.getElementById("delivery_state").value;
            var deliveryPostcode = document.getElementById("delivery_postcode").value;

           if (deliveryAdd1 === "" || deliverySuburb === "" || deliveryState === "" || deliveryPostcode === "") {
                alert("Please enter your delivery address first");
                sameCheckbox.checked = false;
            } else {
                document.getElementById("billing_addLine1").value = deliveryAdd1;
                document.getElementById("billing_addLine2").value = deliveryAdd2;
                document.getElementById("billing_suburb").value = deliverySuburb;
                document.getElementById("billing_state").value = deliveryState;
                document.getElementById("billing_postcode").value = deliveryPostcode;
            }
        }
    };
    
    
    // Toggle credit card container
    onlinePayment.onclick = function() {
        creditCardContainer.style.display = "block";
    };
    pickupPayment.onclick = function() {
        creditCardContainer.style.display = "none";
    };
}


// initialising registration and order form
function init() {
    var registration_form = document.getElementById("registration_form");
    if (registration_form) {
        registration_form.onsubmit = validateRegisterForm;
    }
    
    var preorder_form = document.getElementById("preorder_form");
    if (preorder_form) {
        initOrderForm();        
        preorder_form.onsubmit = validatePreOrderForm;
    }

}

    window.onload = init;

