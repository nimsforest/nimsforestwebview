# nimsforestwebview

Interactive web visualization for nimsforest using Phaser 3.

## Overview

This is a standalone web frontend that displays the nimsforest cluster visualization. It connects to a backend that serves the `/api/viewmodel` JSON endpoint (provided by nimsforestviewer's WebTarget or nimsforest2).

## Features

- Isometric grid visualization with Phaser 3
- Pan, zoom, and click-to-select interactions
- Real-time updates from backend API
- Responsive design with Tailwind CSS

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Configuration

The frontend fetches data from `/api/viewmodel`. Configure your backend to:

1. Serve this frontend's static files
2. Provide the `/api/viewmodel` JSON endpoint

Or run in development mode with the backend on a different port and configure CORS.

## API Contract

The frontend expects JSON at `/api/viewmodel` with this structure:

```json
{
  "lands": [
    {
      "id": "string",
      "hostname": "string",
      "grid_x": 0,
      "grid_y": 0,
      "is_manaland": false,
      "occupancy": 0.5,
      "ram_total": 16000000000,
      "ram_allocated": 8000000000,
      "trees": [...],
      "treehouses": [...],
      "nims": [...]
    }
  ],
  "summary": {
    "land_count": 4,
    "manaland_count": 1,
    "tree_count": 2,
    "treehouse_count": 1,
    "nim_count": 1
  }
}
```

## Tech Stack

- Next.js 14
- React 18
- Phaser 3
- TypeScript
- Tailwind CSS
