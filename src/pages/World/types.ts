export interface World {
  name: {
    official: string
  }
  flags: {
    png: string
  }
  capital:string
  maps:{
    googleMaps:string
  }
  population:number
}

export type WorldProps = {
  row: World
  index: number
}
