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
import { CompleteMigrationMessage, CompleteMigrationResponse } from "../models/models_0";
import {
  deserializeAws_queryCompleteMigrationCommand,
  serializeAws_queryCompleteMigrationCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link CompleteMigrationCommand}.
 */
export interface CompleteMigrationCommandInput extends CompleteMigrationMessage {}
/**
 * @public
 *
 * The output of {@link CompleteMigrationCommand}.
 */
export interface CompleteMigrationCommandOutput extends CompleteMigrationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Complete the migration of data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CompleteMigrationCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CompleteMigrationCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // CompleteMigrationMessage
 *   ReplicationGroupId: "STRING_VALUE", // required
 *   Force: true || false,
 * };
 * const command = new CompleteMigrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CompleteMigrationCommandInput - {@link CompleteMigrationCommandInput}
 * @returns {@link CompleteMigrationCommandOutput}
 * @see {@link CompleteMigrationCommandInput} for command's `input` shape.
 * @see {@link CompleteMigrationCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidReplicationGroupStateFault} (client fault)
 *  <p>The requested replication group is not in the <code>available</code> state.</p>
 *
 * @throws {@link ReplicationGroupNotFoundFault} (client fault)
 *  <p>The specified replication group does not exist.</p>
 *
 * @throws {@link ReplicationGroupNotUnderMigrationFault} (client fault)
 *  <p>The designated replication group is not available for data migration.</p>
 *
 *
 */
export class CompleteMigrationCommand extends $Command<
  CompleteMigrationCommandInput,
  CompleteMigrationCommandOutput,
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
  constructor(readonly input: CompleteMigrationCommandInput) {
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
  ): Handler<CompleteMigrationCommandInput, CompleteMigrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CompleteMigrationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "CompleteMigrationCommand";
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
  private serialize(input: CompleteMigrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCompleteMigrationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CompleteMigrationCommandOutput> {
    return deserializeAws_queryCompleteMigrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
