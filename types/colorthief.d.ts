declare module 'colorthief' {
  export default class ColorThief {
    getColor(sourceImage: CanvasImageSource): Promise<[number, number, number]>
  }
}
