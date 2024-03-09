export interface FileData{
    
    indicators: Array<{
        name: string
        count: number
    }>
    indicator_sentences: any
    metrics: Array<{
        name: string
        count:number
    }>
    metric_sentences: any
    activities: Array<{
        name: string
        count: number
        list: Array<string>
    }>
    events: Array<{
        name: string
        count: number
        list: Array<string>
    }>
}

export interface Sentences {
    name: string
    data: string[]
}
