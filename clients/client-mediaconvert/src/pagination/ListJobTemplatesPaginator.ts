// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListJobTemplatesCommand,
  ListJobTemplatesCommandInput,
  ListJobTemplatesCommandOutput,
} from "../commands/ListJobTemplatesCommand";
import { MediaConvertClient } from "../MediaConvertClient";
import { MediaConvertPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MediaConvertClient,
  input: ListJobTemplatesCommandInput,
  ...args: any
): Promise<ListJobTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJobTemplatesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListJobTemplates(
  config: MediaConvertPaginationConfiguration,
  input: ListJobTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListJobTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListJobTemplatesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaConvertClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaConvert | MediaConvertClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
