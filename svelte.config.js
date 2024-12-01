import sveltePreprocess from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess({
    typescript: {
      transpileOnly: true, // Add this if you want to speed up transpilation
    }
  })
};
