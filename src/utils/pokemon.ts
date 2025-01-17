export const getPokemonIdFromUrl = (url: string): number => {
    const id = Number(url.split('/')[url.split('/').length - 2]);
    return id;
};
