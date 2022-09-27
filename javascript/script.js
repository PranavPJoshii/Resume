function printResume(){

    document.getElementById("print_btn").style.display = "none";

    window.print();

    document.getElementById("print_btn").style.display = "block";

}


/* function printsResume(){

    var body = document.getElementById("body").innerHTML;

    var data = document.getElementById("data").innerHTML;

    document.getElementById("body").innerHTML = data;

    window.print();

    document.getElementById("body").innerHTML = body;
} */



$("#profile_image").hover(function () {
    
    $(this).attr('src','images/signature.jpg')

} , function () {

    $(this).attr('src','images/profile.jpg')

});