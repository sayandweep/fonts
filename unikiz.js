$(document).ready(function() {
// Check if href is changed
if ($("#mycontent").attr("href") != "https://youtube.com/channel/UC8WTpzPSZdUnSKn37-5WbVw") {
 window.location.href = "https://wa.me/+917318839342?text=Hello%20Unikiz"; // Redirect destination link
};
    
// Check if tag is hidden
if ($("#mycontent").css('display') == 'none' || $("#mycontent").css("visibility") == "hidden"){
 window.location.href = "https://wa.me/+917318839342?text=Hello%20Unikiz"; // Redirect destination link
}
});
