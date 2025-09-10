# 🧠 JavaScript Basics — Hello, World!

## 📌 Purpose

Understand how to embed and run JavaScript in a browser using the `<script>` tag.  
This is the foundation for client-side scripting and DOM interaction.

---

## 🧰 Running JavaScript

### ✅ In the Browser

- Embed code using `<script>` tag in HTML
- Code runs automatically when the browser processes the tag

### ✅ On the Server (Node.js)

- Save code in `.js` file
- Run using: `node my.js`

---

## 🧪 Example: Inline Script

```html
<!DOCTYPE html>
<html>
  <body>
    <p>Before the script...</p>

    <script>
      alert("Hello, world!");
    </script>

    <p>...After the script.</p>
  </body>
</html>
```

> 🧠 Interview Tip: Be ready to explain how script execution order affects DOM rendering.

---

## 🏷️ Script Tag Attributes

| Attribute     | Status     | Notes                                                                   |
| ------------- | ---------- | ----------------------------------------------------------------------- |
| `type`        | Optional   | Used for modules (`type="module"`); legacy `text/javascript` not needed |
| `language`    | Deprecated | JavaScript is default; no need to specify                               |
| HTML comments | Obsolete   | Used to hide JS from old browsers (`<!-- ... //-->)`                    |

---

## 📦 External Scripts

### ✅ Syntax

```html
<script src="script.js"></script>
```

### ✅ Benefits

- Reusable across pages
- Cached by browser (faster load)
- Keeps HTML clean and maintainable

### ❌ Invalid Usage

```html
<script src="file.js">
  alert(1); // ❌ Ignored due to src
</script>
```

### ✅ Correct Usage

```html
<script src="file.js"></script>
<script>
  alert(1);
</script>
```

> 🧠 Interview Tip: Be ready to explain caching behavior and script loading order.

---

## 📁 Path Options

| Path Type | Example                          |
| --------- | -------------------------------- |
| Absolute  | `/js/script.js`                  |
| Relative  | `./script.js` or `script.js`     |
| CDN/URL   | `https://cdn.example.com/lib.js` |

---

## 📝 Summary

- Use `<script>` to embed or link JavaScript in HTML
- Avoid legacy attributes (`type`, `language`) unless using modules
- External scripts improve performance and maintainability
- Never mix `src` and inline code in the same `<script>` tag

---

## 🧪 Interview Task Prompts

### Task 1: Show an Alert

Create a page that displays:

```js
alert("I'm JavaScript!");
```

### Task 2: External Script Alert

- Move the alert code to `alert.js`
- Link it in HTML using `<script src="alert.js"></script>`
- Ensure the alert works when the page loads

---

## 💬 Interview Questions You Might Face

- How does the browser execute JavaScript embedded in HTML?
- What’s the difference between inline and external scripts?
- Why shouldn’t you mix `src` and inline code in one `<script>` tag?
- How does browser caching affect external scripts?
- What’s the role of the `type="module"` attribute?
