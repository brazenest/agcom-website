export type ArtifactModel = {
  url: string
  caption: string
}

export type MetricModel = {
  value: number
  label: string
}

export type ApolloWidth =
  | 'narrow'
  | 'content'
  | 'wide'
  | 'bleed'

export type ApolloSpacing =
  | 'compress'
  | 'standard'
  | 'expand'

export type ApolloAlign =
  | 'leading'
  | 'centered'
  | 'offset'

export type ApolloHeight =
  | 'short'
  | 'medium'
  | 'tall'

export type ApolloSignalMode =
  | 'neutral'
  | 'engineering'
  | 'cinematic'
  | 'synthesis'
