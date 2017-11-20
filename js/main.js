let student_array = [
    {
        "nameOfStudent" : "Divyansh Verma",
        "rollnoOfStudent" : "1510991197",
        "Batch" : "2019",
        "Class" : "CSE UCA 2"
    },
    {
        "nameOfStudent" : "Divyansh Rana",
        "rollnoOfStudent" : "1510991196",
        "Batch" : "2019",
        "Class" : "CSE 5C"
    },
    {
        "nameOfStudent" : "Divyansh lath",
        "rollnoOfStudent" : "1510991195",
        "Batch" : "2019",
        "Class" : "CSE 5C"
    }
];

let replaceCall = true;
let insertcall = false;

function insertRecord()
{ 
    $("#table-colp").collapse('hide');
    insertcall = true;
    let i = document.getElementsByClassName("form-control");   
    i[0].value = "";
    i[1].value = "";
    i[2].value = "";
    i[3].value = "";
}
function dRecord(d)
{
    let el = document.getElementsByTagName("tbody");
    el[0].parentElement.removeChild(el[0]);
    student_array.splice(d,1);
    display_on_load();
}
let ins;


function iRecord()
{
    $("#form-colp").collapse('hide');
    let studentObj ={
        "nameOfStudent" : "",
        "rollnoOfStudent" : "",
        "Batch" : "",
        "Class" : ""
    }
    let i = document.getElementsByClassName("form-control");   
    studentObj.nameOfStudent = i[0].value;
    i[0].value = "";
    studentObj.rollnoOfStudent = i[1].value;
    i[1].value = "";
    studentObj.Batch = i[2].value;
    i[2].value = "";
    studentObj.Class = i[3].value;
    i[3].value = "";
    student_array.push(studentObj);
}
function deleteRecord()
{
    $("#form-colp").collapse('hide');
    $("#table-colp").collapse('show');
    swal("Enter Roll Number or Name of Student ", {
        content: "input",
      })
      .then((value) => {
          if(value)
          {
            student_array.forEach((element, index) => {
                if(element.rollnoOfStudent === value) {
                    dRecord(index);
                }
                else if(element.nameOfStudent === value) {
                    //console.log('in else if');
                    dRecord(index);
                }
            });
        }
        
    });
}
function editRecord()
{
    $("#form-colp").collapse('hide');
    $("#table-colp").collapse('show');
    swal("Enter Roll Number or Name of Student ", {
        content: "input",
      })
      .then((value) => {
          if(value)
          {
            student_array.forEach((element, index) => {
                if(element.rollnoOfStudent === value) {
                    eRecord(index);
                }
                else if(element.nameOfStudent === value) {
                    eRecord(index);
                }
            });
        }
      });
}
function eRecord(e)
{
    $("#table-colp").collapse('hide');
    let el = document.getElementsByTagName("tbody");
    
    $("#form-colp").collapse('show');
    
    let i = document.getElementsByClassName("form-control");
    i[0].value = student_array[e].nameOfStudent; 
    i[1].value = student_array[e].rollnoOfStudent;
    i[2].value = student_array[e].Batch;
    i[3].value = student_array[e].Class;
    insertcall = false;
    ins =e;
}
function rRecord()
{
    $("#form-colp").collapse('hide');
    let i = document.getElementsByClassName("form-control");
    student_array[ins].nameOfStudent = i[0].value; 
    student_array[ins].rollnoOfStudent = i[1].value;
    student_array[ins].Batch = i[2].value;
    student_array[ins].Class = i[3].value;
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
            tdTag.innerHTML = student_array[j].nameOfStudent;
            trTag.appendChild(tdTag);
            
            let td2 = document.createElement("td");
            td2.innerHTML = student_array[j].rollnoOfStudent;
            trTag.appendChild(td2);
            
            let td3 = document.createElement("td");
            td3.innerHTML = student_array[j].Batch;
            trTag.appendChild(td3);
            
            let td4 = document.createElement("td");
            td4.innerHTML = student_array[j].Class;
            trTag.appendChild(td4);

            let td5 = document.createElement("td");
            let aTag1 = document.createElement("a");
            let iTag1 = document.createElement("i");
            aTag1.className = "btn btn-default";
            iTag1.className = "fa fa-pencil-square-o";
            aTag1.appendChild(iTag1);
            aTag1.onclick = function() { eRecord(j); };
            td5.appendChild(aTag1);
            let aTag2 = document.createElement("a");
            let iTag2 = document.createElement("i");
            aTag2.className = "btn btn-danger";
            iTag2.className = "fa fa-trash-o";
            aTag2.appendChild(iTag2);
            aTag2.onclick = function() { dRecord(j); };
            td5.appendChild(aTag2);
            trTag.appendChild(td5);
            
            tbodyTag.appendChild(trTag);  
        }
        element[0].appendChild(tbodyTag);
    }
}

function funcall()
{
    
    if(document.getElementsByTagName("tbody").length) 
    {
        let el = document.getElementsByTagName("tbody");
        el[0].parentElement.removeChild(el[0]);
    }
    if(insertcall == true)
    {
        iRecord();
    }
    else if(replaceCall == true)
    {
        rRecord();
    }
}