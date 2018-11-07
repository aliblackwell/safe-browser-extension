import {
  getNetworkName,
  getNetworkVersion,
  getNetworkUrl,
  getAndroidAppUrl,
  getIosAppUrl,
  getPushNotificationServiceUrl,
  getTransactionRelayServiceUrl,
  getTokenListUrl,
  getFirebaseAuthDomain,
  getFirebaseDatabaseUrl,
  getFirebaseProjectId,
  getFirebaseStorageBucket,
  getFirebaseMessagingSenderId,
  getFavicon
} from './index'
import {
  MAINNET,
  RINKEBY,
  PRODUCTION,
  PRE_PRODUCTION,
  STAGING,
  DEVELOPMENT
} from './names'

const testGetNetworkName = (value) => {
  const networkName = getNetworkName()
  const validNetworkName = (networkName && networkName !== '')
  expect(validNetworkName).toEqual(true)
  expect(networkName).toEqual(value)
}

const testGetNetworkVersion = (value) => {
  const networkVersion = getNetworkVersion()
  const validNetworkVersion = (networkVersion && networkVersion >= 0)
  expect(validNetworkVersion).toEqual(true)
  expect(getNetworkVersion()).toEqual(value)
}

const testGetNetworkUrl = (value) => {
  const networkUrl = getNetworkUrl()
  const validNetworkUrl = (networkUrl && networkUrl !== '')
  expect(validNetworkUrl).toEqual(true)
  expect(networkUrl).toEqual(value)
}

const testGetAndroidAppUrl = (value) => {
  const androidAppUrl = getAndroidAppUrl()
  const validAndroidAppUrl = (androidAppUrl && androidAppUrl !== '')
  expect(validAndroidAppUrl).toEqual(true)
  expect(androidAppUrl).toEqual(value)
}

const testGetIosAppUrl = (value) => {
  const androidAppUrl = getAndroidAppUrl()
  const validAndroidAppUrl = (androidAppUrl && androidAppUrl !== '')
  expect(validAndroidAppUrl).toEqual(true)
  expect(getIosAppUrl()).toEqual(value)
}

const testGetPushNotificationServiceUrl = (value) => {
  const pushNotificationServiceUrl = getPushNotificationServiceUrl()
  const validPushNotificationServiceUrl = (pushNotificationServiceUrl && pushNotificationServiceUrl !== '')
  expect(validPushNotificationServiceUrl).toEqual(true)
  expect(pushNotificationServiceUrl).toEqual(value)
}

const testGetTransactionRelayServiceUrl = (value) => {
  const transactionRelayServiceUrl = getTransactionRelayServiceUrl()
  const validTransactionRelayServiceUrl = (transactionRelayServiceUrl && transactionRelayServiceUrl !== '')
  expect(validTransactionRelayServiceUrl).toEqual(true)
  expect(transactionRelayServiceUrl).toEqual(value)
}

const testGetTokenListUrl = (value) => {
  const tokenListUrl = getTokenListUrl()
  const validTokenListUrl = (tokenListUrl && tokenListUrl !== '')
  expect(validTokenListUrl).toEqual(true)
  expect(tokenListUrl).toEqual(value)
}

const testGetFirebaseAuthDomain = (value) => {
  const firebaseAuthDomain = getFirebaseAuthDomain()
  const validFirebaseAuthDomain = (firebaseAuthDomain && firebaseAuthDomain !== '')
  expect(validFirebaseAuthDomain).toEqual(true)
  expect(firebaseAuthDomain).toEqual(value)
}

const testGetFirebaseDatabaseUrl = (value) => {
  const firebaseDatabaseUrl = getFirebaseDatabaseUrl()
  const validFirebaseDatabaseUrl = (firebaseDatabaseUrl && firebaseDatabaseUrl !== '')
  expect(validFirebaseDatabaseUrl).toEqual(true)
  expect(firebaseDatabaseUrl).toEqual(value)
}

const testGetFirebaseProjectId = (value) => {
  const firebaseProjectId = getFirebaseProjectId()
  const validFirebaseProjectId = (firebaseProjectId && firebaseProjectId !== '')
  expect(validFirebaseProjectId).toEqual(true)
  expect(firebaseProjectId).toEqual(value)
}

const testGetFirebaseStorageBucket = (value) => {
  const firebaseStorageBucket = getFirebaseStorageBucket()
  const validFirebaseStorageBucket = (firebaseStorageBucket && firebaseStorageBucket !== '')
  expect(validFirebaseStorageBucket).toEqual(true)
  expect(firebaseStorageBucket).toEqual(value)
}

const testGetFirebaseMessagingSenderId = (value) => {
  const firebaseMessagingSenderId = getFirebaseMessagingSenderId()
  const validFirebaseMessagingSenderId = (firebaseMessagingSenderId && firebaseMessagingSenderId !== '')
  expect(validFirebaseMessagingSenderId).toEqual(true)
  expect(firebaseMessagingSenderId.toString()).toEqual(value.toString())
}

const testGetFavicon = (value) => {
  const favicon = getFavicon()
  const validFavicon = (favicon && favicon !== '')
  expect(validFavicon).toEqual(true)
  expect(favicon).toEqual(value)
}

describe('Configuration', () => {
  describe('Configuration Development', () => {
    beforeAll(() => {
      process.env.NODE_ENV = DEVELOPMENT
      process.env.NETWORK = RINKEBY
    })

    test('getNetworkName', () => {
      testGetNetworkName('Rinkeby')
    })

    test('getNetworkVersion', () => {
      testGetNetworkVersion(4)
    })

    test('getNetworkUrl', () => {
      testGetNetworkUrl('https://rinkeby.infura.io/gnosis')
    })

    test('getAndroidAppUrl', () => {
      testGetAndroidAppUrl('https://play.google.com/apps/testing/pm.gnosis.heimdall.dev')
    })

    test('getIosAppUrl', () => {
      testGetIosAppUrl('https://testflight.apple.com/join/fMCYpOfT')
    })

    test('getPushNotificationServiceUrl', () => {
      testGetPushNotificationServiceUrl('https://safe-notification.staging.gnosisdev.com/api/v1/')
    })

    test('getTransactionRelayServiceUrl', () => {
      testGetTransactionRelayServiceUrl('https://safe-relay.staging.gnosisdev.com/api/v1/')
    })

    test('getTokenListUrl', () => {
      testGetTokenListUrl('https://gist.githubusercontent.com/rmeissner/98911fcf74b0ea9731e2dae2441c97a4/raw/')
    })

    test('getFirebaseAuthDomain', () => {
      testGetFirebaseAuthDomain('test-safe-notifications.firebaseapp.com')
    })

    test('getFirebaseDatabaseUrl', () => {
      testGetFirebaseDatabaseUrl('https://test-safe-notifications.firebaseio.com')
    })

    test('getFirebaseProjectId', () => {
      testGetFirebaseProjectId('test-safe-notifications')
    })

    test('getFirebaseStorageBucket', () => {
      testGetFirebaseStorageBucket('test-safe-notifications.appspot.com')
    })

    test('getFirebaseMessagingSenderId ', () => {
      testGetFirebaseMessagingSenderId('64389160972')
    })

    test('getFavicon', () => {
      testGetFavicon('favicon_rinkeby_red.png')
    })
  })

  describe('Configuration Staging', () => {
    beforeAll(() => {
      process.env.NODE_ENV = STAGING
      process.env.NETWORK = RINKEBY
    })

    test('getNetworkName', () => {
      testGetNetworkName('Rinkeby')
    })

    test('getNetworkVersion', () => {
      testGetNetworkVersion(4)
    })

    test('getNetworkUrl', () => {
      testGetNetworkUrl('https://rinkeby.infura.io/gnosis')
    })

    test('getAndroidAppUrl', () => {
      testGetAndroidAppUrl('https://play.google.com/apps/testing/pm.gnosis.heimdall.dev')
    })

    test('getIosAppUrl', () => {
      testGetIosAppUrl('https://testflight.apple.com/join/fMCYpOfT')
    })

    test('getPushNotificationServiceUrl', () => {
      testGetPushNotificationServiceUrl('https://safe-notification.staging.gnosisdev.com/api/v1/')
    })

    test('getTransactionRelayServiceUrl', () => {
      testGetTransactionRelayServiceUrl('https://safe-relay.staging.gnosisdev.com/api/v1/')
    })

    test('getTokenListUrl', () => {
      testGetTokenListUrl('https://gist.githubusercontent.com/rmeissner/98911fcf74b0ea9731e2dae2441c97a4/raw/')
    })

    test('getFirebaseAuthDomain', () => {
      testGetFirebaseAuthDomain('test-safe-notifications.firebaseapp.com')
    })

    test('getFirebaseDatabaseUrl', () => {
      testGetFirebaseDatabaseUrl('https://test-safe-notifications.firebaseio.com')
    })

    test('getFirebaseProjectId', () => {
      testGetFirebaseProjectId('test-safe-notifications')
    })

    test('getFirebaseStorageBucket', () => {
      testGetFirebaseStorageBucket('test-safe-notifications.appspot.com')
    })

    test('getFirebaseMessagingSenderId ', () => {
      testGetFirebaseMessagingSenderId('64389160972')
    })

    test('getFavicon', () => {
      testGetFavicon('favicon_rinkeby_orange.png')
    })
  })

  describe('Configuration Pre-production', () => {
    beforeAll(() => {
      process.env.NODE_ENV = PRE_PRODUCTION
      process.env.NETWORK = RINKEBY
    })

    test('getNetworkName', () => {
      testGetNetworkName('Rinkeby')
    })

    test('getNetworkVersion', () => {
      testGetNetworkVersion(4)
    })

    test('getNetworkUrl', () => {
      testGetNetworkUrl('https://rinkeby.infura.io/gnosis')
    })

    test('getAndroidAppUrl', () => {
      testGetAndroidAppUrl('https://play.google.com/apps/testing/pm.gnosis.heimdall.dev')
    })

    test('getIosAppUrl', () => {
      testGetIosAppUrl('https://testflight.apple.com/join/fMCYpOfT')
    })

    test('getPushNotificationServiceUrl', () => {
      testGetPushNotificationServiceUrl(process.env.PUSH_NOTIFICATION_SERVICE_URL)
    })

    test('getTransactionRelayServiceUrl', () => {
      testGetTransactionRelayServiceUrl(process.env.TRANSACTION_RELAY_SERVICE_RINKEBY_URL)
    })

    test('getTokenListUrl', () => {
      testGetTokenListUrl('https://gist.githubusercontent.com/rmeissner/98911fcf74b0ea9731e2dae2441c97a4/raw/')
    })

    test('getFirebaseAuthDomain', () => {
      testGetFirebaseAuthDomain(process.env.FIREBASE_AUTH_DOMAIN)
    })

    test('getFirebaseDatabaseUrl', () => {
      testGetFirebaseDatabaseUrl(process.env.FIREBASE_DATABASE_URL)
    })

    test('getFirebaseProjectId', () => {
      testGetFirebaseProjectId(process.env.FIREBASE_PROJECT_ID)
    })

    test('getFirebaseStorageBucket', () => {
      testGetFirebaseStorageBucket(process.env.FIREBASE_STORAGE_BUCKET)
    })

    test('getFirebaseMessagingSenderId ', () => {
      testGetFirebaseMessagingSenderId(process.env.FIREBASE_MESSAGING_SENDER_ID)
    })

    test('getFavicon', () => {
      testGetFavicon('favicon_rinkeby_green.png')
    })
  })

  describe('Configuration Production Rinkeby', () => {
    beforeAll(() => {
      process.env.NODE_ENV = PRODUCTION
      process.env.NETWORK = RINKEBY
    })

    test('getNetworkName', () => {
      testGetNetworkName('Rinkeby')
    })

    test('getNetworkVersion', () => {
      testGetNetworkVersion(4)
    })

    test('getNetworkUrl', () => {
      testGetNetworkUrl('https://rinkeby.infura.io/gnosis')
    })

    test('getAndroidAppUrl', () => {
      testGetAndroidAppUrl('https://play.google.com/apps/testing/pm.gnosis.heimdall.dev')
    })

    test('getIosAppUrl', () => {
      testGetIosAppUrl('https://testflight.apple.com/join/fMCYpOfT')
    })

    test('getPushNotificationServiceUrl', () => {
      testGetPushNotificationServiceUrl(process.env.PUSH_NOTIFICATION_SERVICE_URL)
    })

    test('getTransactionRelayServiceUrl', () => {
      testGetTransactionRelayServiceUrl(process.env.TRANSACTION_RELAY_SERVICE_RINKEBY_URL)
    })

    test('getTokenListUrl', () => {
      testGetTokenListUrl('https://gist.githubusercontent.com/rmeissner/98911fcf74b0ea9731e2dae2441c97a4/raw/')
    })

    test('getFirebaseAuthDomain', () => {
      testGetFirebaseAuthDomain(process.env.FIREBASE_AUTH_DOMAIN)
    })

    test('getFirebaseDatabaseUrl', () => {
      testGetFirebaseDatabaseUrl(process.env.FIREBASE_DATABASE_URL)
    })

    test('getFirebaseProjectId', () => {
      testGetFirebaseProjectId(process.env.FIREBASE_PROJECT_ID)
    })

    test('getFirebaseStorageBucket', () => {
      testGetFirebaseStorageBucket(process.env.FIREBASE_STORAGE_BUCKET)
    })

    test('getFirebaseMessagingSenderId ', () => {
      testGetFirebaseMessagingSenderId(process.env.FIREBASE_MESSAGING_SENDER_ID)
    })

    test('getFavicon', () => {
      testGetFavicon('favicon_rinkeby_blue.png')
    })
  })

  describe('Configuration Production Mainnet', () => {
    beforeAll(() => {
      process.env.NODE_ENV = PRODUCTION
      process.env.NETWORK = MAINNET
    })

    test('getNetworkName', () => {
      testGetNetworkName('Mainnet')
    })

    test('getNetworkVersion', () => {
      testGetNetworkVersion(1)
    })

    test('getNetworkUrl', () => {
      testGetNetworkUrl('https://infura.io/gnosis')
    })

    test('getAndroidAppUrl', () => {
      testGetAndroidAppUrl('https://play.google.com/apps/testing/pm.gnosis.heimdall.dev')
    })

    test('getIosAppUrl', () => {
      testGetIosAppUrl('https://testflight.apple.com/join/fMCYpOfT')
    })

    test('getPushNotificationServiceUrl', () => {
      testGetPushNotificationServiceUrl(process.env.PUSH_NOTIFICATION_SERVICE_URL)
    })

    test('getTransactionRelayServiceUrl', () => {
      testGetTransactionRelayServiceUrl(process.env.TRANSACTION_RELAY_SERVICE_MAINNET_URL)
    })

    test('getTokenListUrl', () => {
      testGetTokenListUrl('https://gist.githubusercontent.com/rmeissner/98911fcf74b0ea9731e2dae2441c97a4/raw/')
    })

    test('getFirebaseAuthDomain', () => {
      testGetFirebaseAuthDomain(process.env.FIREBASE_AUTH_DOMAIN)
    })

    test('getFirebaseDatabaseUrl', () => {
      testGetFirebaseDatabaseUrl(process.env.FIREBASE_DATABASE_URL)
    })

    test('getFirebaseProjectId', () => {
      testGetFirebaseProjectId(process.env.FIREBASE_PROJECT_ID)
    })

    test('getFirebaseStorageBucket', () => {
      testGetFirebaseStorageBucket(process.env.FIREBASE_STORAGE_BUCKET)
    })

    test('getFirebaseMessagingSenderId ', () => {
      testGetFirebaseMessagingSenderId(process.env.FIREBASE_MESSAGING_SENDER_ID)
    })

    test('getFavicon', () => {
      testGetFavicon('favicon.png')
    })
  })
})
