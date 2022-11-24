---
title: Bid formula
---

The algorithm we use to set bids per click is quite complex. The factors it takes into account are: 

- Average order value (AOV)
- ACoS target chosen by you
- Conversion rate of each keyword in each advertising format
- Cost per click (CPC)

At high-level, the formula used to set bids per click for each keyword is:

![Amazon ppc bid formula](/images/understanding/formula.png)

This is what in the industry is called _rational bid_.


Increasing/decreasing your ACoS target will proportionally increase/decrease on bids per click.

This formula guarantees that in the long run, if the sales price or conversion rate does not vary, the keyword will have an ACoS close to your target.
The conversion rate and sales price change over time, so Advigator calculates all bids every day according to all available data.
The conversion rate is calculated at different time periods (year, quarter, month), for the specific ad format (SP, SD, SBV) and search term.

## What's difference with Amazon's suggested bid?

In the Amazon Advertising Console you can find a suggested bid range for each keyword. 

![Amazon suggested bid](/images/understanding/suggested_bid.png)

Suggested bids provide information on other sellers' bids per click.
- Lower range: Means that 25% of sellers got impressions with a bid <= $0.11 
- Suggested bid: Means that 50% of sellers got impressions with a bid <= $0.30 
- Upper range: Means that 75% of sellers got impressions with a bid <= $0.91 

Advigator does not consider the bid per click suggested by Amazon, because it's not calculated for your specific product and goals. 

For example, another seller might have a higher selling price and so able to afford to bid higher. Or he might have a lower than average conversion rate and so be willing to spend less per click. Or it isn't interested in reducing ACoS and is so willing to bid higher to appear in the first position. 

The optimal bid set by Advigator may be within the suggested range. But if you choose a very high target ACoS then it may be beyond the upper range. Or vice versa.