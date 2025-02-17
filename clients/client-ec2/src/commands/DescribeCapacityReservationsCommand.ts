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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeCapacityReservationsRequest, DescribeCapacityReservationsResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeCapacityReservationsCommand,
  serializeAws_ec2DescribeCapacityReservationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DescribeCapacityReservationsCommand}.
 */
export interface DescribeCapacityReservationsCommandInput extends DescribeCapacityReservationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCapacityReservationsCommand}.
 */
export interface DescribeCapacityReservationsCommandOutput
  extends DescribeCapacityReservationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more of your Capacity Reservations. The results describe only the Capacity Reservations in the
 * 		    	Amazon Web Services Region that you're currently using.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCapacityReservationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCapacityReservationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeCapacityReservationsRequest
 *   CapacityReservationIds: [ // CapacityReservationIdSet
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeCapacityReservationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeCapacityReservationsCommandInput - {@link DescribeCapacityReservationsCommandInput}
 * @returns {@link DescribeCapacityReservationsCommandOutput}
 * @see {@link DescribeCapacityReservationsCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityReservationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class DescribeCapacityReservationsCommand extends $Command<
  DescribeCapacityReservationsCommandInput,
  DescribeCapacityReservationsCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: DescribeCapacityReservationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCapacityReservationsCommandInput, DescribeCapacityReservationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCapacityReservationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeCapacityReservationsCommand";
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
  private serialize(input: DescribeCapacityReservationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeCapacityReservationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCapacityReservationsCommandOutput> {
    return deserializeAws_ec2DescribeCapacityReservationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
