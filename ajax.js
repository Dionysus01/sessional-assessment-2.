var dataObj;

var xhr=new XMLHttpRequest();

// console.log(xhr)

xhr.onreadystatechange=function(){

    if(this.readyState==4 && this.status==200)

    {

        var data=this.responseText;

        // var dataObj= JSON.parse (data)

        dataObj= JSON.parse (data)

        for(var i=0;i<dataObj.length;i++){

            console.log(dataObj[i].name);

        }

    }

}

 

// to open any xml url v.imp

// xhr.open("GET","https://jsonplaceholder.typicode.com/posts");

xhr.open("GET","https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09");

xhr.send();