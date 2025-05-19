// Type definitions for Twitter widgets
interface TwitterWidgets {
  load: (element?: HTMLElement) => Promise<void>
  createTimeline: (
    config: {
      sourceType: string
      screenName: string
    },
    element: HTMLElement,
    options?: {
      height?: number
      chrome?: string
      theme?: string
      tweetLimit?: number
    },
  ) => Promise<HTMLElement>
}

interface Window {
  twttr?: {
    widgets: TwitterWidgets
  }
}
