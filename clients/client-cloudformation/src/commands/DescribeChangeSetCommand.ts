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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeChangeSetInput, DescribeChangeSetOutput } from "../models/models_0";
import {
  deserializeAws_queryDescribeChangeSetCommand,
  serializeAws_queryDescribeChangeSetCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DescribeChangeSetCommand}.
 */
export interface DescribeChangeSetCommandInput extends DescribeChangeSetInput {}
/**
 * @public
 *
 * The output of {@link DescribeChangeSetCommand}.
 */
export interface DescribeChangeSetCommandOutput extends DescribeChangeSetOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the inputs for the change set and a list of changes that CloudFormation will
 *          make if you execute the change set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html">Updating Stacks Using Change Sets</a> in the CloudFormation User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeChangeSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeChangeSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeChangeSetInput
 *   ChangeSetName: "STRING_VALUE", // required
 *   StackName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeChangeSetCommandInput - {@link DescribeChangeSetCommandInput}
 * @returns {@link DescribeChangeSetCommandOutput}
 * @see {@link DescribeChangeSetCommandInput} for command's `input` shape.
 * @see {@link DescribeChangeSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link ChangeSetNotFoundException} (client fault)
 *  <p>The specified change set name or ID doesn't exit. To view valid change sets for a stack,
 *          use the <code>ListChangeSets</code> operation.</p>
 *
 *
 */
export class DescribeChangeSetCommand extends $Command<
  DescribeChangeSetCommandInput,
  DescribeChangeSetCommandOutput,
  CloudFormationClientResolvedConfig
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
  constructor(readonly input: DescribeChangeSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeChangeSetCommandInput, DescribeChangeSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeChangeSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeChangeSetCommand";
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
  private serialize(input: DescribeChangeSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeChangeSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeChangeSetCommandOutput> {
    return deserializeAws_queryDescribeChangeSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
