In React, **props** (short for properties) are used to pass data from a parent component (for example, your `App.jsx`) down to a child component. This is done by adding attributes to your component when you use it. The child component then accesses those values through its props.

### Example

#### App.jsx

```jsx
import React from 'react';
import ChildComponent from './ChildComponent';

function App() {
  const message = "Hello from App!";
  const user = { name: "Alice", age: 25 };

  return (
    <div>
      {/* Passing props "message" and "user" to ChildComponent */}
      <ChildComponent message={message} user={user} />
    </div>
  );
}

export default App;
```

#### ChildComponent.jsx

```jsx
import React from 'react';

function ChildComponent({ message, user }) {
  return (
    <div>
      <h1>{message}</h1>
      <p>
        User: {user.name}, Age: {user.age}
      </p>
    </div>
  );
}

export default ChildComponent;
```

### Explanation

1. **In `App.jsx`:**
   - We define a constant `message` and an object `user`.
   - We then pass these values as props to the `ChildComponent` by adding them as attributes:  
     ```jsx
     <ChildComponent message={message} user={user} />
     ```

2. **In `ChildComponent.jsx`:**
   - We receive the props as an object. Here, we use destructuring to directly extract `message` and `user` from the props.
   - We can then use these props inside the component (e.g., displaying the message in an `<h1>` tag).

This is the standard way to pass data from a parent component to a child component in React.