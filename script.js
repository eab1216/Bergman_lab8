
var shoppingList=[
{
name:'steak',
price: 19.99
 },

{
name: 'almond milk',
price:2.99
 },

{
name: 'apples',
 price: 1.39
 },

{
name:'crackers',
price: 1.69
},

{
 name:'cookies',
 price:3.75
  },
  ];
 // var shoppingList= [groceryItem1, groceryItem2, groceryItem3, groceryItem4];
 
 var shoppingTotal=0; 
 var newItem = '';
 var newPrice = '';

// shoppingList.push(groceryItem5);

shoppingList.forEach(function(item){
	document.getElementById('prettyList').innerHTML += '<li>' + item.name +'</li>';
	document.getElementById('prettyList2').innerHTML += '<li>' + item.price + '</li>';
	shoppingTotal += item.price;
});
document.getElementById('totalspot').innerHTML += ('Your total is : $' + shoppingTotal);


function newObject (makeNewItem, makeNewPrice){
this.name =makeNewItem;
this.price =makeNewPrice; 
return {name, price};
 };

function radFunction(){
	newItem = document.getElementById('foodInput').value; //using .value will extract user input from this text box
	
	newPrice = document.getElementById('priceInput').value;
	
	var ul=document.body.children[1];
	var appChild = document.createElement('li');
	appChild.innerHTML=newItem;
	ul.appendChild(appChild);
	
	var ul2 = document.body.children[2];
	var appChild2 = document.createElement('li');
	appChild2.innerHTML=newPrice;
	ul2.appendChild(appChild2);

shoppingTotal += Number(newPrice);
    document.getElementById("totalspot").innerHTML = ("the total is " + shoppingTotal);

  



};
