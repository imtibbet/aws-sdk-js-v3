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

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { BatchGetReportsInput, BatchGetReportsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetReportsCommand,
  serializeAws_json1_1BatchGetReportsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link BatchGetReportsCommand}.
 */
export interface BatchGetReportsCommandInput extends BatchGetReportsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetReportsCommand}.
 */
export interface BatchGetReportsCommandOutput extends BatchGetReportsOutput, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Returns an array of reports.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchGetReportsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchGetReportsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // BatchGetReportsInput
 *   reportArns: [ // ReportArns // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetReportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param BatchGetReportsCommandInput - {@link BatchGetReportsCommandInput}
 * @returns {@link BatchGetReportsCommandOutput}
 * @see {@link BatchGetReportsCommandInput} for command's `input` shape.
 * @see {@link BatchGetReportsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 *
 */
export class BatchGetReportsCommand extends $Command<
  BatchGetReportsCommandInput,
  BatchGetReportsCommandOutput,
  CodeBuildClientResolvedConfig
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
  constructor(readonly input: BatchGetReportsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetReportsCommandInput, BatchGetReportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetReportsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "BatchGetReportsCommand";
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
  private serialize(input: BatchGetReportsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetReportsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetReportsCommandOutput> {
    return deserializeAws_json1_1BatchGetReportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
