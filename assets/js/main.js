function validatePassword() {
    var hasError = false;
    var patt1 = new RegExp("^(?=.{6,})");
    var patt2 = new RegExp("^(?=.{,12})$");
    var patt3 = new RegExp("^(?=.*[a-z])");
    var patt4 = new RegExp("^(?=.*[A-Z])");
    var patt5 = new RegExp("^(?=.*[0-9])");
    var patt6 = new RegExp("^(?=.*[*$_#=@])");
    var patt7 = new RegExp("^(?=.*[!%()])");
    var inputTxt = document.getElementById('mainInput').value;
    console.log(inputTxt);
    var pswdLst = inputTxt.trim().split(',');
    console.log(pswdLst);
    var outputList = document.createElement('ul');
    pswdLst.forEach(testPassword);
    function testPassword(pswd) {
        pswd = pswd.trim();
        var errorTxt = pswd + " ";
        console.log(pswd);
        if(!patt1.test(pswd)){
            console.log(pswd + " Case 1");
            errorTxt += "Password must be at least 6 characters long."
        } else if (pswd.length > 12){
            console.log(pswd + " Case 2");
            errorTxt += "Password must be at max 12 characters long."
        } else if(!patt3.test(pswd)){
            console.log(pswd + " Case 3");
            errorTxt += "Password must contain at least one letter from a-z."
        } else if(!patt4.test(pswd)){
            console.log(pswd + " Case 4");
            errorTxt += "Password must contain at least one letter from A-Z."
        } else if(!patt5.test(pswd)){
            console.log(pswd + " Case 5");
            errorTxt += "Password must contain at least one letter from 0-9";
        } else if(patt7.test(pswd)) {
            console.log(pswd + " Case 7");
            errorTxt += "Password cannot contain %!)(.";
        } else if(!patt6.test(pswd)) {
            console.log(pswd + " Case 6");
            errorTxt += "Password must contain at least one letter from *$_#=@";
        } else {
            console.log(pswd + " Case 8");
            errorTxt += "Success";
        }
        var liItem = document.createElement('li');
        liItem.appendChild(document.createTextNode(errorTxt));
        outputList.append(liItem);
        console.log(outputList);
    }
    outputList.style.borderBottom = "1px Dotted black";
    outputList.style.paddingBottom = "6px";
    document.getElementById('outputBox').insertBefore(outputList, document.getElementById('outputBox').firstChild);
}
