import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';  // lub adapter-node, jeśli chcesz mieć aplikację serwerową

export default {
  kit: {
    adapter: adapter(), // Wybór adaptera (np. adapter-static dla statycznej aplikacji)
    target: '#svelte',   // Ustalamy cel aplikacji
    vite: {
      server: {
        host: '0.0.0.0', // Słuchanie na wszystkich interfejsach sieciowych
        port: 5173,      // Port na którym aplikacja będzie działała
      }
    }
  },
  preprocess: sveltePreprocess(),
};
