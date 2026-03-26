# SiteViews

SiteViews is a lightweight, zero-config website views counter. Track page visits, display view counts, collect optional user info, and show toast notifications — all with a single script tag.

---

## Quick Start

Add the following `<script>` tag anywhere in your HTML:

```html
<script
  src="https://unpkg.com/siteviews@2.0.4/dist/index.js"
  type="application/javascript"
  scriptfor="siteviews"
  project-name="my-awesome-site"
  output-element-id="views"
  refresh="15"
  toast
  suppressLogs
></script>
```

### Required Attributes

| Attribute           | Description                                                       |
| ------------------- | ----------------------------------------------------------------- |
| `scriptfor`         | Must be set to `"siteviews"`                                      |
| `project-name`      | Unique identifier for your project                                |
| `output-element-id` | The `id` of the HTML element where the view count should be shown |

### Optional Attributes

| Attribute      | Description                                                                                  |
| -------------- | -------------------------------------------------------------------------------------------- |
| `refresh`      | Number of seconds between auto-refreshes (minimum: `10`)                                     |
| `toast`        | Enable a welcome toast notification using [Toastify](https://github.com/apvarun/toastify-js) |
| `suppressLogs` | Mute all console logs and warnings from SiteViews                                            |

---

## Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SiteViews Template</title>
  </head>
  <body>
    <div>
      <p>Views: <span id="views">Loading...</span></p>
    </div>

    <script
      src="https://unpkg.com/siteviews@2.0.4/dist/index.js"
      type="application/javascript"
      scriptfor="siteviews"
      project-name="my-awesome-site"
      output-element-id="views"
      refresh="15"
      toast
      suppressLogs
    ></script>
  </body>
</html>
```

---

## Features

- Real-time view count updates
- Auto-refresh on a configurable interval
- Welcome toast notification via Toastify (CDN)
- No npm or module bundler required

---

## Development

```bash
# Install dependencies
npm install

# Build in watch mode
npm run build
```

Uses [tsup](https://tsup.egoist.dev/) and TypeScript for bundling.

---

## CDN

Hosted on [UNPKG](https://unpkg.com/):

```
https://unpkg.com/siteviews@2.0.3/dist/index.js
```

---

## License

MIT © [DevAbabil](https://github.com/DevAbabil)

---

## Contributing

Found a bug or want a new feature? Feel free to [open an issue](https://github.com/DevAbabil/siteviews/issues).
