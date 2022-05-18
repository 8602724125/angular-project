console.log("Chintu")

function createNewPerson(name){
    const obj={}
    obj.name =name
    obj.greeting = function(){
        alert('Hi I am '+obj.name+".")
    }
    return obj;
}



lets expore creating classes via constructor and creating object
instances from them in javascript. first of all we did like you to make 
a new local copy of the oojs html  file we saw in or first objects
article

lets start by looking at how you could define a person with a normal
function add this function within the script Element

you can now create a new person by calling this function 
try the following lines in our browser java script console

this works well enough butt it is a big long winded if
we