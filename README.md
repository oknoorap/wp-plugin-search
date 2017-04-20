# :mag: WordPress Plugin Search
Search Plugin via WordPress API. Read more: https://codex.wordpress.org/WordPress.org_API

# Install
Using [NPM](http://npmjs.com/package/wp-plugin-search):  
`npm install wp-plugin-search --save`

Using Yarn:  
`yarn add wp-plugin-search`

# Usage
Syntax: `search(query, [options])`

## Example
```javascript
const searchPlugin = require('wp-plugin-search')

searchPlugin('yoast seo')
  .then(result => {
    console.log(result.items)
  }).catch(err => {
    console.log(error)
  })
```

### `query` (required)
Pass a string in query like when you search on admin page > plugins > add new plugin.

### `options` (optional)
Default options:

| Option Name | Default Value |
| -- | -- |
| **page** | 1 |
| **per_page** | 30 |
| *locale** | 'en_US' |
| **fields** | **added** `true` |
| | **icon** `false` |
| | **author** `true` |
| | **author_profile** `true` |
| | **compatibility** `true` |
| | **contributors** `true` |
| | **donate_link** `true` |
| | **download_link** `true` |
| | **downloaded** `true` |
| | **homepage** `true` |
| | **last_updated** `true` |
| | **name** `true` |
| | **num_ratings** `true` |
| | **rating** `true` |
| | **ratings** `true` |
| | **requires** `true` |
| | **screenshots** `true` |
| | **short_description** `true` |
| | **slug** `true` |
| | **stable_tag** `true` |
| | **support_threads** `true` |
| | **support_threads_resolved** `true` |
| | **tags** `true` |
| | **tested** `true` |
| | **version** `true` |
| | **versions** `true` | |

## Response
If your request is successful, you'll get these `Object`

| Name | Description |
| -- | -- |
| **items** | Found items |
| **page** | Current pagination |
| **pages** | Total pagination |
| **total** | Total items found |

### Example Result: `Yoast SEO`

```javascript
{
  added: "2010-10-11",
  author: "<a href="https://yoast.com/">Team Yoast</a>",
  author_profile: "https://profiles.wordpress.org/joostdevalk",
  compatibility: [],
  contributors: [],
  donate_link: "https://yoast.com/",
  download_link: "https://downloads.wordpress.org/plugin/wordpress-seo.4.6.zip",
  downloaded: 43499358,
  homepage: "https://yoast.com/wordpress/plugins/seo/#utm_source=wpadmin&utm_medium=plugin&utm_campaign=wpseoplugin",
  last_updated: "2017-04-11 9:39am GMT",
  name: "Yoast SEO",
  num_ratings: 11451,
  rating: 96,
  ratings: {
    0: 1,
    1: 414,
    2: 75,
    3: 104,
    4: 330,
    5: 10527
  },
  requires: "4.6",
  screenshots: {
    1: { src: "https://ps.w.org/wordpress-seo/assets/screenshot-1.png?rev=1550389", caption: "" },
    2: { src: "https://ps.w.org/wordpress-seo/assets/screenshot-2.png?rev=1550389", caption: "" },
    3: { src: "https://ps.w.org/wordpress-seo/assets/screenshot-3.png?rev=1550389", caption: "" }
    4: { src: "https://ps.w.org/wordpress-seo/assets/screenshot-4.png?rev=1550389", caption: "" },
    5: { src: "https://ps.w.org/wordpress-seo/assets/screenshot-5.png?rev=1550389", caption: "" },
    6: { src: "https://ps.w.org/wordpress-seo/assets/screenshot-6.png?rev=1550389", caption: "" }
  }
  short_description: "WordPress out of the box is already technically quite a good platform for SEO. This was true when Joost wrote his original WordPress SEO article in 20 &hellip;",
  slug: "wordpress-seo",
  stable_tag: "4.6",
  support_threads: 388,
  support_threads_resolved: 180,
  tags: {
    "content-analysis": "Content analysis",
    "google-search-console": "google search console",
    "readability": "Readability",
    "seo": "seo",
    "xml-sitemap": "xml sitemap"
  }
  tested: "4.7.3",
  version: "4.6",
  versions: {
    2.0: "https://downloads.wordpress.org/plugin/wordpress-seo.2.0.zip",
    2.0.1: "https://downloads.wordpress.org/plugin/wordpress-seo.2.0.1.zip",
    2.1: "https://downloads.wordpress.org/plugin/wordpress-seo.2.1.zip",
    2.1.1: "https://downloads.wordpress.org/plugin/wordpress-seo.2.1.1.zip",
    2.2: "https://downloads.wordpress.org/plugin/wordpress-seo.2.2.zip",
    2.2.1: "https://downloads.wordpress.org/plugin/wordpress-seo.2.2.1.zip",
    2.3: "https://downloads.wordpress.org/plugin/wordpress-seo.2.3.zip",
    2.3.1: "https://downloads.wordpress.org/plugin/wordpress-seo.2.3.1.zip",
    2.3.2: "https://downloads.wordpress.org/plugin/wordpress-seo.2.3.2.zip",
    2.3.3: "https://downloads.wordpress.org/plugin/wordpress-seo.2.3.3.zip",
    2.3.4: "https://downloads.wordpress.org/plugin/wordpress-seo.2.3.4.zip",
    2.3.5: "https://downloads.wordpress.org/plugin/wordpress-seo.2.3.5.zip",
    3.0: "https://downloads.wordpress.org/plugin/wordpress-seo.3.0.zip",
    3.0.1: "https://downloads.wordpress.org/plugin/wordpress-seo.3.0.1.zip",
    3.0.2: "https://downloads.wordpress.org/plugin/wordpress-seo.3.0.2.zip",
    3.0.3: "https://downloads.wordpress.org/plugin/wordpress-seo.3.0.3.zip",
    3.0.4: "https://downloads.wordpress.org/plugin/wordpress-seo.3.0.4.zip",
    3.0.5: "https://downloads.wordpress.org/plugin/wordpress-seo.3.0.5.zip",
    3.0.6: "https://downloads.wordpress.org/plugin/wordpress-seo.3.0.6.zip",
    3.0.7: "https://downloads.wordpress.org/plugin/wordpress-seo.3.0.7.zip",
    3.1: "https://downloads.wordpress.org/plugin/wordpress-seo.3.1.zip",
    3.1.1: "https://downloads.wordpress.org/plugin/wordpress-seo.3.1.1.zip",
    3.1.2: "https://downloads.wordpress.org/plugin/wordpress-seo.3.1.2.zip",
    3.2: "https://downloads.wordpress.org/plugin/wordpress-seo.3.2.zip",
    3.2.1: "https://downloads.wordpress.org/plugin/wordpress-seo.3.2.1.zip",
    3.2.2: "https://downloads.wordpress.org/plugin/wordpress-seo.3.2.2.zip",
    3.2.3: "https://downloads.wordpress.org/plugin/wordpress-seo.3.2.3.zip",
    3.2.4: "https://downloads.wordpress.org/plugin/wordpress-seo.3.2.4.zip",
    3.2.5: "https://downloads.wordpress.org/plugin/wordpress-seo.3.2.5.zip",
    3.3.0: "https://downloads.wordpress.org/plugin/wordpress-seo.3.3.0.zip",
    3.3.1: "https://downloads.wordpress.org/plugin/wordpress-seo.3.3.1.zip",
    3.3.2: "https://downloads.wordpress.org/plugin/wordpress-seo.3.3.2.zip",
    3.3.3: "https://downloads.wordpress.org/plugin/wordpress-seo.3.3.3.zip",
    3.3.4: "https://downloads.wordpress.org/plugin/wordpress-seo.3.3.4.zip",
    3.4: "https://downloads.wordpress.org/plugin/wordpress-seo.3.4.zip",
    3.4.1: "https://downloads.wordpress.org/plugin/wordpress-seo.3.4.1.zip",
    3.4.2: "https://downloads.wordpress.org/plugin/wordpress-seo.3.4.2.zip",
    3.5: "https://downloads.wordpress.org/plugin/wordpress-seo.3.5.zip",
    3.6: "https://downloads.wordpress.org/plugin/wordpress-seo.3.6.zip",
    3.6.1: "https://downloads.wordpress.org/plugin/wordpress-seo.3.6.1.zip",
    3.7.0: "https://downloads.wordpress.org/plugin/wordpress-seo.3.7.0.zip",
    3.7.1: "https://downloads.wordpress.org/plugin/wordpress-seo.3.7.1.zip",
    3.8: "https://downloads.wordpress.org/plugin/wordpress-seo.3.8.zip",
    3.9: "https://downloads.wordpress.org/plugin/wordpress-seo.3.9.zip",
    4.0: "https://downloads.wordpress.org/plugin/wordpress-seo.4.0.zip",
    4.0.2: "https://downloads.wordpress.org/plugin/wordpress-seo.4.0.2.zip",
    4.1: "https://downloads.wordpress.org/plugin/wordpress-seo.4.1.zip",
    4.2: "https://downloads.wordpress.org/plugin/wordpress-seo.4.2.zip",
    4.2.1: "https://downloads.wordpress.org/plugin/wordpress-seo.4.2.1.zip",
    4.3: "https://downloads.wordpress.org/plugin/wordpress-seo.4.3.zip",
    4.4: "https://downloads.wordpress.org/plugin/wordpress-seo.4.4.zip",
    4.5: "https://downloads.wordpress.org/plugin/wordpress-seo.4.5.zip",
    4.6: "https://downloads.wordpress.org/plugin/wordpress-seo.4.6.zip"
  },
  trunk: "https://downloads.wordpress.org/plugin/wordpress-seo.zip"
}
```


# License
MIT © [oknoorap](https://github.com/oknoorap)
