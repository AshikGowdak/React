# Learning Summary – React & Tooling 📘⚛️

This document summarizes the concepts I learned while exploring React fundamentals, JSX, and build tooling.

---

## 📌 Topics Covered

### 1️⃣ Writing Scripts in `package.json`

- Learned how to write custom scripts in `package.json`
- Scripts help simplify commands like starting and building the project
- Common scripts include:
  - `start` – to run the development server
  - `build` – to create a production-ready build
- Makes development workflow faster and easier

---

### 2️⃣ `React.createElement`

- `React.createElement` returns a **JavaScript object**
- This object is a React Element
- During rendering, React converts this object into actual **HTML code**
- Helps understand how React works behind the scenes without JSX

---

### 3️⃣ JSX Basics

- JSX is **not HTML**
- JSX is a **HTML-like syntax** written inside JavaScript
- It makes UI code more readable and easier to write
- JSX is just syntactic sugar over `React.createElement`

---

### 4️⃣ No HTML Inside JSX

- JSX looks like HTML but it follows **JavaScript rules**
- It is written inside JavaScript files
- JSX expressions are evaluated as JavaScript, not raw HTML

---

### 5️⃣ JavaScript Engine Understanding

- JavaScript engines understand **ES6 JavaScript**
- Browsers do **not** understand JSX directly
- JSX must be converted into plain JavaScript before execution

---

### 6️⃣ JSX Transpilation

- JSX is **transpiled** before reaching the JavaScript engine
- Transpilation converts JSX into `React.createElement` calls
- This process happens during the build step

---

### 7️⃣ Role of Parcel and Babel

- Parcel is used as a bundler
- Babel is used for transpilation
- Parcel automatically uses Babel and its dependencies
- Together, they convert JSX and modern JavaScript into browser-compatible code

---

### 8️⃣ JSX Attributes

- Attributes in JSX are written in **camelCase**
- Examples:
  - `className` instead of `class`
  - `onClick` instead of `onclick`
- This follows JavaScript naming conventions

---

## ✅ Summary

This learning session focused on understanding how React works internally, how JSX is processed, and how modern tools like Parcel and Babel help convert JSX into browser-readable JavaScript.
