import { Logger } from 'winston';
import { Config } from '@backstage/config';
import { PluginCacheManager } from '@backstage/backend-common';
import { 
  PluginDatabaseManager, 
  PluginEndpointDiscovery, 
  UrlReader 
} from '@backstage/backend-common';
import { 
  IdentityApi, 
  PermissionAuthorizer 
} from '@backstage/plugin-permission-common';
import { TokenManager } from '@backstage/backend-common';
import { HttpAuthService } from '@backstage/plugin-auth-node';
import { 
  GithubCredentialsProvider, 
  ScmIntegrations 
} from '@backstage/integration';

export type PluginEnvironment = {
  logger: Logger;
  database: PluginDatabaseManager;
  cache: PluginCacheManager;
  config: Config;
  reader: UrlReader;
  discovery: PluginEndpointDiscovery;
  tokenManager: TokenManager;
  scheduler: any;
  permissions: PermissionAuthorizer;
  identity: IdentityApi;
  auth: HttpAuthService;
  integrations: ScmIntegrations;
};