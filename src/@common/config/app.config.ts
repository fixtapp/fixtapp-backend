import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  appPort: +process.env.APP_PORT,
  appPrefix: process.env.APP_URL_PREFIX,
  appHostServer:
    process.env.APP_NODE_ENV === 'local'
      ? `${process.env.APP_HOST_SERVER}:${+process.env.APP_PORT}`
      : process.env.APP_HOST_SERVER,
  isProduction: process.env.APP_NODE_ENV === 'production',
  isLocal: process.env.APP_NODE_ENV === 'local',
}));
