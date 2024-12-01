import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: '' // Jeżeli Twoja aplikacja jest w subfolderze, ustaw odpowiednią ścieżkę.
    },
  },
  preprocess: sveltePreprocess(),
};
