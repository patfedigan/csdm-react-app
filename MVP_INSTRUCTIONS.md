# MVP Instructions

## Project Overview
This project is a minimal React app called **csdm-react-app** for learning and visualizing ServiceNow CSDM (Common Service Data Model) business and service models, focused on a small bank startup managing servers and financial statement logs (Oracle DB).

## Learning Objectives
- Learn React fundamentals by building a real-world app
- Map out CSDM business models and visualize relationships
- Integrate (template) with ServiceNow/CMDB APIs
- Practice collaborative, iterative software development

## Workflow
- You (the learner) will implement 85% of the code, guided by templates and comments
- We will design, scaffold, and iterate together
- All code and design decisions will be documented here for future reference

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