// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { APIGatewayClient } from "../APIGatewayClient";
import { GetRestApisCommand, GetRestApisCommandInput, GetRestApisCommandOutput } from "../commands/GetRestApisCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: APIGatewayClient,
  input: GetRestApisCommandInput,
  ...args: any
): Promise<GetRestApisCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetRestApisCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetRestApis(
  config: APIGatewayPaginationConfiguration,
  input: GetRestApisCommandInput,
  ...additionalArguments: any
): Paginator<GetRestApisCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.position
  let token: typeof input.position | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetRestApisCommandOutput;
  while (hasNext) {
    input.position = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof APIGatewayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected APIGateway | APIGatewayClient");
    }
    yield page;
    const prevToken = token;
    token = page.position;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
