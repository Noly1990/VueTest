var xmlhttp;
if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
} else { // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("POST", "https://andruxnet-random-famous-quotes.p.mashape.com/cat=", true);
xmlhttp.setRequestHeader("X-Mashape-Key", "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V", "Accept", "application/json", "Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("fname=Yan&lname=Jun");