
// var key="47635507-7ce5810e13154770e69cba1c3";
// var endpoint = "https://pixabay.com/api/?key=" + key + "&q=";
 

// function srchImg(e){
//     e.preventDefault();
//     var q = document.getElementById('query').value;
//     var url = endpoint+q;
//     var content =''
//     $("#result").empty();
//     $.getJSON(url, function(data){
//         // console.log(data)
//         $.each(data.hits, function (key, val){
//             content+=`<div class='col-md-3 mb-3'>
//             <img src = ${val.largeImageURL} class='w-100 border p-2'
//             title='${val.type}'
//             alt='${val.tags}'height="250px"/>
//             </div>`
//         })
//         $('#result').append(content);
//     })
// }
// var key="47635507-7ce5810e13154770e69cba1c3";
// var endpoint = "https://pixabay.com/api/videos/?key=" + key + "&q=";
// function srchvId(e){
//     e.preventDefault();
//     var q = document.getElementById('query').value;
//     var url = endpoint+q;
//     var content =''
//     $("#result").empty();
//     $.getJSON(url, function(data){
//         // console.log(data)
//         $.each(data.hits, function (key, val){
//             content+=`<div class='col-md-3 mb-3'>
//             <video src = ${val.videos.large.url} class='w-100 border p-2'
//             title='${val.duration}'
//             alt='${val.tags}'height="250px" controls/>
//             </div>`
//         })
//         $('#result').append(content);
//     })
// }





var apiurl="https://pixabay.com/api/"
var key="47635507-7ce5810e13154770e69cba1c3";
    var result=[]

function getData(endpoint){
    var q = document.getElementById('query').value;
    var url = apiurl+endpoint+"?key=" + key + "&q="+q;
    $("#result").empty();
    $.getJSON(url, (data)=> result=data.hits  )

}

function srchImg(e){
    e.preventDefault();
    var content =''
    getData("")
        $.each(result, function (key, val){
            content+=`<div class='col-md-3 mb-3' id="c${key}">
            <img src = ${val.largeImageURL} class='w-100 border p-2'
            title='${val.type}'
            alt='${val.tags}'height="250px"/>
            </div>`
        })
        $('#result').append(content);
}

function srchvId(e){
    e.preventDefault();
    var content =''
    getData("videos/")
    $.each(result, function (key, val){
            content+=`<div class='col-md-3 mb-3' id="c${key}">
            <video src = ${val.videos.large.url} class='w-100 border p-2'
            title='${val.duration}'
            alt='${val.tags}'height="250px" controls/>
            </div>`
        })
        $('#result').append(content);
}


