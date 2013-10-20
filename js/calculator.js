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
    'totalDistribution': 0,
    
    'production' : {
        'Storage Shed' : {
            'BaseCost' : 20,
            'Number' : 0,
            'CurrentCost' : 20,
            'CookPerSec' : 0.2,
            'TotalPerSec' : 0,
            'Amortization' : 0,
            'TimeToGet' : 0,
            'TotalTimeEfficiency' : 0
        },

        'Used RV' : {
            'BaseCost' : 210,
            'Number' : 0,
            'CurrentCost' : 210,
            'CookPerSec' : 1,
            'TotalPerSec' : 0,
            'Amortization' : 0,
            'TimeToGet' : 0,
            'TotalTimeEfficiency' : 0
        },
        
       'Abandoned Trailer' : {
            'BaseCost' : 1000,
            'Number' : 0,
            'CurrentCost' : 1000,
            'CookPerSec' : 5,
            'TotalPerSec' : 0,
            'Amortization' : 0,
            'TimeToGet' : 0,
            'TotalTimeEfficiency' : 0
        },
        
        'Small House' : {
            'BaseCost' : 5000,
            'Number' : 0,
            'CurrentCost' : 5000,
            'CookPerSec' : 25,
            'TotalPerSec' : 0,
            'Amortization' : 0,
            'TimeToGet' : 0,
            'TotalTimeEfficiency' : 0
        },
        
        'Abandoned Warehouse' : {
            'BaseCost' : 25000,
            'Number' : 0,
            'CurrentCost' : 25000,
            'CookPerSec' : 100,
            'TotalPerSec' : 0,
            'Amortization' : 0,
            'TimeToGet' : 0,
            'TotalTimeEfficiency' : 0
        },
        
        'Laboratory' : {
            'BaseCost' : 125000,
            'Number' : 0,
            'CurrentCost' : 125000,
            'CookPerSec' : 500,
            'TotalPerSec' : 0,
            'Amortization' : 0,
            'TimeToGet' : 0,
            'TotalTimeEfficiency' : 0
        },
        
        'Underground Laboratory' : {
            'BaseCost' : 6250000,
            'Number' : 0,
            'CurrentCost' : 6250000,
            'CookPerSec' : 2000,
            'TotalPerSec' : 0,
            'Amortization' : 0,
            'TimeToGet' : 0,
            'TotalTimeEfficiency' : 0
        },
        
        'Meth-o-matic 9000' : {
            'BaseCost' : 35000000,
            'Number' : 0,
            'CurrentCost' : 35000000,
            'CookPerSec' : 13000,
            'TotalPerSec' : 0,
            'Amortization' : 0,
            'TimeToGet' : 0,
            'TotalTimeEfficiency' : 0
        },
        
        'Meth-o-matic 9000S' : {
            'BaseCost' : 40000000,
            'Number' : 0,
            'CurrentCost' : 40000000,
            'CookPerSec' : 14000,
            'TotalPerSec' : 0,
            'Amortization' : 0,
            'TimeToGet' : 0,
            'TotalTimeEfficiency' : 0
        },
        
        'Subterranean Complex' : {
            'BaseCost' : 50500000,
            'Number' : 0,
            'CurrentCost' : 50500000,
            'CookPerSec' : 50000,
            'TotalPerSec' : 0,
            'Amortization' : 0,
            'TimeToGet' : 0,
            'TotalTimeEfficiency' : 0
        },
        
        'Island State' : {
            'BaseCost' : 25010000,
            'Number' : 0,
            'CurrentCost' : 25010000,
            'CookPerSec' : 105000,
            'TotalPerSec' : 0,
            'Amortization' : 0,
            'TimeToGet' : 0,
            'TotalTimeEfficiency' : 0
        },
        
        'Moonlab Alpha' : {
            'BaseCost' : 32501000,
            'Number' : 0,
            'CurrentCost' : 32501000,
            'CookPerSec' : 11500000,
            'TotalPerSec' : 0,
            'Amortization' : 0,
            'TimeToGet' : 0,
            'TotalTimeEfficiency' : 0
        },
        
        'Meth Star' : {
            'BaseCost' : 16325010,
            'Number' : 0,
            'CurrentCost' : 16325010,
            'CookPerSec' : 11205000,
            'TotalPerSec' : 0,
            'Amortization' : 0,
            'TimeToGet' : 0,
            'TotalTimeEfficiency' : 0
        },
        
        'Heisenbelt' : {
            'BaseCost' : 41032500000000,
            'Number' : 0,
            'CurrentCost' : 41032500000000,
            'CookPerSec' : 55205000,
            'TotalPerSec' : 0,
            'Amortization' : 0,
            'TimeToGet' : 0,
            'TotalTimeEfficiency' : 0
        }
    } //end production array
};

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
