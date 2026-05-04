export interface Option<T> {
    label: string;
    value: T
}

export type Func<T = unknown> = (data?: T) => void
