
const rate = document.querySelectorAll(".rate");
var theRating = 0
function SetRating(rating) {
    rate.forEach(element => {
        element.classList.remove("rate-active")
    })
    document.getElementById("rate" + rating ).classList.add("rate-active");
    theRating = rating;
}
document.getElementById("btn-submit").addEventListener("click", ApplyRating);
function ApplyRating() {
    if (theRating == 0) {
        alert("No rating selected, didn't you mean to give us a 5?");
        return
    }
    document.getElementById("score").innerHTML = theRating;
    document.getElementById("submitted").style.display= "flex";
    document.getElementById("start").style.display="none";
}
