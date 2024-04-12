function maxProfit(prices: number[]): number {
    let cost = prices[0], profit = 0;
    for (const price of prices) {
        cost = Math.min(cost, price);
        profit = Math.max(profit, price - cost);
    }
    return profit;
};