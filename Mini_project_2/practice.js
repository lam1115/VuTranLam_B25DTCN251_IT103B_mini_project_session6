let listName = "Quý Nam Lan Hùng Nam";

let student = listName.split(" ");

let reverseStudent = student.reverse();

console.log("Mảng: ",student);

console.log("Mảng sau khi đảo ngược:",reverseStudent);

let check = student.indexOf("Lan");

if(check !== -1){
    console.log("Tên Lan không tồn tại trong mảng");
}else{
    console.log("Tên Lan tồn tại trong mảng");
}

console.log("Vị trí của tên Nam trong mảng:" ,student.indexOf("Nam"));

