# 🧠 Developer Console — Interview Revision Notes

## 📌 Purpose

Developer tools (DevTools) help developers:

- View JavaScript errors
- Run commands interactively
- Inspect variables and DOM
- Debug scripts and performance

---

## 🧰 Opening DevTools

| Browser | Shortcut (Windows) | Shortcut (Mac) | Notes                            |
| ------- | ------------------ | -------------- | -------------------------------- |
| Chrome  | F12                | Cmd + Opt + J  | Opens Console tab by default     |
| Firefox | F12                | Cmd + Opt + K  | Similar layout to Chrome         |
| Edge    | F12                | Cmd + Opt + J  | Chrome-like experience           |
| Safari  | —                  | Cmd + Opt + C  | Must enable "Develop" menu first |

> 🔧 Safari: Go to Settings → Advanced → Enable "Develop menu"

---

## 🐞 Viewing Errors

- Errors are **hidden from users** by default
- DevTools show **red error messages** with:
  - Line number
  - File name
  - Stack trace (if available)

### Example:

```js
Uncaught ReferenceError: lalala is not defined
    at bug.html:12
```

## 💬 Running Commands

- Use the **Console tab** to run JavaScript interactively
- Type code after the `>` prompt and press **Enter**
- Use **Shift + Enter** for multi-line input

---

## 🔄 Cross-Browser Behavior

- DevTools are similar across browsers
- Once familiar with one (e.g. Chrome), switching is easy
- Chrome and Firefox are preferred for their advanced tooling

---

## 📝 Summary

| Feature          | Benefit                     |
| ---------------- | --------------------------- |
| Error display    | See and debug script issues |
| Console input    | Run and test JS code live   |
| Multi-line input | Write longer code snippets  |
| Cross-browser    | Consistent experience       |

> 🧠 DevTools are essential for debugging, inspecting, and experimenting with JavaScript in real time.
