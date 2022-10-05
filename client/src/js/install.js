const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler for the prompt before install
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;

    butInstall.classList.toggle('hidden', false)
});

// Event handler for Install button
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if(!promptEvent){
        return;
    }

    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', false);
});

// Event listener for app installed
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
