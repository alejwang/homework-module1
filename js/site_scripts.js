var imageNames = [
    "partners/partner-bustour.png",
    "partners/partner-cabinrental.png",
    "partners/partner-campingadv.png",
    "partners/partner-collegetours.png",
    "partners/partner-rentalbike.png",
    "partners/partner-tourgroup.png"
];
var partnerNames = [
    "Bus Tour",
    "Cabin Rental",
    "Camping Adventure",
    "College Tours",
    "Bike Rental",
    "Tour Group"
];
var openTag = '<li class="partner"><img src="images/';
var closeTag = '"></li>';
for (var i = 0; i < imageNames.length; i++) {
    var partnerHTML = openTag + imageNames[i] + '" alt=" Partner ' + partnerNames[i] + closeTag;
    document.getElementById("partners").innerHTML += partnerHTML;
}