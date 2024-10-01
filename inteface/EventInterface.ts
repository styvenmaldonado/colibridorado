export interface EventInteface{
    name?: string,
    location?: string
    datetime_start?: string
    datetime_end?: String
    description?: string
    photos: string[]
    cancelPolicy: string
    cost?: { id: string; userType: any; usd: number; cop: number; mxn: number; }[] | undefined
    type: string
  }