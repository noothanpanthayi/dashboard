export interface IreduxState {
    cartlist: Cartlist
    productsApi: ProductsApi
  }

  export interface Cartlist {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
  }
  
  export interface ProductsApi {
    queries: Queries
    mutations: Mutations
    provided: Provided
    subscriptions: Subscriptions
    config: Config
  }
  
  export interface Queries {
    "getProducts(null)": GetProductsNull
  }
  
  export interface GetProductsNull {
    status: string
    endpointName: string
    requestId: string
    originalArgs: any
    startedTimeStamp: number
    data: Data
    fulfilledTimeStamp: number
  }
  
  export interface Data {
    products: Product[]
    total: number
    skip: number
    limit: number
  }
  
  export interface Product {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
  }
  
  export interface Mutations {}
  
  export interface Provided {}
  
  export interface Subscriptions {
    "getProducts(null)": GetProductsNull2
  }
  
  export interface GetProductsNull2 {
    sHLn7DXu9A_Dtt9fS_BM9: SHln7Dxu9ADtt9fSBm9
  }
  
  export interface SHln7Dxu9ADtt9fSBm9 {
    pollingInterval: number
  }
  
  export interface Config {
    online: boolean
    focused: boolean
    middlewareRegistered: boolean
    refetchOnFocus: boolean
    refetchOnReconnect: boolean
    refetchOnMountOrArgChange: boolean
    keepUnusedDataFor: number
    reducerPath: string
  }
  