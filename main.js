name_of_the_student_array=[];

function submit(){
   var display_student_array = [];
   
   for (var j = 1; j <= 4; j++ )
   {
       var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
     console.log(name_of_the_student);
     name_of_the_student_array.push(name_of_the_student);  
   }
}
function sort(){
    students.sort();
    document.getElementById("display_name").innerHTML=students;
}