---
title: Analytics
---
Analyze performance of your advertising campaigns
---
In Analytics you can deep dive on data from campaigns managed by Advigator.
## Group data by custom field

You can aggregate data by _account, marketplace, campaign group, campaign type, match type, ad groups etc.._

If you aggregate marketplace data with different currencies you can choose your base currency and values will converted at the current exchange rate.

![Analytics toolbar](/images/analytics/toolbar.png)

## Inspect customer search term 

If you go into a campaign group you will see the search terms or keywords you received traffic from. 


![Analytics search term](/images/analytics/queries.png)

**Differences with Targeting**
This table of might look very similar to the one in [Targeting](/docs/targeting). 
In Targeting there are the keywords filtered and selected by Advigator and on which the campaign group is currently sponsored. 
In Analytics there are all the search terms that have generated spend so far. 
So Targeting looks to the future, while Analytics looks to the past.


### New search terms from SP auto + phrase/broad matches

The Sponsored Products (SP) Auto campaign, and all keyword as phrase/broad match type, generates search terms different from the keyword. 

For example, the keyword "iphone cover" as phrase match reaches consumers searching for _iphone cover red_ or _waterproof iphone cover._  
These new search terms may not be in Targeting because they have not yet led to orders (or low CTR) but have generated spend so far. 
If you want to isolate them, go to _custom > new search terms_

![Analytics new search term](/images/analytics/new-search-terms.png)

Here the most common action is to look for keywords or subwords that are not relevant with the product you are selling and exclude them.

![Analytics exclude](/images/analytics/negative.png)

You may be tempted to exclude keywords that have not led to orders or that have a high ACoS. Don't do it. For these keywords Advigator has already reduced the bid per click. 
Just ask yourself if the consumer who is searching for that search term might actually want your product.

### Search terms excluded by negative keywords

With this filter, you see all the search terms that have generated clicks in the past and will henceforth be excluded from the negative keywords you have entered.

![Analytics excluded search term](/images/analytics/excluded-terms.png)

