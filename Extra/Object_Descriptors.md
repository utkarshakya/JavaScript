# Understanding Object Property Descriptors in JavaScript

JavaScript provides powerful tools to define and manipulate object properties using property descriptors. This document explains key concepts like `writable`, `enumerable`, and `configurable` attributes, along with examples.

---

## 1. Defining Properties with `Object.defineProperty`

The `Object.defineProperty` method allows you to define or modify a property on an object with specific attributes.

Example

```javascript
const obj = {};
Object.defineProperty(obj, "hidden", {
  value: "This is hidden",
  enumerable: false, // Not enumerable
  writable: true,    // Can be modified
  configurable: true // Can be deleted or changed
});
```

### Key Attributes

#### 1. Writable

- **Determines if the value of the property can be changed.**
  - `writable: true`: The property value can be reassigned.
  - `writable: false`: The property value is read-only.
    - In **non-strict mode**, attempts to change the value silently fail.
    - In **strict mode**, attempts to change the value throw a `TypeError`.

#### 2. Enumerable

- **Determines if the property will appear in enumeration operations** like:
  - `for...in`
  - `Object.keys()`
  - `Object.entries()`
- Behavior:
  - `enumerable: true`: The property is visible during iteration.
  - `enumerable: false`: The property is hidden from enumeration methods but can still be accessed directly.

#### 3. Configurable

- **Determines if the property’s descriptor itself can be modified or if the property can be deleted.**
  - `configurable: true`:
    - The property can be deleted using the `delete` operator.
    - The property’s attributes (`writable`, `enumerable`, `configurable`) can be changed.
  - `configurable: false`:
    - The property cannot be deleted.
    - The property’s attributes cannot be changed, except for `writable` (if it’s `true`, it can be made `false`).

---

## 2. Retrieving Property Descriptors

You can retrieve the descriptor of a property using `Object.getOwnPropertyDescriptor`.

Example

```javascript
Object.getOwnPropertyDescriptor(obj, "hidden");
```

This returns an object describing the property, including its `value`, `writable`, `enumerable`, and `configurable` attributes.

---

## 3. Checking Property Ownership

To check if an object has a specific property as its own (not inherited), use `Object.hasOwnProperty`.

Example

```javascript
obj.hasOwnProperty("hidden");
```

This returns `true` if the property exists directly on the object.

---

## 4. Defining Multiple Properties with `Object.defineProperties`

The `Object.defineProperties` method allows you to define multiple properties at once.

Example

```javascript
const obj = {};
Object.defineProperties(obj, {
  name: { value: 'Alice', writable: true, enumerable: true, configurable: true },
  age: { value: 25, writable: true, enumerable: true, configurable: true }
});
```

In this example:

- The `name` and `age` properties are defined with all attributes (`writable`, `enumerable`, `configurable`) set to `true`.

---

## Summary

- **`Object.defineProperty`**: Define a single property with specific attributes.
- **`Object.defineProperties`**: Define multiple properties at once.
- **`Object.getOwnPropertyDescriptor`**: Retrieve the descriptor of a property.
- **`Object.hasOwnProperty`**: Check if a property exists directly on an object.

By understanding and using property descriptors, you can have fine-grained control over object properties in JavaScript.
