import { writable } from 'svelte/store';

export const sceneStore = writable({
  centralStructureTargetPosition: [0, 0, 0],
  centralStructureTargetRotation: [0, 0, 0],
  componentSpawnRate: 10,
  componentSpeed: 0.05,
  sceneState: 'mesh', // 'mesh' or 'sphere'
  cameraPosition: [0, 0, 10],
  cameraLookAt: [0, 0, 0]
});