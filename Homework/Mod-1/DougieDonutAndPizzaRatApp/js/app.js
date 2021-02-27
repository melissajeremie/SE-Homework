console.log("app.js here");

// const APIKEY = "1r7ndj6oyulqhosresu3eorpu";
// const TOKEN = "3jIPXBOlxaVpuGrsRKxm6Y2D0";
const URL = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough="; 

$(() => {
    let borough = null;
    $("button").click(function(event) {
        event.preventDefault();
        borough = this.id;
        console.log(borough);

        const requestUrl = URL + borough;
        console.log(requestUrl);

        let resultNum = document.getElementsByClassName('user-input').value;
        console.log(resultNum);

        $.ajax({
            url: requestUrl,
            type: "GET",
            data: {
                "$limit": resultNum || 10
            }
        })
        .then(function(data) {
            for (let i = 0; i < data.length; i++) {
                $(".complaints").append(data[i].complaint_type + " , " + data[i].agency + "<br>");
            };
            console.log(data);
        })
    })
})