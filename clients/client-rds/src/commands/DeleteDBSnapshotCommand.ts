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

import { DeleteDBSnapshotMessage, DeleteDBSnapshotResult } from "../models/models_0";
import {
  deserializeAws_queryDeleteDBSnapshotCommand,
  serializeAws_queryDeleteDBSnapshotCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link DeleteDBSnapshotCommand}.
 */
export interface DeleteDBSnapshotCommandInput extends DeleteDBSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBSnapshotCommand}.
 */
export interface DeleteDBSnapshotCommandOutput extends DeleteDBSnapshotResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is
 *             terminated.</p>
 *          <note>
 *             <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DeleteDBSnapshotMessage
 *   DBSnapshotIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteDBSnapshotCommandInput - {@link DeleteDBSnapshotCommandInput}
 * @returns {@link DeleteDBSnapshotCommandOutput}
 * @see {@link DeleteDBSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteDBSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot.</p>
 *
 * @throws {@link InvalidDBSnapshotStateFault} (client fault)
 *  <p>The state of the DB snapshot doesn't allow deletion.</p>
 *
 *
 * @example To delete a DB cluster snapshot.
 * ```javascript
 * // This example deletes the specified DB snapshot.
 * const input = {
 *   "DBSnapshotIdentifier": "mydbsnapshot"
 * };
 * const command = new DeleteDBSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBSnapshot": {}
 * }
 * *\/
 * // example id: delete-db-snapshot-505d6b4e-8ced-479c-856a-c460a33fe07b
 * ```
 *
 */
export class DeleteDBSnapshotCommand extends $Command<
  DeleteDBSnapshotCommandInput,
  DeleteDBSnapshotCommandOutput,
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
  constructor(readonly input: DeleteDBSnapshotCommandInput) {
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
  ): Handler<DeleteDBSnapshotCommandInput, DeleteDBSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDBSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DeleteDBSnapshotCommand";
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
  private serialize(input: DeleteDBSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteDBSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDBSnapshotCommandOutput> {
    return deserializeAws_queryDeleteDBSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
