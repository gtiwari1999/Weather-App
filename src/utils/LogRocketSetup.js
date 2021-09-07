import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'
import * as Sentry from '@sentry/browser'

const logRocketSetup = () => {
  // initiate SENTRY
  const SENTRY_DSN = ""
  Sentry.init({dsn: `${SENTRY_DSN}`})

  // initiate LogRocket
  const LOGROCKET_PROJECT_ID = process.env.REACT_APP_LOGROCKET_PROJECT_ID
  LogRocket.init(`${LOGROCKET_PROJECT_ID}`)
  setupLogRocketReact(LogRocket)

  // setup LogRocket and Sentry
  LogRocket.getSessionURL((sessionURL) => {
    Sentry.configureScope((scope) => {
      scope.setExtra('sessionURL', sessionURL)
    })
  })
}

export default logRocketSetup
