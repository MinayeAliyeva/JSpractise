var selectedRow = null;
function onFormSubmit() {}

function readFormData() {
  var formData = [];
  formData["productCode"] = document.getElementById("productCode").value;
  formData["product"] = document.getElementById("product").value;
  formData["qty"] = document.getElementById("qty").value;
  formData["price"] = document.getElementById("price").value;
  return formData;
}

function insertData(data){
    var table=document.querySelectorById("storeList").getW
}
