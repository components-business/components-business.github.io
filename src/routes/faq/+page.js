import faqData from '../../lib/content/pages/faq.json';
import { sceneStore } from '../../lib/stores/sceneStore';

export const load = () => {
  sceneStore.update(store => ({
    ...store,
    centralStructureTargetPosition: [0, 0, 0],
    centralStructureTargetRotation: [0, 0, 0],
    componentSpawnRate: 100, // More particles for structured inquiry
    componentSpeed: 0.01, // Slower movement for clarity
    sceneState: 'faq',
    cameraPosition: [0, 0, 18], // Adjusted camera for better view of columns
    cameraLookAt: [0, 0, 0],
  }));
  return {
    faqPageData: faqData,
  };
};