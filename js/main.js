let student_array = [
    {
        "name" : "Divyansh Verma",
        "rollno" : "1510991197",
        "Class" : "CSE UCA 2"
    },
    {
        "name" : "Divyansh Rana",
        "rollno" : "1510991196",
        "Class" : "CSE 5C"
    },
    {
        "name" : "Divyansh lath",
        "rollno" : "1510991195",
        "Class" : "CSE 5C"
    }
];

let replace_counter = true;
let insert_counter = false;
function delete_record()
{
    $("#form-colp").collapse('hide');
    $("#table-colp").collapse('show');
    swal("Roll Number or Name of Student ", {
        content: "input",
      })
      .then((value) => {
          if(value)
          {
            student_array.forEach((element, index) => {
                if(element.rollno === value) {
                    del_record(index);
                }
                else if(element.name === value) {
                    //console.log('in else if');
                    del_record(index);
                }
            });
        }
        
    });
}
function insert()
{ 
    $("#table-colp").collapse('hide');
    insert_counter = true;
    let i = document.getElementsByClassName("form-control");   
    i[0].value = "";
    i[1].value = "";
    i[2].value = "";
}
function insert_record()
{
    $("#form-colp").collapse('hide');
    let studentObj ={
        "name" : "",
        "rollno" : "",
        "Class" : ""
    }
    let i = document.getElementsByClassName("form-control");   
    studentObj.name = i[0].value;
    i[0].value = "";
    studentObj.rollno = i[1].value;
    i[1].value = "";
    studentObj.Class = i[3].value;
    i[2].value = "";
    student_array.push(studentObj);
}
function del_record(d)
{
    let el = document.getElementsByTagName("tbody");
    el[0].parentElement.removeChild(el[0]);
    student_array.splice(d,1);
    display_on_load();
}
let ins;

function editrecord(e)
{
    $("#table-colp").collapse('hide');
    let el = document.getElementsByTagName("tbody");
    
    $("#form-colp").collapse('show');
    
    let i = document.getElementsByClassName("form-control");
    i[0].value = student_array[e].name; 
    i[1].value = student_array[e].rollno;
    i[2].value = student_array[e].Class;
    insert_counter = false;
    ins =e;
}
function edit_record()
{
    $("#form-colp").collapse('hide');
    $("#table-colp").collapse('show');
    swal("Roll Number or Name of Student ", {
        content: "input",
      })
      .then((value) => {
          if(value)
          {
            student_array.forEach((element, index) => {
                if(element.rollno === value) {
                    editrecord(index);
                }
                else if(element.name === value) {
                    editrecord(index);
                }
            });
        }
      });
}

function readrecord()
{
    $("#form-colp").collapse('hide');
    let i = document.getElementsByClassName("form-control");
    student_array[ins].name = i[0].value; 
    student_array[ins].rollno = i[1].value;
    student_array[ins].Class = i[2].value;
}
function funcall()
{
    
    if(document.getElementsByTagName("tbody").length) 
    {
        let el = document.getElementsByTagName("tbody");
        el[0].parentElement.removeChild(el[0]);
    }
    if(insert_counter == true)
    {
        insert_record();
    }
    else if(replace_counter == true)
    {
        readrecord();
    }
}
function display_on_load()
{   
    $("#form-colp").collapse('hide');
    if(document.getElementsByTagName("tbody").length==0)
    {
        let element = document.getElementsByTagName("table");
        let tbodyTag = document.createElement("tbody");
        for(let j = 0 ;j < student_array.length; j++)
        {
            let trTag = document.createElement("tr");

            let tdTag = document.createElement("td");
            tdTag.innerHTML = student_array[j].name;
            trTag.appendChild(tdTag);
            
            let td2 = document.createElement("td");
            td2.innerHTML = student_array[j].rollno;
            trTag.appendChild(td2);
            
            let td4 = document.createElement("td");
            td4.innerHTML = student_array[j].Class;
            trTag.appendChild(td4);

            let td5 = document.createElement("td");
            let aTag1 = document.createElement("a");
            let iTag1 = document.createElement("i");
            aTag1.className = "btn btn-default";
            iTag1.className = "fa fa-pencil-square-o";
            aTag1.appendChild(iTag1);
            aTag1.onclick = function() { editrecord(j); };
            td5.appendChild(aTag1);
            let aTag2 = document.createElement("a");
            let iTag2 = document.createElement("i");
            aTag2.className = "btn btn-danger";
            iTag2.className = "fa fa-trash-o";
            aTag2.appendChild(iTag2);
            aTag2.onclick = function() { del_record(j); };
            td5.appendChild(aTag2);
            trTag.appendChild(td5);
            
            tbodyTag.appendChild(trTag);  
        }
        element[0].appendChild(tbodyTag);
    }
}

