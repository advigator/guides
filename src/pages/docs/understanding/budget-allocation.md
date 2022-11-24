---
title: Budget allocation to sub campaigns
---

How Advigator dynamically distributes the daily budget you choose at the campaign group level into its sub-campaigns

![Campaigns budget](/images/understanding/campaigns.png)

## Manual vs Automated budget allocation

For each sub-campaign you can choose to use a fixed % of the daily budget at the product level and this will never be changed. You must be careful that the total amount is 100% so that you do not spend more than the budget you have allocated at the product level.

If you choose "Auto" instead, Advigator will dynamically allocate the budget to the sub campaigns according to the method described below.

You can also change this setting using [Bulk Operations](/docs/bulk-operations).


### Auto: Day 0 - Budget equally distribuited

Suppose you activated a campaign group today that sponsors all advertising formats. There is no historical data so Advigator distributes the budget equally across the four advertising formats (Sponsored Products, Display, Brand and Video). 
Within Sponsored Products, manual takes 80 percent and auto 20 percent.


| Product daily budget (100$)             | Day 0 (no data) |
|-----------------------------------------|-----------------|
| - Sponsored Products (manual)           | 20%             |
| - Sponsored Products (auto)             | 5%              |
| - Sponsored Display                     | 25%             |
| - Sponsored Brand                       | 25%             |
| - Sponsored Brand Video (keywords)      | 12.5%           |
| - Sponsored Brand Video (product pages) | 12.5%           |
| Total                                   | 100%            |


### Auto: Next days

In the following days we recalculate the actual ad spend for each ad type. 
If one campaign ran out of budget in the middle of the day, but another still had budget remaining then this is moved from one campaign to the other. 
This dynamic and automatic process is done every day with the goal of having a % budget allocation that is as close as possible to what was actually consumed.

| Product daily budget (100$)             | Day 0 (no data) | Next days (with data) |
|-----------------------------------------|-----------------|-----------------------|
| - Sponsored Products (manual)           | 20%             | 40%                   |
| - Sponsored Products (auto)             | 5%              | 10%                   |
| - Sponsored Display                     | 25%             | 5%                    |
| - Sponsored Brand                       | 25%             | 5%                    |
| - Sponsored Brand Video (keywords)      | 12.5%           | 20%                   |
| - Sponsored Brand Video (product pages) | 12.5%           | 20%                   |
| Total                                   | 100%            | 100%                  |


The budget is not allocated based on sales or ACoS because for that we change the [bid per click](/docs/understanding/bid-formula) which is calculated based on conversion rate.
