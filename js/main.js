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
    labelPreview.innerHTML = 'Label Preview 1';
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
function counterNumber(){
    let count = table.tBodies[0].rows.length;   
    rowCount.innerHTML = count;
    console.log('count', count);
    if(count >= 1){
        clearData();
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
    counterNumber();
}
function updateRow(e){
    let rowId = e.parentNode.parentNode;
    console.log("rowId", rowId);
    let tr = document.querySelector('tr');
    let data = rowId.querySelectorAll('td');
    var name = data[0].innerHTML;
    var color = data[1].innerHTML;
    alert("Name:"+ name + "color: "+ color);
    inputValue.value = name;
    colorLable.value = color;
    saveBtn.innerHTML = "Update Label";
    createLabelSection.style.display = "flex";
    console.log(rowId);
    tbody.replaceChild(tr , rowId);
    changeState();
}
function deleteRow(e){
    let confirmMessage = confirm('Are you sure you want to delete?');
    let del = e.parentNode.parentNode;
    let count = table.tBodies[0].rows.length;  
    if(confirmMessage){
        console.log('parent node', e.parentNode.parentNode);
        console.log('delete parentNode', del.parentNode);
        del.parentNode.removeChild(del); 
        rowCount.innerHTML = count - 1;
    }else{
        return false;
    }
}
function search(){
    let rowCell, textValue;
    let keyword = document.querySelector('#search').value;
    keyword = keyword.toLowerCase();
    for(let i = 0; i <= table.tBodies[0].rows.length; i++){
        rowCell = table.tBodies[0].rows[i].cells[0];
        if(rowCell){
            textValue = rowCell.textContent || rowCell.innerText;
            if(textValue.toLowerCase().indexOf(keyword) > -1){
                table.tBodies[0].rows[i].style.display = '';
            }else{
                table.tBodies[0].rows[i].style.display = 'none'; 
            }
        }

        console.log(rowCell);
    }
    //rowCell = table.tBodies[0].rows[i].cells[0];
    // let rows = table.tBodies[0].rows;
    // let filteredRow = rows.filter((item) => {
    //     if(item.cells[0]){
    //         textValue = item.cells[0].innerText || item.cell[0].textContent;
    //         if(textValue.toLowerCase().indexOf(keyword) > -1){
    //            return item.style.display = '';
    //         }else{
    //           return  item.style.display = 'none';
    //         }
    //     }
    //     console.log(item);
    // });
    // return filteredRow;
}
search();
