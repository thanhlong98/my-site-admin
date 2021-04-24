import { RouteProps } from 'react-router-dom'

export interface IRoute extends RouteProps {
  feature: string
  path: string
  exact?: boolean
}

export interface IRouteItem extends RouteProps {
  title: string
  titlei18n?: string
  page: string
  path: string
  icon?: JSX.Element | string
  exact?: boolean
  isCreate?: boolean
  children?: IRouteItem[]
}
