const cartArray=[];



function display(cartPlayer)
{

  let totalPrice=0;
// console.log(cartPlayer)
const tableBody= document.getElementById('cartplayers');
tableBody.innerHTML='';

for (let i=0; i < cartPlayer.length; i++){
  // console.log(cartArray[i].playerName,cartArray[i].playerPrice)
  const name=cartArray[i].playerName;
  // const price=cartArray[i].playerPrice;

  // totalPrice= totalPrice+price;

  const tr=document.createElement('tr');
  tr.innerHTML=`
  <th>${i + 1}</th>
  <td>${name}</td>
  `

  tableBody.appendChild(tr);
}


}
function addtoPlayer(element){
  // console.log(element.parentNode.parentNode.children)
  // console.log(element.parentNode.parentNode.children[0].innerText)
  // console.log(element.parentNode.parentNode.children[1].children[0].innerText)


  const playerName =element.parentNode.parentNode.children[0].innerText;
  // console.log(playerName)

  // const playerPrice=element.parentNode.parentNode.children[1].children[0].innerText
  // console.log(playerPrice)

  const playerobj ={
    playerName: playerName,
    // playerPrice: parseFloat(playerPrice)

  }
  cartArray.push(playerobj)
  // console.log( cartArray)
  // console.log(cartArray.length)
  document.getElementById('totalPlayer').innerText=cartArray.length;
  display(cartArray)
}



