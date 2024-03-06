export default function myImageLoader({ src, width, quality }: E) {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  interface E {
    src: string;
    width: number;
    quality: number
  }