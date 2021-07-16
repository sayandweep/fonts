$(document).ready(function() {
// Check if href is changed
if ($("#mycontent").attr("href") != "https://wa.me/+917318839342?text=Hello") {
 window.location.href = "https://wa.me/+917318839342?text=Hello%20Unikiz";
 window.clearTimeout(tID);		// clear time out.
        }, 3000);
    
// Check if tag is hidden
if ($("#mycontent").css('display') == 'none' || $("#mycontent").css("visibility") == "hidden"){
 window.location.href = "https://wa.me/+917318839342?text=Hello%20Unikiz"; window.clearTimeout(tID);		// clear time out.
        }, 3000); // Redirect destination link
}
});
