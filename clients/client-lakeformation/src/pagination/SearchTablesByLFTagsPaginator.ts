// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  SearchTablesByLFTagsCommand,
  SearchTablesByLFTagsCommandInput,
  SearchTablesByLFTagsCommandOutput,
} from "../commands/SearchTablesByLFTagsCommand";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: LakeFormationClient,
  input: SearchTablesByLFTagsCommandInput,
  ...args: any
): Promise<SearchTablesByLFTagsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchTablesByLFTagsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSearchTablesByLFTags(
  config: LakeFormationPaginationConfiguration,
  input: SearchTablesByLFTagsCommandInput,
  ...additionalArguments: any
): Paginator<SearchTablesByLFTagsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchTablesByLFTagsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LakeFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LakeFormation | LakeFormationClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
