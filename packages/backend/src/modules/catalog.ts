import { CatalogBuilder } from '@backstage/plugin-catalog-backend';
import { 
  GithubDiscoveryProcessor, 
  GithubOrgReaderProcessor 
} from '@backstage/plugin-catalog-backend-module-github';
import { ScaffolderEntitiesProcessor } from '@backstage/plugin-catalog-backend-module-scaffolder-entity-model';
import { Router } from 'express';
import { PluginEnvironment } from '../types';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const builder = await CatalogBuilder.create(env);
  
  // Add processors
  builder.addProcessor(new ScaffolderEntitiesProcessor());
  
  // Add GitHub processors
  builder.addProcessor(new GithubDiscoveryProcessor({
    integrations: env.integrations,
    logger: env.logger,
  }));
  
  builder.addProcessor(new GithubOrgReaderProcessor({
    integrations: env.integrations,
    logger: env.logger,
  }));

  const { processingEngine, router } = await builder.build();
  await processingEngine.start();
  
  return router;
}