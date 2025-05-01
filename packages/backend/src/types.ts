import { Logger } from 'winston';
import { Config } from '@backstage/config';
import { 
  PluginCacheManager,
  PluginDatabaseManager, 
  PluginEndpointDiscovery,
  TokenManager,
} from '@backstage/backend-common';
import { PermissionAuthorizer } from '@backstage/plugin-permission-common';
import { ScmIntegrations } from '@backstage/integration';
import { IdentityApi } from '@backstage/plugin-auth-node';
import { UrlReaderService } from '@backstage/backend-plugin-api';

export type PluginEnvironment = {
  logger: Logger;
  database: PluginDatabaseManager;
  cache: PluginCacheManager;
  config: Config;
  reader: UrlReaderService;
  discovery: PluginEndpointDiscovery;
  tokenManager: TokenManager;
  scheduler: any;
  permissions: PermissionAuthorizer;
  identity: IdentityApi;
  auth: any; // Using any type for now since HttpAuthService is missing
  integrations: ScmIntegrations;
};