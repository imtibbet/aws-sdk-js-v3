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

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { EnableInsightRulesInput, EnableInsightRulesOutput } from "../models/models_0";
import {
  deserializeAws_queryEnableInsightRulesCommand,
  serializeAws_queryEnableInsightRulesCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link EnableInsightRulesCommand}.
 */
export interface EnableInsightRulesCommandInput extends EnableInsightRulesInput {}
/**
 * @public
 *
 * The output of {@link EnableInsightRulesCommand}.
 */
export interface EnableInsightRulesCommandOutput extends EnableInsightRulesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Enables the specified Contributor Insights rules. When rules are enabled, they immediately begin analyzing log data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, EnableInsightRulesCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, EnableInsightRulesCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // EnableInsightRulesInput
 *   RuleNames: [ // InsightRuleNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new EnableInsightRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param EnableInsightRulesCommandInput - {@link EnableInsightRulesCommandInput}
 * @returns {@link EnableInsightRulesCommandOutput}
 * @see {@link EnableInsightRulesCommandInput} for command's `input` shape.
 * @see {@link EnableInsightRulesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of an input parameter is bad or out-of-range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation exceeded one or more limits.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>An input parameter that is required is missing.</p>
 *
 *
 */
export class EnableInsightRulesCommand extends $Command<
  EnableInsightRulesCommandInput,
  EnableInsightRulesCommandOutput,
  CloudWatchClientResolvedConfig
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
  constructor(readonly input: EnableInsightRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableInsightRulesCommandInput, EnableInsightRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableInsightRulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "EnableInsightRulesCommand";
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
  private serialize(input: EnableInsightRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryEnableInsightRulesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableInsightRulesCommandOutput> {
    return deserializeAws_queryEnableInsightRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
