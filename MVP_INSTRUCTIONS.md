# MVP Instructions

## Project Overview
This project is a minimal React app called **csdm-react-app** for learning and visualizing ServiceNow CSDM (Common Service Data Model) business and service models, focused on a small bank startup managing servers and financial statement logs (Oracle DB).

## Learning Objectives
- Learn React fundamentals by building a real-world app
- Map out CSDM business models and visualize relationships
- Integrate (template) with ServiceNow/CMDB APIs
- Practice collaborative, iterative software development

## Workflow
- You (the learner) will implement 25% of the code, focusing on key React syntax and features
- I will scaffold and implement the core structure, you'll practice specific React concepts
- Focus on core configurations, component structure, and fundamental React patterns
- We will design, scaffold, and iterate together
- All code and design decisions will be documented here for future reference

## Implementation Guidelines
- **Message Streaming**: Present only one step at a time to avoid scrolling in the agent viewer
- **Step-by-Step Approach**: After each page of information, prompt the user to continue
- **Clear Breaks**: Separate major implementation phases with explicit continuation prompts
- **Focused Learning**: Each step should focus on one React concept or feature
- **Progressive Complexity**: Start simple and build up complexity gradually
- **Targeted Practice**: You'll type specific React syntax and patterns while I handle the scaffolding
- **Core React Focus**: Avoid implementing HTML tags - focus only on React syntax within existing tags
- **React Syntax Only**: Practice useState, useEffect, props, imports, exports, and other React patterns

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

## Next Steps
- Scaffold the project with template files and comments
- Implement features incrementally, updating this file as we go
- Use step-by-step messaging with continuation prompts 