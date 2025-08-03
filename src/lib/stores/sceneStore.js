import { writable } from 'svelte/store';

export const sceneStore = writable({
  centralStructureTargetPosition: [0, 0, 0],
  centralStructureTargetRotation: [0, 0, 0],
  componentSpawnRate: 10,
  componentSpeed: 0.05,
  sceneState: 'mesh', // 'mesh', 'sphere', 'scatter', or 'pricing'
  cameraPosition: [0, 0, 10],
  cameraLookAt: [0, 0, 0],
  particleColor: '#007bff', // Default color
  particleColors: [], // Array of available colors for randomization
  colorAnimationEnabled: true, // Toggle for color animations
  particleAnimationSpeed: 1.0, // Speed multiplier for animations
  scrollY: 0, // Current scroll position
  scrollBasedLighting: true // Enable scroll-based light rotation
});