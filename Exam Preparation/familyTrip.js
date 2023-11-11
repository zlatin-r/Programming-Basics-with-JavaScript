function familyTrip(input) {
    let budget = Number(input[0]);
    let nigths = Number(input[1]);
    let price_per_nigth = Number(input[2]);
    let extra_cost_perc = Number(input[3]);

    if (nigths > 7) {
        price_per_nigth *= 0.95;
    }

    let total_costs = (nigths * price_per_nigth);
    let extra_cost = budget * (extra_cost_perc / 100);
    total_costs += extra_cost;

    if (budget >= total_costs) {
        console.log(`Ivanovi will be left with ${(budget-total_costs).toFixed(2)} leva after vacation.`);
    }
    else {
        console.log(`${(total_costs - budget).toFixed(2)} leva needed.`);
    }
}

familyTrip(["500",
"7",
"66",
"15"])
