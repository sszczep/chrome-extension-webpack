import { getStorageItem } from './storage'; './storage';

(async () => {
  const showAlerts = await getStorageItem('showAlerts');
  if (!showAlerts) return;

  const helloWorldMessage = await getStorageItem('helloWorldMessage');
  alert(`Your extension says "${helloWorldMessage}"!`);
})();