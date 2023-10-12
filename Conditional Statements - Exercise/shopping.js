function shopping(input) { 
    let budget = Number(input[0])
    let GPUs = Number(input[1]);
    let CPUs = Number(input[2]);
    let RAMs= Number(input[3]);
    let discount = 0;

    let priceGPU = 250 * GPUs;
    let priceCPU = priceGPU * 0.35;
    let priceRAM = priceGPU * 0.10;

    let finalPrice = priceGPU + (priceCPU * CPUs) + (priceRAM * RAMs);

    if (GPUs > CPUs) {
        discount = finalPrice * 0.15;
        finalPrice -= discount;
    }

    if (finalPrice <= budget) {
        let restMoney = budget - finalPrice;
        console.log(`You have ${restMoney.toFixed(2)} leva left!`);
    } else {
        let neededMoney = finalPrice - budget;
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva more!`);
    }
}

shopping(["900", "2", "1", "3"])
