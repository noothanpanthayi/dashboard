export type StickyNote = {
    id: string
    color: string
    notes: string
    tiltdeg: string
    notefull: boolean
  }

  export interface STATE {
    stickynotes: StickyNote[]
    editmode: boolean
    draggedItem: any
    writable: boolean
  }