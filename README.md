# nimsforestwebview

Interactive web visualization for nimsforest using Phaser 3.

## Overview

This is a standalone web frontend that displays the nimsforest cluster visualization. It connects to a backend that serves the `/api/viewmodel` JSON endpoint (provided by nimsforestviewer's WebTarget or nimsforest2).

## Features

- Isometric grid visualization with Phaser 3
- Pan, zoom, and click-to-select interactions
- Real-time updates from backend API
- Responsive design with Tailwind CSS

## Quick Start

```bash
# Install dependencies
npm install

# Start development server with mock data (no backend needed!)
npm run dev

# Open http://localhost:3000 in your browser
```

## Development

### Available Scripts

| Script                 | Description                                             |
| ---------------------- | ------------------------------------------------------- |
| `npm run dev`          | Start dev server with built-in mock API                 |
| `npm run dev:backend`  | Start dev server connected to backend at localhost:8090 |
| `npm run build`        | Build for production (static export)                    |
| `npm run lint`         | Run ESLint                                              |
| `npm run lint:fix`     | Run ESLint with auto-fix                                |
| `npm run type-check`   | Check TypeScript types                                  |
| `npm run format`       | Format code with Prettier                               |
| `npm run format:check` | Check code formatting                                   |
| `npm run check`        | Run all checks (types, lint, format)                    |

### Development Modes

#### 1. Standalone Development (Recommended for UI work)

The project includes a built-in mock API that provides sample data. This is perfect for frontend-only development:

```bash
npm run dev
```

This starts the Next.js dev server with mock data - no backend required! The mock API returns a sample cluster with 4 lands, trees, treehouses, and nims.

#### 2. With Backend

To connect to a real backend:

```bash
# Option 1: Use the dev:backend script (connects to localhost:8090)
npm run dev:backend

# Option 2: Set custom API URL
NEXT_PUBLIC_API_URL=http://your-backend:port npm run dev
```

You can also create a `.env.local` file:

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:8090
```

### Code Quality

Before committing, run all checks:

```bash
npm run check
```

This runs TypeScript type checking, ESLint, and Prettier formatting checks.

To auto-fix issues:

```bash
npm run lint:fix
npm run format
```

## Configuration

### Environment Variables

| Variable              | Description     | Default               |
| --------------------- | --------------- | --------------------- |
| `NEXT_PUBLIC_API_URL` | Backend API URL | Empty (uses mock API) |

### API Configuration

The frontend fetches data from `/api/viewmodel`. In development:

- **No `NEXT_PUBLIC_API_URL` set**: Uses built-in mock API route
- **`NEXT_PUBLIC_API_URL` set**: Proxies requests to the specified backend

For production static builds, configure your web server to proxy `/api/*` to your backend.

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
      "cpu_cores": 8,
      "cpu_freq_ghz": 3.6,
      "gpu_vram": 24000000000,
      "gpu_tflops": 40,
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
    "nim_count": 1,
    "total_ram": 64000000000,
    "ram_allocated": 32000000000,
    "occupancy": 0.5
  }
}
```

## Project Structure

```
app/
├── api/
│   └── viewmodel/
│       └── route.ts      # Mock API for development
├── components/
│   ├── game/
│   │   ├── ForestBoard.tsx   # Main game container
│   │   ├── ForestScene.ts    # Phaser scene
│   │   ├── PhaserGame.tsx    # Phaser integration
│   │   └── types.ts          # TypeScript types
│   └── ui/
│       └── Sidebar.tsx       # Details sidebar
├── globals.css
├── layout.tsx
└── page.tsx
```

## Tech Stack

- Next.js 14
- React 18
- Phaser 3
- TypeScript
- Tailwind CSS
- Prettier + ESLint
