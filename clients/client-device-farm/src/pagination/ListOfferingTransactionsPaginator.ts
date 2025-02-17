// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListOfferingTransactionsCommand,
  ListOfferingTransactionsCommandInput,
  ListOfferingTransactionsCommandOutput,
} from "../commands/ListOfferingTransactionsCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListOfferingTransactionsCommandInput,
  ...args: any
): Promise<ListOfferingTransactionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOfferingTransactionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListOfferingTransactions(
  config: DeviceFarmPaginationConfiguration,
  input: ListOfferingTransactionsCommandInput,
  ...additionalArguments: any
): Paginator<ListOfferingTransactionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOfferingTransactionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof DeviceFarmClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DeviceFarm | DeviceFarmClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
