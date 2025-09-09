# 🧠 JavaScript Code Structure

## 📌 Overview

Understanding how JavaScript code is structured helps avoid syntax errors and improves readability.  
Key components: **Statements**, **Semicolons**, and **Comments**.

---

## 🧾 Statements

- A **statement** performs an action.
- Example:
  ```js
  alert("Hello, world!");
  ```

### ✅ Multiple Statements

```js
alert("Hello");
alert("World");
```

### ✅ Preferred Style

```js
alert("Hello");
alert("World");
```

---

## 🔚 Semicolons

- JavaScript uses **automatic semicolon insertion (ASI)**.
- Line breaks often imply semicolons, but **not always**.

### ✅ Works fine:

```js
alert("Hello");
alert("World");
```

### ⚠️ ASI Pitfall:

```js
alert(3 + 1 + 2); // Outputs 6 — no semicolon inserted
```

### ❌ Error Example:

```js
alert("Hello")[(1, 2)].forEach(alert); // Treated as one statement
```

### ✅ Corrected:

```js
alert("Hello");
[1, 2].forEach(alert);
```

> 🧠 Interview Tip: Be ready to explain ASI and why semicolons are recommended for safety.

---

## 💬 Comments

### ✅ Single-line

```js
// This is a comment
alert("Hello"); // Inline comment
```

### ✅ Multi-line

```js
/* This is a
   multi-line comment */
alert("Hello");
```

### ✅ Commenting Out Code

```js
/* alert('Hello'); */
alert("World");
```

### ❌ Nested Comments (Not Allowed)

```js
/*
  /* nested comment */
*/
alert('World'); // ❌ Syntax error
```

---

## ⌨️ Editor Hotkeys

| Action              | Windows/Linux    | Mac              |
| ------------------- | ---------------- | ---------------- |
| Single-line comment | Ctrl + /         | Cmd + /          |
| Multi-line comment  | Ctrl + Shift + / | Cmd + Option + / |

---

## 📝 Summary

| Concept    | Key Point                                   |
| ---------- | ------------------------------------------- |
| Statements | Perform actions, separated by semicolons    |
| Semicolons | Optional but recommended for clarity/safety |
| Comments   | Improve readability, ignored by the engine  |
| ASI        | Can cause subtle bugs — use semicolons      |
| Hotkeys    | Speed up commenting in editors              |

> 🧠 Interview Tip: Be ready to explain how ASI works, why comments matter, and how to structure clean, readable code.
