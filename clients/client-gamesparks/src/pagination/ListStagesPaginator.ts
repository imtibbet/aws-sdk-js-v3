// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListStagesCommand, ListStagesCommandInput, ListStagesCommandOutput } from "../commands/ListStagesCommand";
import { GameSparksClient } from "../GameSparksClient";
import { GameSparksPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GameSparksClient,
  input: ListStagesCommandInput,
  ...args: any
): Promise<ListStagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStagesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListStages(
  config: GameSparksPaginationConfiguration,
  input: ListStagesCommandInput,
  ...additionalArguments: any
): Paginator<ListStagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStagesCommandOutput;
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
