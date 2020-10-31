declare namespace QRious {
  interface QRiousOptions {
    value: string
    background?: string
    backgroundAlpha?: number
    foreground?: string
    foregroundAlpha?: number
    level?: 'L' | 'M' | 'Q' | 'H'
    mime?: string
    padding?: number
    size?: number
  }
}

declare class QRious {
  constructor(options?: QRious.QRiousOptions)
  toDataURL(mime?: string): string
  set(options?: QRious.QRiousOptions): void
}

export = QRious

export as namespace QRious

declare module 'qrious' {
  export = QRious
}
