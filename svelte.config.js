import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: vercel({
            runtime: 'nodejs20.x'
        })
    }
};

export default config;
