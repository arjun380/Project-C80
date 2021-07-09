
 names_of_people = [];

var GuestName = document.getElementById ("name1").value ;

names_of_people.push(GuestName);

console.log(names_of_people);


function sort()
{
    names_of_people.sort();
    console.log(name_array);
    document.getElementById("display_name").innerHTML = name_array;
}





function searching()
{
    var s= document.getElementById("s1").value;

    var found=0;

    var j ;
    for(j=0; j<names_of_people.length; j++)
    {
        if(s=names_of_people.length[j]){
            found=found+1
        }
    }
    document.getElementById("p2").innerHTML="name found"+found+"time/s";
    console.log("found name"+found+"time/s")
}
