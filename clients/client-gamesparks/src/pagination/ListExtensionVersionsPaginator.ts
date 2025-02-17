// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListExtensionVersionsCommand,
  ListExtensionVersionsCommandInput,
  ListExtensionVersionsCommandOutput,
} from "../commands/ListExtensionVersionsCommand";
import { GameSparksClient } from "../GameSparksClient";
import { GameSparksPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GameSparksClient,
  input: ListExtensionVersionsCommandInput,
  ...args: any
): Promise<ListExtensionVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListExtensionVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListExtensionVersions(
  config: GameSparksPaginationConfiguration,
  input: ListExtensionVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListExtensionVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListExtensionVersionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GameSparksClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GameSparks | GameSparksClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
