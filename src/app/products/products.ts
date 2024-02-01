export interface Product { 
  readonly id: number;
  readonly name: string;
  readonly content: string;
  readonly medias: Array<Media>
}

export interface Media {
  readonly id: number;
  readonly name: string;
  readonly url: string;
}

export type Products = Product[];