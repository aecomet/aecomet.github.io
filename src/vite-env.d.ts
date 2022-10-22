/// <reference types="vite/client" />
interface ImportMetaEnv {
  PROD: boolean;
  readonly VITE_TEST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}