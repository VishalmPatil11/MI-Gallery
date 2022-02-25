$('document').ready(()=>{
    $('#login').click((e)=>{
        var username = $('#email').val();
        var pwd = $('#password').val();

        if(username == "" && pwd == ""){
            alert("enter both the details!");
        }
        else if(username == "" || pwd == ""){
            if(username == ""){
                alert("enter username");
            }else if(pwd == ""){
                alert("enter password");
            }
           
        }
        else{
            
        fetch("http://localhost:3000/user")
        .then((response)=>response.json())
        // .then(response=>console.log(response))

        .then((data)=>{
            $.each(data,function(key,value){
                if(username === value.email && pwd === value.password){
                     console.log(data);
                    sessionStorage.setItem("userdetails", JSON.stringify(value));
                    window.location.href=("../html/profile.html");

                    return false;
                }
            })
        })
        // fetch("http://localhost:3000/image")
        // .then((response)=>response.json())
        // // .then(response=>console.log(response))

        // .then((data)=>{
        //     $.each(data,function(key,value){
                
        //              console.log(data);
        //             sessionStorage.setItem("userdetails", JSON.stringify(value));
        //             window.location.href=("../html/Image.html");

        //             return false;
                
        //     })
        // })
    }
    })
})                                                                   