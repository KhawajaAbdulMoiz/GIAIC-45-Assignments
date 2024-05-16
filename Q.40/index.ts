//Q.40) Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist_name : string , album_title : string){
    return {artist_name,album_title}
}

let album_1 = make_album("Alan Walker","Faded")
let album_2 = make_album("Marshmello","Alone")
let album_3= make_album("Billie Eilish","Lovely")

console.log(album_1);
console.log(album_2);
console.log(album_3);




// With Number of Tracks
function make_album2(artist_name : string , album_title : string , no_of_tracks : number){
    return {artist_name , album_title , no_of_tracks}
}

let album_4 = make_album2("Alan Walker","Faded",15)
let album_5 = make_album2("Marshmello","Alone",10)
let album_6= make_album2("Billie Eilish","Lovely",5)

console.log(album_4);
console.log(album_5);
console.log(album_6);

