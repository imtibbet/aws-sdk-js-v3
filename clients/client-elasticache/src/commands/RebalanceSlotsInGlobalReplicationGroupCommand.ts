// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import {
  RebalanceSlotsInGlobalReplicationGroupMessage,
  RebalanceSlotsInGlobalReplicationGroupResult,
} from "../models/models_0";
import {
  deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand,
  serializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link RebalanceSlotsInGlobalReplicationGroupCommand}.
 */
export interface RebalanceSlotsInGlobalReplicationGroupCommandInput
  extends RebalanceSlotsInGlobalReplicationGroupMessage {}
/**
 * @public
 *
 * The output of {@link RebalanceSlotsInGlobalReplicationGroupCommand}.
 */
export interface RebalanceSlotsInGlobalReplicationGroupCommandOutput
  extends RebalanceSlotsInGlobalReplicationGroupResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Redistribute slots to ensure uniform distribution across existing shards in the cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, RebalanceSlotsInGlobalReplicationGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, RebalanceSlotsInGlobalReplicationGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // RebalanceSlotsInGlobalReplicationGroupMessage
 *   GlobalReplicationGroupId: "STRING_VALUE", // required
 *   ApplyImmediately: true || false, // required
 * };
 * const command = new RebalanceSlotsInGlobalReplicationGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RebalanceSlotsInGlobalReplicationGroupCommandInput - {@link RebalanceSlotsInGlobalReplicationGroupCommandInput}
 * @returns {@link RebalanceSlotsInGlobalReplicationGroupCommandOutput}
 * @see {@link RebalanceSlotsInGlobalReplicationGroupCommandInput} for command's `input` shape.
 * @see {@link RebalanceSlotsInGlobalReplicationGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link GlobalReplicationGroupNotFoundFault} (client fault)
 *  <p>The Global datastore does not exist</p>
 *
 * @throws {@link InvalidGlobalReplicationGroupStateFault} (client fault)
 *  <p>The Global datastore is not available or in primary-only state.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 *
 */
export class RebalanceSlotsInGlobalReplicationGroupCommand extends $Command<
  RebalanceSlotsInGlobalReplicationGroupCommandInput,
  RebalanceSlotsInGlobalReplicationGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: RebalanceSlotsInGlobalReplicationGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RebalanceSlotsInGlobalReplicationGroupCommandInput, RebalanceSlotsInGlobalReplicationGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RebalanceSlotsInGlobalReplicationGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "RebalanceSlotsInGlobalReplicationGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: RebalanceSlotsInGlobalReplicationGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RebalanceSlotsInGlobalReplicationGroupCommandOutput> {
    return deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
