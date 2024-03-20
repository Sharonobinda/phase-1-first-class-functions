function receivesAFunction(prepareChicken){
     
    prepareChicken();
    
    console.log("Chicken was prepared")   
   
}

function returnsANamedFunction(){
    
    return function onlykidssalon(){
     
    }
}
function returnsAnAnonymousFunction(){
    
    return function(){

    }
}