# React
## Nomenclatura 
- **onSomething**: para props que representan eventos
  - onClick
  - onHover
  - onKeyPress
- **handleSomething**: para métodos que manejan eventos
    - handleClick
    - handleHover
    - handleKeyPress
## Funcionalidades
**useState**: Hook para añadir estado a un componente funcional
```javascript
import React, { useState } from 'react';
function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Example;
```
**setTimeOut**: Ejecuta una función después de un tiempo determinado
```javascript
setTimeout(() => {
  console.log('Hello, World!');
}, 1000);
```