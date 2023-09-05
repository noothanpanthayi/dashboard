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

export type ResponseType = {
  response: Array<string>
  error: boolean
  errorMsg: string
  loading: boolean
  userInputTxt: string
} 