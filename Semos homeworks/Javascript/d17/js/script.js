

fetch("https://jsonplaceholder.typicode.com/photos")
.then(res =>res.json())
.then(data =>{
    console.log(data);
    var photos= data.slice(0,99);
    console.log(photos);
    var div = document.createElement("div");
    for (var i =0;i<photos.length;i++){
        console.log(photos[i].thumbnailUrl);
        console.log(photos[i].url);
        {
            
            var a = document.createElement("a");
            a.href= photos[i].url;
            div.appendChild(a);
            
           var img=document.createElement("img");
            img.src =photos[i].thumbnailUrl;
            div.appendChild(img);
            a.appendChild(img);
            console.log(photos[i].url);


        
         



            document.getElementById("myButton").onclick = function () {
                location.href = "file:///C:/Users/Korisnik/SJSA_G16/Tome%20Trencev/c17/index.html";
            };
        }       
        
    };
    
    
        
    
    document.body.appendChild(div);
})