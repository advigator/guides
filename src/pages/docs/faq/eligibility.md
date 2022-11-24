---
title: "Low impressions"
---

After more than 24 hours, your campaign may not have collected any (or very few) impressions. 

## Pause any existing campaigns
If you have other active campaigns in {% amazon-console /%} advertising the same product then pause them. If these have higher bids than ours then they will be preferred by Amazon.

## Target ACoS is too low
If by analyzing historical data we saw that the product had a very low conversion rate (orders/clicks) then to achieve a low ACoS the optimal bids per click would be too low. Not competitive enough. 
Increase the target ACoS until it generates some clicks. 

If that doesn't work then go to Targeting > custom and add your main keyword > and enter a high enough bid. 

- If this newly added custom keyword generates clicks and impressions then it means that the acos target you had chosen was too low
- If it still does not work then it means that it is likely that the product is not suitable for advertising.


## Eligibility

You may see some yellow notices under products that prevent campaigns from generating traffic. 
They usually relate to buybox, inventory, or Amazon Advertising policies. You can also find the message by entering your campaign in {% amazon-console /%}. You can contact Amazon's official support for more information.

1. Go to {% amazon-console /%}
1. Select a campaign (like SPA, Sponsored Product Auto) and select an adgroup (like Auto)
1. Verify that all enabled ASIN/SKU have the "delivering" status in green. If not, fix the problem. For more explanation on the cause you can open a case in Amazon Advertising. Usually it's policy violation issues or particular category restrictions.

![Eligibility Amazon Ads console](/images/faq/eligibility.png)

### Product detail page quality

The product may get few impressions if these quality requirements (also called Amazon readiness) are not met.

- Main photo with pure white background showing the product in the foreground
- Title must match image
- At least 4 photos
- 15+ Reviews and 3.5+ stars
- Available inventory and eligible for prime shipping 
- No warnings in your Inventory tab in Amazon Seller Central.

![Eligibility Amazon Ads console](/images/faq/readiness.png)

### Missing Browse node

Verify in the product detail page that the ASIN has been associated with a deep browse node. If it is associated only to a root browse node (e.g. "Sports & Outdoor") it may not generate traffic due to low discoverability.  You need to have a deeper browse node like Skateboards. Also check that it is set in the most relevant browse node. It may be that you have placed it in another node or Amazon has moved the node for you.

![Eligibility Amazon Ads console](/images/faq/bsr.png)

## Enable all ASINs
Verify that all ASINs in the parent ASIN are enabled. The more variants there are active, the higher will be the Ad Rank obtained by the sponsored ad. Activating all ASINs makes no difference to the budget spent, so we recommended to enable them all.

![Eligibility Amazon Ads console](/images/faq/item_ads.png)

