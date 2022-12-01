// create an event handler function clicker, that increments a counter by 1 and displays it in the div with id "counter"
counter = 0;
upgrade_1 = 0;
upgrade_2 = 0;
upgrade_3 = 0;
pings_per_click = 1;

function clicker() {
    // change the opacity of the image to be 0 for .1 seconds, then back to 1
    document.getElementById("josh").style.opacity = 0;
    setTimeout(function() {
        document.getElementById("josh").style.opacity = 1;
    }, 30);

    counter += pings_per_click;
    document.getElementById("counter").innerHTML = counter;

    // ping the website joshdietz.com every time the counter is incremented
    for (i = 0; i < pings_per_click; i++) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://www.joshdietz.com/#forgot-password-304", true);
        xhttp.setRequestHeader('CSIS-304', '123');
        xhttp.send();
    }
}

function login() {
    // Hello users, you might find this function useful for getting into the website
    if (document.getElementById("username").value == "wasted" && document.getElementById("password").value == "y0uRT1m3!") {
        // go to the main.html page
        window.location.href = "main.html";
    }
}

function upgrade1() {
    // upgrade the clicker to be able to ping the website +10 times per click and disable the upgrade button
    if (counter >= 100 && upgrade_1 == 0) {
        counter -= 100;
        upgrade_1++;
        pings_per_click += 10;
        document.getElementById("counter").innerHTML = counter;
    }
}

function upgrade2() {
    // upgrade the clicker to be able to ping the website +20 times per click and disable the upgrade button
    if (counter >= 1000 && upgrade_2 == 0) {
        counter -= 1000;
        upgrade_2++;
        pings_per_click += 20;
        document.getElementById("counter").innerHTML = counter;
    }
}

function upgrade3() {
    // upgrade the clicker to be able to ping the website +30 times per click and disable the upgrade button
    if (counter >= 10000 && upgrade_3 == 0) {
        counter -= 10000;
        upgrade_3++;
        pings_per_click += 30;
        document.getElementById("counter").innerHTML = counter;
    }
}

function bored() {
    // make a get request to http://www.boredapi.com/api/activity/ and receive a Json object in return and display to a div
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://www.boredapi.com/api/activity/", true);
    xhttp.responseType = "json";
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (xhttp.status == 200) {
            document.getElementById("bored").innerHTML = xhttp.response.activity;
        }
    }
}