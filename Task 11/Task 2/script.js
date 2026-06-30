var courses = ["html", "css", "js"];
var input = prompt("Enter The course");

if (courses.includes(input)) {
    console.log("Course found");
} 
else {
    courses.push(input);  
    console.log(courses);
}