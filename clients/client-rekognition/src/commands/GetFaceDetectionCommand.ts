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

import { GetFaceDetectionRequest, GetFaceDetectionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetFaceDetectionCommand,
  serializeAws_json1_1GetFaceDetectionCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 *
 * The input for {@link GetFaceDetectionCommand}.
 */
export interface GetFaceDetectionCommandInput extends GetFaceDetectionRequest {}
/**
 * @public
 *
 * The output of {@link GetFaceDetectionCommand}.
 */
export interface GetFaceDetectionCommandOutput extends GetFaceDetectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets face detection results for a Amazon Rekognition Video analysis started by <a>StartFaceDetection</a>.</p>
 *          <p>Face detection with Amazon Rekognition Video is an asynchronous operation. You start face detection by calling <a>StartFaceDetection</a>
 *      which returns a job identifier (<code>JobId</code>). When the face detection operation finishes, Amazon Rekognition Video publishes a completion status to
 *      the Amazon Simple Notification Service topic registered in the initial call to <code>StartFaceDetection</code>. To get the results
 *      of the face detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>.
 *      If so, call  <a>GetFaceDetection</a> and pass the job identifier
 *      (<code>JobId</code>) from the initial call to <code>StartFaceDetection</code>.</p>
 *          <p>
 *             <code>GetFaceDetection</code> returns an array of detected faces (<code>Faces</code>) sorted by the time the faces were detected. </p>
 *          <p>Use MaxResults parameter to limit the number of labels returned. If there are more results than
 *    specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set
 *    of results. To get the next page of results, call <code>GetFaceDetection</code> and populate the <code>NextToken</code> request parameter with the token
 *     value returned from the previous call to <code>GetFaceDetection</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetFaceDetectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetFaceDetectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // GetFaceDetectionRequest
 *   JobId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetFaceDetectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetFaceDetectionCommandInput - {@link GetFaceDetectionCommandInput}
 * @returns {@link GetFaceDetectionCommandOutput}
 * @see {@link GetFaceDetectionCommandInput} for command's `input` shape.
 * @see {@link GetFaceDetectionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Pagination token in the request is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 *
 */
export class GetFaceDetectionCommand extends $Command<
  GetFaceDetectionCommandInput,
  GetFaceDetectionCommandOutput,
  RekognitionClientResolvedConfig
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
  constructor(readonly input: GetFaceDetectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFaceDetectionCommandInput, GetFaceDetectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFaceDetectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "GetFaceDetectionCommand";
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
  private serialize(input: GetFaceDetectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetFaceDetectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFaceDetectionCommandOutput> {
    return deserializeAws_json1_1GetFaceDetectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
