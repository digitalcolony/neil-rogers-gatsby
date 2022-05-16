# The Neil Rogers Show

This is the Gatsby rebuild of the [Neil Rogers](https://neilrogers.org) website. I modified the Simple Soundboard for React.

[![Netlify Status](https://api.netlify.com/api/v1/badges/21e91175-f04a-4458-8c3b-2a11caaaed05/deploy-status)](https://app.netlify.com/sites/neil-rogers/deploys)

## Sitemap

The Gatsby sitemap plugin wasn't working properly, so I hand wrote the sitemap since the site has so few pages.

## Run Locally

npx netlify dev

npx gatsby develop

### Check for package updates

npx npm-check -u

### Issues

I had svg images on the Soundboard buttons that would change based on the action status (play, download, clipboard). This caused a screen flicker that I could not get rid off. I tried StaticImage and eager loading. Neither worked. Using emojis instead of SVG worked, but the emojis had different widths and didn't look as good. I'll keep the SVG images in the static folder in the event I figure out a solution.

I was having an issue where I could not get lists below the nav menu to align vertically. I tried a bunch of online solutions. They all failed. For now, I removed the "ul" and am using "p". Ugly, but fine for now. If I move away from MVP.CSS, this issue will probably go away.
