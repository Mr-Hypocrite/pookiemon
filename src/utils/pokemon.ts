export const getResourceIdFromUrl = (url: string): number => {
    const id = Number(url.split('/')[url.split('/').length - 2]);
    return id;
};

const baseSpritePath = `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/`;

export const getResourceDefaultSprite = (
    resourceType: 'pokemon' | 'item' | 'berry',
    name: string,
    url: string
) => {
    if (resourceType === 'pokemon') {
        const spriteOfficialArtworkSrc = `${baseSpritePath}pokemon/other/official-artwork/${getResourceIdFromUrl(url)}.png`;
        return spriteOfficialArtworkSrc;
    } else if (resourceType === 'berry') {
        return `${baseSpritePath}items/${name}-berry.png`;
    } else {
        return `${baseSpritePath}items/${name}.png`;
    }
};
