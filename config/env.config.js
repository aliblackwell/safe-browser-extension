import {
  MAINNET,
  RINKEBY,
  PRODUCTION,
  PRE_PRODUCTION,
  STAGING,
  DEVELOPMENT,
  PUSH_NOTIFICATION_SERVICE_URL,
  TRANSACTION_RELAY_SERVICE_URL,
  ANDROID_APP_URL,
  IOS_APP_URL,
  TOKEN_LIST_URL,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FAVICON
} from './names'
import dotenv from 'dotenv'
dotenv.config({})

const rinkebyTokenListUrl = 'https://gist.githubusercontent.com/rmeissner/98911fcf74b0ea9731e2dae2441c97a4/raw/'
const mainnetTokenListUrl = 'https://raw.githubusercontent.com/rmeissner/crypto_resources/master/tokens/mainnet/tokens.json'
const testFirebaseAuthDomain = 'test-safe-notifications.firebaseapp.com'
const testFirebaseDatabaseUrl = 'https://test-safe-notifications.firebaseio.com'
const testFirebaseProjectId = 'test-safe-notifications'
const testFirebaseStorageBucket = 'test-safe-notifications.appspot.com'
const testFirebaseMessagingSenderId = '64389160972'
const stagingPushNotificationServiceUrl = 'https://safe-notification.staging.gnosisdev.com/api/v1/'
const stagingTransactionRelayServiceUrl = 'https://safe-relay.staging.gnosisdev.com/api/v1/'

const envConfig = {
  [PRODUCTION]: {
    [ANDROID_APP_URL]: 'https://play.google.com/store/apps/details?id=pm.gnosis.heimdall',
    [IOS_APP_URL]: 'https://testflight.apple.com/join/fMCYpOfT',
    [PUSH_NOTIFICATION_SERVICE_URL]: process.env.PUSH_NOTIFICATION_SERVICE_URL,
    [TRANSACTION_RELAY_SERVICE_URL]: {
      [MAINNET]: process.env.TRANSACTION_RELAY_SERVICE_MAINNET_URL,
      [RINKEBY]: process.env.TRANSACTION_RELAY_SERVICE_RINKEBY_URL
    },
    [TOKEN_LIST_URL]: {
      [MAINNET]: mainnetTokenListUrl,
      [RINKEBY]: rinkebyTokenListUrl
    },
    [FIREBASE_AUTH_DOMAIN]: process.env.FIREBASE_AUTH_DOMAIN,
    [FIREBASE_DATABASE_URL]: process.env.FIREBASE_DATABASE_URL,
    [FIREBASE_PROJECT_ID]: process.env.FIREBASE_PROJECT_ID,
    [FIREBASE_STORAGE_BUCKET]: process.env.FIREBASE_STORAGE_BUCKET,
    [FIREBASE_MESSAGING_SENDER_ID]: process.env.FIREBASE_MESSAGING_SENDER_ID,
    [FAVICON]: {
      [MAINNET]: 'favicon_mainnet.png',
      [RINKEBY]: 'favicon_rinkeby_blue.png'
    }
  },
  [PRE_PRODUCTION]: {
    [ANDROID_APP_URL]: 'https://play.google.com/apps/testing/pm.gnosis.heimdall.dev',
    [IOS_APP_URL]: 'https://testflight.apple.com/join/fMCYpOfT',
    [PUSH_NOTIFICATION_SERVICE_URL]: process.env.PUSH_NOTIFICATION_SERVICE_URL,
    [TRANSACTION_RELAY_SERVICE_URL]: {
      [MAINNET]: process.env.TRANSACTION_RELAY_SERVICE_MAINNET_URL,
      [RINKEBY]: process.env.TRANSACTION_RELAY_SERVICE_RINKEBY_URL
    },
    [TOKEN_LIST_URL]: {
      [MAINNET]: mainnetTokenListUrl,
      [RINKEBY]: rinkebyTokenListUrl
    },
    [FIREBASE_AUTH_DOMAIN]: process.env.FIREBASE_AUTH_DOMAIN,
    [FIREBASE_DATABASE_URL]: process.env.FIREBASE_DATABASE_URL,
    [FIREBASE_PROJECT_ID]: process.env.FIREBASE_PROJECT_ID,
    [FIREBASE_STORAGE_BUCKET]: process.env.FIREBASE_STORAGE_BUCKET,
    [FIREBASE_MESSAGING_SENDER_ID]: process.env.FIREBASE_MESSAGING_SENDER_ID,
    [FAVICON]: {
      [MAINNET]: 'favicon_mainnet_green.png',
      [RINKEBY]: 'favicon_rinkeby_green.png'
    }
  },
  [STAGING]: {
    [ANDROID_APP_URL]: 'https://play.google.com/apps/testing/pm.gnosis.heimdall.dev',
    [IOS_APP_URL]: 'https://testflight.apple.com/join/fMCYpOfT',
    [PUSH_NOTIFICATION_SERVICE_URL]: stagingPushNotificationServiceUrl,
    [TRANSACTION_RELAY_SERVICE_URL]: stagingTransactionRelayServiceUrl,
    [TOKEN_LIST_URL]: rinkebyTokenListUrl,
    [FIREBASE_AUTH_DOMAIN]: testFirebaseAuthDomain,
    [FIREBASE_DATABASE_URL]: testFirebaseDatabaseUrl,
    [FIREBASE_PROJECT_ID]: testFirebaseProjectId,
    [FIREBASE_STORAGE_BUCKET]: testFirebaseStorageBucket,
    [FIREBASE_MESSAGING_SENDER_ID]: testFirebaseMessagingSenderId,
    [FAVICON]: 'favicon_rinkeby_orange.png'
  },
  [DEVELOPMENT]: {
    [ANDROID_APP_URL]: 'https://play.google.com/apps/testing/pm.gnosis.heimdall.dev',
    [IOS_APP_URL]: 'https://testflight.apple.com/join/fMCYpOfT',
    [PUSH_NOTIFICATION_SERVICE_URL]: stagingPushNotificationServiceUrl,
    [TRANSACTION_RELAY_SERVICE_URL]: stagingTransactionRelayServiceUrl,
    [TOKEN_LIST_URL]: rinkebyTokenListUrl,
    [FIREBASE_AUTH_DOMAIN]: testFirebaseAuthDomain,
    [FIREBASE_DATABASE_URL]: testFirebaseDatabaseUrl,
    [FIREBASE_PROJECT_ID]: testFirebaseProjectId,
    [FIREBASE_STORAGE_BUCKET]: testFirebaseStorageBucket,
    [FIREBASE_MESSAGING_SENDER_ID]: testFirebaseMessagingSenderId,
    [FAVICON]: 'favicon_rinkeby_red.png'
  }
}

export default envConfig
