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

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DeleteDataRepositoryAssociationRequest, DeleteDataRepositoryAssociationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDataRepositoryAssociationCommand,
  serializeAws_json1_1DeleteDataRepositoryAssociationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DeleteDataRepositoryAssociationCommand}.
 */
export interface DeleteDataRepositoryAssociationCommandInput extends DeleteDataRepositoryAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataRepositoryAssociationCommand}.
 */
export interface DeleteDataRepositoryAssociationCommandOutput
  extends DeleteDataRepositoryAssociationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes a data repository association on an Amazon FSx for Lustre
 *             file system. Deleting the data repository association unlinks the
 *             file system from the Amazon S3 bucket. When deleting a data repository
 *             association, you have the option of deleting the data in the file system
 *             that corresponds to the data repository association. Data repository
 *             associations are supported only for file systems with the
 *             <code>Persistent_2</code> deployment type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DeleteDataRepositoryAssociationCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DeleteDataRepositoryAssociationCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // DeleteDataRepositoryAssociationRequest
 *   AssociationId: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   DeleteDataInFileSystem: true || false,
 * };
 * const command = new DeleteDataRepositoryAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteDataRepositoryAssociationCommandInput - {@link DeleteDataRepositoryAssociationCommandInput}
 * @returns {@link DeleteDataRepositoryAssociationCommandOutput}
 * @see {@link DeleteDataRepositoryAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteDataRepositoryAssociationCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link DataRepositoryAssociationNotFound} (client fault)
 *  <p>No data repository associations were found based upon the supplied parameters.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link ServiceLimitExceeded} (client fault)
 *  <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web Services Support.</p>
 *
 *
 */
export class DeleteDataRepositoryAssociationCommand extends $Command<
  DeleteDataRepositoryAssociationCommandInput,
  DeleteDataRepositoryAssociationCommandOutput,
  FSxClientResolvedConfig
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
  constructor(readonly input: DeleteDataRepositoryAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDataRepositoryAssociationCommandInput, DeleteDataRepositoryAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDataRepositoryAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DeleteDataRepositoryAssociationCommand";
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
    input: DeleteDataRepositoryAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDataRepositoryAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteDataRepositoryAssociationCommandOutput> {
    return deserializeAws_json1_1DeleteDataRepositoryAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
