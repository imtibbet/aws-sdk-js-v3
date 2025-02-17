// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetDatalakeStatusCommand,
  GetDatalakeStatusCommandInput,
  GetDatalakeStatusCommandOutput,
} from "../commands/GetDatalakeStatusCommand";
import { SecurityLakeClient } from "../SecurityLakeClient";
import { SecurityLakePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SecurityLakeClient,
  input: GetDatalakeStatusCommandInput,
  ...args: any
): Promise<GetDatalakeStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetDatalakeStatusCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetDatalakeStatus(
  config: SecurityLakePaginationConfiguration,
  input: GetDatalakeStatusCommandInput,
  ...additionalArguments: any
): Paginator<GetDatalakeStatusCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetDatalakeStatusCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxAccountResults"] = config.pageSize;
    if (config.client instanceof SecurityLakeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityLake | SecurityLakeClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
