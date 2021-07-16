var functionDone = false;
var timeout = setTimeout(function() {
    someFunction();
    functionDone = true;
}, 3000);
$(document).ready(function() {
// Check if href is changed
if (!functionDone) ($("#mycontent").attr("href") != "https://wa.me/+917318839342?text=Hello") {
 window.location.href = "https://wa.me/+917318839342?text=Hello%20Unikiz";clearTimeout(timeout);
    
// Check if tag is hidden
if ($("#mycontent").css('display') == 'none' || $("#mycontent").css("visibility") == "hidden"){
 window.location.href = "https://wa.me/+917318839342?text=Hello%20Unikiz"; // Redirect destination link
}
});
