const inputValue = document.querySelector('#labelInput');
const labelPreview = document.querySelector('#preview');
const btnColor = document.querySelector('#colorBtn');
const colorLable = document.querySelector('#colorInput');
const saveBtn = document.querySelector('#createLabelBtn');
const createLabelSection = document.querySelector('.label-creation');
const table = document.querySelector('#tableData');
const tbody = document.querySelector('#tbody');
const rowCount = document.querySelector('.rowCount');
const searchItem = document.querySelector('#search');

let responseData = [];

changeState();
function showValue(e){
    if(e.value == ''){
        labelPreview.innerHTML = 'Add label';
    }else{
        labelPreview.innerHTML = e.value;
    }
    console.log('target value', e.value);
    changeState();
}
function changeColor(e){
    let colorArr = ['red', 'blue', 'orange', 'green', 'gray','pink'];
    let colorIndex = '';
    colorIndex = Math.floor(Math.random() * colorArr.length);
    e.style.backgroundColor = colorArr[colorIndex];
    labelPreview.style.backgroundColor = colorArr[colorIndex];
    colorLable.value = colorArr[colorIndex];
    changeState();
}
function changeState(){
    saveBtn.disabled = false;
    if(inputValue.value == '' || colorLable.value == ''){
        saveBtn.disabled = true;
        console.log('changing button state');
    }
    saveBtn.innerHTML = 'Create Label';
}
function clearData(){
    inputValue.value = '';
    colorLable.value = '';
    btnColor.style.backgroundColor = '';
    labelPreview.style.backgroundColor = '';
    changeState();
}
function openDialog(){
    console.log('createLabelSection',createLabelSection);
    //createLabelSection.style.display = "none";
    if(createLabelSection.style.display === "none"){
        createLabelSection.style.display = "flex";
    }else{
        createLabelSection.style.display = "none";
    }
}
function saveData(){
    changeState();
    let tr =  document.createElement('tr');
    let td1 = tr.appendChild(document.createElement('td'));
    let td2 = tr.appendChild(document.createElement('td')); 
    let td3 = tr.appendChild(document.createElement('td')); 
    let td4 = tr.appendChild(document.createElement('td')); 
    td1.innerHTML= inputValue.value;
    td1.classList.add("td-theming");
    td1.style.background = colorLable.value + '';
    td2.innerHTML = colorLable.value;
    td3.innerHTML = '<button class="update-btn-group__link" type="button" onclick="updateRow(this)">Edit</buton>';
    td4.innerHTML = '<button class="update-btn-group__link" type="button" onclick="deleteRow(this)">Delete</button>';
    tbody.appendChild(tr);
    console.log('tbody tr', tbody.appendChild(tr));
    let count = table.tBodies[0].rows.length;   
    rowCount.innerHTML = count;
    console.log('count', count);
    if(count >= 1){
        clearData();
    }
}
function search(){
    console.log('count',table.tBodies[0].rows[0].cells[0].innerHTML);
    let keyword = '';
    let count = table.tBodies[0].rows.length;  
    for(let i=0; i< count; i++){
        keyword = table.tBodies[0].rows[i].cells[0].innerHTML;      
    }
    let data = table.tBodies[0].rows;
    console.log('keyword', keyword);
    keyword = keyword.toLowerCase();
    let searchKey = searchItem.value;
    console.log('data',data[0]);
    let filtered_array = data.filter((row, index) => {
        return (row.cells[0].toLowerCase(searchKey) != -1) || (item.cells[1].toLowerCase(searchKey) != -1);
    });
    console.log('filtered Array', filtered_array);

}
function updateRow(e){
    let rowId = e.parentNode.parentNode;
    let tr = document.querySelector('tr');
    let data = rowId.querySelectorAll('td');
    var name = data[0].innerHTML;
    var color = data[1].innerHTML;
    alert("Name:"+ name + "color: "+ color);
    inputValue.value = name;
    colorLable.value = color;
    changeState();
    saveBtn.innerHTML = "Update Label";
    createLabelSection.style.display = "flex";
    
    tbody.replaceChild(rowId, inputValue.value);
    // let tr =  document.createElement('tr');
    // let td1 = tr.appendChild(document.createElement('td')); 
    // let td2 = tr.appendChild(document.createElement('td')); 
    // let td3 = tr.appendChild(document.createElement('td')); 
    // let td4 = tr.appendChild(document.createElement('td')); 
    // td1.innerHTML= '<input type="text" name="input3" id="input1" class="form-control form-control_size">';
    // td2.innerHTML = '<input type="text" name="input4" id="input2" class="form-control form-control_size">';
    // td3.innerHTML = '<button class="update-btn-group__link" type="button" onclick="addRow(this)">Update</buton>';
    // td4.innerHTML = '<button class="update-btn-group__link" type="button" onclick="deleteRow(this)">Delete</button>';
    // tbody.replaceChild(tr, pNode);
}
function addRow(e){
    let pNode = e.parentNode.parentNode;
    let tr =  document.createElement('tr');
    let td1 = tr.appendChild(document.createElement('td')); 
    let td2 = tr.appendChild(document.createElement('td')); 
    let td3 = tr.appendChild(document.createElement('td')); 
    let td4 = tr.appendChild(document.createElement('td')); 
    td1.innerHTML= input1.value;
    td2.innerHTML = input2.value;
    td3.innerHTML = '<button class="update-btn-group__link" type="button" onclick="updateRow(this)">Edit</buton>';
    td4.innerHTML = '<button class="update-btn-group__link" type="button" onclick="deleteRow(this)">Delete</button>';
    document.querySelector('#tbody').replaceChild(tr, pNode);
}
function deleteRow(e){
    let confirmMessage = confirm('Are you sure you want to delete?');
    let del = e.parentNode.parentNode;
    if(confirmMessage){
        console.log('parent node', e.parentNode.parentNode);
        console.log('delete parentNode', del.parentNode);
        del.parentNode.removeChild(del);
    }else{
        return false;
    }
}
function searLabel(){
    let keyword = document.querySelector('#search').value;
    keyword = keyword.toLowerCase();
}


// let row = 1;
// function saveData(){
//     let newRow = table.insertRow(row);
//     let cell1 = newRow.insertCell(0);
//     let cell2 = newRow.insertCell(1);
//     cell1.innerHTML = inputValue.value;
//     if(inputValue.value == style.backgroundColor){

//     }
//     cell2.innerHTML = colorLable.value;
//     console.log('button is clicked');
//     row++;
// }
