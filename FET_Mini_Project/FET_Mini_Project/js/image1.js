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
                  '</p><button id="likeButton" class="like"><b><img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/20/000000/external-like-instagram-flatart-icons-outline-flatarticons.png"/></b></button>&nbsp;&nbsp;<button><img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/20/000000/external-comment-chat-flatart-icons-outline-flatarticons-2.png"/></button>&nbsp;&nbsp;<button><a href="'+response[i].link+'" download><img src="https://img.icons8.com/pastel-glyph/20/000000/download--v2.png"/></a></button></div>'
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
