import { DEFAULT_NODE_ENV } from './config/node'
import { maybe } from 'typescript-monads'
import { IDeviceConfig } from './config/interfaces'
import { getNetworkProtocols } from './api/device/network'
import { getServices } from './api/device/get-services'
import { getSystemBackup, getSystemUris } from './api/device/system'

const NODE_CONFIG: IDeviceConfig = {
  system: DEFAULT_NODE_ENV,
  url: 'http://192.168.1.172/onvif/device_service',
  user: maybe({
    username: 'admin',
    password: 'Cam120cam'
  })
}

getSystemUris()
  .run(NODE_CONFIG)
  .subscribe(a => {
    console.log(a)
  }, console.log)
