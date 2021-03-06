export const point = (x: number, y: number) => ({ x, y });

export const randomPos = (range: number, size: number): number =>
    Math.floor(Math.random() * range) % size * size;
