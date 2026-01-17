import { dev } from '$app/environment'

export const title = 'Photosynthesis hackathon'
export const description = 'Photosynthesis hackathon'

// Required as config.url by +layout.svelte
export const url = dev
    ? 'http://localhost:5173/'
    : 'https://computational-biology-aachen.github.io/2026-photosynthesis-hackathon/'
