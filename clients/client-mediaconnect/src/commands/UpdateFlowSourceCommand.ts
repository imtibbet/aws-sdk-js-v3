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

import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { UpdateFlowSourceRequest, UpdateFlowSourceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateFlowSourceCommand,
  serializeAws_restJson1UpdateFlowSourceCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateFlowSourceCommand}.
 */
export interface UpdateFlowSourceCommandInput extends UpdateFlowSourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFlowSourceCommand}.
 */
export interface UpdateFlowSourceCommandOutput extends UpdateFlowSourceResponse, __MetadataBearer {}

/**
 * @public
 * Updates the source of a flow.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateFlowSourceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateFlowSourceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // UpdateFlowSourceRequest
 *   Decryption: { // UpdateEncryption
 *     Algorithm: "aes128" || "aes192" || "aes256",
 *     ConstantInitializationVector: "STRING_VALUE",
 *     DeviceId: "STRING_VALUE",
 *     KeyType: "speke" || "static-key" || "srt-password",
 *     Region: "STRING_VALUE",
 *     ResourceId: "STRING_VALUE",
 *     RoleArn: "STRING_VALUE",
 *     SecretArn: "STRING_VALUE",
 *     Url: "STRING_VALUE",
 *   },
 *   Description: "STRING_VALUE",
 *   EntitlementArn: "STRING_VALUE",
 *   FlowArn: "STRING_VALUE", // required
 *   IngestPort: Number("int"),
 *   MaxBitrate: Number("int"),
 *   MaxLatency: Number("int"),
 *   MaxSyncBuffer: Number("int"),
 *   MediaStreamSourceConfigurations: [ // __listOfMediaStreamSourceConfigurationRequest
 *     { // MediaStreamSourceConfigurationRequest
 *       EncodingName: "jxsv" || "raw" || "smpte291" || "pcm", // required
 *       InputConfigurations: [ // __listOfInputConfigurationRequest
 *         { // InputConfigurationRequest
 *           InputPort: Number("int"), // required
 *           Interface: { // InterfaceRequest
 *             Name: "STRING_VALUE", // required
 *           },
 *         },
 *       ],
 *       MediaStreamName: "STRING_VALUE", // required
 *     },
 *   ],
 *   MinLatency: Number("int"),
 *   Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos",
 *   SenderControlPort: Number("int"),
 *   SenderIpAddress: "STRING_VALUE",
 *   SourceArn: "STRING_VALUE", // required
 *   SourceListenerAddress: "STRING_VALUE",
 *   SourceListenerPort: Number("int"),
 *   StreamId: "STRING_VALUE",
 *   VpcInterfaceName: "STRING_VALUE",
 *   WhitelistCidr: "STRING_VALUE",
 * };
 * const command = new UpdateFlowSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateFlowSourceCommandInput - {@link UpdateFlowSourceCommandInput}
 * @returns {@link UpdateFlowSourceCommandOutput}
 * @see {@link UpdateFlowSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link NotFoundException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 *
 */
export class UpdateFlowSourceCommand extends $Command<
  UpdateFlowSourceCommandInput,
  UpdateFlowSourceCommandOutput,
  MediaConnectClientResolvedConfig
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
  constructor(readonly input: UpdateFlowSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFlowSourceCommandInput, UpdateFlowSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFlowSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "UpdateFlowSourceCommand";
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
  private serialize(input: UpdateFlowSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateFlowSourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFlowSourceCommandOutput> {
    return deserializeAws_restJson1UpdateFlowSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
