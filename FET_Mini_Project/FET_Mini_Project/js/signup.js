$('document').ready(function () {
    $('#btn2').click(function (e) {

        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var password = $('#password').val();
        var rep_password = $('#rep_password').val();
        var pwd_expression =
            /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-])$/;
            // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
            // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
            // /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
            // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


        var letters = /^[A-Za-z ]+$/;
        var filter =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        // var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var email_validation =  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

        var phoneno = /^\d{10}$/;
    

        if (name == "" && email == "" && phone == "" && password == "") {
            alert("enter all the details!");
        } else if (name == "" || email == "" || phone == "" || password == "") {
            if (name == "") {
                alert("enter name");
            }else if (!letters.test(name)) {
                alert("name field required only alphabate characters"); //
            } else if (email == "") { 
                alert("enter email");
            }else if (!email_validation.test(email)) { 
                alert("Invalid email");
            } else if (phone == "") {
                alert("enter phone");
            }else if (!phoneno.test(phone)) {
                alert("enter valid phone no");
            } else if (password == "") {
                alert("enter password");
            } else if (!pwd_expression.test(password)) { //
                alert(
                  "Upper case, Lower case, Special character and Numeric letter are required in Password filed"
                );
            //}else if (password.value.length < 6) {
            //     alert("Password minimum length is 6");
            // } else if (password.value.length > 12) {
            //     alert("Password max length is 12");
            } else if (rep_password == "") {
                alert("enter password again");
            } else if (password != rep_password) { //
                alert("password not matched");
            }
        }
        else {
            $.post(" http://localhost:3000/user",
                {
                    name: name,
                    email: email,
                    phone: phone,
                    password: password
                },
                function (data, status) {
                    alert("Data: " + data + "\nStatus: " + status);
                })
        }
    })
})