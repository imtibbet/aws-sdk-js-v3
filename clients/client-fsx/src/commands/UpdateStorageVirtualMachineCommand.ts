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
import {
  UpdateStorageVirtualMachineRequest,
  UpdateStorageVirtualMachineRequestFilterSensitiveLog,
  UpdateStorageVirtualMachineResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateStorageVirtualMachineCommand,
  serializeAws_json1_1UpdateStorageVirtualMachineCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link UpdateStorageVirtualMachineCommand}.
 */
export interface UpdateStorageVirtualMachineCommandInput extends UpdateStorageVirtualMachineRequest {}
/**
 * @public
 *
 * The output of {@link UpdateStorageVirtualMachineCommand}.
 */
export interface UpdateStorageVirtualMachineCommandOutput
  extends UpdateStorageVirtualMachineResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates an Amazon FSx for ONTAP storage virtual machine (SVM).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, UpdateStorageVirtualMachineCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, UpdateStorageVirtualMachineCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // UpdateStorageVirtualMachineRequest
 *   ActiveDirectoryConfiguration: { // UpdateSvmActiveDirectoryConfiguration
 *     SelfManagedActiveDirectoryConfiguration: { // SelfManagedActiveDirectoryConfigurationUpdates
 *       UserName: "STRING_VALUE",
 *       Password: "STRING_VALUE",
 *       DnsIps: [ // DnsIps
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 *   StorageVirtualMachineId: "STRING_VALUE", // required
 *   SvmAdminPassword: "STRING_VALUE",
 * };
 * const command = new UpdateStorageVirtualMachineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateStorageVirtualMachineCommandInput - {@link UpdateStorageVirtualMachineCommandInput}
 * @returns {@link UpdateStorageVirtualMachineCommandOutput}
 * @see {@link UpdateStorageVirtualMachineCommandInput} for command's `input` shape.
 * @see {@link UpdateStorageVirtualMachineCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link StorageVirtualMachineNotFound} (client fault)
 *  <p>No FSx for ONTAP SVMs were found based upon the supplied parameters.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>The requested operation is not supported for this resource or API.</p>
 *
 *
 */
export class UpdateStorageVirtualMachineCommand extends $Command<
  UpdateStorageVirtualMachineCommandInput,
  UpdateStorageVirtualMachineCommandOutput,
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
  constructor(readonly input: UpdateStorageVirtualMachineCommandInput) {
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
  ): Handler<UpdateStorageVirtualMachineCommandInput, UpdateStorageVirtualMachineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateStorageVirtualMachineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "UpdateStorageVirtualMachineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateStorageVirtualMachineRequestFilterSensitiveLog,
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
  private serialize(input: UpdateStorageVirtualMachineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateStorageVirtualMachineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateStorageVirtualMachineCommandOutput> {
    return deserializeAws_json1_1UpdateStorageVirtualMachineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
