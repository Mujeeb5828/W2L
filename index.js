function beforesubmit(){
    let inputdate = document.querySelector(".inputdate");
    let outputdate = document.querySelector(".outputdate");
    console.log('1'+inputdate.value);
    let formatteddate = new Date(inputdate.value).toLocaleDateString("en-US");
    console.log(formatteddate);
    outputdate.value=formatteddate; 
}