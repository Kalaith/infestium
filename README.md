# Infestium: Infestation Protocol

A strategic infestation simulation game featuring global map control, agent evolution systems, and tactical spreading mechanics built with React and TypeScript.

## Game Features

- **Global Map Strategy**: Control territories across a world map interface
- **Agent Evolution Tree**: Develop and evolve different types of infestation agents
- **Tactical Spreading**: Strategic placement and growth of infestation networks
- **Interactive World Map**: Real-time global strategy interface
- **Evolution Mechanics**: Upgrade and specialize your infestation agents

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 6
- **Mapping**: React Simple Maps for world visualization
- **State Management**: Built-in React state (expandable to Zustand)
- **Styling**: CSS modules and modern styling

## Development

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Type checking
npm run type-check

# Run full CI pipeline
npm run ci
```

## Deployment

```powershell
# Deploy to preview environment
.\publish.ps1

# Deploy to production
.\publish.ps1 -Production
```

## Game Mechanics

- **Territory Control**: Expand your influence across different regions
- **Resource Management**: Manage infestation resources and growth
- **Agent Specialization**: Different agent types for different strategies
- **Global Events**: React to worldwide events and challenges
- **Strategic Planning**: Long-term planning for world domination

## Key Components

- **GlobalMap**: Interactive world map interface for territory management
- **AgentEvolutionTree**: Skill tree system for agent development
- **Strategic Interface**: Command center for coordinating global operations

## Project Structure

```
infestium/
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── types/         # TypeScript definitions
│   │   └── utils/         # Utility functions
│   └── dist/              # Build output
└── README.md              # This file
```

Take control of a global infestation network and strategically spread your influence across the world.

Part of the WebHatchery game collection.