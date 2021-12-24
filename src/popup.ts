import { getStorageItem } from './storage'; './storage';

import '../styles/popup.scss';

const helloWorldMessageHeader = document.getElementById('hello-world-message');
const goToOptionsButton = document.getElementById('go-to-options');

getStorageItem('helloWorldMessage').then(
  message => helloWorldMessageHeader.textContent = message
);

goToOptionsButton.addEventListener('click', () => {
  chrome.runtime.openOptionsPage();
});