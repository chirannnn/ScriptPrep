# 📘 An Introduction to JavaScript

## What is JavaScript?

JavaScript was created to “make web pages alive.”  
Scripts written in JavaScript can be embedded directly into HTML and run automatically when the page loads.

- ✅ No compilation needed — runs as plain text
- ❌ Not related to Java, despite the name

## Why is it called JavaScript?

Originally named **LiveScript**, it was renamed to ride the popularity of Java.  
Today, JavaScript is fully independent and follows the **ECMAScript** specification.

It runs in browsers via embedded engines:

| Engine Name    | Browser             |
| -------------- | ------------------- |
| V8             | Chrome, Opera, Edge |
| SpiderMonkey   | Firefox             |
| Chakra         | Internet Explorer   |
| JavaScriptCore | Safari              |

## How Do JavaScript Engines Work?

1. **Parse** the script
2. **Compile** to machine code
3. **Run** the code quickly
4. **Optimize** during execution

---

## 🧭 What Can In-Browser JavaScript Do?

JavaScript in the browser is sandboxed for safety, but it can still do a lot:

- 🧱 Modify HTML and CSS
- 🖱️ React to user actions (clicks, keys, mouse)
- 🌐 Send/receive data from servers (AJAX, fetch)
- 🍪 Work with cookies and local storage
- 📁 Handle file uploads (with user permission)

---

## 🚫 What Can’t In-Browser JavaScript Do?

To protect users, browser JavaScript has strict limits:

- ❌ No access to local files or OS functions
- ❌ Can’t run programs or read your hard drive
- ❌ Can’t use camera/mic without permission
- ❌ Can’t access other tabs or domains (Same Origin Policy)

### 🔐 Same Origin Policy

JavaScript can only access data from the **same site** it came from.  
To talk to other domains, the server must explicitly allow it via **CORS headers**.

---

## 🌟 What Makes JavaScript Unique?

JavaScript is the **only browser language** that offers:

| Feature                           | Why It Matters                  |
| --------------------------------- | ------------------------------- |
| 🔗 Full HTML/CSS integration      | Direct control over the webpage |
| 🧩 Simple syntax for simple tasks | Easy to learn and use           |
| 🌍 Universal browser support      | Runs everywhere by default      |

That’s why it’s the most popular tool for building web interfaces.

---

## 🧪 Languages “Over” JavaScript

Some developers prefer different syntax or features.  
These languages are **transpiled** to JavaScript before running in the browser.

| Language     | Purpose                         | Developed By   |
| ------------ | ------------------------------- | -------------- |
| CoffeeScript | Shorter syntax, Ruby-style      | Ruby community |
| TypeScript   | Strict typing for large systems | Microsoft      |
| Flow         | Typing with different approach  | Facebook       |
| Dart         | Runs outside browser too        | Google         |
| Brython      | Write browser code in Python    | Python devs    |
| Kotlin       | Safe, modern syntax             | JetBrains      |

> ⚠️ Even if you use these, knowing JavaScript is essential.

---

## 🧾 Summary

- JavaScript started as a browser-only language, now runs on servers and devices too.
- It’s the most widely adopted browser language, fully integrated with HTML/CSS.
- Many modern languages compile to JavaScript — explore them after mastering JS.
