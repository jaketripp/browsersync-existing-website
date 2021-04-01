# browsersync-existing-website
>A hacky template to easily set up an environment to quickly iterate on the CSS of a website which you don't own. After getting the CSS how you want, you can use Chrome extensions to have it auto-apply to the website. 

## Steps

1. Clone this repo
2. Replace the existing `index.html` by downloading your desired webpage as the new `index.html`
3. Add these lines to the top of your `<head>` tag in your new `index.html` file

```
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="http://localhost:3000/index.js"></script>
<base href="[THE BASE URL OF YOUR DESIRED WEBPAGE i.e. https://www.facebook.com or https://en.wikipedia.org]">
```

The <base> tag will help all of the local scripts and links point at the right URL

4. Run 
```
npx browser-sync start --server --files '*.css, *.html'
```

