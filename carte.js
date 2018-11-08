var increment_btns = document.querySelectorAll('.plus-btn');
var decrement_btns = document.querySelectorAll('.minus-btn');
var remove_btns = document.querySelectorAll('.delete-btn')

function calcTotal () {
 const products = document.querySelectorAll('.item');
  let total = 0;
  for( let product of products){
  	const quantity = product.querySelector('.unit-quantity').innerHTML
  	const unitPrice = product.querySelector('.unit-price').innerHTML
 
  console.log(unitPrice)
  	total+=quantity*parseInt(unitPrice)
  }
  const totalF=document.querySelector('.total')
  totalF.innerHTML=total
}
for(let btn of increment_btns){
	btn.onclick=function(event) {
		const quantityspan = event.target.parentElement.querySelector('.unit-quantity')
			quantityspan.innerHTML++;
			calcTotal ()

	}
}
for(let btn of decrement_btns){
	btn.onclick=function(event) {
		const quantityspan = event.target.parentElement.querySelector('.unit-quantity');
		if(quantityspan.innerHTML <=0){
			return ;}
	quantityspan.innerHTML--;
	calcTotal ()

		

	}
}
for(let btn of remove_btns){
	btn.onclick=function(event){
		    btn.parentElement.parentElement.remove();
         calcTotal()
	}
}
