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

import { SwitchoverReadReplicaMessage, SwitchoverReadReplicaResult } from "../models/models_1";
import {
  deserializeAws_querySwitchoverReadReplicaCommand,
  serializeAws_querySwitchoverReadReplicaCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link SwitchoverReadReplicaCommand}.
 */
export interface SwitchoverReadReplicaCommandInput extends SwitchoverReadReplicaMessage {}
/**
 * @public
 *
 * The output of {@link SwitchoverReadReplicaCommand}.
 */
export interface SwitchoverReadReplicaCommandOutput extends SwitchoverReadReplicaResult, __MetadataBearer {}

/**
 * @public
 * <p>Switches over an Oracle standby database in an Oracle Data Guard environment, making it the new
 *             primary database. Issue this command in the Region that hosts the current standby database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, SwitchoverReadReplicaCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, SwitchoverReadReplicaCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // SwitchoverReadReplicaMessage
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 * };
 * const command = new SwitchoverReadReplicaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param SwitchoverReadReplicaCommandInput - {@link SwitchoverReadReplicaCommandInput}
 * @returns {@link SwitchoverReadReplicaCommandOutput}
 * @see {@link SwitchoverReadReplicaCommandInput} for command's `input` shape.
 * @see {@link SwitchoverReadReplicaCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 *
 */
export class SwitchoverReadReplicaCommand extends $Command<
  SwitchoverReadReplicaCommandInput,
  SwitchoverReadReplicaCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: SwitchoverReadReplicaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SwitchoverReadReplicaCommandInput, SwitchoverReadReplicaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SwitchoverReadReplicaCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "SwitchoverReadReplicaCommand";
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
  private serialize(input: SwitchoverReadReplicaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySwitchoverReadReplicaCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SwitchoverReadReplicaCommandOutput> {
    return deserializeAws_querySwitchoverReadReplicaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
