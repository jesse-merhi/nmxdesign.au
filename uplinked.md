# Uplinked - Workforce Management System

## Background

Uplinked is a product being developed by engineers employed by [Synergy Protection Agency](https://www.alwayssynergy.com.au/), a physical security company.

The company internally employs hundreds of guards but also has several hundred more that can be requested on demand from a series of different suppliers. The company's main service is physical security and these guards are deployed to various different worksites all across New South Wales and other Australian states.

The company is quite sizable and as such also has many different clients, some which have several different worksites. For example, the company does security for many of the hospitals in and around the greater sydney area.

The main purpose of Uplinked is to provide a seamless way to manage Employees, Suppliers, Clients and worksites through a combined set of workforce management tools.

Importantly, although Uplinked is being initially built to replace older systems used by Synergy, the idea for this product to be white labelled and sold to any company with a similar labour setup, for example the cleaning industry. As such Uplinked attempts to be generic in its verbiage to cater for any industry, not just security.

I was brought in specifically to help work on the dashboard of this system which provides an interface to gain quick information on the most critical parts of this system.

## The Current State of Uplinked

### Application Platforms

Uplinked is split into two main platforms,

1. A responsive web application catered towards Administrators.
2. A mobile application catered towards employees (Guards).

![image](Picture of mobile)
![image](Picture of desktop)

This specific dashboard is meant to be used by administrators, so for my designs I only focused on the web application, but had to ensure that the interface also catered for mobile devices.

### Admin Web Dashboard

Before moving onto the improvements I first had to understand what the current dashboard looked like, and how it fell short of the customers requirements.

![image-20250806-083117](https://hackmd.io/_uploads/rkbl6oTOel.png)

Reviewing the dashboard we can see that it is more of a navigation pane. Further exploration actually revealed that not only was it just a navigation pane, but many of the "Organisational Control" buttons were simply shortcuts to screens that would have been one click away from any of the "User Management" buttons.

For example, clicking on "Manage Clients" brings you to this screen,

![image](https://hackmd.io/_uploads/ry3v4na_lg.png)

Which as you can see just contains the "Add/New Client" button in the top right,

![image](https://hackmd.io/_uploads/rypYNhTOge.png)

From here I mapped the entire navigation flow into the following chart,

![Case study, CV and portfolio - Current workflow (Admin - Web experience)-20250806-081503](https://hackmd.io/_uploads/rySdBhpuxg.jpg)

Based on the workflow, it is clear that this dashboard has a lot of redundancy. Additionaly, I found it interesting that the dashboard did not display any metrics or action items that you would typically expect from a normal dashboard. So, I kept note of this decision and moved on to further understand the goals of this screen.

## Exploration - User interviews & Collecting Use cases

To understand the product better I met with the CEO of Synergy and the engineers to discuss the ideal state of the dashboard. In particular we discussed what sort of information is the most important for these sorts of businesses.

The goal of a dashboard is to save time by producing information that would normally take a while to gather otherwise. In particular we came to a consensus on a few pieces of very important information that needs to feature on the dashboard.

1. How many shifts need to be assigned
2. How many completed shifts are waiting to be approved by an Admin
   a. This also means being able to quickly understand if a shift meets the requirements to be considered "completed".
3. How many employees are currently deployed to a worksite as well as how many are on standby and how many are unavailable.
4. If there are any time-sensitive incidents that have occured that need an admin's action e.g. a guard hasnt signed into their shift, an admin needs to chase up that guard.
5. If there are any tasks that need to be completed by the admin in general e.g. a guard's drivers license is about to expire and they need to reupload a new version.

![image](https://hackmd.io/_uploads/H1dPo3p_ll.png) ![image](https://hackmd.io/_uploads/Hktss26Oex.png)

From here I jotted down some initial ideas and notes for each of these different sections

![image](https://hackmd.io/_uploads/SyuVnnaOll.png)

![image](https://hackmd.io/_uploads/SysU226uxx.png)

![image](https://hackmd.io/_uploads/S1buh3T_gx.png)

![image](https://hackmd.io/_uploads/SkPK2nTdge.png)

## Make - Initial Wireframes

Now that I had a high level idea of what I needed to make I moved onto creating some wireframes to map out the general hierarchy of the dashboard. The goal of this was to focus on the layout of the dashboard which will help me translate to a low fidelity and then high fidelity prototype.

To start I came up with a general ideal of the components I wanted to make and placed them on the screen to get a sense of scale.

![image-20250812-123904](https://hackmd.io/_uploads/S15s-Ta_gg.png)

From here I begun rearranging the components on the screen until they fit somewhat nicely on the page. Notably, this was more to understand how the components look together

![image-20250812-123929](https://hackmd.io/_uploads/ry4h-pTOge.png)

![image-20250812-130008](https://hackmd.io/_uploads/r126Wa6ueg.png)

![image-20250812-131804](https://hackmd.io/_uploads/SkUCW66_lg.png)

## Make - Mockups

![image-20250813-015054](https://hackmd.io/_uploads/rJ64G6adge.png)

![image-20250813-115201](https://hackmd.io/_uploads/Hy8HfaTuxl.png)
