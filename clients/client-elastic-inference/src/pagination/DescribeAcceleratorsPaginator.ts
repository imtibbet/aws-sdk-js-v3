// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeAcceleratorsCommand,
  DescribeAcceleratorsCommandInput,
  DescribeAcceleratorsCommandOutput,
} from "../commands/DescribeAcceleratorsCommand";
import { ElasticInferenceClient } from "../ElasticInferenceClient";
import { ElasticInferencePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ElasticInferenceClient,
  input: DescribeAcceleratorsCommandInput,
  ...args: any
): Promise<DescribeAcceleratorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAcceleratorsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeAccelerators(
  config: ElasticInferencePaginationConfiguration,
  input: DescribeAcceleratorsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAcceleratorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAcceleratorsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ElasticInferenceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticInference | ElasticInferenceClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
