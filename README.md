GET http://localhost:3000/api/user/john@example.com

npm run dev

Question 5

## `useState` vs `useReducer` – Key Differences

| Feature              | `useState`                    | `useReducer`                                    |
| -------------------- | ----------------------------- | ----------------------------------------------- |
| Use Case           | Simple, independent state     | Complex state logic, multiple state transitions |
| State Updates     | Direct state update           | Uses a reducer function to manage updates       |
| Syntax Simplicity | Simpler syntax                | Slightly more boilerplate                       |
| When to Use       | 1–2 fields, toggles, counters | Forms, nested state, conditional state logic    |
| Update Trigger    | `setState(value)`             | `dispatch({ type, payload })`                   |

---

## `useState` Example – Good for Simple State

```js
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
```

Use when:

* You only need to **toggle**, **increment**, **update a string** or **single field**.
* Code needs to stay clean and minimal.

---

## `useReducer` Example – Good for Complex State

```js
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    case 'reset': return initialState;
    default: throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  );
}
```

Use when:

* State has **multiple sub-values** (e.g., forms, complex objects).
* Updates depend on the **previous state** or **action type**.
* You're building a **state machine-like** component.

---

## Real-Life Use Case Comparison

### Login Form:

* **`useState`**: Good if just handling a few input fields and submitting.
* **`useReducer`**: Better if you need to manage form state + validation + submission status + errors.

---

## Summary – When to Use Each

| Situation                            | Use          |
| ------------------------------------ | ------------ |
| Simple state (count, toggle, input)  | `useState`   |
| Complex state logic or transitions   | `useReducer` |
| State depends on previous state      | `useReducer` |
| Want better organization/scalability | `useReducer` |

