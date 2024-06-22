// IF AND ELSE IF STATEMENT
var userName = "Misbah";
var password = "55066";
var code = "1981";
if (userName == "Misbah" && password == "55066") {
    console.log("kindly provide code");
    if (code == "1981") {
        console.log("Hello Nice to met you" + " " + userName);
    }
    else {
        console.log("invalid code");
    }
    // Second user 
}
else if (userName == "laiba" && password == "99099") {
    console.log("aslam o alikum" + " " + userName);
    if (code == "4466") {
        console.log("Hi" + " " + userName + " " + "Nice to met you");
    }
    else {
        console.log("invalid code");
    }
}
else {
    console.log("bye");
}
