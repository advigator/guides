---
title: Connect Amazon Ads
description: Connect your Amazon Ads account, so Advigator will be able to create and manage ad campaigns
---
Choose your geographic area and click on ‘login with Amazon’. You will be redirected to Amazon Advertising to link your Amazon Advertising account.

![Connect Amazon Ads](/images/getting-started/connect.png)

## Select profiles

You can either import all marketplaces or only some

![Connect Amazon Ads](/images/getting-started/profiles.png)

### No profiles found
- Try logging into {% amazon-console /%}  and verify that you can actually see the campaigns in your Seller/vendor account. 
- If you have never created a campaign in your account, you should go to {% amazon-console /%}  and create a Sponsored Products campaign. You can choose 1$ of budget, wait for a few impressions and pause it. After that, try reconnecting with Advigator.
- If you are a secondary user and got access through 'User Permissions' in Seller Central, you need to make sure you have View / Edit permissions for Campaign Management.
- Check that you are not using a VPN, ad-blockers, WARP DNS or other tools that obfuscate your IP address
- Try connecting using [incognito browsing](https://www.youtube.com/results?search_query=How+To+Go+Incognito+On+Google+Chrome)
- **I am based in EU and I don't see the US accounts**
    - This is an techinal issue from Amazon regarding "Login with Amazon". 
    - Go to Amazon Advertising US (https://advertising.amazon.com/)
    - Invite a secondary user to edit/view advertising for US marketplace (like us-user@yourcompany.com)
    - Logout and access through this secondary user in Amazon Advertising US, then create a Sponsored Product auto campaign using the classic Amazon Console UI.
    - Once created a test campaign in US, wait a few hours to let Amazon systems updates
    - After that, go to [Advigator > Add new account](https://dashboard.advigator.com/profiles/new) > and log with Amazon using this secondary user (us-user@yourcompany.com).
    - If you still not see the US profiles, try repeat after 24 hours or contact our support.


## Done

Depending on the size of your catalog, the import could take anywhere from 30 minutes to several hours. If you have a very large inventory it could take up to 24 hours. You will receive an email when everything is ready.

We won’t make any changes to your existing campaigns during setup. We only import ad report data and the ASINs catalog. Then you will have the option to choose which products to activate.