/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProtectedIndexImport } from './routes/_protected/index'
import { Route as ProtectedProductsImport } from './routes/_protected/products'
import { Route as ProtectedDashboardImport } from './routes/_protected/dashboard'
import { Route as AuthUnauthorizedImport } from './routes/_auth/unauthorized'
import { Route as AuthLoginImport } from './routes/_auth/login'

// Create/Update Routes

const ProtectedIndexRoute = ProtectedIndexImport.update({
  id: '/_protected/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProtectedProductsRoute = ProtectedProductsImport.update({
  id: '/_protected/products',
  path: '/products',
  getParentRoute: () => rootRoute,
} as any)

const ProtectedDashboardRoute = ProtectedDashboardImport.update({
  id: '/_protected/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const AuthUnauthorizedRoute = AuthUnauthorizedImport.update({
  id: '/_auth/unauthorized',
  path: '/unauthorized',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/_auth/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_auth/login': {
      id: '/_auth/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/_auth/unauthorized': {
      id: '/_auth/unauthorized'
      path: '/unauthorized'
      fullPath: '/unauthorized'
      preLoaderRoute: typeof AuthUnauthorizedImport
      parentRoute: typeof rootRoute
    }
    '/_protected/dashboard': {
      id: '/_protected/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof ProtectedDashboardImport
      parentRoute: typeof rootRoute
    }
    '/_protected/products': {
      id: '/_protected/products'
      path: '/products'
      fullPath: '/products'
      preLoaderRoute: typeof ProtectedProductsImport
      parentRoute: typeof rootRoute
    }
    '/_protected/': {
      id: '/_protected/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof ProtectedIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/login': typeof AuthLoginRoute
  '/unauthorized': typeof AuthUnauthorizedRoute
  '/dashboard': typeof ProtectedDashboardRoute
  '/products': typeof ProtectedProductsRoute
  '/': typeof ProtectedIndexRoute
}

export interface FileRoutesByTo {
  '/login': typeof AuthLoginRoute
  '/unauthorized': typeof AuthUnauthorizedRoute
  '/dashboard': typeof ProtectedDashboardRoute
  '/products': typeof ProtectedProductsRoute
  '/': typeof ProtectedIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_auth/login': typeof AuthLoginRoute
  '/_auth/unauthorized': typeof AuthUnauthorizedRoute
  '/_protected/dashboard': typeof ProtectedDashboardRoute
  '/_protected/products': typeof ProtectedProductsRoute
  '/_protected/': typeof ProtectedIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/login' | '/unauthorized' | '/dashboard' | '/products' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/login' | '/unauthorized' | '/dashboard' | '/products' | '/'
  id:
    | '__root__'
    | '/_auth/login'
    | '/_auth/unauthorized'
    | '/_protected/dashboard'
    | '/_protected/products'
    | '/_protected/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthLoginRoute: typeof AuthLoginRoute
  AuthUnauthorizedRoute: typeof AuthUnauthorizedRoute
  ProtectedDashboardRoute: typeof ProtectedDashboardRoute
  ProtectedProductsRoute: typeof ProtectedProductsRoute
  ProtectedIndexRoute: typeof ProtectedIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  AuthLoginRoute: AuthLoginRoute,
  AuthUnauthorizedRoute: AuthUnauthorizedRoute,
  ProtectedDashboardRoute: ProtectedDashboardRoute,
  ProtectedProductsRoute: ProtectedProductsRoute,
  ProtectedIndexRoute: ProtectedIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_auth/login",
        "/_auth/unauthorized",
        "/_protected/dashboard",
        "/_protected/products",
        "/_protected/"
      ]
    },
    "/_auth/login": {
      "filePath": "_auth/login.tsx"
    },
    "/_auth/unauthorized": {
      "filePath": "_auth/unauthorized.tsx"
    },
    "/_protected/dashboard": {
      "filePath": "_protected/dashboard.tsx"
    },
    "/_protected/products": {
      "filePath": "_protected/products.tsx"
    },
    "/_protected/": {
      "filePath": "_protected/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
