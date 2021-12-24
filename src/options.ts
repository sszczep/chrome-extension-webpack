import { getStorageItem, setStorageItem } from './storage';

import '../styles/options.scss';

const helloWorldMessageInput = document.getElementById('hello-world-message') as HTMLInputElement;
const showAlertsCheckbox = document.getElementById('show-alerts') as HTMLInputElement;

getStorageItem('helloWorldMessage').then(
  message => helloWorldMessageInput.value = message
);

getStorageItem('showAlerts').then(
  showAlerts => showAlertsCheckbox.checked = showAlerts
);

helloWorldMessageInput.addEventListener('keyup', async () => {
  await setStorageItem('helloWorldMessage', helloWorldMessageInput.value);
});

showAlertsCheckbox.addEventListener('change', async () => {
  await setStorageItem('showAlerts', showAlertsCheckbox.checked);
});