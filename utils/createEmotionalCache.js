import createChache from '@emotion/cache';

export default function createEmotionCache() {
    return createChache({ key: 'css'});
}