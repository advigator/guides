---
title: "Campaign structure"
---

Advigator groups products and campaigns into a "campaign group." A group shares targeting and products to promote.

By default, the group is created by grouping the ASINs in your catalog by parent ASIN. So variants of a product are within the same group. 

This is the recommended practice in most cases. If you have a very large catalog (with hundreds of parent asins) you may find it more convenient to group products by leaf category. 

![Product grouping](/images/understanding/grouping.png)

Here you can choose from several options

- Smart grouping (default): A campaign group contains all variations of a parent ASIN. 
If you have accidentally created multiple parent ASINs with the exact same title or photo we are able to join them. 
Title comparison between two parent ASINs is done by removing the text between brackets and names of colors, size, width etc.

- Parent ASIN: A campaign group contains all variations of a parent ASIN.
If there are two parent asins with the same title or photo they are placed in different groups. Choose this option if you are aware that two parent Asins are indistinguishable to the end client but you still want to have them in different campaign groups.

- Category: Products belonging to a leaf category (browse node) are placed in a group. It is useful for very large catalogs and parent asins are similar to each other. 
Check first if the products are all placed in the correct leaf category. 
You can also choose whether to separate that belong to different brands, or to combine products from different brands into the same group.

- Variation: A campaign group contains a single variation ASIN. This is rarely an optimal choice because it creates many groups and they are difficult to manage. If you have a particular catalog, however, it might be what you are looking for.


## Why can't I add different products into the same group?
This is **not** a good practice. 
The data analyzed by Advigator comes from the search terms report. Here the minimum granularity of search terms is at the ad group level. 

Let's suppose the adgroup contains two ASINs (A and B), and sales came from two keywords (X and Y). 
In this case, it is not possible to know whether the customer who searched for keyword X then purchased product A or B. Because the data is aggregated.

Therefore, we always want to have very similar products within a group.

If you have a edge case contact our support to figure out the best option.