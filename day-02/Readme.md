# Day 02 – Learning Summary 📘

This document covers the topics I learned and revised on **Day 02** of my development journey.

---

## 📌 Topics Covered

### 1️⃣ Difference between `package.json` and `package-lock.json`

- `package.json`
  - Contains project metadata and dependencies
  - Defines dependency version ranges
  - Used when installing packages

- `package-lock.json`
  - Records the **exact versions** of installed dependencies
  - Ensures consistent installs across different machines
  - Improves dependency installation speed and reliability

---

### 2️⃣ `^` and `~` in Dependency Versions

- `^` (Caret)
  - Allows updates that do not change the **major version**
  - Example: `^1.2.3` → can update to `1.x.x`

- `~` (Tilde)
  - Allows updates only within the **minor version**
  - Example: `~1.2.3` → can update to `1.2.x`

---

### 3️⃣ `node_modules` and Transitive Dependencies

- `node_modules`
  - Folder where all project dependencies are installed
  - Created automatically after running `npm install`

- Transitive Dependencies
  - Dependencies required by your dependencies
  - Installed automatically by npm
  - Helps your app work without manual installation

---

### 4️⃣ What is `npx`?

- `npx` is a tool that comes with npm
- Used to execute packages without installing them globally
- Helps run one-time commands safely
- Example use cases:
  - Creating React apps
  - Running build tools

---

### 5️⃣ Why Parcel?

- Zero configuration bundler
- Fast development builds
- Automatic:
  - Code bundling
  - Hot module replacement
  - File watching
- Beginner-friendly and easy to use
- Ideal for small to medium projects

---

## ✅ Summary

Day 02 focused on understanding **package management**, **dependency handling**, and **modern build tools**, which are essential for working with real-world JavaScript and React projects.
