// https://github.com/Nym02/problem.js


// ============================================================================
//                             Kilometer to meter conversion
// ============================================================================
function kilometerToMeter(kl){
    if(kl >= 0){
        let meter = kl * 1000;
        return meter;
    } else {
        return "Distance can not be negative";
    }
}
kilometerToMeter(0);


// ============================================================================
//                             Budget Calculator
// ============================================================================

function budgetCalculator(watchQty, phoneQty, laptopQty){
    let watchPrice = 50;
    let phonePrice = 100;
    let laptopPrice = 500;

    if(watchQty >= 0 && phoneQty >= 0 && laptopQty >= 0){
        let watchCost = watchPrice * watchQty;
        let phoneCost = phonePrice * phoneQty;
        let laptopCost = laptopPrice * laptopQty;

        let totalBudget = watchCost + phoneCost + laptopCost;

        return totalBudget;
    } else {
        
        return 'Quantity can not be negative. Please provide a valid quantity number';
    }
}
budgetCalculator(1,2,-3);

// ============================================================================
//                             Hotel Cost
// ============================================================================

function hotelCost(days){
    let totalCost = 0;
    if(days >= 0){
        for(var i = 1; i<=days; i++){
            if( i<= 10){
                totalCost = totalCost + 100;
            } else if(i >= 11 && i <= 20){
                totalCost += 80;
            } else if(i > 20){
                totalCost += 50;
            }
        }
    } else {
        return 'Days can not be negative';
    }
    return totalCost;
}
hotelCost(21);

// ============================================================================
//                             Mega Friend
// ============================================================================

function megaFrined(friends){
    let bigFriend = friends[0];
    for(let i = 1; i<friends.length; i++){
        if(bigFriend.length < friends[i].length){
            bigFriend = friends[i];

           
        } else {
            bigFriend = bigFriend;
        }
    }
    return bigFriend;
}
megaFrined(['Harry Potter', 'Ron Weasley', 'Tom Marvollo Riddle','I am lord voldemort','Hermoine Granger']);
