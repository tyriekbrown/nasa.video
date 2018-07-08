var apiURL = "https://api.nasa.gov/planetary/apod?api_key=XLcBjZVZ7XyY6mSRIt1bcDSQRBjr5CDg5GGgX2aw";
$.ajax({
url: apiURL,
// Work with the response
success: function( response ) {
console.log( response ); // server response
},
error: function(r){
console.log(r); //server response
}
});
