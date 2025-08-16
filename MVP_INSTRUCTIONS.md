# MVP Instructions

## Project Overview
This project is a minimal React app called **csdm-react-app** for learning and visualizing ServiceNow CSDM (Common Service Data Model) business and service models, focused on a small bank startup managing servers and financial statement logs (Oracle DB).

## Learning Objectives
- Master core React features: components, hooks, JSX, and state management
- Practice React patterns: component composition, props flow, and lifecycle methods
- Build proficiency with React hooks: useState, useEffect, and custom hooks
- Learn React routing, conditional rendering, and list rendering
- Apply React concepts through a real-world CSDM visualization app

## Workflow
- You (the learner) will implement 25% of the code, focusing on React features and patterns
- I will scaffold the project structure, you'll practice React hooks, components, and JSX
- Emphasis on React-specific concepts: component lifecycle, state management, and props
- Hands-on practice with React development patterns and best practices
- Progressive learning from basic components to advanced React features

## Implementation Guidelines
- **Message Streaming**: Present only one step at a time to avoid scrolling in the agent viewer
- **Step-by-Step Approach**: After each page of information, prompt the user to continue
- **Clear Breaks**: Separate major implementation phases with explicit continuation prompts
- **Focused Learning**: Each step should focus on one React concept or feature
- **Progressive Complexity**: Start simple and build up complexity gradually
- **Learning Options**: For each step, you can choose:
  - **Manual Practice**: Type the React syntax yourself for hands-on learning
  - **Autocomplete**: Use the provided code suggestions to move faster
- **Core React Focus**: Master useState, useEffect, component props, JSX patterns, and React hooks
- **React Patterns**: Learn component composition, conditional rendering, and list rendering
- **React Lifecycle**: Understand component mounting, updating, and cleanup with hooks
- **Flexible Approach**: Mix manual typing and autocomplete based on your learning goals

## Development Process (NEW)
- **Three-Phase Approach**: All code changes follow the systematic process in `DEVELOPMENT_INSTRUCTIONS.md`
  - **Phase 1**: Codebase exploration and analysis
  - **Phase 2**: Implementation planning with detailed roadmap
  - **Phase 3**: Code implementation with user approval required
- **Approval-Based Changes**: No automatic file modifications - all changes require user review and approval
- **Expert Standards**: All code must meet professional software engineering standards
- **Reasoning Required**: Each proposed change includes detailed explanation of purpose and benefits

## MVP Features
- Home page: App intro and navigation
- List of CSDM business models (with ServiceNow/CMDB context)
- Visual component for mapping a model (diagram or table)
- Placeholder for ServiceNow API integration (template only)
- Minimal styling, clear code comments, and learning guidance

## File Structure
```
csdm-react-app/
  README.md
  MVP_INSTRUCTIONS.md
  package.json
  public/
    index.html
    favicon.ico
  src/
    index.js
    App.js
    components/
      ModelList.js
      ModelVisualizer.js
      Navbar.js
    api/
      servicenowApiTemplate.js
    data/
      businessModels.js
    styles/
      App.css
```

## Implementation Steps

### Step 1: React Project Structure & Dependencies
**React Features We'll Learn:**
- React project organization and component hierarchy
- React-specific dependencies (react, react-dom, react-router)
- Understanding React development environment

**Learning Reinforcement Questions:**
1. What are the three core React dependencies and what does each one do?
2. Where should React components be organized in the project structure?
3. What file extension is typically used for React components and why?

### Step 2: React Functional Components & JSX
**React Features We'll Learn:**
- JSX syntax and React elements
- Functional component patterns and structure
- React component exports and imports
- JSX expressions and embedded JavaScript

**Learning Reinforcement Questions:**
1. What's the difference between a React element and a React component?
2. How do you embed JavaScript expressions in JSX?
3. What are the rules for JSX attribute names (hint: className vs class)?
4. How do you export and import a React functional component?

### Step 3: React Props and Component Communication
**React Features We'll Learn:**
- Props passing between parent and child components
- Props destructuring and default props
- Component reusability through props
- React component composition patterns

**Learning Reinforcement Questions:**
1. How do you pass props from a parent component to a child component?
2. What's the syntax for destructuring props in a functional component?
3. How do you set default values for props?
4. Can you modify props inside a component? Why or why not?

### Step 4: React Component Composition & Styling
**React Features We'll Learn:**
- Reusable React component design principles
- JSX className attribute and dynamic styling
- Component composition and children props
- React component modularity

**Learning Reinforcement Questions:**
1. What JSX attribute is used instead of the HTML 'class' attribute?
2. How do you conditionally apply CSS classes in React?
3. What is the 'children' prop and how is it used?
4. How do you compose multiple components together?

### Step 5: React Data Flow and State Structure
**React Features We'll Learn:**
- Data modeling for React component state
- Props vs state decision making
- React data flow patterns (top-down)
- Preparing data for React component consumption

**Learning Reinforcement Questions:**
1. When should you use state vs props for data?
2. What direction does data flow in React (top-down or bottom-up)?
3. How do you decide which component should own a piece of state?
4. What happens when state changes in a React component?

### Step 6: React List Rendering and Keys
**React Features We'll Learn:**
- JSX list rendering with .map()
- React key prop and reconciliation
- Dynamic component rendering from arrays
- React performance optimization with keys

**Learning Reinforcement Questions:**
1. What JavaScript method is commonly used to render lists in JSX?
2. Why is the 'key' prop required when rendering lists?
3. What makes a good key value (hint: not array index)?
4. What happens if you don't provide keys for list items?

### Step 7: React useState Hook and Event Handling
**React Features We'll Learn:**
- useState hook for component state management
- React event handling (onClick, onChange)
- State updates and component re-rendering
- React synthetic events

**Learning Reinforcement Questions:**
1. What does the useState hook return (what are the two values)?
2. How do you update state using the setter function from useState?
3. What's the difference between onClick and onclick in React?
4. Why should you never mutate state directly in React?

### Step 8: React State Management and Interactivity
**React Features We'll Learn:**
- Advanced useState patterns and state updates
- React component re-rendering lifecycle
- State-driven UI updates and reactivity
- React controlled components

**Learning Reinforcement Questions:**
1. What's the difference between controlled and uncontrolled components?
2. How do you update an object or array in state immutably?
3. When does a React component re-render?
4. How do you handle form inputs in React (controlled pattern)?

### Step 9: React useEffect Hook and Side Effects
**React Features We'll Learn:**
- useEffect hook for side effects and API calls
- Effect dependencies and cleanup functions
- React component lifecycle with hooks
- Handling async operations in React components

**Learning Reinforcement Questions:**
1. When does useEffect run by default?
2. What's the purpose of the dependency array in useEffect?
3. How do you create a cleanup function in useEffect?
4. What happens if you pass an empty dependency array []?

### Step 10: React Styling Patterns
**React Features We'll Learn:**
- CSS-in-JS and styled-components patterns
- Conditional styling with React state
- Dynamic className generation in JSX
- React styling best practices

**Learning Reinforcement Questions:**
1. How do you apply styles conditionally based on component state?
2. What's the syntax for inline styles in React JSX?
3. How do you combine multiple CSS classes dynamically?
4. What are the pros and cons of CSS-in-JS vs external CSS files?

### Step 11: Advanced React Hooks and Custom Hooks
**React Features We'll Learn:**
- Advanced useEffect patterns and optimization
- Creating custom React hooks
- Hook composition and reusability
- React hooks rules and best practices

**Learning Reinforcement Questions:**
1. What are the rules of hooks that must be followed?
2. How do you create a custom hook and what naming convention is used?
3. When would you create a custom hook vs using built-in hooks?
4. How do you share stateful logic between components?

### Step 12: React Router and Navigation
**React Features We'll Learn:**
- React Router for single-page applications
- Route parameters and navigation
- Programmatic navigation with useNavigate
- React routing patterns and best practices

**Learning Reinforcement Questions:**
1. What components are needed to set up basic routing in React?
2. How do you access route parameters in a component?
3. What's the difference between Link and useNavigate for navigation?
4. How do you create nested routes in React Router?

## Next Steps
- Continue from Step 9 as requested
- Implement features incrementally with learning focus
- Use step-by-step messaging with continuation prompts 