### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is a framwork that allows for the creation of Javascript components that are reusable and can be controlled by state. Components can be rendered based on changes in state and

React is a Javascript library developed by Facebook that allows for the creation of single-page applications with a dynamic and responsive user interface. React helps build reusable UI components that update in response to changes in state, with each component able to manage its own state and behavior/appearance in the DOM. React components also encapsulate both logic and HTML which helps build more modular applications. Additionally, React utilizes a virtual DOM which optimizes the actual DOM updating. As opposed to directly manipulating the DOM for each change in HTML structure, React creates a virtual representation of the DOM, and then efficiently updates the actual DOM by calculating and only making the minimum changes necessary.

- What is Babel?

Babel is a Javascript compiler that converts modern JavaScript including ES6 code into an older version that can be executed in environments that don't support the latest ECMAScript features. It can also be used with React to allow for JSX to be written within Javascript code.

- What is JSX?

JSX is not valid pure JavaScript, but instead a syntax extension for JavaScript. It is short for JavaScript XML and resembles XML or HTML but is embedded in JavaScript code. When used with React, JSX enables HTML elements to be returned within Javascript functions. In order for JSX to be executed in web browsers, it must first be transpiled, or converted into the equivalent Javascript code that browsers can understand. The common tool used to do this is Babel, which comes within the build configuration of React projects.

- How is a Component created in React?

A component is created in React through a function which returns JSX. This JSX should respresent valid HTML elements embedded within one parent element, usually a div. Components are then rendered through parent components usually all the way up to an App component which is rendered throug the process initiated by calling `ReactDOM.render()`. This function works to render a root component into a specified container DOM element, usually a div with the id of 'root'. 

- What are some differences between state and props?

Props are used to pass data from a parent component to a child component. Props are accessible to a component as an argument that is passed to them. Props are read-only as they cannot be modified or changed in any way by the child component. State is a feature of React that allows React components to to track and manage their own data and behavior. Each component has its own internal state and changes to the state can trigger re-rendering of the component or can impact other behaviors of the component. State can be changed only by the component to which that state belongs. It is initialized within its own component through the `useState` hook.

- What does "downward data flow" refer to in React?

Downward data flow in React refers to the fact that data is typically passed from parent components to children components and not the other way around. This is done through props. 

- What is a controlled component?

A controlled component is one in which the state is maintained and controlled directly by the React component. Controlled and uncontrolled components often refer to form elements. In React, most form input elements are controlled, except for file inputs which are uncontrolled to prevent improper acessing of a computer's file systems. In a controlled form component, React is the single source of truth for the form data and the form element's value is stored in the state and updated by event handlers.

- What is an uncontrolled component?

An uncontrolled component is one in which the state is not fully managed by the React component. In an uncontrolled component, the component's state relies at least in part on external sources outside of React, such as the DOM, APIs, or external libraries. A common example of uncontrolled components are file inputs, which are unable to controlled by React in order to prevent uncontrolled access to a user's file system. In uncontrolled form elements, the value of the form element is accessed directly from the DOM using refs or other methods and is not managed, tracked, or controlled by React. 

- What is the purpose of the `key` prop when rendering a list of components?

`Key` props are recommended to be included when rendering a list of components or elements becuase they help allow React to identify and keep track of which items have been added, changed, or removed. While React applications will still function if `key` props are not included when rendering lists of components/elements, it will result an error along the lines of `each child in a list should have a unique key prop`. If child elements/components do not have a reliable key or id to include, utilizing a tool like npm uuid is an option.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

An array index is not a good choice for a `key` prop because the order of elements in a JavaScript array is not guaranteed to be stable across renders. If elements are added, removed, or reordered, the array indices associated with each element may change. This may result in unexpected and problematic behaviors in a React app. If a reliable id or key property is not available fo a list of components, npm uuid is a good alternative.

- Describe useEffect.  What use cases is it used for in React components?

`useEffect` is a React hook that allows for the execution of side effects in functional components, including data fetching, subscriptions, manual DOM manipulations, and more. `useEffect` is useful whenever you want to fetch data after a component first renders so that a loading screen can be shown in the meantime. `useEffect` accepts a second argument, which allows React to skip applying an effect if certain values haven't changed between renders (these values should be placed in an aay in the second agument). Passing an empty array as the second argument allows React to run an effect and clean it up only once (on mount and unmount). Otherwise, `useEffect` will re-run after every render. A cleanup function can be included with `useEffect` by simply returning whatever function you wish to be used to clean up any effects. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

`useRef` is also a React hook and it returns a mutable object with a `current` key whose value is the initial value passed to the hook. This object persists across renders independent of state, acting as a local variable, and mutating this object doesn't trigger a re-render. Common uses for `useRef` are to access an underlying DOM element (such as to make use of a Web API or to integrate another JavaScript library) or to set and clean up timers.

- When would you use a ref? When wouldn't you use one?

`useRef` should only be used when it is absolutely necessary to persist mutable values across renders, interact with DOM elements directly, or avoid closures in event handlers. `useRef` should not be used to manage component state which triggers re-renders or to manage state that could be managed with `useState`. Because it is considered an anti-pattern in React, it should only be used when necessary and for a specific reason.


- What is a custom hook in React? When would you want to write one?

A custom hook in React is a JavaScript function that uses React's hook system, including `useState`, `useEffect`, `useRef`, etc., to encapsulate and reuse logic across multiple components. They allow you to to place stateful or side-effect-related logic into a separate function which can be used in multiple components or even multiple times in the same component for different purposes. Overall, they promote better oganization and reusability in React applications. You should write custom hooks when very similiar logic is being used in multiple components or when excessive business logic is cluttering up a single component and hindering its readability.