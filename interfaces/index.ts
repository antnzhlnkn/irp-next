// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type Beer = {
  id: number
  name: string
  tagline: string
  description: string
  image_url: string
  abv: number
  brewers_tips: string
}
