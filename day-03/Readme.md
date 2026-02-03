# Learning Summary – React & Tooling 📘⚛️

This document summarizes the concepts I learned while exploring React fundamentals, JSX, React elements, components, and build tooling.

---

## 📌 Topics Covered

### 1️⃣ Writing Scripts in `package.json`

- Learned how to write custom scripts in `package.json`
- Scripts help simplify commands like starting and building the project
- Common scripts include:
  - `start` – to run the development server
  - `build` – to create a production-ready build
- Makes the development workflow faster and easier

---

### 2️⃣ React Elements

- Learned what a **React Element** is
- A React element is a **plain JavaScript object**
- It represents what should appear on the UI
- React elements are immutable

---

### 3️⃣ `React.createElement`

- `React.createElement` returns a **JavaScript object**
- This object is known as a React Element
- During rendering, React converts this object into actual **HTML**
- Helps understand how React works internally without JSX

---

### 4️⃣ React Functional Components

- Learned how to create **React Functional Components**
- Functional components are JavaScript functions that return React elements
- Components help divide UI into reusable and manageable pieces

---

### 5️⃣ JSX Basics

- JSX is **not HTML**
- JSX is a **HTML-like syntax** written inside JavaScript
- It improves readability and developer experience
- JSX is syntactic sugar over `React.createElement`

---

### 6️⃣ JSX Elements

- JSX elements are converted into React elements
- JSX elements describe the UI structure
- They are processed before reaching the JavaScript engine

---

### 7️⃣ Component Composition

- Learned about **component composition**
- One component can be used inside another component
- Helps build complex UIs using small reusable components
- Example: Using a `Title` component inside a `Heading` components

---

### 8️⃣ Accessing React Elements Inside Functional Components

- React elements can be created and returned inside functional components
- Functional components can:
  - Return JSX elements
  - Return elements created using `React.createElement`
- Helps understand how components and elements work together

---

### 9️⃣ No HTML Inside JSX

- JSX looks like HTML but follows **JavaScript rules**
- JSX is written inside JavaScript files
- JSX expressions are evaluated as JavaScript, not raw HTML

---

### 🔟 JavaScript Engine Understanding

- JavaScript engines understand **ES6 JavaScript**
- Browsers do **not** understand JSX directly
- JSX must be converted into plain JavaScript before execution

---

### 1️⃣1️⃣ JSX Transpilation

- JSX is **transpiled** before reaching the JavaScript engine
- Transpilation converts JSX into `React.createElement` calls
- This process happens during the build step

---

### 1️⃣2️⃣ Role of Parcel and Babel

- Parcel is used as a bundler
- Babel is used for transpilation
- Parcel automatically uses Babel and its dependencies
- Together, they convert JSX and modern JavaScript into browser-compatible code

---

### 1️⃣3️⃣ JSX Attributes

- Attributes in JSX are written in **camelCase**
- Examples:
  - `className` instead of `class`
  - `onClick` instead of `onclick`
- This follows JavaScript naming conventions

---

## ✅ Summary

This learning session focused on understanding React fundamentals such as React elements, functional components, JSX, component composition, and how modern tools like Parcel and Babel work together to transform JSX into browser-readable JavaScript.
