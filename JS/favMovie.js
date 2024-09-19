let movie = "Avatar"
let guess = prompt("")
while((guess!=movie)&&(guess!="quit")){
    console.log("Fav movie guess is wrong")
    guess =prompt("wrong guess.")
}
if(movie==guess){
    console.log("guessed movie is right.")
}