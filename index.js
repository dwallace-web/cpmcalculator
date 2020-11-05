const form = document.getElementById('form');
const impressions = document.getElementById('impressions');
const cpm = document.getElementById('cpm');
const mediacost = document.getElementById('mediacost');
const warning = document.querySelector('.warning');
const tbody = document.querySelector('.tabledata');


console.log(tbody);
//console.log(form, impressions, cpm, mediacost);

form.addEventListener('submit', inputData);

function inputData(e) {
    console.log(e);
    e.preventDefault();

    let impressionsvalue = (impressions.value);
    let cpmvalue = (cpm.value);
    let mediacostvalue = (mediacost.value);
    
    console.log("confirm values", impressionsvalue, cpmvalue, mediacostvalue);  
    console.log("confirm type", typeof impressionsvalue, typeof cpmvalue, typeof mediacostvalue);

    //if all values have a number
        //say TMI
    //identify calculation to use
        //when a value is blank
    //identify empty fields
        //if all empty request a number

    if(impressionsvalue != "" && cpmvalue != "" & mediacostvalue != "") {
        //console.log('TMI');
        warning.innerHTML = "There's too much data here!"

    } else if(impressionsvalue != "" && cpmvalue != "") {

    //remove warning: 
    warning.innerHTML ="";

    // (Total number of Impressions / 1000) * CPM = Total cost of campaign
    mediacostvalue = ((impressionsvalue / 1000) * cpmvalue)
    console.log('Calc Cost',typeof mediacostvalue, mediacostvalue);
    mediacostvalue = mediacostvalue.toFixed(2);
    console.log(mediacostvalue);

    //Add Data To Table
    let row = document.createElement('tr');
    let impressionrow = document.createElement('td');
    let cpmrow = document.createElement('td');
    let mediacostrow = document.createElement('td');

    impressionrow.innerHTML = impressionsvalue;
    cpmrow.innerHTML = cpmvalue;
    mediacostrow.innerHTML = mediacostvalue;
        //comment
    row.appendChild(impressionrow);
    row.appendChild(cpmrow);
    row.appendChild(mediacostrow);
    console.log(row);

    tbody.appendChild(row);

    } else if(cpmvalue != "" && mediacostvalue != "") {

    // (Total cost of campaign / CPM) * 1000 = Total number of impressions
    impressionsvalue = ((mediacostvalue / cpmvalue) * 1000) 
    console.log('Calc Impressions', impressionsvalue);
    impressionsvalue = Math.round(impressionsvalue);
    console.log('updated', typeof impressionsvalue, impressionsvalue)
    
    let row = document.createElement('tr');
    let impressionrow = document.createElement('td');
    let cpmrow = document.createElement('td');
    let mediacostrow = document.createElement('td');

    impressionrow.innerHTML = impressionsvalue;
    cpmrow.innerHTML = cpmvalue;
    mediacostrow.innerHTML = mediacostvalue;

    row.appendChild(impressionrow);
    row.appendChild(cpmrow);
    row.appendChild(mediacostrow);
    console.log(row);

    tbody.appendChild(row);

        
    } else if(mediacostvalue != "" && impressionsvalue != "") {
        
    // Total cost of campaign / (Total number of impressions / 1000)  = CPM
    cpmvalue = (mediacostvalue / (impressionsvalue / 1000))
    console.log('Calc CPM', cpmvalue);
    cpmvalue = cpmvalue.toFixed(2);
    console.log('updated', typeof cpmvalue, cpmvalue)

    let row = document.createElement('tr');
    let impressionrow = document.createElement('td');
    let cpmrow = document.createElement('td');
    let mediacostrow = document.createElement('td');

    impressionrow.innerHTML = impressionsvalue;
    cpmrow.innerHTML = cpmvalue;
    mediacostrow.innerHTML = mediacostvalue;

    row.appendChild(impressionrow);
    row.appendChild(cpmrow);
    row.appendChild(mediacostrow);
    console.log(row);

    tbody.appendChild(row);
   

    } else {
        console.log('empty values', cpmvalue);
        warning.innerHTML = "There's not enough data here!"
    }
};


// clear table

const clearResults = document.querySelector('.clearResults');
clearResults.addEventListener('click', clearTable)

function clearTable(e) {

    warning.innerHTML = "";
    
    console.log(e);
    e.preventDefault();
    
    console.log("clear table")
    let tablerow = document.getElementsByTagName("tr");
    console.log('table row', tablerow);

    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild)
    }
    
};