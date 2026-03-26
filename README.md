# SiteViews

A lightweight, zero-config website views counter. Track page visits and display view counts by adding a single script tag to your HTML.

---

## Usage

Add the script tag to your HTML and configure it with the attributes below:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Site</title>
  </head>
  <body>
    <p>Views: <span id="views">Loading...</span></p>

    <script
      src="https://unpkg.com/siteviews@2.0.5/dist/index.js"
      type="application/javascript"
      scriptfor="siteviews"
      project-name="my-site"
      output-element-id="views"
      refresh="15"
      toast
      suppressLogs
    ></script>
  </body>
</html>
```

### Attributes

| Attribute           | Required | Description                                                                              |
| ------------------- | -------- | ---------------------------------------------------------------------------------------- |
| `scriptfor`         | Yes      | Must be set to `"siteviews"`                                                             |
| `project-name`      | Yes      | Unique identifier for your project                                                       |
| `output-element-id` | Yes      | The `id` of the element where the view count is rendered                                 |
| `refresh`           | No       | Auto-refresh interval in seconds (minimum: `10`)                                         |
| `toast`             | No       | Show a welcome toast notification via [Toastify](https://github.com/apvarun/toastify-js) |
| `suppressLogs`      | No       | Mute all console logs and warnings                                                       |

---

## Development

```bash
npm install
npm run build
```

Uses [tsup](https://tsup.egoist.dev/) and TypeScript for bundling.

---

## License

MIT © [DevAbabil](https://github.com/DevAbabil)

## Contributing

Found a bug or want a new feature? [Open an issue](https://github.com/DevAbabil/siteviews/issues).
