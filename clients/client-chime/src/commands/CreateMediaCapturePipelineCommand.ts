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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  CreateMediaCapturePipelineRequest,
  CreateMediaCapturePipelineRequestFilterSensitiveLog,
  CreateMediaCapturePipelineResponse,
  CreateMediaCapturePipelineResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateMediaCapturePipelineCommand,
  serializeAws_restJson1CreateMediaCapturePipelineCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateMediaCapturePipelineCommand}.
 */
export interface CreateMediaCapturePipelineCommandInput extends CreateMediaCapturePipelineRequest {}
/**
 * @public
 *
 * The output of {@link CreateMediaCapturePipelineCommand}.
 */
export interface CreateMediaCapturePipelineCommandOutput extends CreateMediaCapturePipelineResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a media capture pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateMediaCapturePipelineCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateMediaCapturePipelineCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // CreateMediaCapturePipelineRequest
 *   SourceType: "STRING_VALUE", // required
 *   SourceArn: "STRING_VALUE", // required
 *   SinkType: "STRING_VALUE", // required
 *   SinkArn: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   ChimeSdkMeetingConfiguration: { // ChimeSdkMeetingConfiguration
 *     SourceConfiguration: { // SourceConfiguration
 *       SelectedVideoStreams: { // SelectedVideoStreams
 *         AttendeeIds: [ // AttendeeIdList
 *           "STRING_VALUE",
 *         ],
 *         ExternalUserIds: [ // ExternalUserIdList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     ArtifactsConfiguration: { // ArtifactsConfiguration
 *       Audio: { // AudioArtifactsConfiguration
 *         MuxType: "STRING_VALUE", // required
 *       },
 *       Video: { // VideoArtifactsConfiguration
 *         State: "STRING_VALUE", // required
 *         MuxType: "STRING_VALUE",
 *       },
 *       Content: { // ContentArtifactsConfiguration
 *         State: "STRING_VALUE", // required
 *         MuxType: "STRING_VALUE",
 *       },
 *     },
 *   },
 * };
 * const command = new CreateMediaCapturePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateMediaCapturePipelineCommandInput - {@link CreateMediaCapturePipelineCommandInput}
 * @returns {@link CreateMediaCapturePipelineCommandOutput}
 * @see {@link CreateMediaCapturePipelineCommandInput} for command's `input` shape.
 * @see {@link CreateMediaCapturePipelineCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 *
 */
export class CreateMediaCapturePipelineCommand extends $Command<
  CreateMediaCapturePipelineCommandInput,
  CreateMediaCapturePipelineCommandOutput,
  ChimeClientResolvedConfig
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
  constructor(readonly input: CreateMediaCapturePipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMediaCapturePipelineCommandInput, CreateMediaCapturePipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMediaCapturePipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateMediaCapturePipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMediaCapturePipelineRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateMediaCapturePipelineResponseFilterSensitiveLog,
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
  private serialize(input: CreateMediaCapturePipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMediaCapturePipelineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMediaCapturePipelineCommandOutput> {
    return deserializeAws_restJson1CreateMediaCapturePipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
