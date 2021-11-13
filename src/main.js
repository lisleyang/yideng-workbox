import { createApp } from 'vue'
import App from './App.vue'

if ('serviceWorker' in navigator) {
    console.log('has serviceWorker')
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
}

createApp(App).mount('#app')
