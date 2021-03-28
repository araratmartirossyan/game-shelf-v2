declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.graphql' {
  import { DocumentNode } from 'graphql'
  const Schema: DocumentNode

  export = Schema
}
