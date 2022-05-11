var menuListArray = ["Pizza Vegetariana","pizza de frango","pizza portugursa","pizza quatro queijos","pizza de calabresa","pizza de extravaganza" ];
                   

function getMenu(){
  var htmldata="";
  menuListArray.sort();
  console.log(menuListArray)
  for(var i=0;i<menuListArray.length;i++){
     htmldata=htmldata+ menuListArray[i] + '<br>'
  }
  console.log(htmldata)
  document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
  var htmldata;
  var imgtag='img id="im1" src="images/pizzaimg.png"/>'
  var item=document.getElementById("addItem").value;
  menuListArray.sort();
  htmldata=""
  for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
 }
 document.getElementById("displayAddedMenu").innerHTML = htmldata;

}

function addTop(){
  var item=document.getElementById("addItem").value;
   menuListArray.push(item);
  addItem();
}