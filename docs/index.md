# SPA-like navigation plugin

The plugin adds functionality of AJAX page loading with browser history navigation. Only [browsers](https://caniuse.com/#search=pushState) with native history API are supported.


## Installation

Add a plugin script, and mark layouts, that should use such kind of navigation

``` html
<!DOCTYPE html>
<html>
    <head>

        <!-- these meta tags will update during navigation -->
        <title>Document</title>
        <meta name="description" content="Document description">

        <!-- App Config  -->
        <script>
        const AWEMA_CONFIG = {
            key: 'awema.pl project key'
        }
        </script>
        
        <!-- scripts -->
        <script src="https://cdn.awema.pl/{awema.pl project key}/awema-pl/awema-spa/v1.x.x/js/main.js" async defer></script>
        <script src="https://cdn.awema.pl/{awema.pl project key}/awema-pl/base-js/v1.x.x/js/main.js" async defer></script>

    </head>

    <!-- mark current layout (only on body tag!) -->
    <body data-awema-spa-layout="layout_name">

        <aside>
            <!-- pages navigation, or some common markup (if needed) -->
        </aside>

        <!-- unique page content (if needed) -->
        <main data-awema-container></main>
    </body>
</html>
```


### Navigation algorithm

1. The plugin listens for click on a link of current domain with no `target="_blank"` or `download` attributes and without `.awema-spa-ignore` CSS-class
2. If matched link is clicked, the plugin loads the page and checks if the content of `data-awema-spa-layout` is the same
3. If layout doesn't match, the page reloads with new route
4. If layout matches, the plugin update the content of `data-awema-container` tag, or all the body markup, if no container found


## Configuration

```javascript
const AWEMA_CONFIG = {

    // ... other config properties
    
    // spa plugin config (default values are performed)
    spa: {
        loading: 3000, // fake loading indicator max time
        timeout: 30000 // time before AJAX call returns error
    }
}

```


## Styling

Default styles provide some CSS custom properties for progress-bar styling:

| Property                | Default   | Description                |
|:-----------------------:|:---------:|----------------------------|
| *--spa_progress_height* | `5px`     | Height of progress bar     |
| *--spa_progress_bg*     | `#7fc876` | Background of progress bar |



## Disable SPA navigation on a link

By default, all the links of current domain without `target="_blank"` or `download` attributes will be treated like a spa-plugin link. If you wish to disable this behaviour, set additional CSS-class '.awema-spa-ignore':


```html

<!-- SPA-plugin link -->
<a href="/page">SPA Page</a>

<!-- link with page reload -->
<a href="/page" class="awema-spa-ignore">Non-SPA same page</a>

```