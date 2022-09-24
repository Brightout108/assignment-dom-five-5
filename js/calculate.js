
// step----1
document.getElementById('btn-Calculate-Start').addEventListener('click',function(){
// step-2
   const playerPriceFieldElement =document.getElementById('playerPrice-Field');
   const playerPriceFieldString= playerPriceFieldElement.value;
   const playerPriceField=parseInt( playerPriceFieldString);
//  console.log(playerPriceField)
// step-3
   playerPriceFieldElement.value='';


// step-4
const playerCost =document.getElementById('player-cost');
const previousplayerCostString=  playerCost.innerText;
const previousplayerCostTotal=parseFloat(previousplayerCostString);


// / step-5
 const newplayerCostTotal = previousplayerCostTotal+playerPriceField;
 playerCost.innerText=newplayerCostTotal;



 
})



// / part manager----2
document.getElementById('btn-Calculate-End').addEventListener('click',function(){
// step-2
   const ManagerPriceFieldElement =document.getElementById('ManagerPrice-Field');
   const ManagerPriceFieldString= ManagerPriceFieldElement.value;
   const ManagerPriceField=parseInt(ManagerPriceFieldString);
//  console.log(ManagerPriceField)
// step-3
ManagerPriceFieldElement.value='';


// step-4
const ManagerCost =document.getElementById('Total-Cost');
const previousManagerCostString=  ManagerCost.innerText;
const previousManagerCostTotal=parseFloat(previousManagerCostString);


// / step-5
 const newManagerCostTotal =  previousManagerCostTotal+ManagerPriceField;
 ManagerCost.innerText=newManagerCostTotal;



// / part coach----3
 // step-2
 const CoachPriceFieldElement =document.getElementById('CoachPrice-Field');
 const CoachPriceFieldString=CoachPriceFieldElement.value;
 const CoachPriceField=parseInt(CoachPriceFieldString);
//  console.log(CoachPriceField)
// step-3
CoachPriceFieldElement.value='';


// step-4
const CoachCost =document.getElementById('Total-Cost');
const previousCoachCostString= CoachCost.innerText;
const previousCoachCostTotal=parseInt(previousCoachCostString);


// step-5
const newCoachCostTotal =  previousCoachCostTotal+CoachPriceField;
CoachCost.innerText=newCoachCostTotal;




})





