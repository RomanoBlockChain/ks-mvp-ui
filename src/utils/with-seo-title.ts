import { clientEnv } from "@/env"


export function withSEOTitle(
  pageTitle: string,
  suffix = clientEnv.NEXT_PUBLIC_APP_TITLE
) {
  try {
    const title = pageTitle

    return `${title} - ${suffix}`
  } catch (_) {
    return suffix
  }
}
