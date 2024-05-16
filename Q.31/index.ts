//Q.31) No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


let array : string[] = ["Moiz","Ahmed","Admin","Ali","Adil"];
    if(array.length == 0){
        console.log("We need to find some users!");
    }
    else{
        array=[];
        console.log("All of the usernames have been removed "+array.length);
        
    }
