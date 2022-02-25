
// Add Image and its details to json
$("#add").click(function () {
    let category = $("#category").val();
    let link = $("#link").val();
    let hashtag = $("#hashtag").val();

    var UserDetailsString = sessionStorage.getItem("userdetails");
    console.log(UserDetailsString);
    var user = JSON.parse(UserDetailsString);
    let username = user.name;
    let userid = user.id;

    if (
        (category && link) == ""
    ) {
        alert("Input Fields cannot be Empty!");
    } else {

        //Post User details to users.json
        var image = {

            category: category,
            userid: userid,
            username: username,
            link: link,
            Date: new Date().toLocaleString(),
            hashtag: hashtag

        };
        console.log(image);
        $.ajax({
            type: "POST",
            dataType: "json",
            async: false,
            url: "http://localhost:3000/image",
            data: image,
            success: (response) => {
                alert("image added Successfully");
                console.log(response);
                // sessionStorage.clear();
                // window.open("../pages/userprofile.html");
            },
            error: () => {
                console.log("some network issue");
            },
            complete: () => {
                console.log("my call completed");
            },
        });
    }
});


// show userName from session storage
var UserDetailsString = sessionStorage.getItem("userdetails");
console.log(UserDetailsString);
var user = JSON.parse(UserDetailsString);
//  console.log(user.name); 
$(
    '<div class="image"><p>' + user.name + '</p></div>'

).appendTo($("#userName"));

// show all images including user's
$('document').ready(() => {
    // $('#home').click((e) => {

        // window.location.href = ("../html/Image.html");
    })
    $.ajax({
        url: "http://localhost:3000/image",
        method: "GET",
        success: (response) => {
            $("#mydiv").children().remove();
            // <span><a class="fa fa-thumbs-up" ></a></span>
            for (let i = 0; i < response.length; i++) {
                // id.push(response[i].id);
                $(

                    '<div class="image"><p>Uploaded by : '+response[i].username+'</p><img src="' + response[i].link + '"><div class="description">'
                    + response[i].hashtag +
                    '</div><p class="category">'
                    + response[i].category + ' ' + response[i].Date +
                    '</p><button id="likeButton" class="like"><span id="like"></span><b><img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/20/000000/external-like-instagram-flatart-icons-outline-flatarticons.png"/></b></button>&nbsp;&nbsp;<button id="commentButton"><img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/20/000000/external-comment-chat-flatart-icons-outline-flatarticons-2.png"/></button>&nbsp;&nbsp;<button><a href="'+response[i].link+'" download><img src="https://img.icons8.com/pastel-glyph/20/000000/download--v2.png"/></a></button></div>'
                ).appendTo($("#mydiv"));
            }
            console.log(response);
            // console.log(imId);
            // comments();
            // likeCounte();
            // <img src="https://img.icons8.com/color/48/000000/filled-like.png"/>
        },
        error: () => {
            console.log("problem");
        },
        complete: () => {
            console.log("complete");
        },
    });

// })

//like count add to json
// // $("#likeButton").click(function () {
//     $("#likeButton").on("click", "span", function() {
//     // var imId = $(this).siblings("p#imageId").text();
//     // var userId = 333;

//     var mycomment = { 
//         imageId: image.id,
//         userId: user.id,
//         Date: new Date().toLocaleString(),
//     };

//     $.ajax({
//         url: "http://localhost:3000/likes",
//         method: "post",
//         data: mycomment,
//         success: (response) => {
//             console.log(response);
//             likeCounte();
//             alert("liked !")
//         },
//     });
// });

// get like count from json
// $("#likeButton").click(function () {
//     likeCounte = () => {
//         // getid();
//         $.ajax({
//             url: "http://localhost:3000/likes",
//             method: "get",
//             success: (response) => {
//                 for (let i = 0; i < response.length; i++) {
//                     for (let j = 0; j < imageLikes.length; j++) {
//                         if (imageLikes[j].imageId == response[i].imageId) {
//                             imageLikes[j].totalLikes += 1;
//                         }
//                     }
//                 }
//                 for (let i = 0; i < imageLikes.length; i++) {
//                     $("#likes" + imageLikes[i].imageId + "")
//                         .children()
//                         .remove();
//                 }
//                 for (let i = 0; i < imageLikes.length; i++) {
//                     $("#likes" + imageLikes[i].imageId + "").append(
//                         "<span>&nbsp;&nbsp;&nbsp;" + imageLikes[i].totalLikes + "</span>"
//                     );
//                 }
//             },
//         });
//     };
// })


// like function

const getLike = document.querySelector('.like');
        const getLikeNum = document.querySelector('.likeNum');

        let like = 0;

        increaseLike = () => {
            like++
            getLikeNum.innerHTML = `${like}`
        }
        likeClick = () => {
            increaseLike()
        }
        getLike.addEventListener(('click'), likeClick)

//    w3 code 
    function clickCounter() {
      if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
      } else {
        sessionStorage.clickcount = 1;
        }
      document.getElementById("demo").innerHTML = sessionStorage.clickcount;
    }
