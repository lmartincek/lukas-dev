export const AUTHOR: string = 'Lukas Martincek'

export const ASPECT_RATIOS = {
    PORTRAIT: "3:4",
    LANDSCAPE: "4:3",
} as const

export type AspectRatio = (typeof ASPECT_RATIOS)[keyof typeof ASPECT_RATIOS]
