This Chrome extension does two things:

 * Removes the Google search box, doodles, social and product links from the New Tab page.
 * Increases the size of the thumbnails for most visited sites.
 
In short, it goes back to the way Chrome used to work, prior to Google marketing taking over the New Tab page.

### This extension uses no JavaScript.

All it does is include an extra css file in the New Tab page. The extension requires the _"Access to data on www.google.com"_ permission solely because that is the only way to inject extra styles into the `chrome://newtab` page. It doesn't actually do anything with that permission since there is no JavaScript in this extension at all. Moreover, the css is only included for `https://www.google.com/webhp`.
