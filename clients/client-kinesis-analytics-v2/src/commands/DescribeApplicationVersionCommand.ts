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

import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import { DescribeApplicationVersionRequest, DescribeApplicationVersionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeApplicationVersionCommand,
  serializeAws_json1_1DescribeApplicationVersionCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeApplicationVersionCommand}.
 */
export interface DescribeApplicationVersionCommandInput extends DescribeApplicationVersionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationVersionCommand}.
 */
export interface DescribeApplicationVersionCommandOutput extends DescribeApplicationVersionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides a detailed description of a specified version of the application. To see a list of all the versions of an application, invoke the <a>ListApplicationVersions</a> operation.</p>
 *          <note>
 *             <p>This operation is supported only for Amazon Kinesis Data Analytics for Apache Flink.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DescribeApplicationVersionCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DescribeApplicationVersionCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // DescribeApplicationVersionRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   ApplicationVersionId: Number("long"), // required
 * };
 * const command = new DescribeApplicationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeApplicationVersionCommandInput - {@link DescribeApplicationVersionCommandInput}
 * @returns {@link DescribeApplicationVersionCommandOutput}
 * @see {@link DescribeApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter value is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Specified application can't be found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this
 *       operation. </p>
 *
 *
 */
export class DescribeApplicationVersionCommand extends $Command<
  DescribeApplicationVersionCommandInput,
  DescribeApplicationVersionCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
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
  constructor(readonly input: DescribeApplicationVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeApplicationVersionCommandInput, DescribeApplicationVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeApplicationVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "DescribeApplicationVersionCommand";
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
  private serialize(input: DescribeApplicationVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeApplicationVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeApplicationVersionCommandOutput> {
    return deserializeAws_json1_1DescribeApplicationVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
