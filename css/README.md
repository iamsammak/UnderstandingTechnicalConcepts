# Responsive Web Design

## Add viewport meta tag
```html
<meta name="viewport" content="initial-scale=1" />
```

## Media Queries
```css
@media (max-width: 414px) {
  /* css code inside here */
}
```

Uses the '@media' rule which only executes a block of CSS code if set conditions are true

Great way of thinking is Mobile First. Designing for mobile and scaling your website to adapt to desktop. Easier to grasp this way.


## Popular Screen Resolutions

### Apple

|                           | Pixel Size   | Viewport    |
|iPhone                     |:------------:|------------:|
| 7 Plus	                  | 1080 x 1920  | 414 x 736   |
| 7	                        | 750 x 1334	 | 375 x 667   |
| 6 Plus/6S Plus            | 1080 x 1920  | 414 x 736   |
| 6/6S	                    | 750 x 1334	 | 375 x 667   |
| 5	                        | 640 x 1136   | 320 x 568   |
| iPod		                  |:------------:|------------:|
| Touch	                    | 640 x 1136   | 320 x 568   |
| iPad		                  |:------------:|------------:|
| Pro	                      | 2048 x 2732  | 1024 x 1366 |
| Third & Fourth Generation	| 1536 x 2048	 | 768 x 1024  |
| Air 1 & 2	                | 1536 x 2048  | 768 x 1024  |
| Mini	                    | 768 x 1024   | 768 x 1024  |
| Mini 2 & 3	              | 1536 x 2048	 | 768 x 1024  |

### Android

|                           | Pixel Size   | Viewport    |
| Phones                    |:------------:|------------:|
| Nexus 6P	                | 1440 x 2560  | 411 x 731   |
| Nexus 5X	                | 1080 x 1920  | 411 x 731   |
| Google Pixel              | 1080 x 1920  | 411 x 731   |
| Google Pixel XL           | 1440 x 2560	 | 411 x 731   |
| Samsung Galaxy Note 5     | 1440 x 2560  | 480 x 853   |
| LG G5	                    | 1440 x 2560  | 480 x 853   |
| One Plus 3	              | 1080 x 1920  | 480 x 853   |
| Samsung Galaxy S7	        | 1440 x 2560	 | 340 x 640   |
| Samsung Galaxy S7 Edge	  | 1440 x 2560  | 411 x 731   |
| Tablets		                |:------------:|------------:|
| Nexus 7 (2013)	          | 1200 x 1920  | 600 x 960   |
| Samsung Galaxy Tab 10	    | 800 x 1280   | 800 x 1280  |
| Chromebook Pixel	        | 2560 x 1700  | 1280 x 850  |
