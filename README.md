# How I tracked all events on my website using GA4 and GTM

Online store selling belts (React/Google Analytics), the link to the site you can see here - http://a0873162.xsph.ru/
I have created an e-commerce website for selling belts using React and integrated Google Analytics to track website events and user behavior.
## GTM Events

Firstly I decided to track all not e-commerce events on my site, such as button clicks, link clicks and scroll, etc.
![For example these buttons](https://github.com/glebarg/Gleborg-s-belts/blob/main/READMEIMG/Screenshot_971.png)

There you can see the following GTM tags for these events:
![For example these buttons](https://github.com/glebarg/Gleborg-s-belts/blob/main/READMEIMG/Screenshot_972.png)

I want to catch these events from data layer, so I added the following code programmatically:
![For example these buttons](https://github.com/glebarg/Gleborg-s-belts/blob/main/READMEIMG/Screenshot_973.png)

There you can see that this message was sent to the data layer correctly:
![For example these buttons](https://github.com/glebarg/Gleborg-s-belts/blob/main/READMEIMG/Screenshot_974.png)

Also you can see that trigger is configured to catch data layer variable:
![For example these buttons](https://github.com/glebarg/Gleborg-s-belts/blob/main/READMEIMG/Screenshot_975.png)

And finally this event is correctly sending to the google analytics:
![For example these buttons](https://github.com/glebarg/Gleborg-s-belts/blob/main/READMEIMG/Screenshot_976.png)

The other events are tracked the same way:
![For example these buttons](https://github.com/glebarg/Gleborg-s-belts/blob/main/READMEIMG/Screenshot_977.png)
![For example these buttons](https://github.com/glebarg/Gleborg-s-belts/blob/main/READMEIMG/Screenshot_978.png)
![For example these buttons](https://github.com/glebarg/Gleborg-s-belts/blob/main/READMEIMG/Screenshot_979.png)
![For example these buttons](https://github.com/glebarg/Gleborg-s-belts/blob/main/READMEIMG/Screenshot_980.png)
![For example these buttons](https://github.com/glebarg/Gleborg-s-belts/blob/main/READMEIMG/Screenshot_981.png)