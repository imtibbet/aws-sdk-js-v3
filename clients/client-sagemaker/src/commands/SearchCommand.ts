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

import { SearchResponse, SearchResponseFilterSensitiveLog } from "../models/models_3";
import { SearchRequest } from "../models/models_4";
import { deserializeAws_json1_1SearchCommand, serializeAws_json1_1SearchCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 *
 * The input for {@link SearchCommand}.
 */
export interface SearchCommandInput extends SearchRequest {}
/**
 * @public
 *
 * The output of {@link SearchCommand}.
 */
export interface SearchCommandOutput extends SearchResponse, __MetadataBearer {}

/**
 * @public
 * <p>Finds SageMaker resources that match a search query. Matching resources are returned
 *       as a list of <code>SearchRecord</code> objects in the response. You can sort the search
 *       results by any resource property in a ascending or descending order.</p>
 *          <p>You can query against the following value types: numeric, text, Boolean, and
 *       timestamp.</p>
 *          <note>
 *             <p>The Search API may provide access to otherwise restricted data. See <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/api-permissions-reference.html">Amazon SageMaker
 *       API Permissions: Actions, Permissions, and Resources Reference</a> for more
 *         information.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, SearchCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, SearchCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // SearchRequest
 *   Resource: "TrainingJob" || "Experiment" || "ExperimentTrial" || "ExperimentTrialComponent" || "Endpoint" || "ModelPackage" || "ModelPackageGroup" || "Pipeline" || "PipelineExecution" || "FeatureGroup" || "Project" || "FeatureMetadata" || "HyperParameterTuningJob" || "ModelCard" || "Model", // required
 *   SearchExpression: { // SearchExpression
 *     Filters: [ // FilterList
 *       { // Filter
 *         Name: "STRING_VALUE", // required
 *         Operator: "Equals" || "NotEquals" || "GreaterThan" || "GreaterThanOrEqualTo" || "LessThan" || "LessThanOrEqualTo" || "Contains" || "Exists" || "NotExists" || "In",
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *     NestedFilters: [ // NestedFiltersList
 *       { // NestedFilters
 *         NestedPropertyName: "STRING_VALUE", // required
 *         Filters: [ // required
 *           {
 *             Name: "STRING_VALUE", // required
 *             Operator: "Equals" || "NotEquals" || "GreaterThan" || "GreaterThanOrEqualTo" || "LessThan" || "LessThanOrEqualTo" || "Contains" || "Exists" || "NotExists" || "In",
 *             Value: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     ],
 *     SubExpressions: [ // SearchExpressionList
 *       {
 *         Filters: [
 *           {
 *             Name: "STRING_VALUE", // required
 *             Operator: "Equals" || "NotEquals" || "GreaterThan" || "GreaterThanOrEqualTo" || "LessThan" || "LessThanOrEqualTo" || "Contains" || "Exists" || "NotExists" || "In",
 *             Value: "STRING_VALUE",
 *           },
 *         ],
 *         NestedFilters: [
 *           {
 *             NestedPropertyName: "STRING_VALUE", // required
 *             Filters: "<FilterList>", // required
 *           },
 *         ],
 *         SubExpressions: [
 *           "<SearchExpression>",
 *         ],
 *         Operator: "And" || "Or",
 *       },
 *     ],
 *     Operator: "And" || "Or",
 *   },
 *   SortBy: "STRING_VALUE",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new SearchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param SearchCommandInput - {@link SearchCommandInput}
 * @returns {@link SearchCommandOutput}
 * @see {@link SearchCommandInput} for command's `input` shape.
 * @see {@link SearchCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 *
 */
export class SearchCommand extends $Command<SearchCommandInput, SearchCommandOutput, SageMakerClientResolvedConfig> {
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
  constructor(readonly input: SearchCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchCommandInput, SearchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SearchCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "SearchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: SearchResponseFilterSensitiveLog,
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
  private serialize(input: SearchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SearchCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchCommandOutput> {
    return deserializeAws_json1_1SearchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
