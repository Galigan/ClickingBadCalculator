/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * contains the functions required to compute the most efficient choice
 * 
 */

var BIG_NUMBER_PLACEHOLDER=1000000000000000000000000;

var globalTable = {
    'totalProduction': 0,
    'totalDistribution': 0
}

var productionCurrentCost = new Array();
var distributionCurrentCost = new Array();

var productionCookPerSec = new Array();
var distributionCookPerSec = new Array();

var productionTotalPerSec = new Array();
var distributionTotalPerSec = new Array();

var productionAmortization = new Array();
var distributionAmortization = new Array();

var productionTimeToGet = new Array();
var distributionTimeToGet = new Array();

var productionTotalEfficiency = new Array();
var distributionTotalEfficiency = new Array();

/*
 * 
 * INDIVIDUAL PROPERTIES UPDATE FUNCTIONS
 * 
 */

function updateCurrentCost(){
    
}

function updateAmortization(){
    
}

function updateTotalCookPerSec(){
    
}

function updateTotalDistribution(){
    
}

function updateTotalProduction(){
    
}

function updateTimeToGet(){
    
}

function updateEfficiency(){
    
}

/*
 * 
 * aggregate function for some update chain
 * 
 */

function updateTotalCookPerSecChain(){
    updateTotalCookPerSec();
    
    if(dist[item]){
        updateTotalDistribution();
    }
    else{
        updateTotalProduction();
    }
    
    updateTimeToGet();
    updateEfficiency();
}


/*
 * 
 * TRIGGER FUNCTIONS FOR UPDATES
 * 
 */

function changeAmount(){
    updateCurrentCost();
    updateAmortization();
    updateTotalCookPerSecChain();
}

function changeCookPerSec(){
    updateAmortization();
    updateTotalCookPerSecChain();
}

function changeSellPrice(){
    for(var item=0 ; allitems ; item++){
        updateAmortization();
    }
    updateTimeToGet();
    updateEfficiency();
}

/*
 * 
 * NEXT ACTION FUNCTIONS
 * 
 */

function computeBestManufactorEfficiency(){
    
    //force at least 1 value before using min
    var minEfficiency = productionTotalEfficiency[0];
    
    for(var i = 1 ; i < productionTotalEfficiency.length; i++){
        minEfficiency = Math.min(minEfficiency,productionTotalEfficiency[i]);
    }
}

function computeBestDistributionEfficiency(){
    
    //force at least 1 value before using min
    var minEfficiency = distributionTotalEfficiency[0];
    
    for(var i = 1 ; i < distributionTotalEfficiency.length; i++){
        minEfficiency = Math.min(minEfficiency,distributionTotalEfficiency[i]);
    }
}

function computeBestUpgradeEfficiency(){
    return BIG_NUMBER_PLACEHOLDER;
}

// best overall action based on most efficient profit
function computeBestAction(){
    
    var buyMin;
    var upgradeMin = computeBestUpgradeEfficiency();
    
    if(totalProduction > totalDistribution){
        buyMin = computeBestDistributionEfficiency();
    }
    else {
        buyMin = computeBestManufactorEfficiency();
    }
    
    return Math.min(buyMin,upgradeMin);
}
