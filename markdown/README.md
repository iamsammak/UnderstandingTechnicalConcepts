### Images
Old Format:
```
![image]
[image]: ./images/old_image.png
```
Correct Format:
```
![image](image url here)
```

After testing, I found that the old format works if you add at least an extra line between the bracket reference and the image link reference it still works
```
![image]

[image]: ./images/old_image.png
```

### Emphasis

```
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
```
Emphasis, aka italics, with asterisks or underscores.

Strong emphasis, aka bold, with asterisks or underscores.

Combined emphasis with asterisks and underscores.

Strikethrough uses two tildes. Scratch this.

### Anchors in Markdown

To create an anchor to a heading in github flavored markdown.
Add __-__ characters between each word in the heading and wrap the value in  parens ```(#some-markdown-heading)``` so your link should look like so:

```[create an anchor](#anchors-in-markdown)```
