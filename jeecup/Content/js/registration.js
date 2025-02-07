
function SubmitForm()
{
    
    var candidateName = $("#candidateName").val();
    var fathername = $("#fatherName").val();
    var mothername = $("#motherName").val();
    var dob = $("#dobDay").val();
    var gender = $("#gender").val();
    var AadhaarConsent = $(".AadhaarConsent").val();
    var isdCode = $("#isdCode").val();
    var mobileNumber = $("#mobileNumber").val();
    var emailId = $("#emailId").val();
    var password = $("#password").val();

    if (candidateName == null || candidateName=="")
    {

        Swal.fire({
            icon: "warning",
            title: "Warning",
            text: "NAMe is required!",

        });
        return;
    }
    if (fathername == null || fathername == "") {
        Swal.fire({
            icon: "warning",
            title: "Warning",
            text: "Fathername is required!",

        });
    }
    if (mothername == null || mothername == "") {
        Swal.fire({
            icon: "warning",
            title: "Warning",
            text: "Mother Name is required!",

        });
    }
    if (dob == null || dob == "") {
        Swal.fire({
            icon: "warning",
            title: "Warning",
            text: "dob is required!",

        });
    }
    if (gender == null || gender == "") {
        Swal.fire({
            icon: "warning",
            title: "Warning",
            text: "gender is required!",

        });
    }
    if (AadhaarConsent == null || AadhaarConsent == "") {
        Swal.fire({
            icon: "warning",
            title: "Warning",
            text: "Aadhar is required!",

        });
    }
    if (isdCode == null || isdCode == "") {
        Swal.fire({
            icon: "warning",
            title: "Warning",
            text: "Isccode is required!",

        });
    }
    //if (mobileNumber == null || mobileNumber == "") {
    //    Swal.fire({
    //        icon: "warning",
    //        title: "Warning",
    //        text: "NAMe is required!",

    //    });
    }
    if (emailId == null || emailId == "") {
        Swal.fire({
            icon: "warning",
            title: "Warning",
            text: "NAMe is required!",

        });
    }
    if (password == null || password == "") {
        Swal.fire({
            icon: "warning",
            title: "Warning",
            text: "NAMe is required!",

        });
    }

}
function ValidNum(evt) {

    var charcode = (evt.which) ? evt.which : event.keycode
    if (charcode < 48 || charcode >57) {

        Swal.fire({
            icon: "warning",
            title: "Warning",
            text: "Mobile is required!",

        });
    }
    else {
        return true;
    }
}