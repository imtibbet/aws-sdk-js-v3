// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTagOptionsCommand,
  ListTagOptionsCommandInput,
  ListTagOptionsCommandOutput,
} from "../commands/ListTagOptionsCommand";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: ListTagOptionsCommandInput,
  ...args: any
): Promise<ListTagOptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTagOptionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTagOptions(
  config: ServiceCatalogPaginationConfiguration,
  input: ListTagOptionsCommandInput,
  ...additionalArguments: any
): Paginator<ListTagOptionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.PageToken
  let token: typeof input.PageToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTagOptionsCommandOutput;
  while (hasNext) {
    input.PageToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof ServiceCatalogClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ServiceCatalog | ServiceCatalogClient");
    }
    yield page;
    const prevToken = token;
    token = page.PageToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
