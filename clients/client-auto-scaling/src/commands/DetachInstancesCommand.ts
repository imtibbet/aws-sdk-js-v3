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

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DetachInstancesAnswer, DetachInstancesQuery } from "../models/models_0";
import {
  deserializeAws_queryDetachInstancesCommand,
  serializeAws_queryDetachInstancesCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DetachInstancesCommand}.
 */
export interface DetachInstancesCommandInput extends DetachInstancesQuery {}
/**
 * @public
 *
 * The output of {@link DetachInstancesCommand}.
 */
export interface DetachInstancesCommandOutput extends DetachInstancesAnswer, __MetadataBearer {}

/**
 * @public
 * <p>Removes one or more instances from the specified Auto Scaling group.</p>
 *          <p>After the instances are detached, you can manage them independent of the Auto Scaling
 *             group.</p>
 *          <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches
 *             instances to replace the ones that are detached.</p>
 *          <p>If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are
 *             deregistered from the load balancer. If there are target groups attached to the Auto Scaling
 *             group, the instances are deregistered from the target groups.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/detach-instance-asg.html">Detach EC2 instances from
 *                 your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DetachInstancesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DetachInstancesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // DetachInstancesQuery
 *   InstanceIds: [ // InstanceIds
 *     "STRING_VALUE",
 *   ],
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   ShouldDecrementDesiredCapacity: true || false, // required
 * };
 * const command = new DetachInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DetachInstancesCommandInput - {@link DetachInstancesCommandInput}
 * @returns {@link DetachInstancesCommandOutput}
 * @see {@link DetachInstancesCommandInput} for command's `input` shape.
 * @see {@link DetachInstancesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 *
 * @example To detach an instance from an Auto Scaling group
 * ```javascript
 * // This example detaches the specified instance from the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "InstanceIds": [
 *     "i-93633f9b"
 *   ],
 *   "ShouldDecrementDesiredCapacity": true
 * };
 * const command = new DetachInstancesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Activities": [
 *     {
 *       "ActivityId": "5091cb52-547a-47ce-a236-c9ccbc2cb2c9",
 *       "AutoScalingGroupName": "my-auto-scaling-group",
 *       "Cause": "At 2015-04-12T15:02:16Z instance i-93633f9b was detached in response to a user request, shrinking the capacity from 2 to 1.",
 *       "Description": "Detaching EC2 instance: i-93633f9b",
 *       "Details": "details",
 *       "Progress": 50,
 *       "StartTime": "2015-04-12T15:02:16.179Z",
 *       "StatusCode": "InProgress"
 *     }
 *   ]
 * }
 * *\/
 * // example id: autoscaling-detach-instances-1
 * ```
 *
 */
export class DetachInstancesCommand extends $Command<
  DetachInstancesCommandInput,
  DetachInstancesCommandOutput,
  AutoScalingClientResolvedConfig
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
  constructor(readonly input: DetachInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetachInstancesCommandInput, DetachInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetachInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DetachInstancesCommand";
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
  private serialize(input: DetachInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDetachInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetachInstancesCommandOutput> {
    return deserializeAws_queryDetachInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
