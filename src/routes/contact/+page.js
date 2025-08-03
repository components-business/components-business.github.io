import contactData from '../../lib/content/pages/contact.json';
import { sceneStore } from '../../lib/stores/sceneStore';

export const load = () => {
  sceneStore.update(store => ({
    ...store,
    centralStructureTargetPosition: [0, 0, 0],
    centralStructureTargetRotation: [0, 0, 0],
    componentSpawnRate: 80, // More particles for dynamic flow
    componentSpeed: 0.1, // Faster flow for dynamic connections
    sceneState: 'contact',
    cameraPosition: [0, 0, 15], // Adjusted camera for better view of hubs
    cameraLookAt: [0, 0, 0],
  }));
  return {
    contactPageData: contactData,
  };
};