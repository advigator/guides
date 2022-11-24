---
title: Automated search term reports analysis
---

The automated process by which Advigator analyses data from search term reports every day, adds new keywords and calculates optimal bids per click.

## Day 0

Let's suppose you have just enabled a campaign group with Advigator for a new product without any historical data. The group contains several sub-campaigns such as Sponsored Products (SP), Sponsored Display (SD), Sponsored Brand (SB), and Sponsored Brand Video (SBV)

## Day 1

Advigator downloads the search term reports from Amazon Ads API.

| Day       | Campaign | Keyword      | Match type | Customer search term              | Impressions | Clicks | Orders |
|-----------|----------|--------------|------------|-----------------------------------|-------------|--------|--------|
| Yesterday | SP Auto  | Close match | *     | Golf putting mat                  | 5,000       | 100    | 5      |
| Yesterday | SB       | Golf putting | Phrase     |  golf putting mat for indoor      | 1,000       |  20    |  2     |
| Yesterday | SBV      | Golf | Broad     | golf putting mat with ball return | 750         | 15     | 1      |

As you can see there are 3 new search terms that have generated orders. Great!
Advigator will add them to [targeting](/docs/targeting) and they will be entered as new keywords for all advertising formats (SP, SB, SBV) for all three matches (exact, phrase, broad). 
The bid for each is based on the conversion rate (orders/clicks) they have had so far.  


## Day 2..

The process continues as the previous day but with more customer search terms and clicks data. 

Advigator recalculates the conversion rates (orders/clicks) of all keywords in Targeting and automatically updates all bids per click in Amazon Ads console for all keywords and all campaigns.
