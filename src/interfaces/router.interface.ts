import { RouteProps } from 'react-router-dom'

export interface IRoute extends RouteProps {
  feature: string
  path: string
  exact?: boolean
}
