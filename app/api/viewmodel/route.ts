import { NextResponse } from 'next/server';

// Mock data for local development without a backend
// This route only works in development mode (static export ignores API routes)

const mockWorld = {
  lands: [
    {
      id: 'land-1',
      hostname: 'dev-machine-1',
      ram_total: 32000000000,
      ram_allocated: 12000000000,
      cpu_cores: 8,
      cpu_freq_ghz: 3.6,
      occupancy: 0.375,
      is_manaland: false,
      grid_x: 0,
      grid_y: 0,
      trees: [
        {
          id: 'tree-1',
          name: 'web-server',
          ram_allocated: 4000000000,
          type: 'tree' as const,
          subjects: ['http', 'api'],
        },
        {
          id: 'tree-2',
          name: 'database',
          ram_allocated: 8000000000,
          type: 'tree' as const,
          subjects: ['postgres', 'storage'],
        },
      ],
      treehouses: [],
      nims: [],
    },
    {
      id: 'land-2',
      hostname: 'dev-machine-2',
      ram_total: 64000000000,
      ram_allocated: 24000000000,
      cpu_cores: 16,
      cpu_freq_ghz: 4.2,
      gpu_vram: 24000000000,
      gpu_tflops: 40,
      occupancy: 0.375,
      is_manaland: true,
      grid_x: 1,
      grid_y: 0,
      trees: [
        {
          id: 'tree-3',
          name: 'ml-pipeline',
          ram_allocated: 16000000000,
          type: 'tree' as const,
          subjects: ['ml', 'training'],
        },
      ],
      treehouses: [
        {
          id: 'treehouse-1',
          name: 'jupyter-lab',
          ram_allocated: 4000000000,
          type: 'treehouse' as const,
          script_path: '/notebooks/analysis.ipynb',
        },
      ],
      nims: [
        {
          id: 'nim-1',
          name: 'llama-inference',
          ram_allocated: 4000000000,
          type: 'nim' as const,
          ai_enabled: true,
          model: 'llama-3.1-8b',
        },
      ],
    },
    {
      id: 'land-3',
      hostname: 'dev-machine-3',
      ram_total: 16000000000,
      ram_allocated: 6000000000,
      cpu_cores: 4,
      cpu_freq_ghz: 2.8,
      occupancy: 0.375,
      is_manaland: false,
      grid_x: 0,
      grid_y: 1,
      trees: [
        {
          id: 'tree-4',
          name: 'worker-1',
          ram_allocated: 2000000000,
          type: 'tree' as const,
          subjects: ['queue', 'jobs'],
        },
        {
          id: 'tree-5',
          name: 'worker-2',
          ram_allocated: 2000000000,
          type: 'tree' as const,
          subjects: ['queue', 'jobs'],
        },
        {
          id: 'tree-6',
          name: 'scheduler',
          ram_allocated: 2000000000,
          type: 'tree' as const,
          subjects: ['cron', 'tasks'],
        },
      ],
      treehouses: [],
      nims: [],
    },
    {
      id: 'land-4',
      hostname: 'dev-machine-4',
      ram_total: 128000000000,
      ram_allocated: 80000000000,
      cpu_cores: 32,
      cpu_freq_ghz: 3.8,
      gpu_vram: 80000000000,
      gpu_tflops: 120,
      occupancy: 0.625,
      is_manaland: true,
      grid_x: 1,
      grid_y: 1,
      trees: [],
      treehouses: [
        {
          id: 'treehouse-2',
          name: 'vscode-server',
          ram_allocated: 8000000000,
          type: 'treehouse' as const,
          script_path: '/workspace/project',
        },
      ],
      nims: [
        {
          id: 'nim-2',
          name: 'gpt-4-inference',
          ram_allocated: 40000000000,
          type: 'nim' as const,
          ai_enabled: true,
          model: 'gpt-4-turbo',
        },
        {
          id: 'nim-3',
          name: 'embedding-service',
          ram_allocated: 32000000000,
          type: 'nim' as const,
          ai_enabled: true,
          model: 'text-embedding-3-large',
        },
      ],
    },
  ],
  summary: {
    land_count: 4,
    manaland_count: 2,
    tree_count: 6,
    treehouse_count: 2,
    nim_count: 3,
    total_ram: 240000000000,
    ram_allocated: 122000000000,
    occupancy: 0.508,
  },
};

export async function GET() {
  // Add a small delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 100));

  return NextResponse.json(mockWorld);
}
