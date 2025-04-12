# 📊 SiteViews

**SiteViews** is a lightweight, zero-config, plug-and-play website views counter. Track page visits, show view counts, collect optional user info, and display toast notifications — all by adding a single script tag to your HTML.

---

## 🚀 Quick Start

Just add the following `<script>` tag anywhere in your HTML file:

```html
<script
  src="https://unpkg.com/siteviews@1.0.7/package.js"
  type="application/javascript"
  scriptfor="siteviews"
  project-name="my-project"
  output-element-id="views"
  refresh="10"
  user-info
  toast
></script>
```

### ✅ Required Attributes

| Attribute           | Description                                                       |
| ------------------- | ----------------------------------------------------------------- |
| `scriptfor`         | Must be set to `"siteviews"`                                      |
| `project-name`      | Unique identifier for your project                                |
| `output-element-id` | The `id` of the HTML element where the view count should be shown |

### 🔄 Optional Attributes

| Attribute   | Description                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------- |
| `refresh`   | Number of seconds between auto-refreshes (minimum: `10`)                                     |
| `user-info` | Include basic user and device information in tracking (no personal data)                     |
| `toast`     | Enable a welcome toast notification using [Toastify](https://github.com/apvarun/toastify-js) |

---

## 💡 Example

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

    <!-- include siteviews script tags  -->
    <script
      src="https://unpkg.com/siteviews@1.0.7/package.js"
      type="application/javascript"
      scriptfor="siteviews"
      project-name="my-awesome-site"
      output-element-id="views"
      refresh="15"
      user-info
      toast
    ></script>
  </body>
</html>
```

---

## ⚙️ Features

- 📈 Real-time view count updates
- 🔁 Auto refresh every X seconds
- 🧠 Optional device + browser info
- 🔔 Beautiful welcome toast via CDN (Toastify)
- 🧩 No NPM or module bundlers needed

---

## 🛠 Development

```bash
# install dependencies
npm install

# build in watch mode
npm run build
```

Uses [Tsup](https://tsup.egoist.dev/) and TypeScript for bundling.

---

## 📦 CDN

Hosted on [UNPKG](https://unpkg.com/):

```txt
https://unpkg.com/siteviews@1.0.7/package.js
```

---

## 📄 License

MIT © [DevAbabil](https://github.com/DevAbabil)

---

## 🙌 Contributing

Found a bug or want a new feature? Feel free to [open an issue](https://github.com/DevAbabil/siteviews/issues)
