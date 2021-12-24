import { getStorageData, setStorageData, Storage } from './storage';

async function initializeStorageWithDefaults(defaults: Storage) {
  const currentStorageData = await getStorageData();
  const newStorageData = Object.assign({}, defaults, currentStorageData);
  await setStorageData(newStorageData);
}

chrome.runtime.onInstalled.addListener(async () => {
  console.log('Extension successfully installed!');

  await initializeStorageWithDefaults({
    showAlerts: false,
    helloWorldMessage: 'Hello World!',
  });

  console.log('Successfully initialized storage with default values');
});

// Log storage changes
chrome.storage.onChanged.addListener((changes) => {
  for (const [key, value] of Object.entries(changes)) {
    console.log(`"${key}" changed from "${value.oldValue}" to "${value.newValue}"`);
  }
});