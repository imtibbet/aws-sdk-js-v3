// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { ComprehendServiceException as __BaseException } from "./ComprehendServiceException";

/**
 * @public
 */
export enum AugmentedManifestsDocumentTypeFormat {
  PLAIN_TEXT_DOCUMENT = "PLAIN_TEXT_DOCUMENT",
  SEMI_STRUCTURED_DOCUMENT = "SEMI_STRUCTURED_DOCUMENT",
}

/**
 * @public
 */
export enum Split {
  TEST = "TEST",
  TRAIN = "TRAIN",
}

/**
 * @public
 * <p>An augmented manifest file that provides training data for your custom model. An augmented
 *       manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.</p>
 */
export interface AugmentedManifestsListItem {
  /**
   * <p>The Amazon S3 location of the augmented manifest file.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>The purpose of the data you've provided in the augmented manifest. You can either train or
   *       test this data. If you don't specify, the default is train.</p>
   *          <p>TRAIN - all of the documents in the manifest will be used for training. If no test
   *       documents are provided, Amazon Comprehend will automatically reserve a portion of the training
   *       documents for testing.</p>
   *          <p> TEST - all of the documents in the manifest will be used for testing.</p>
   */
  Split?: Split | string;

  /**
   * <p>The JSON attribute that contains the annotations for your training documents. The number
   *       of attribute names that you specify depends on whether your augmented manifest file is the
   *       output of a single labeling job or a chained labeling job.</p>
   *          <p>If your file is the output of a single labeling job, specify the LabelAttributeName key
   *       that was used when the job was created in Ground Truth.</p>
   *          <p>If your file is the output of a chained labeling job, specify the LabelAttributeName key
   *       for one or more jobs in the chain. Each LabelAttributeName key provides the annotations from
   *       an individual job.</p>
   */
  AttributeNames: string[] | undefined;

  /**
   * <p>The S3 prefix to the annotation files that are referred in the augmented manifest
   *       file.</p>
   */
  AnnotationDataS3Uri?: string;

  /**
   * <p>The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest
   *       file.</p>
   */
  SourceDocumentsS3Uri?: string;

  /**
   * <p>The type of augmented manifest. PlainTextDocument or SemiStructuredDocument. If you don't
   *       specify, the default is PlainTextDocument. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PLAIN_TEXT_DOCUMENT</code> A document type that represents any unicode text that
   *           is encoded in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SEMI_STRUCTURED_DOCUMENT</code> A document type with positional and structural
   *           context, like a PDF. For training with Amazon Comprehend, only PDFs are supported. For
   *           inference, Amazon Comprehend support PDFs, DOCX and TXT.</p>
   *             </li>
   *          </ul>
   */
  DocumentType?: AugmentedManifestsDocumentTypeFormat | string;
}

/**
 * @public
 */
export interface BatchDetectDominantLanguageRequest {
  /**
   * <p>A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25
   *       documents. Each document should contain at least 20 characters. The maximum size of each document is 5 KB.</p>
   */
  TextList: string[] | undefined;
}

/**
 * @public
 * <p>Describes an error that occurred while processing a document in a batch. The operation
 *       returns on <code>BatchItemError</code> object for each document that contained an
 *       error.</p>
 */
export interface BatchItemError {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;

  /**
   * <p>The numeric error code of the error.</p>
   */
  ErrorCode?: string;

  /**
   * <p>A text description of the error.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * <p>Returns the code for the dominant language in the input text and the level of
 *       confidence that Amazon Comprehend has in the accuracy of the detection.</p>
 */
export interface DominantLanguage {
  /**
   * <p>The RFC 5646 language code for the dominant language. For more information about RFC
   *       5646, see <a href="https://tools.ietf.org/html/rfc5646">Tags for Identifying
   *         Languages</a> on the <i>IETF Tools</i> web site.</p>
   */
  LanguageCode?: string;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of the
   *       detection.</p>
   */
  Score?: number;
}

/**
 * @public
 * <p>The result of calling the  operation.
 *       The operation returns one object for each document that is successfully processed by the
 *       operation.</p>
 */
export interface BatchDetectDominantLanguageItemResult {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;

  /**
   * <p>One or more <a>DominantLanguage</a> objects describing the dominant
   *       languages in the document.</p>
   */
  Languages?: DominantLanguage[];
}

/**
 * @public
 */
export interface BatchDetectDominantLanguageResponse {
  /**
   * <p>A list of  objects
   *       containing the results of the operation. The results are sorted in ascending order by the
   *         <code>Index</code> field and match the order of the documents in the input list. If all of
   *       the documents contain an error, the <code>ResultList</code> is empty.</p>
   */
  ResultList: BatchDetectDominantLanguageItemResult[] | undefined;

  /**
   * <p>A list containing one  object for each document
   *       that contained an error. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If there are no errors in the
   *       batch, the <code>ErrorList</code> is empty.</p>
   */
  ErrorList: BatchItemError[] | undefined;
}

/**
 * @public
 * <p>The number of documents in the request exceeds the limit of 25. Try your request again
 *       with fewer documents.</p>
 */
export class BatchSizeLimitExceededException extends __BaseException {
  readonly name: "BatchSizeLimitExceededException" = "BatchSizeLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BatchSizeLimitExceededException, __BaseException>) {
    super({
      name: "BatchSizeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BatchSizeLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>An internal server error occurred. Retry your request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export enum InvalidRequestDetailReason {
  DOCUMENT_SIZE_EXCEEDED = "DOCUMENT_SIZE_EXCEEDED",
  PAGE_LIMIT_EXCEEDED = "PAGE_LIMIT_EXCEEDED",
  TEXTRACT_ACCESS_DENIED = "TEXTRACT_ACCESS_DENIED",
  UNSUPPORTED_DOC_TYPE = "UNSUPPORTED_DOC_TYPE",
}

/**
 * @public
 * <p>Provides additional detail about why the request failed:</p>
 *          <ul>
 *             <li>
 *                <p>Document size is too large - Check the size of your file and resubmit the request.</p>
 *             </li>
 *             <li>
 *                <p>Document type is not supported - Check the file type and resubmit the request.</p>
 *             </li>
 *             <li>
 *                <p>Too many pages in the document - Check the number of pages in your file and resubmit the request.</p>
 *             </li>
 *             <li>
 *                <p>Access denied to Amazon Textract - Verify that your account has permission to use Amazon Textract API operations and resubmit the request.</p>
 *             </li>
 *          </ul>
 */
export interface InvalidRequestDetail {
  /**
   * <p>Reason code is <code>INVALID_DOCUMENT</code>.</p>
   */
  Reason?: InvalidRequestDetailReason | string;
}

/**
 * @public
 */
export enum InvalidRequestReason {
  INVALID_DOCUMENT = "INVALID_DOCUMENT",
}

/**
 * @public
 * <p>The request is invalid.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  Reason?: InvalidRequestReason | string;
  /**
   * <p>Provides additional detail about why the request failed:</p>
   *          <ul>
   *             <li>
   *                <p>Document size is too large - Check the size of your file and resubmit the request.</p>
   *             </li>
   *             <li>
   *                <p>Document type is not supported - Check the file type and resubmit the request.</p>
   *             </li>
   *             <li>
   *                <p>Too many pages in the document - Check the number of pages in your file and resubmit the request.</p>
   *             </li>
   *             <li>
   *                <p>Access denied to Amazon Textract - Verify that your account has permission to use Amazon Textract API operations and resubmit the request.</p>
   *             </li>
   *          </ul>
   */
  Detail?: InvalidRequestDetail;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
    this.Detail = opts.Detail;
  }
}

/**
 * @public
 * <p>The size of the input text exceeds the limit. Use a smaller document.</p>
 */
export class TextSizeLimitExceededException extends __BaseException {
  readonly name: "TextSizeLimitExceededException" = "TextSizeLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TextSizeLimitExceededException, __BaseException>) {
    super({
      name: "TextSizeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TextSizeLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export enum LanguageCode {
  AR = "ar",
  DE = "de",
  EN = "en",
  ES = "es",
  FR = "fr",
  HI = "hi",
  IT = "it",
  JA = "ja",
  KO = "ko",
  PT = "pt",
  ZH = "zh",
  ZH_TW = "zh-TW",
}

/**
 * @public
 */
export interface BatchDetectEntitiesRequest {
  /**
   * <p>A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25
   *       documents. The maximum size of each document is 5 KB.</p>
   */
  TextList: string[] | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

/**
 * @public
 * <p>Nested block contained within a block.</p>
 */
export interface ChildBlock {
  /**
   * <p>Unique identifier for the child block.</p>
   */
  ChildBlockId?: string;

  /**
   * <p>Offset of the start of the child block within its parent block.</p>
   */
  BeginOffset?: number;

  /**
   * <p>Offset of the end of the child block within its parent block.</p>
   */
  EndOffset?: number;
}

/**
 * @public
 * <p>A reference to a block. </p>
 */
export interface BlockReference {
  /**
   * <p>Unique identifier for the block.</p>
   */
  BlockId?: string;

  /**
   * <p>Offset of the start of the block within its parent block.</p>
   */
  BeginOffset?: number;

  /**
   * <p>Offset of the end of the block within its parent block.</p>
   */
  EndOffset?: number;

  /**
   * <p>List of child blocks within this block.</p>
   */
  ChildBlocks?: ChildBlock[];
}

/**
 * @public
 */
export enum EntityType {
  COMMERCIAL_ITEM = "COMMERCIAL_ITEM",
  DATE = "DATE",
  EVENT = "EVENT",
  LOCATION = "LOCATION",
  ORGANIZATION = "ORGANIZATION",
  OTHER = "OTHER",
  PERSON = "PERSON",
  QUANTITY = "QUANTITY",
  TITLE = "TITLE",
}

/**
 * @public
 * <p>Provides information about an entity. </p>
 *          <p> </p>
 */
export interface Entity {
  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of the
   *       detection.</p>
   */
  Score?: number;

  /**
   * <p>The entity type. For entity detection using the built-in model, this field contains one of the
   *       standard entity types listed below.</p>
   *          <p>For custom entity detection, this field contains one of the
   *       entity types that you specified when you trained your custom model.</p>
   */
  Type?: EntityType | string;

  /**
   * <p>The text of the entity.</p>
   */
  Text?: string;

  /**
   * <p>The zero-based offset from the beginning of the source text to the first character in the
   *       entity.</p>
   *          <p>This field is empty for non-text input.</p>
   */
  BeginOffset?: number;

  /**
   * <p>The zero-based offset from the beginning of the source text to the last character in the
   *       entity.</p>
   *          <p>This field is empty for non-text input.</p>
   */
  EndOffset?: number;

  /**
   * <p>A reference to each block for this entity. This field is empty for plain-text input.</p>
   */
  BlockReferences?: BlockReference[];
}

/**
 * @public
 * <p>The result of calling the  operation. The
 *       operation returns one object for each document that is successfully processed by the
 *       operation.</p>
 */
export interface BatchDetectEntitiesItemResult {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;

  /**
   * <p>One or more <a>Entity</a> objects, one for each entity detected in the
   *       document.</p>
   */
  Entities?: Entity[];
}

/**
 * @public
 */
export interface BatchDetectEntitiesResponse {
  /**
   * <p>A list of  objects containing the
   *       results of the operation. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If all of the documents contain
   *       an error, the <code>ResultList</code> is empty.</p>
   */
  ResultList: BatchDetectEntitiesItemResult[] | undefined;

  /**
   * <p>A list containing one  object for each document
   *       that contained an error. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If there are no errors in the
   *       batch, the <code>ErrorList</code> is empty.</p>
   */
  ErrorList: BatchItemError[] | undefined;
}

/**
 * @public
 * <p>Amazon Comprehend can't process the language of the input text. For custom entity
 *       recognition APIs, only English, Spanish, French, Italian, German, or Portuguese are accepted.
 *       For a list of supported languages,
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/supported-languages.html">Supported languages</a> in the Comprehend Developer Guide.
 *     </p>
 */
export class UnsupportedLanguageException extends __BaseException {
  readonly name: "UnsupportedLanguageException" = "UnsupportedLanguageException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedLanguageException, __BaseException>) {
    super({
      name: "UnsupportedLanguageException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedLanguageException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface BatchDetectKeyPhrasesRequest {
  /**
   * <p>A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25
   *       documents. The maximum size of each document is 5 KB.</p>
   */
  TextList: string[] | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

/**
 * @public
 * <p>Describes a key noun phrase.</p>
 */
export interface KeyPhrase {
  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of the
   *       detection.</p>
   */
  Score?: number;

  /**
   * <p>The text of a key noun phrase.</p>
   */
  Text?: string;

  /**
   * <p>The zero-based offset from the beginning of the source text to the first character in the
   *       key phrase.</p>
   */
  BeginOffset?: number;

  /**
   * <p>The zero-based offset from the beginning of the source text to the last character in the
   *       key phrase.</p>
   */
  EndOffset?: number;
}

/**
 * @public
 * <p>The result of calling the  operation. The
 *       operation returns one object for each document that is successfully processed by the
 *       operation.</p>
 */
export interface BatchDetectKeyPhrasesItemResult {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;

  /**
   * <p>One or more <a>KeyPhrase</a> objects, one for each key phrase detected in
   *       the document.</p>
   */
  KeyPhrases?: KeyPhrase[];
}

/**
 * @public
 */
export interface BatchDetectKeyPhrasesResponse {
  /**
   * <p>A list of  objects containing the
   *       results of the operation. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If all of the documents contain
   *       an error, the <code>ResultList</code> is empty.</p>
   */
  ResultList: BatchDetectKeyPhrasesItemResult[] | undefined;

  /**
   * <p>A list containing one  object for each document
   *       that contained an error. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If there are no errors in the
   *       batch, the <code>ErrorList</code> is empty.</p>
   */
  ErrorList: BatchItemError[] | undefined;
}

/**
 * @public
 */
export interface BatchDetectSentimentRequest {
  /**
   * <p>A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25
   *       documents. The maximum size of each document is 5 KB. </p>
   */
  TextList: string[] | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

/**
 * @public
 */
export enum SentimentType {
  MIXED = "MIXED",
  NEGATIVE = "NEGATIVE",
  NEUTRAL = "NEUTRAL",
  POSITIVE = "POSITIVE",
}

/**
 * @public
 * <p>Describes the level of confidence that Amazon Comprehend has in the accuracy of its
 *       detection of sentiments.</p>
 */
export interface SentimentScore {
  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its detection of
   *       the <code>POSITIVE</code> sentiment.</p>
   */
  Positive?: number;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its detection of
   *       the <code>NEGATIVE</code> sentiment.</p>
   */
  Negative?: number;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its detection of
   *       the <code>NEUTRAL</code> sentiment.</p>
   */
  Neutral?: number;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its detection of
   *       the <code>MIXED</code> sentiment.</p>
   */
  Mixed?: number;
}

/**
 * @public
 * <p>The result of calling the  operation. The
 *       operation returns one object for each document that is successfully processed by the
 *       operation.</p>
 */
export interface BatchDetectSentimentItemResult {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;

  /**
   * <p>The sentiment detected in the document.</p>
   */
  Sentiment?: SentimentType | string;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of its sentiment
   *       detection.</p>
   */
  SentimentScore?: SentimentScore;
}

/**
 * @public
 */
export interface BatchDetectSentimentResponse {
  /**
   * <p>A list of  objects containing the
   *       results of the operation. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If all of the documents contain
   *       an error, the <code>ResultList</code> is empty.</p>
   */
  ResultList: BatchDetectSentimentItemResult[] | undefined;

  /**
   * <p>A list containing one  object for each document
   *       that contained an error. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If there are no errors in the
   *       batch, the <code>ErrorList</code> is empty.</p>
   */
  ErrorList: BatchItemError[] | undefined;
}

/**
 * @public
 */
export enum SyntaxLanguageCode {
  DE = "de",
  EN = "en",
  ES = "es",
  FR = "fr",
  IT = "it",
  PT = "pt",
}

/**
 * @public
 */
export interface BatchDetectSyntaxRequest {
  /**
   * <p>A list containing the UTF-8 encoded text of the input documents. The list can contain a maximum of 25
   *       documents. The maximum size for each document is 5 KB.</p>
   */
  TextList: string[] | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the following languages
   *       supported by Amazon Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"),
   *       Italian ("it"), or Portuguese ("pt"). All documents must be in the same language.</p>
   */
  LanguageCode: SyntaxLanguageCode | string | undefined;
}

/**
 * @public
 */
export enum PartOfSpeechTagType {
  ADJ = "ADJ",
  ADP = "ADP",
  ADV = "ADV",
  AUX = "AUX",
  CCONJ = "CCONJ",
  CONJ = "CONJ",
  DET = "DET",
  INTJ = "INTJ",
  NOUN = "NOUN",
  NUM = "NUM",
  O = "O",
  PART = "PART",
  PRON = "PRON",
  PROPN = "PROPN",
  PUNCT = "PUNCT",
  SCONJ = "SCONJ",
  SYM = "SYM",
  VERB = "VERB",
}

/**
 * @public
 * <p>Identifies the part of speech represented by the token and gives the confidence that
 *       Amazon Comprehend has that the part of speech was correctly identified. For more information
 *       about the parts of speech that Amazon Comprehend can identify, see
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide.
 *        </p>
 */
export interface PartOfSpeechTag {
  /**
   * <p>Identifies the part of speech that the token represents.</p>
   */
  Tag?: PartOfSpeechTagType | string;

  /**
   * <p>The confidence that Amazon Comprehend has that the part of speech was correctly
   *       identified.</p>
   */
  Score?: number;
}

/**
 * @public
 * <p>Represents a work in the input text that was recognized and assigned a part of speech.
 *       There is one syntax token record for each word in the source text.</p>
 */
export interface SyntaxToken {
  /**
   * <p>A unique identifier for a token.</p>
   */
  TokenId?: number;

  /**
   * <p>The word that was recognized in the source text.</p>
   */
  Text?: string;

  /**
   * <p>The zero-based offset from the beginning of the source text to the first character in the
   *       word.</p>
   */
  BeginOffset?: number;

  /**
   * <p>The zero-based offset from the beginning of the source text to the last character in the
   *       word.</p>
   */
  EndOffset?: number;

  /**
   * <p>Provides the part of speech label and the confidence level that Amazon Comprehend has that
   *       the part of speech was correctly identified. For more information, see
   *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide.
   *     </p>
   */
  PartOfSpeech?: PartOfSpeechTag;
}

/**
 * @public
 * <p>The result of calling the  operation. The
 *       operation returns one object that is successfully processed by the operation.</p>
 */
export interface BatchDetectSyntaxItemResult {
  /**
   * <p>The zero-based index of the document in the input list.</p>
   */
  Index?: number;

  /**
   * <p>The syntax tokens for the words in the document, one token for each word.</p>
   */
  SyntaxTokens?: SyntaxToken[];
}

/**
 * @public
 */
export interface BatchDetectSyntaxResponse {
  /**
   * <p>A list of  objects containing the
   *       results of the operation. The results are sorted in ascending order by the <code>Index</code>
   *       field and match the order of the documents in the input list. If all of the documents contain
   *       an error, the <code>ResultList</code> is empty.</p>
   */
  ResultList: BatchDetectSyntaxItemResult[] | undefined;

  /**
   * <p>A list containing one  object for each document that
   *       contained an error. The results are sorted in ascending order by the <code>Index</code> field
   *       and match the order of the documents in the input list. If there are no errors in the batch,
   *       the <code>ErrorList</code> is empty.</p>
   */
  ErrorList: BatchItemError[] | undefined;
}

/**
 * @public
 */
export interface BatchDetectTargetedSentimentRequest {
  /**
   * <p>A list containing the UTF-8 encoded text of the input documents.
   *       The list can contain a maximum of 25 documents. The maximum size of each document is 5 KB.</p>
   */
  TextList: string[] | undefined;

  /**
   * <p>The language of the input documents. Currently, English is the only supported language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

/**
 * @public
 * <p>Contains the sentiment and sentiment score for one mention of an entity.</p>
 *          <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>
 */
export interface MentionSentiment {
  /**
   * <p>The sentiment of the mention. </p>
   */
  Sentiment?: SentimentType | string;

  /**
   * <p>Describes the level of confidence that Amazon Comprehend has in the accuracy of its
   *       detection of sentiments.</p>
   */
  SentimentScore?: SentimentScore;
}

/**
 * @public
 */
export enum TargetedSentimentEntityType {
  ATTRIBUTE = "ATTRIBUTE",
  BOOK = "BOOK",
  BRAND = "BRAND",
  COMMERCIAL_ITEM = "COMMERCIAL_ITEM",
  DATE = "DATE",
  EVENT = "EVENT",
  FACILITY = "FACILITY",
  GAME = "GAME",
  LOCATION = "LOCATION",
  MOVIE = "MOVIE",
  MUSIC = "MUSIC",
  ORGANIZATION = "ORGANIZATION",
  OTHER = "OTHER",
  PERSON = "PERSON",
  PERSONAL_TITLE = "PERSONAL_TITLE",
  QUANTITY = "QUANTITY",
  SOFTWARE = "SOFTWARE",
}

/**
 * @public
 * <p>Information about one mention of an entity. The mention information includes the location of the mention
 *       in the text and the sentiment of the mention.</p>
 *          <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>
 */
export interface TargetedSentimentMention {
  /**
   * <p>Model confidence that the entity is relevant. Value range is zero to one, where one is highest confidence.</p>
   */
  Score?: number;

  /**
   * <p>The confidence that all the entities mentioned in the group relate to the same entity.</p>
   */
  GroupScore?: number;

  /**
   * <p>The text in the document that identifies the entity.</p>
   */
  Text?: string;

  /**
   * <p>The type of the entity. Amazon Comprehend supports a variety of <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html#how-targeted-sentiment-entities">entity types</a>.</p>
   */
  Type?: TargetedSentimentEntityType | string;

  /**
   * <p>Contains the sentiment and sentiment score for the mention.</p>
   */
  MentionSentiment?: MentionSentiment;

  /**
   * <p>The offset into the document text where the mention begins.</p>
   */
  BeginOffset?: number;

  /**
   * <p>The offset into the document text where the mention ends.</p>
   */
  EndOffset?: number;
}

/**
 * @public
 * <p>Information about one of the entities found by targeted sentiment analysis.</p>
 *          <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>
 */
export interface TargetedSentimentEntity {
  /**
   * <p>One or more index into the Mentions array that provides the best name for the entity group.</p>
   */
  DescriptiveMentionIndex?: number[];

  /**
   * <p>An array of mentions of the entity in the document. The array represents a co-reference group.
   *       See <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html#how-targeted-sentiment-values">
   *         Co-reference group</a> for an example. </p>
   */
  Mentions?: TargetedSentimentMention[];
}

/**
 * @public
 * <p>Analysis results for one of the documents in the batch.</p>
 */
export interface BatchDetectTargetedSentimentItemResult {
  /**
   * <p>The zero-based index of this result in the input list.</p>
   */
  Index?: number;

  /**
   * <p>An array of targeted sentiment entities.</p>
   */
  Entities?: TargetedSentimentEntity[];
}

/**
 * @public
 */
export interface BatchDetectTargetedSentimentResponse {
  /**
   * <p>A list of objects containing the results of the operation.
   *       The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list.
   *       If all of the documents contain an error, the <code>ResultList</code> is empty.</p>
   */
  ResultList: BatchDetectTargetedSentimentItemResult[] | undefined;

  /**
   * <p>List of errors that the operation can return.</p>
   */
  ErrorList: BatchItemError[] | undefined;
}

/**
 * @public
 */
export enum BlockType {
  LINE = "LINE",
  WORD = "WORD",
}

/**
 * @public
 * <p>The bounding box around the detected page
 *      or around an element on a document page.
 *     The left (x-coordinate) and top (y-coordinate) are coordinates that
 *       represent the top and left sides of the bounding box. Note that the upper-left
 *       corner of the image is the origin (0,0). </p>
 *          <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_BoundingBox.html">BoundingBox</a> in the Amazon Textract API reference.</p>
 */
export interface BoundingBox {
  /**
   * <p>The height of the bounding box as a ratio of the overall document page height.</p>
   */
  Height?: number;

  /**
   * <p>The left coordinate of the bounding box as a ratio of overall document page width.</p>
   */
  Left?: number;

  /**
   * <p>The top coordinate of the bounding box as a ratio of overall document page height.</p>
   */
  Top?: number;

  /**
   * <p>The width of the bounding box as a ratio of the overall document page width.</p>
   */
  Width?: number;
}

/**
 * @public
 * <p>The X and Y coordinates of a point on a document page.</p>
 *          <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_Point.html">Point</a> in the Amazon Textract API reference.</p>
 */
export interface Point {
  /**
   * <p>The value of the X coordinate for a point on a polygon</p>
   */
  X?: number;

  /**
   * <p>The value of the Y coordinate for a point on a polygon</p>
   */
  Y?: number;
}

/**
 * @public
 * <p>Information about the location of items on a document page.</p>
 *          <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_Geometry.html">Geometry</a> in the Amazon Textract API reference.</p>
 */
export interface Geometry {
  /**
   * <p>An axis-aligned coarse representation of the location of the recognized item on the
   *       document page.</p>
   */
  BoundingBox?: BoundingBox;

  /**
   * <p>Within the bounding box, a fine-grained polygon around the recognized item.</p>
   */
  Polygon?: Point[];
}

/**
 * @public
 */
export enum RelationshipType {
  CHILD = "CHILD",
}

/**
 * @public
 * <p>List of child blocks for the current block.</p>
 */
export interface RelationshipsListItem {
  /**
   * <p>Identifers of the child blocks.</p>
   */
  Ids?: string[];

  /**
   * <p>Only supported relationship is a child relationship.</p>
   */
  Type?: RelationshipType | string;
}

/**
 * @public
 * <p>Information about each word or line of text in the input document.</p>
 *          <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_Block.html">Block</a> in the Amazon Textract API reference.</p>
 */
export interface Block {
  /**
   * <p>Unique identifier for the block.</p>
   */
  Id?: string;

  /**
   * <p>The block represents a line of text or one word of text.</p>
   *          <ul>
   *             <li>
   *                <p>WORD - A word that's detected on a document page.
   *         A word is one or more ISO basic Latin script characters that aren't separated by spaces.</p>
   *             </li>
   *             <li>
   *                <p>LINE - A string of tab-delimited, contiguous words
   *         that are detected on a document page</p>
   *             </li>
   *          </ul>
   */
  BlockType?: BlockType | string;

  /**
   * <p>The word or line of text extracted from the block.</p>
   */
  Text?: string;

  /**
   * <p>Page number where the block appears.</p>
   */
  Page?: number;

  /**
   * <p>Co-ordinates of the rectangle or polygon that contains the text.</p>
   */
  Geometry?: Geometry;

  /**
   * <p>A list of child blocks of the current block.
   *       For example, a LINE object has child blocks for each WORD block that's part of the line of text. </p>
   */
  Relationships?: RelationshipsListItem[];
}

/**
 * @public
 * <p>Describes the result metrics for the test data associated with an documentation
 *       classifier.</p>
 */
export interface ClassifierEvaluationMetrics {
  /**
   * <p>The fraction of the labels that were correct recognized. It is computed by dividing the
   *       number of labels in the test documents that were correctly recognized by the total number of
   *       labels in the test documents.</p>
   */
  Accuracy?: number;

  /**
   * <p>A measure of the usefulness of the classifier results in the test data. High precision
   *       means that the classifier returned substantially more relevant results than irrelevant
   *       ones.</p>
   */
  Precision?: number;

  /**
   * <p>A measure of how complete the classifier results are for the test data. High recall means
   *       that the classifier returned most of the relevant results. </p>
   */
  Recall?: number;

  /**
   * <p>A measure of how accurate the classifier results are for the test data. It is derived from
   *       the <code>Precision</code> and <code>Recall</code> values. The <code>F1Score</code> is the
   *       harmonic average of the two scores. The highest score is 1, and the worst score is 0. </p>
   */
  F1Score?: number;

  /**
   * <p>A measure of the usefulness of the recognizer results in the test data. High precision
   *       means that the recognizer returned substantially more relevant results than irrelevant ones.
   *       Unlike the Precision metric which comes from averaging the precision of all available labels,
   *       this is based on the overall score of all precision scores added together.</p>
   */
  MicroPrecision?: number;

  /**
   * <p>A measure of how complete the classifier results are for the test data. High recall means
   *       that the classifier returned most of the relevant results. Specifically, this indicates how
   *       many of the correct categories in the text that the model can predict. It is a percentage of
   *       correct categories in the text that can found. Instead of averaging the recall scores of all
   *       labels (as with Recall), micro Recall is based on the overall score of all recall scores added
   *       together.</p>
   */
  MicroRecall?: number;

  /**
   * <p>A measure of how accurate the classifier results are for the test data. It is a
   *       combination of the <code>Micro Precision</code> and <code>Micro Recall</code> values. The
   *         <code>Micro F1Score</code> is the harmonic mean of the two scores. The highest score is 1,
   *       and the worst score is 0.</p>
   */
  MicroF1Score?: number;

  /**
   * <p>Indicates the fraction of labels that are incorrectly predicted. Also seen as the fraction
   *       of wrong labels compared to the total number of labels. Scores closer to zero are
   *       better.</p>
   */
  HammingLoss?: number;
}

/**
 * @public
 * <p>Provides information about a document classifier.</p>
 */
export interface ClassifierMetadata {
  /**
   * <p>The number of labels in the input data. </p>
   */
  NumberOfLabels?: number;

  /**
   * <p>The number of documents in the input data that were used to train the classifier.
   *       Typically this is 80 to 90 percent of the input documents.</p>
   */
  NumberOfTrainedDocuments?: number;

  /**
   * <p>The number of documents in the input data that were used to test the classifier. Typically
   *       this is 10 to 20 percent of the input documents, up to 10,000 documents.</p>
   */
  NumberOfTestDocuments?: number;

  /**
   * <p> Describes the result metrics for the test data associated with an documentation
   *       classifier.</p>
   */
  EvaluationMetrics?: ClassifierEvaluationMetrics;
}

/**
 * @public
 */
export enum DocumentReadAction {
  TEXTRACT_ANALYZE_DOCUMENT = "TEXTRACT_ANALYZE_DOCUMENT",
  TEXTRACT_DETECT_DOCUMENT_TEXT = "TEXTRACT_DETECT_DOCUMENT_TEXT",
}

/**
 * @public
 */
export enum DocumentReadMode {
  FORCE_DOCUMENT_READ_ACTION = "FORCE_DOCUMENT_READ_ACTION",
  SERVICE_DEFAULT = "SERVICE_DEFAULT",
}

/**
 * @public
 */
export enum DocumentReadFeatureTypes {
  FORMS = "FORMS",
  TABLES = "TABLES",
}

/**
 * @public
 * <p>Provides configuration parameters to override the default actions for extracting text from PDF documents and image files. </p>
 *          <p> By default, Amazon Comprehend performs the following actions to extract text from files, based on the input file type: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Word files</b> - Amazon Comprehend parser extracts the text. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Digital PDF files</b> - Amazon Comprehend parser extracts the text. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Image files and scanned PDF files</b> - Amazon Comprehend uses the Amazon Textract <code>DetectDocumentText</code>
 *           API to extract the text. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <code>DocumentReaderConfig</code> does not apply to plain text files or Word files.</p>
 *          <p>
 *         For image files and PDF documents, you can override these default actions using the fields listed below.
 *         For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/detecting-cer.html#detecting-cer-pdf">
 *         Setting text extraction options</a>.
 *     </p>
 */
export interface DocumentReaderConfig {
  /**
   * <p>This field defines the Amazon Textract API operation that Amazon Comprehend uses to extract text from PDF files and image files.
   *       Enter one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TEXTRACT_DETECT_DOCUMENT_TEXT</code> - The Amazon Comprehend service uses the <code>DetectDocumentText</code>
   *            API operation. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TEXTRACT_ANALYZE_DOCUMENT</code> - The Amazon Comprehend service uses the <code>AnalyzeDocument</code>
   *           API operation. </p>
   *             </li>
   *          </ul>
   */
  DocumentReadAction: DocumentReadAction | string | undefined;

  /**
   * <p>Determines the text extraction actions for PDF files. Enter one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SERVICE_DEFAULT</code> - use the Amazon Comprehend service defaults for PDF files.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FORCE_DOCUMENT_READ_ACTION</code> - Amazon Comprehend uses the Textract API specified by
   *           DocumentReadAction for all PDF files, including digital PDF files. </p>
   *             </li>
   *          </ul>
   */
  DocumentReadMode?: DocumentReadMode | string;

  /**
   * <p>Specifies the type of Amazon Textract features to apply. If you chose <code>TEXTRACT_ANALYZE_DOCUMENT</code>
   *       as the read action, you must specify one or both of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TABLES</code> - Returns information about any tables that are detected in the input document. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FORMS</code> - Returns information and the data from any forms that are detected in the input document. </p>
   *             </li>
   *          </ul>
   */
  FeatureTypes?: (DocumentReadFeatureTypes | string)[];
}

/**
 * @public
 */
export interface ClassifyDocumentRequest {
  /**
   * <p>The document text to be analyzed. If you enter text using this parameter,
   *       do not use the <code>Bytes</code> parameter.</p>
   */
  Text?: string;

  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>Use the <code>Bytes</code> parameter to input a text, PDF, Word or image file.
   *       You can also use the <code>Bytes</code> parameter to input an Amazon Textract <code>DetectDocumentText</code>
   *       or <code>AnalyzeDocument</code> output file.</p>
   *          <p>Provide the input document as a sequence of base64-encoded bytes.
   *       If your code uses an Amazon Web Services SDK to classify documents, the SDK may encode
   *       the document file bytes for you. </p>
   *          <p>The maximum length of this field depends on the input document type. For details, see
   *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync.html">
   *         Inputs for real-time custom analysis</a> in the Comprehend Developer Guide. </p>
   *          <p>If you use the <code>Bytes</code> parameter, do not use the <code>Text</code> parameter.</p>
   */
  Bytes?: Uint8Array;

  /**
   * <p>Provides configuration parameters to override the default actions for extracting text
   *       from PDF documents and image files.</p>
   */
  DocumentReaderConfig?: DocumentReaderConfig;
}

/**
 * @public
 * <p>Specifies the class that categorizes the document being analyzed</p>
 */
export interface DocumentClass {
  /**
   * <p>The name of the class.</p>
   */
  Name?: string;

  /**
   * <p>The confidence score that Amazon Comprehend has this class correctly attributed.</p>
   */
  Score?: number;

  /**
   * <p>Page number in the input document. This field is present
   *       in the response only if your request includes the <code>Byte</code> parameter. </p>
   */
  Page?: number;
}

/**
 * @public
 * <p>Array of the number of characters extracted from each page.</p>
 */
export interface ExtractedCharactersListItem {
  /**
   * <p>Page number.</p>
   */
  Page?: number;

  /**
   * <p>Number of characters extracted from each page.</p>
   */
  Count?: number;
}

/**
 * @public
 * <p>Information about the document, discovered during text extraction.</p>
 */
export interface DocumentMetadata {
  /**
   * <p>Number of pages in the document.</p>
   */
  Pages?: number;

  /**
   * <p>List of pages in the document, with the number of characters extracted from each page.</p>
   */
  ExtractedCharacters?: ExtractedCharactersListItem[];
}

/**
 * @public
 */
export enum DocumentType {
  IMAGE = "IMAGE",
  MS_WORD = "MS_WORD",
  NATIVE_PDF = "NATIVE_PDF",
  PLAIN_TEXT = "PLAIN_TEXT",
  SCANNED_PDF = "SCANNED_PDF",
  TEXTRACT_ANALYZE_DOCUMENT_JSON = "TEXTRACT_ANALYZE_DOCUMENT_JSON",
  TEXTRACT_DETECT_DOCUMENT_TEXT_JSON = "TEXTRACT_DETECT_DOCUMENT_TEXT_JSON",
}

/**
 * @public
 * <p>Document type for each page in the document.</p>
 */
export interface DocumentTypeListItem {
  /**
   * <p>Page number.</p>
   */
  Page?: number;

  /**
   * <p>Document type.</p>
   */
  Type?: DocumentType | string;
}

/**
 * @public
 */
export enum PageBasedErrorCode {
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
  PAGE_CHARACTERS_EXCEEDED = "PAGE_CHARACTERS_EXCEEDED",
  PAGE_SIZE_EXCEEDED = "PAGE_SIZE_EXCEEDED",
  TEXTRACT_BAD_PAGE = "TEXTRACT_BAD_PAGE",
  TEXTRACT_PROVISIONED_THROUGHPUT_EXCEEDED = "TEXTRACT_PROVISIONED_THROUGHPUT_EXCEEDED",
}

/**
 * @public
 * <p>Text extraction encountered one or more page-level errors in the input document.</p>
 *          <p>The <code>ErrorCode</code> contains one of the following values:</p>
 *          <ul>
 *             <li>
 *                <p>TEXTRACT_BAD_PAGE - Amazon Textract cannot read the page. For more information
 *           about page limits in Amazon Textract, see <a href="https://docs.aws.amazon.com/textract/latest/dg/limits-document.html">
 *             Page Quotas in Amazon Textract</a>.</p>
 *             </li>
 *             <li>
 *                <p>TEXTRACT_PROVISIONED_THROUGHPUT_EXCEEDED - The number of requests exceeded your throughput limit.
 *           For more information about throughput quotas in Amazon Textract, see <a href="https://docs.aws.amazon.com/textract/latest/dg/limits-quotas-explained.html">
 *             Default quotas in Amazon Textract</a>.</p>
 *             </li>
 *             <li>
 *                <p>PAGE_CHARACTERS_EXCEEDED - Too many text characters on the page (10,000 characters maximum).</p>
 *             </li>
 *             <li>
 *                <p>PAGE_SIZE_EXCEEDED - The maximum page size is 10 MB.</p>
 *             </li>
 *             <li>
 *                <p>INTERNAL_SERVER_ERROR - The request encountered a service issue. Try the API request again.</p>
 *             </li>
 *          </ul>
 */
export interface ErrorsListItem {
  /**
   * <p>Page number where the error occurred.</p>
   */
  Page?: number;

  /**
   * <p>Error code for the cause of the error.</p>
   */
  ErrorCode?: PageBasedErrorCode | string;

  /**
   * <p>Text message explaining the reason for the error.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * <p>Specifies one of the label or labels that categorize the document being analyzed.</p>
 */
export interface DocumentLabel {
  /**
   * <p>The name of the label.</p>
   */
  Name?: string;

  /**
   * <p>The confidence score that Amazon Comprehend has this label correctly attributed.</p>
   */
  Score?: number;

  /**
   * <p>Page number where the label occurs. This field is present
   *       in the response only if your request includes the <code>Byte</code> parameter. </p>
   */
  Page?: number;
}

/**
 * @public
 */
export interface ClassifyDocumentResponse {
  /**
   * <p>The classes used by the document being analyzed. These are used for multi-class trained
   *       models. Individual classes are mutually exclusive and each document is expected to have only a
   *       single class assigned to it. For example, an animal can be a dog or a cat, but not both at the
   *       same time. </p>
   */
  Classes?: DocumentClass[];

  /**
   * <p>The labels used the document being analyzed. These are used for multi-label trained
   *       models. Individual labels represent different categories that are related in some manner and
   *       are not mutually exclusive. For example, a movie can be just an action movie, or it can be an
   *       action movie, a science fiction movie, and a comedy, all at the same time. </p>
   */
  Labels?: DocumentLabel[];

  /**
   * <p>Extraction information about the document. This field is present
   *       in the response only if your request includes the <code>Byte</code> parameter. </p>
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   * <p>The document type for each page in the input document. This field is present
   *       in the response only if your request includes the <code>Byte</code> parameter. </p>
   */
  DocumentType?: DocumentTypeListItem[];

  /**
   * <p>Page-level errors that the system detected while processing the input document.
   *       The field is empty if the system encountered no errors.</p>
   */
  Errors?: ErrorsListItem[];
}

/**
 * @public
 * <p>The specified resource is not available. Check the resource and try your request
 *       again.</p>
 */
export class ResourceUnavailableException extends __BaseException {
  readonly name: "ResourceUnavailableException" = "ResourceUnavailableException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceUnavailableException, __BaseException>) {
    super({
      name: "ResourceUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ContainsPiiEntitiesRequest {
  /**
   * <p>A UTF-8 text string. The maximum string size is 100 KB.</p>
   */
  Text: string | undefined;

  /**
   * <p>The language of the input documents. Currently, English is the only valid language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

/**
 * @public
 */
export enum PiiEntityType {
  ADDRESS = "ADDRESS",
  AGE = "AGE",
  ALL = "ALL",
  AWS_ACCESS_KEY = "AWS_ACCESS_KEY",
  AWS_SECRET_KEY = "AWS_SECRET_KEY",
  BANK_ACCOUNT_NUMBER = "BANK_ACCOUNT_NUMBER",
  BANK_ROUTING = "BANK_ROUTING",
  CA_HEALTH_NUMBER = "CA_HEALTH_NUMBER",
  CA_SOCIAL_INSURANCE_NUMBER = "CA_SOCIAL_INSURANCE_NUMBER",
  CREDIT_DEBIT_CVV = "CREDIT_DEBIT_CVV",
  CREDIT_DEBIT_EXPIRY = "CREDIT_DEBIT_EXPIRY",
  CREDIT_DEBIT_NUMBER = "CREDIT_DEBIT_NUMBER",
  DATE_TIME = "DATE_TIME",
  DRIVER_ID = "DRIVER_ID",
  EMAIL = "EMAIL",
  INTERNATIONAL_BANK_ACCOUNT_NUMBER = "INTERNATIONAL_BANK_ACCOUNT_NUMBER",
  IN_AADHAAR = "IN_AADHAAR",
  IN_NREGA = "IN_NREGA",
  IN_PERMANENT_ACCOUNT_NUMBER = "IN_PERMANENT_ACCOUNT_NUMBER",
  IN_VOTER_NUMBER = "IN_VOTER_NUMBER",
  IP_ADDRESS = "IP_ADDRESS",
  LICENSE_PLATE = "LICENSE_PLATE",
  MAC_ADDRESS = "MAC_ADDRESS",
  NAME = "NAME",
  PASSPORT_NUMBER = "PASSPORT_NUMBER",
  PASSWORD = "PASSWORD",
  PHONE = "PHONE",
  PIN = "PIN",
  SSN = "SSN",
  SWIFT_CODE = "SWIFT_CODE",
  UK_NATIONAL_HEALTH_SERVICE_NUMBER = "UK_NATIONAL_HEALTH_SERVICE_NUMBER",
  UK_NATIONAL_INSURANCE_NUMBER = "UK_NATIONAL_INSURANCE_NUMBER",
  UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER = "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
  URL = "URL",
  USERNAME = "USERNAME",
  US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER = "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER",
  VEHICLE_IDENTIFICATION_NUMBER = "VEHICLE_IDENTIFICATION_NUMBER",
}

/**
 * @public
 * <p>Specifies one of the label or labels that categorize the personally identifiable
 *       information (PII) entity being analyzed.</p>
 */
export interface EntityLabel {
  /**
   * <p>The name of the label.</p>
   */
  Name?: PiiEntityType | string;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of the
   *       detection.</p>
   */
  Score?: number;
}

/**
 * @public
 */
export interface ContainsPiiEntitiesResponse {
  /**
   * <p>The labels used in the document being analyzed. Individual labels represent personally
   *       identifiable information (PII) entity types.</p>
   */
  Labels?: EntityLabel[];
}

/**
 * @public
 */
export enum DatasetType {
  TEST = "TEST",
  TRAIN = "TRAIN",
}

/**
 * @public
 * <p>An augmented manifest file that provides training data for your custom model.
 *       An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.</p>
 */
export interface DatasetAugmentedManifestsListItem {
  /**
   * <p>The JSON attribute that contains the annotations for your training documents. The number
   *       of attribute names that you specify depends on whether your augmented manifest file is the
   *       output of a single labeling job or a chained labeling job.</p>
   *          <p>If your file is the output of a single labeling job, specify the LabelAttributeName key
   *       that was used when the job was created in Ground Truth.</p>
   *          <p>If your file is the output of a chained labeling job, specify the LabelAttributeName key
   *       for one or more jobs in the chain. Each LabelAttributeName key provides the annotations from
   *       an individual job.</p>
   */
  AttributeNames: string[] | undefined;

  /**
   * <p>The Amazon S3 location of the augmented manifest file.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>The S3 prefix to the annotation files that are referred in the augmented manifest
   *       file.</p>
   */
  AnnotationDataS3Uri?: string;

  /**
   * <p>The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest
   *       file.</p>
   */
  SourceDocumentsS3Uri?: string;

  /**
   * <p>The type of augmented manifest. If you don't specify, the default is PlainTextDocument. </p>
   *          <p>
   *             <code>PLAIN_TEXT_DOCUMENT</code> A document type that represents any unicode text that
   *       is encoded in UTF-8.</p>
   */
  DocumentType?: AugmentedManifestsDocumentTypeFormat | string;
}

/**
 * @public
 */
export enum DatasetDataFormat {
  AUGMENTED_MANIFEST = "AUGMENTED_MANIFEST",
  COMPREHEND_CSV = "COMPREHEND_CSV",
}

/**
 * @public
 * <p>Describes the dataset input data configuration for a document classifier model.</p>
 *          <p>For more information on how the input file is formatted, see  <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html">Preparing training data</a>
 *       in the Comprehend Developer Guide. </p>
 */
export interface DatasetDocumentClassifierInputDataConfig {
  /**
   * <p>The Amazon S3 URI for the input data. The S3 bucket must be in the same Region as the API
   *       endpoint that you are calling. The URI can point to a single input file or it can provide the
   *       prefix for a collection of input files.</p>
   *          <p>For example, if you use the URI <code>S3://bucketName/prefix</code>, if the prefix is a
   *       single file, Amazon Comprehend uses that file as input. If more than one file begins with the
   *       prefix, Amazon Comprehend uses all of them as input.</p>
   *          <p>This parameter is required if you set <code>DataFormat</code> to
   *       <code>COMPREHEND_CSV</code>.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>Indicates the delimiter used to separate each label for training a multi-label classifier.
   *       The default delimiter between labels is a pipe (|). You can use a different character as a
   *       delimiter (if it's an allowed character) by specifying it under Delimiter for labels. If the
   *       training documents use a delimiter other than the default or the delimiter you specify, the
   *       labels on that line will be combined to make a single unique label, such as
   *       LABELLABELLABEL.</p>
   */
  LabelDelimiter?: string;
}

/**
 * @public
 * <p>Describes the annotations associated with a entity recognizer.</p>
 */
export interface DatasetEntityRecognizerAnnotations {
  /**
   * <p> Specifies the Amazon S3 location where the training documents for an entity recognizer
   *       are located. The URI must be in the same Region as the API endpoint that you are
   *       calling.</p>
   */
  S3Uri: string | undefined;
}

/**
 * @public
 */
export enum InputFormat {
  ONE_DOC_PER_FILE = "ONE_DOC_PER_FILE",
  ONE_DOC_PER_LINE = "ONE_DOC_PER_LINE",
}

/**
 * @public
 * <p>Describes the documents submitted with a dataset for an entity recognizer model.</p>
 */
export interface DatasetEntityRecognizerDocuments {
  /**
   * <p> Specifies the Amazon S3 location where the documents for the dataset
   *       are located.  </p>
   */
  S3Uri: string | undefined;

  /**
   * <p> Specifies how the text in an input file should be processed. This is optional, and the
   *       default is ONE_DOC_PER_LINE. ONE_DOC_PER_FILE - Each file is considered a separate document.
   *       Use this option when you are processing large documents, such as newspaper articles or
   *       scientific papers. ONE_DOC_PER_LINE - Each line in a file is considered a separate document.
   *       Use this option when you are processing many short documents, such as text messages.</p>
   */
  InputFormat?: InputFormat | string;
}

/**
 * @public
 * <p>Describes the dataset entity list for an entity recognizer model.</p>
 *          <p>For more information on how the input file is formatted, see  <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-training-data-cer.html">Preparing training data</a>
 *       in the Comprehend Developer Guide. </p>
 */
export interface DatasetEntityRecognizerEntityList {
  /**
   * <p>Specifies the Amazon S3 location where the entity list is located.</p>
   */
  S3Uri: string | undefined;
}

/**
 * @public
 * <p>Specifies the format and location of the input data. You must provide either the
 *       <code>Annotations</code> parameter or the <code>EntityList</code> parameter.</p>
 */
export interface DatasetEntityRecognizerInputDataConfig {
  /**
   * <p>The S3 location of the annotation documents for your custom entity recognizer.</p>
   */
  Annotations?: DatasetEntityRecognizerAnnotations;

  /**
   * <p>The format and location of the training documents for your custom entity
   *       recognizer.</p>
   */
  Documents: DatasetEntityRecognizerDocuments | undefined;

  /**
   * <p>The S3 location of the entity list for your custom entity recognizer.</p>
   */
  EntityList?: DatasetEntityRecognizerEntityList;
}

/**
 * @public
 * <p>Specifies the format and location of the input data for the dataset.</p>
 */
export interface DatasetInputDataConfig {
  /**
   * <p>A list of augmented manifest files that provide training data for your custom model. An
   *       augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground
   *       Truth. </p>
   */
  AugmentedManifests?: DatasetAugmentedManifestsListItem[];

  /**
   * <p>
   *             <code>COMPREHEND_CSV</code>: The data format is a two-column CSV file, where the
   *       first column contains labels and the second column contains documents.</p>
   *          <p>
   *             <code>AUGMENTED_MANIFEST</code>: The data format  </p>
   */
  DataFormat?: DatasetDataFormat | string;

  /**
   * <p>The input properties for training a document classifier model. </p>
   *          <p>For more information on how the input file is formatted, see  <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html">Preparing training data</a>
   *       in the Comprehend Developer Guide. </p>
   */
  DocumentClassifierInputDataConfig?: DatasetDocumentClassifierInputDataConfig;

  /**
   * <p>The input properties for training an entity recognizer model.</p>
   */
  EntityRecognizerInputDataConfig?: DatasetEntityRecognizerInputDataConfig;
}

/**
 * @public
 * <p>A key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For
 *       example, a tag with the key-value pair ‘Department’:’Sales’ might be added to a resource to
 *       indicate its use by a particular department. </p>
 */
export interface Tag {
  /**
   * <p>The initial part of a key-value pair that forms a tag associated with a given resource.
   *       For instance, if you want to show which resources are used by which departments, you might use
   *       “Department” as the key portion of the pair, with multiple possible values such as “sales,”
   *       “legal,” and “administration.” </p>
   */
  Key: string | undefined;

  /**
   * <p> The second part of a key-value pair that forms a tag associated with a given resource.
   *       For instance, if you want to show which resources are used by which departments, you might use
   *       “Department” as the initial (key) portion of the pair, with a value of “sales” to indicate the
   *       sales department. </p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface CreateDatasetRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel of the flywheel to receive the data.</p>
   */
  FlywheelArn: string | undefined;

  /**
   * <p>Name of the dataset.</p>
   */
  DatasetName: string | undefined;

  /**
   * <p>The dataset type. You can specify that the data in a dataset is for training
   *       the model or for testing the model.</p>
   */
  DatasetType?: DatasetType | string;

  /**
   * <p>Description of the dataset.</p>
   */
  Description?: string;

  /**
   * <p>Information about the input data configuration. The type of input data varies based
   *       on the format of the input and whether the data is for a classifier model or an entity recognition model.</p>
   */
  InputDataConfig: DatasetInputDataConfig | undefined;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Tags for the dataset.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateDatasetResponse {
  /**
   * <p>The ARN of the dataset.</p>
   */
  DatasetArn?: string;
}

/**
 * @public
 * <p>The specified resource name is already in use. Use a different name and try your request
 *       again.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The maximum number of resources per account has been exceeded. Review the resources, and
 *       then try your request again.</p>
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>) {
    super({
      name: "ResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The request contains more tags than can be associated with a resource (50 tags per
 *       resource). The maximum number of tags includes both existing tags and those included in your
 *       current request. </p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export enum DocumentClassifierDataFormat {
  AUGMENTED_MANIFEST = "AUGMENTED_MANIFEST",
  COMPREHEND_CSV = "COMPREHEND_CSV",
}

/**
 * @public
 * <p>The input properties for training a document classifier. </p>
 *          <p>For more information on how the input file is formatted, see
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html">Preparing training data</a> in the Comprehend Developer Guide.
 *     </p>
 */
export interface DocumentClassifierInputDataConfig {
  /**
   * <p>The format of your training data:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPREHEND_CSV</code>: A two-column CSV file, where labels are provided in the
   *           first column, and documents are provided in the second. If you use this value, you must
   *           provide the <code>S3Uri</code> parameter in your request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUGMENTED_MANIFEST</code>: A labeled dataset that is produced by Amazon
   *           SageMaker Ground Truth. This file is in JSON lines format. Each line is a complete JSON
   *           object that contains a training document and its associated labels. </p>
   *                <p>If you use this value, you must provide the <code>AugmentedManifests</code> parameter
   *           in your request.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify a value, Amazon Comprehend uses <code>COMPREHEND_CSV</code> as the
   *       default.</p>
   */
  DataFormat?: DocumentClassifierDataFormat | string;

  /**
   * <p>The Amazon S3 URI for the input data. The S3 bucket must be in the same Region as the API
   *       endpoint that you are calling. The URI can point to a single input file or it can provide the
   *       prefix for a collection of input files.</p>
   *          <p>For example, if you use the URI <code>S3://bucketName/prefix</code>, if the prefix is a
   *       single file, Amazon Comprehend uses that file as input. If more than one file begins with the
   *       prefix, Amazon Comprehend uses all of them as input.</p>
   *          <p>This parameter is required if you set <code>DataFormat</code> to
   *         <code>COMPREHEND_CSV</code>.</p>
   */
  S3Uri?: string;

  /**
   * <p>This specifies the Amazon S3 location where the test annotations for an entity recognizer
   *       are located. The URI must be in the same Amazon Web Services Region as the API endpoint that you are
   *       calling. </p>
   */
  TestS3Uri?: string;

  /**
   * <p>Indicates the delimiter used to separate each label for training a multi-label classifier.
   *       The default delimiter between labels is a pipe (|). You can use a different character as a
   *       delimiter (if it's an allowed character) by specifying it under Delimiter for labels. If the
   *       training documents use a delimiter other than the default or the delimiter you specify, the
   *       labels on that line will be combined to make a single unique label, such as
   *       LABELLABELLABEL.</p>
   */
  LabelDelimiter?: string;

  /**
   * <p>A list of augmented manifest files that provide training data for your custom model. An
   *       augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground
   *       Truth.</p>
   *          <p>This parameter is required if you set <code>DataFormat</code> to
   *         <code>AUGMENTED_MANIFEST</code>.</p>
   */
  AugmentedManifests?: AugmentedManifestsListItem[];
}

/**
 * @public
 */
export enum DocumentClassifierMode {
  MULTI_CLASS = "MULTI_CLASS",
  MULTI_LABEL = "MULTI_LABEL",
}

/**
 * @public
 * <p>Provides output results configuration parameters for custom classifier jobs. </p>
 */
export interface DocumentClassifierOutputDataConfig {
  /**
   * <p>When you use the <code>OutputDataConfig</code> object while creating a custom
   *       classifier, you specify the Amazon S3 location where you want to write the confusion matrix.
   *       The URI must be in the same Region as the API endpoint that you are calling. The location is
   *       used as the prefix for the actual location of this output file.</p>
   *          <p>When the custom classifier job is finished, the service creates the output file in a
   *       directory specific to the job. The <code>S3Uri</code> field contains the location of the
   *       output file, called <code>output.tar.gz</code>. It is a compressed archive that contains the
   *       confusion matrix.</p>
   */
  S3Uri?: string;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the
   *       output results from an analysis job. The KmsKeyId can be one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>KMS Key Alias: <code>"alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ARN of a KMS Key Alias:
   *             <code>"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon S3 prefix for the data lake location of the flywheel statistics.</p>
   */
  FlywheelStatsS3Prefix?: string;
}

/**
 * @public
 * <p> Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
 *       the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
 *         VPC</a>. </p>
 */
export interface VpcConfig {
  /**
   * <p>The ID number for a security group on an instance of your private VPC. Security groups on
   *       your VPC function serve as a virtual firewall to control inbound and outbound traffic and
   *       provides security for the resources that you’ll be accessing on the VPC. This ID number is
   *       preceded by "sg-", for instance: "sg-03b388029b0a285ea". For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html">Security
   *         Groups for your VPC</a>. </p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The ID for each subnet being used in your private VPC. This subnet is a subset of the a
   *       range of IPv4 addresses used by the VPC and is specific to a given availability zone in the
   *       VPC’s Region. This ID number is preceded by "subnet-", for instance:
   *       "subnet-04ccf456919e69055". For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">VPCs and
   *         Subnets</a>. </p>
   */
  Subnets: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDocumentClassifierRequest {
  /**
   * <p>The name of the document classifier.</p>
   */
  DocumentClassifierName: string | undefined;

  /**
   * <p>The version name given to the newly created classifier. Version names can have a maximum
   *       of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The
   *       version name must be unique among all models with the same classifier name in the Amazon Web Services account/Amazon Web Services Region.</p>
   */
  VersionName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>Tags to associate with the document classifier. A tag is a key-value
   *       pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with
   *       "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *     </p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: DocumentClassifierInputDataConfig | undefined;

  /**
   * <p>Enables the addition of output results configuration parameters for custom classifier
   *       jobs.</p>
   */
  OutputDataConfig?: DocumentClassifierOutputDataConfig;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The language of the input documents. You can specify any of the languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your custom classifier. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Indicates the mode in which the classifier will be trained. The classifier can be trained
   *       in multi-class mode, which identifies one and only one class for each document, or multi-label
   *       mode, which identifies one or more labels for each document. In multi-label mode, multiple
   *       labels for an individual document are separated by a delimiter. The default delimiter between
   *       labels is a pipe (|).</p>
   */
  Mode?: DocumentClassifierMode | string;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt
   *       trained custom models. The ModelKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ModelKmsKeyId?: string;

  /**
   * <p>The resource-based policy to attach to your custom document classifier model. You can use
   *       this policy to allow another Amazon Web Services account to import your custom model.</p>
   *          <p>Provide your policy as a JSON body that you enter as a UTF-8 encoded string without line
   *       breaks. To provide valid JSON, enclose the attribute names and values in double quotes. If the
   *       JSON body is also enclosed in double quotes, then you must escape the double quotes that are
   *       inside the policy:</p>
   *          <p>
   *             <code>"\{\"attribute\": \"value\", \"attribute\": [\"value\"]\}"</code>
   *          </p>
   *          <p>To avoid escaping quotes, you can use single quotes to enclose the policy and double
   *       quotes to enclose the JSON names and values:</p>
   *          <p>
   *             <code>'\{"attribute": "value", "attribute": ["value"]\}'</code>
   *          </p>
   */
  ModelPolicy?: string;
}

/**
 * @public
 */
export interface CreateDocumentClassifierResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier.</p>
   */
  DocumentClassifierArn?: string;
}

/**
 * @public
 * <p>The KMS customer managed key (CMK) entered cannot be validated. Verify the key and
 *       re-enter it.</p>
 */
export class KmsKeyValidationException extends __BaseException {
  readonly name: "KmsKeyValidationException" = "KmsKeyValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsKeyValidationException, __BaseException>) {
    super({
      name: "KmsKeyValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsKeyValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateEndpointRequest {
  /**
   * <p>This is the descriptive suffix that becomes part of the <code>EndpointArn</code> used for
   *       all subsequent requests to this resource. </p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the model to which the endpoint will be
   *       attached.</p>
   */
  ModelArn?: string;

  /**
   * <p> The desired number of inference units to be used by the model using this endpoint.
   *
   *       Each inference unit represents of a throughput of 100 characters per second.</p>
   */
  DesiredInferenceUnits: number | undefined;

  /**
   * <p>An idempotency token provided by the customer. If this token matches a previous endpoint
   *       creation request, Amazon Comprehend will not return a <code>ResourceInUseException</code>.
   *     </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Tags to associate with the endpoint. A tag is a key-value pair that adds
   *       metadata to the endpoint. For example, a tag with "Sales" as the key might be added to an
   *       endpoint to indicate its use by the sales department. </p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to trained custom models encrypted with a customer
   *       managed key (ModelKmsKeyId).</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel to which the endpoint will be
   *       attached.</p>
   */
  FlywheelArn?: string;
}

/**
 * @public
 */
export interface CreateEndpointResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint being created.</p>
   */
  EndpointArn?: string;

  /**
   * <p>The Amazon Resource Number (ARN) of the model to which the endpoint is
   *       attached.</p>
   */
  ModelArn?: string;
}

/**
 * @public
 * <p>Describes the annotations associated with a entity recognizer.</p>
 */
export interface EntityRecognizerAnnotations {
  /**
   * <p> Specifies the Amazon S3 location where the annotations for an entity recognizer are
   *       located. The URI must be in the same Region as the API endpoint that you are calling.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p> Specifies the Amazon S3 location where the test annotations for an entity recognizer are
   *       located. The URI must be in the same Region as the API endpoint that you are calling.</p>
   */
  TestS3Uri?: string;
}

/**
 * @public
 */
export enum EntityRecognizerDataFormat {
  AUGMENTED_MANIFEST = "AUGMENTED_MANIFEST",
  COMPREHEND_CSV = "COMPREHEND_CSV",
}

/**
 * @public
 * <p>Describes the training documents submitted with an entity recognizer.</p>
 */
export interface EntityRecognizerDocuments {
  /**
   * <p> Specifies the Amazon S3 location where the training documents for an entity recognizer
   *       are located. The URI must be in the same Region as the API endpoint that you are
   *       calling.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p> Specifies the Amazon S3 location where the test documents for an entity recognizer are
   *       located. The URI must be in the same Amazon Web Services Region as the API endpoint that you are
   *       calling.</p>
   */
  TestS3Uri?: string;

  /**
   * <p> Specifies how the text in an input file should be processed. This is optional, and the
   *       default is ONE_DOC_PER_LINE. ONE_DOC_PER_FILE - Each file is considered a separate document.
   *       Use this option when you are processing large documents, such as newspaper articles or
   *       scientific papers. ONE_DOC_PER_LINE - Each line in a file is considered a separate document.
   *       Use this option when you are processing many short documents, such as text messages.</p>
   */
  InputFormat?: InputFormat | string;
}

/**
 * @public
 * <p>Describes the entity list submitted with an entity recognizer.</p>
 */
export interface EntityRecognizerEntityList {
  /**
   * <p>Specifies the Amazon S3 location where the entity list is located. The URI must be in the
   *       same Region as the API endpoint that you are calling.</p>
   */
  S3Uri: string | undefined;
}

/**
 * @public
 * <p>An entity type within a labeled training dataset that Amazon Comprehend uses to train a
 *       custom entity recognizer.</p>
 */
export interface EntityTypesListItem {
  /**
   * <p>An entity type within a labeled training dataset that Amazon Comprehend uses to train a
   *       custom entity recognizer.</p>
   *          <p>Entity types must not contain the following invalid characters: \n (line break), \\n
   *       (escaped line break, \r (carriage return), \\r (escaped carriage return), \t (tab), \\t
   *       (escaped tab), space, and , (comma).</p>
   */
  Type: string | undefined;
}

/**
 * @public
 * <p>Specifies the format and location of the input data.</p>
 */
export interface EntityRecognizerInputDataConfig {
  /**
   * <p>The format of your training data:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPREHEND_CSV</code>: A CSV file that supplements your training documents. The
   *           CSV file contains information about the custom entities that your trained model will
   *           detect. The required format of the file depends on whether you are providing annotations
   *           or an entity list.</p>
   *                <p>If you use this value, you must provide your CSV file by using either the
   *             <code>Annotations</code> or <code>EntityList</code> parameters. You must provide your
   *           training documents by using the <code>Documents</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUGMENTED_MANIFEST</code>: A labeled dataset that is produced by Amazon
   *           SageMaker Ground Truth. This file is in JSON lines format. Each line is a complete JSON
   *           object that contains a training document and its labels. Each label annotates a named
   *           entity in the training document. </p>
   *                <p>If you use this value, you must provide the <code>AugmentedManifests</code> parameter
   *           in your request.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify a value, Amazon Comprehend uses <code>COMPREHEND_CSV</code> as the
   *       default.</p>
   */
  DataFormat?: EntityRecognizerDataFormat | string;

  /**
   * <p>The entity types in the labeled training data that Amazon Comprehend uses to train the
   *       custom entity recognizer. Any entity types that you don't specify are ignored.</p>
   *          <p>A maximum of 25 entity types can be used at one time to train an entity recognizer. Entity
   *       types must not contain the following invalid characters: \n (line break), \\n (escaped line
   *       break), \r (carriage return), \\r (escaped carriage return), \t (tab), \\t (escaped tab),
   *       space, and , (comma). </p>
   */
  EntityTypes: EntityTypesListItem[] | undefined;

  /**
   * <p>The S3 location of the folder that contains the training documents for your custom entity
   *       recognizer.</p>
   *          <p>This parameter is required if you set <code>DataFormat</code> to
   *         <code>COMPREHEND_CSV</code>.</p>
   */
  Documents?: EntityRecognizerDocuments;

  /**
   * <p>The S3 location of the CSV file that annotates your training documents.</p>
   */
  Annotations?: EntityRecognizerAnnotations;

  /**
   * <p>The S3 location of the CSV file that has the entity list for your custom entity
   *       recognizer.</p>
   */
  EntityList?: EntityRecognizerEntityList;

  /**
   * <p>A list of augmented manifest files that provide training data for your custom model. An
   *       augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground
   *       Truth.</p>
   *          <p>This parameter is required if you set <code>DataFormat</code> to
   *         <code>AUGMENTED_MANIFEST</code>.</p>
   */
  AugmentedManifests?: AugmentedManifestsListItem[];
}

/**
 * @public
 */
export interface CreateEntityRecognizerRequest {
  /**
   * <p>The name given to the newly created recognizer. Recognizer names can be a maximum of 256
   *       characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The name
   *       must be unique in the account/Region.</p>
   */
  RecognizerName: string | undefined;

  /**
   * <p>The version name given to the newly created recognizer. Version names can be a maximum of
   *       256 characters. Alphanumeric characters, hyphens (-) and underscores (_) are allowed. The
   *       version name must be unique among all models with the same recognizer name in the account/Region.</p>
   */
  VersionName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>Tags to associate with the entity recognizer. A tag is a key-value pair
   *       that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with
   *       "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *     </p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies the format and location of the input data. The S3 bucket containing the input
   *       data must be located in the same Region as the entity recognizer being created. </p>
   */
  InputDataConfig: EntityRecognizerInputDataConfig | undefined;

  /**
   * <p> A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p> You can specify any of the following languages: English
   *       ("en"), Spanish ("es"), French ("fr"), Italian ("it"), German ("de"), or Portuguese ("pt").
   *       If you plan to use this entity recognizer with PDF, Word, or image input files, you must
   *       specify English as the language.
   *       All training documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your custom entity recognizer. For more information, see
   *       <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt
   *       trained custom models. The ModelKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ModelKmsKeyId?: string;

  /**
   * <p>The JSON resource-based policy to attach to your custom entity recognizer model. You can
   *       use this policy to allow another Amazon Web Services account to import your custom model.</p>
   *          <p>Provide your JSON as a UTF-8 encoded string without line breaks. To provide valid JSON for
   *       your policy, enclose the attribute names and values in double quotes. If the JSON body is also
   *       enclosed in double quotes, then you must escape the double quotes that are inside the
   *       policy:</p>
   *          <p>
   *             <code>"\{\"attribute\": \"value\", \"attribute\": [\"value\"]\}"</code>
   *          </p>
   *          <p>To avoid escaping quotes, you can use single quotes to enclose the policy and double
   *       quotes to enclose the JSON names and values:</p>
   *          <p>
   *             <code>'\{"attribute": "value", "attribute": ["value"]\}'</code>
   *          </p>
   */
  ModelPolicy?: string;
}

/**
 * @public
 */
export interface CreateEntityRecognizerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   */
  EntityRecognizerArn?: string;
}

/**
 * @public
 * <p>Data security configuration.</p>
 */
export interface DataSecurityConfig {
  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt
   *       trained custom models. The ModelKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ModelKmsKeyId?: string;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt the volume.</p>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt the data in the data lake.</p>
   */
  DataLakeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

/**
 * @public
 */
export enum ModelType {
  DOCUMENT_CLASSIFIER = "DOCUMENT_CLASSIFIER",
  ENTITY_RECOGNIZER = "ENTITY_RECOGNIZER",
}

/**
 * @public
 * <p>Configuration required for a custom classification model.</p>
 */
export interface DocumentClassificationConfig {
  /**
   * <p>Classification mode indicates whether the documents are <code>MULTI_CLASS</code> or <code>MULTI_LABEL</code>.</p>
   */
  Mode: DocumentClassifierMode | string | undefined;

  /**
   * <p>One or more labels to associate with the custom classifier.</p>
   */
  Labels?: string[];
}

/**
 * @public
 * <p>Configuration required for an entity recognition model.</p>
 */
export interface EntityRecognitionConfig {
  /**
   * <p>Up to 25 entity types that the model is trained to recognize.</p>
   */
  EntityTypes: EntityTypesListItem[] | undefined;
}

/**
 * @public
 * <p>Configuration about the custom classifier associated with the flywheel.</p>
 */
export interface TaskConfig {
  /**
   * <p>Language code for the language that the model supports.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>Configuration required for a classification model.</p>
   */
  DocumentClassificationConfig?: DocumentClassificationConfig;

  /**
   * <p>Configuration required for an entity recognition model.</p>
   */
  EntityRecognitionConfig?: EntityRecognitionConfig;
}

/**
 * @public
 */
export interface CreateFlywheelRequest {
  /**
   * <p>Name for the flywheel.</p>
   */
  FlywheelName: string | undefined;

  /**
   * <p>To associate an existing model with the flywheel, specify the Amazon Resource Number (ARN) of the model version.</p>
   */
  ActiveModelArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend the permissions required to access the flywheel data in the data lake.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>Configuration about the custom classifier associated with the flywheel.</p>
   */
  TaskConfig?: TaskConfig;

  /**
   * <p>The model type.</p>
   */
  ModelType?: ModelType | string;

  /**
   * <p>Enter the S3 location for the data lake. You can specify a new S3 bucket or a new folder of an
   *     existing S3 bucket. The flywheel creates the data lake at this location.</p>
   */
  DataLakeS3Uri: string | undefined;

  /**
   * <p>Data security configurations.</p>
   */
  DataSecurityConfig?: DataSecurityConfig;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The tags to associate with this flywheel.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateFlywheelResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel.</p>
   */
  FlywheelArn?: string;

  /**
   * <p>The Amazon Resource Number (ARN) of the active model version.</p>
   */
  ActiveModelArn?: string;
}

/**
 * @public
 */
export interface DeleteDocumentClassifierRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier. </p>
   */
  DocumentClassifierArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDocumentClassifierResponse {}

/**
 * @public
 */
export interface DeleteEndpointRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint being deleted.</p>
   */
  EndpointArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointResponse {}

/**
 * @public
 */
export interface DeleteEntityRecognizerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   */
  EntityRecognizerArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteEntityRecognizerResponse {}

/**
 * @public
 */
export interface DeleteFlywheelRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel to delete.</p>
   */
  FlywheelArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFlywheelResponse {}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom model version that has the policy to delete.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The revision ID of the policy to delete.</p>
   */
  PolicyRevisionId?: string;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {}

/**
 * @public
 */
export interface DescribeDatasetRequest {
  /**
   * <p>The ARN of the dataset.</p>
   */
  DatasetArn: string | undefined;
}

/**
 * @public
 */
export enum DatasetStatus {
  COMPLETED = "COMPLETED",
  CREATING = "CREATING",
  FAILED = "FAILED",
}

/**
 * @public
 * <p>Properties associated with the dataset.</p>
 */
export interface DatasetProperties {
  /**
   * <p>The ARN of the dataset.</p>
   */
  DatasetArn?: string;

  /**
   * <p>The name of the dataset.</p>
   */
  DatasetName?: string;

  /**
   * <p>The dataset type (training data or test data).</p>
   */
  DatasetType?: DatasetType | string;

  /**
   * <p>The S3 URI where the dataset is stored.</p>
   */
  DatasetS3Uri?: string;

  /**
   * <p>Description of the dataset.</p>
   */
  Description?: string;

  /**
   * <p>The dataset status. While the system creates the dataset, the status is <code>CREATING</code>.
   *       When the dataset is ready to use, the status changes to <code>COMPLETED</code>. </p>
   */
  Status?: DatasetStatus | string;

  /**
   * <p>A description of the status of the dataset.</p>
   */
  Message?: string;

  /**
   * <p>The number of documents in the dataset.</p>
   */
  NumberOfDocuments?: number;

  /**
   * <p>Creation time of the dataset.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Time when the data from the dataset becomes available in the data lake.</p>
   */
  EndTime?: Date;
}

/**
 * @public
 */
export interface DescribeDatasetResponse {
  /**
   * <p>The dataset properties.</p>
   */
  DatasetProperties?: DatasetProperties;
}

/**
 * @public
 */
export interface DescribeDocumentClassificationJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The
   *       <code>StartDocumentClassificationJob</code> operation returns this identifier in its response.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * <p>The input properties for an inference job. The document reader config field applies
 *       only to non-text inputs for custom analysis.</p>
 */
export interface InputDataConfig {
  /**
   * <p>The Amazon S3 URI for the input data. The URI must be in same Region as the API
   *       endpoint that you are calling. The URI can point to a single input file or it can provide the
   *       prefix for a collection of data files. </p>
   *          <p>For example, if you use the URI <code>S3://bucketName/prefix</code>, if the prefix is a
   *       single file, Amazon Comprehend uses that file as input. If more than one file begins with the
   *       prefix, Amazon Comprehend uses all of them as input.</p>
   */
  S3Uri: string | undefined;

  /**
   * <p>Specifies how the text in an input file should be processed:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ONE_DOC_PER_FILE</code> - Each file is considered a separate document. Use
   *           this option when you are processing large documents, such as newspaper articles or
   *           scientific papers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ONE_DOC_PER_LINE</code> - Each line in a file is considered a separate
   *           document. Use this option when you are processing many short documents, such as text
   *           messages.</p>
   *             </li>
   *          </ul>
   */
  InputFormat?: InputFormat | string;

  /**
   * <p>Provides configuration parameters to override the default actions for extracting text
   *       from PDF documents and image files.</p>
   */
  DocumentReaderConfig?: DocumentReaderConfig;
}

/**
 * @public
 */
export enum JobStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  STOPPED = "STOPPED",
  STOP_REQUESTED = "STOP_REQUESTED",
  SUBMITTED = "SUBMITTED",
}

/**
 * @public
 * <p>Provides configuration parameters for the output of inference jobs.</p>
 *          <p></p>
 */
export interface OutputDataConfig {
  /**
   * <p>When you use the <code>OutputDataConfig</code> object with asynchronous operations, you
   *       specify the Amazon S3 location where you want to write the output data. The URI must be in the
   *       same Region as the API endpoint that you are calling. The location is used as the prefix for
   *       the actual location of the output file.</p>
   *          <p>When the topic detection job is finished, the service creates an output file in a
   *       directory specific to the job. The <code>S3Uri</code> field contains the location of the
   *       output file, called <code>output.tar.gz</code>. It is a compressed archive that contains the
   *       ouput of the operation.</p>
   *          <p>
   *       For a PII entity detection job, the output file is plain text, not a compressed archive.
   *       The output file name is the same as the input file, with <code>.out</code> appended at the end.
   *     </p>
   */
  S3Uri: string | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the
   *       output results from an analysis job. The KmsKeyId can be one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>KMS Key Alias: <code>"alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ARN of a KMS Key Alias:
   *             <code>"arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;
}

/**
 * @public
 * <p>Provides information about a document classification job.</p>
 */
export interface DocumentClassificationJobProperties {
  /**
   * <p>The identifier assigned to the document classification job.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the document classification job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:document-classification-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The name that you assigned to the document classification job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the document classification job. If the status is
   *         <code>FAILED</code>, the <code>Message</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description of the status of the job.</p>
   */
  Message?: string;

  /**
   * <p>The time that the document classification job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the document classification job completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier. </p>
   */
  DocumentClassifierArn?: string;

  /**
   * <p>The input data configuration that you supplied when you created the document
   *       classification job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The output data configuration that you supplied when you created the document
   *       classification job.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your document classification job. For more information, see <a href="https://docs.aws.amazon.com/vppc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel</p>
   */
  FlywheelArn?: string;
}

/**
 * @public
 */
export interface DescribeDocumentClassificationJobResponse {
  /**
   * <p>An object that describes the properties associated with the document classification
   *       job.</p>
   */
  DocumentClassificationJobProperties?: DocumentClassificationJobProperties;
}

/**
 * @public
 * <p>The specified job was not found. Check the job ID and try again.</p>
 */
export class JobNotFoundException extends __BaseException {
  readonly name: "JobNotFoundException" = "JobNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<JobNotFoundException, __BaseException>) {
    super({
      name: "JobNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, JobNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DescribeDocumentClassifierRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier. The
   *       <code>CreateDocumentClassifier</code> operation returns this identifier in its response.</p>
   */
  DocumentClassifierArn: string | undefined;
}

/**
 * @public
 */
export enum ModelStatus {
  DELETING = "DELETING",
  IN_ERROR = "IN_ERROR",
  STOPPED = "STOPPED",
  STOP_REQUESTED = "STOP_REQUESTED",
  SUBMITTED = "SUBMITTED",
  TRAINED = "TRAINED",
  TRAINED_WITH_WARNING = "TRAINED_WITH_WARNING",
  TRAINING = "TRAINING",
}

/**
 * @public
 * <p>Provides information about a document classifier.</p>
 */
export interface DocumentClassifierProperties {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier.</p>
   */
  DocumentClassifierArn?: string;

  /**
   * <p>The language code for the language of the documents that the classifier was trained
   *       on.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The status of the document classifier. If the status is <code>TRAINED</code> the
   *       classifier is ready to use. If the status is <code>FAILED</code> you can see additional
   *       information about why the classifier wasn't trained in the <code>Message</code> field.</p>
   */
  Status?: ModelStatus | string;

  /**
   * <p>Additional information about the status of the classifier.</p>
   */
  Message?: string;

  /**
   * <p>The time that the document classifier was submitted for training.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that training the document classifier completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>Indicates the time when the training starts on documentation classifiers. You are billed
   *       for the time interval between this time and the value of TrainingEndTime. </p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>The time that training of the document classifier was completed. Indicates the time when
   *       the training completes on documentation classifiers. You are billed for the time interval
   *       between this time and the value of TrainingStartTime.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>The input data configuration that you supplied when you created the document classifier
   *       for training.</p>
   */
  InputDataConfig?: DocumentClassifierInputDataConfig;

  /**
   * <p> Provides output results configuration parameters for custom classifier jobs.</p>
   */
  OutputDataConfig?: DocumentClassifierOutputDataConfig;

  /**
   * <p>Information about the document classifier, including the number of documents used for
   *       training the classifier, the number of documents used for test the classifier, and an accuracy
   *       rating.</p>
   */
  ClassifierMetadata?: ClassifierMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your custom classifier. For more information, see <a href="https://docs.aws.amazon.com/vppc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Indicates the mode in which the specific classifier was trained. This also indicates the
   *       format of input documents and the format of the confusion matrix. Each classifier can only be
   *       trained in one mode and this cannot be changed once the classifier is trained.</p>
   */
  Mode?: DocumentClassifierMode | string;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt
   *       trained custom models. The ModelKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ModelKmsKeyId?: string;

  /**
   * <p>The version name that you assigned to the document classifier.</p>
   */
  VersionName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source model. This model was imported from a
   *       different Amazon Web Services account to create the document classifier model in your Amazon Web Services account.</p>
   */
  SourceModelArn?: string;

  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel</p>
   */
  FlywheelArn?: string;
}

/**
 * @public
 */
export interface DescribeDocumentClassifierResponse {
  /**
   * <p>An object that contains the properties associated with a document classifier.</p>
   */
  DocumentClassifierProperties?: DocumentClassifierProperties;
}

/**
 * @public
 */
export interface DescribeDominantLanguageDetectionJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The
   *       <code>StartDominantLanguageDetectionJob</code> operation returns this identifier in its response.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * <p>Provides information about a dominant language detection job.</p>
 */
export interface DominantLanguageDetectionJobProperties {
  /**
   * <p>The identifier assigned to the dominant language detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dominant language detection job. It is a unique,
   *       fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID.
   *       The format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:dominant-language-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:dominant-language-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The name that you assigned to the dominant language detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the dominant language detection job. If the status is
   *         <code>FAILED</code>, the <code>Message</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description for the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The time that the dominant language detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the dominant language detection job completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input data configuration that you supplied when you created the dominant language
   *       detection job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The output data configuration that you supplied when you created the dominant language
   *       detection job.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your dominant language detection job. For more information, see
   *       <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

/**
 * @public
 */
export interface DescribeDominantLanguageDetectionJobResponse {
  /**
   * <p>An object that contains the properties associated with a dominant language detection
   *       job.</p>
   */
  DominantLanguageDetectionJobProperties?: DominantLanguageDetectionJobProperties;
}

/**
 * @public
 */
export interface DescribeEndpointRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint being described.</p>
   */
  EndpointArn: string | undefined;
}

/**
 * @public
 */
export enum EndpointStatus {
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  IN_SERVICE = "IN_SERVICE",
  UPDATING = "UPDATING",
}

/**
 * @public
 * <p>Specifies information about the specified endpoint.
 *       For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.</p>
 */
export interface EndpointProperties {
  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint.</p>
   */
  EndpointArn?: string;

  /**
   * <p>Specifies the status of the endpoint. Because the endpoint updates and creation are
   *       asynchronous, so customers will need to wait for the endpoint to be <code>Ready</code> status
   *       before making inference requests.</p>
   */
  Status?: EndpointStatus | string;

  /**
   * <p>Specifies a reason for failure in cases of <code>Failed</code> status.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Resource Number (ARN) of the model to which the endpoint is attached.</p>
   */
  ModelArn?: string;

  /**
   * <p>ARN of the new model to use for updating an existing endpoint. This ARN is going to be
   *       different from the model ARN when the update is in progress</p>
   */
  DesiredModelArn?: string;

  /**
   * <p>The desired number of inference units to be used by the model using this endpoint.
   *
   *       Each inference unit represents of a throughput of 100 characters per second.</p>
   */
  DesiredInferenceUnits?: number;

  /**
   * <p>The number of inference units currently used by the model using this endpoint.</p>
   */
  CurrentInferenceUnits?: number;

  /**
   * <p>The creation date and time of the endpoint.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time that the endpoint was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to trained custom models encrypted with a customer
   *       managed key (ModelKmsKeyId).</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>Data access role ARN to use in case the new model is encrypted with a customer KMS
   *       key.</p>
   */
  DesiredDataAccessRoleArn?: string;

  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel</p>
   */
  FlywheelArn?: string;
}

/**
 * @public
 */
export interface DescribeEndpointResponse {
  /**
   * <p>Describes information associated with the specific endpoint.</p>
   */
  EndpointProperties?: EndpointProperties;
}

/**
 * @public
 */
export interface DescribeEntitiesDetectionJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The
   *         <code>StartEntitiesDetectionJob</code> operation returns this identifier in its response.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * <p>Provides information about an entities detection job.</p>
 */
export interface EntitiesDetectionJobProperties {
  /**
   * <p>The identifier assigned to the entities detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the entities detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:entities-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:entities-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The name that you assigned the entities detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the entities detection job. If the status is <code>FAILED</code>,
   *       the <code>Message</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description of the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The time that the entities detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the entities detection job completed</p>
   */
  EndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   */
  EntityRecognizerArn?: string;

  /**
   * <p>The input data configuration that you supplied when you created the entities detection
   *       job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The output data configuration that you supplied when you created the entities detection
   *       job. </p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The language code of the input documents.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your entity detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the flywheel associated with this job.</p>
   */
  FlywheelArn?: string;
}

/**
 * @public
 */
export interface DescribeEntitiesDetectionJobResponse {
  /**
   * <p>An object that contains the properties associated with an entities detection job.</p>
   */
  EntitiesDetectionJobProperties?: EntitiesDetectionJobProperties;
}

/**
 * @public
 */
export interface DescribeEntityRecognizerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   */
  EntityRecognizerArn: string | undefined;
}

/**
 * @public
 * <p>Output data configuration.</p>
 */
export interface EntityRecognizerOutputDataConfig {
  /**
   * <p>The Amazon S3 prefix for the data lake location of the flywheel statistics.</p>
   */
  FlywheelStatsS3Prefix?: string;
}

/**
 * @public
 * <p>Detailed information about the accuracy of an entity recognizer for a specific entity
 *       type. </p>
 */
export interface EntityTypesEvaluationMetrics {
  /**
   * <p>A measure of the usefulness of the recognizer results for a specific entity type in the
   *       test data. High precision means that the recognizer returned substantially more relevant
   *       results than irrelevant ones. </p>
   */
  Precision?: number;

  /**
   * <p>A measure of how complete the recognizer results are for a specific entity type in the
   *       test data. High recall means that the recognizer returned most of the relevant results.</p>
   */
  Recall?: number;

  /**
   * <p>A measure of how accurate the recognizer results are for a specific entity type in the
   *       test data. It is derived from the <code>Precision</code> and <code>Recall</code> values. The
   *         <code>F1Score</code> is the harmonic average of the two scores. The highest score is 1, and
   *       the worst score is 0. </p>
   */
  F1Score?: number;
}

/**
 * @public
 * <p>Individual item from the list of entity types in the metadata of an entity
 *       recognizer.</p>
 */
export interface EntityRecognizerMetadataEntityTypesListItem {
  /**
   * <p>Type of entity from the list of entity types in the metadata of an entity recognizer.
   *     </p>
   */
  Type?: string;

  /**
   * <p>Detailed information about the accuracy of the entity recognizer for a specific item on
   *       the list of entity types. </p>
   */
  EvaluationMetrics?: EntityTypesEvaluationMetrics;

  /**
   * <p>Indicates the number of times the given entity type was seen in the training data. </p>
   */
  NumberOfTrainMentions?: number;
}

/**
 * @public
 * <p>Detailed information about the accuracy of an entity recognizer. </p>
 */
export interface EntityRecognizerEvaluationMetrics {
  /**
   * <p>A measure of the usefulness of the recognizer results in the test data. High precision
   *       means that the recognizer returned substantially more relevant results than irrelevant ones.
   *     </p>
   */
  Precision?: number;

  /**
   * <p>A measure of how complete the recognizer results are for the test data. High recall means
   *       that the recognizer returned most of the relevant results.</p>
   */
  Recall?: number;

  /**
   * <p>A measure of how accurate the recognizer results are for the test data. It is derived from
   *       the <code>Precision</code> and <code>Recall</code> values. The <code>F1Score</code> is the
   *       harmonic average of the two scores. For plain text entity recognizer models, the range is 0 to 100,
   *       where 100 is the best score. For PDF/Word entity recognizer models, the range is 0 to 1,
   *       where 1 is the best score.
   *     </p>
   */
  F1Score?: number;
}

/**
 * @public
 * <p>Detailed information about an entity recognizer.</p>
 */
export interface EntityRecognizerMetadata {
  /**
   * <p> The number of documents in the input data that were used to train the entity recognizer.
   *       Typically this is 80 to 90 percent of the input documents.</p>
   */
  NumberOfTrainedDocuments?: number;

  /**
   * <p> The number of documents in the input data that were used to test the entity recognizer.
   *       Typically this is 10 to 20 percent of the input documents.</p>
   */
  NumberOfTestDocuments?: number;

  /**
   * <p>Detailed information about the accuracy of an entity recognizer.</p>
   */
  EvaluationMetrics?: EntityRecognizerEvaluationMetrics;

  /**
   * <p>Entity types from the metadata of an entity recognizer.</p>
   */
  EntityTypes?: EntityRecognizerMetadataEntityTypesListItem[];
}

/**
 * @public
 * <p>Describes information about an entity recognizer.</p>
 */
export interface EntityRecognizerProperties {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer.</p>
   */
  EntityRecognizerArn?: string;

  /**
   * <p> The language of the input documents. All documents must be in the same language. Only
   *       English ("en") is currently supported.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>Provides the status of the entity recognizer.</p>
   */
  Status?: ModelStatus | string;

  /**
   * <p> A description of the status of the recognizer.</p>
   */
  Message?: string;

  /**
   * <p>The time that the recognizer was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the recognizer creation completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The time that training of the entity recognizer started.</p>
   */
  TrainingStartTime?: Date;

  /**
   * <p>The time that training of the entity recognizer was completed.</p>
   */
  TrainingEndTime?: Date;

  /**
   * <p>The input data properties of an entity recognizer.</p>
   */
  InputDataConfig?: EntityRecognizerInputDataConfig;

  /**
   * <p> Provides information about an entity recognizer.</p>
   */
  RecognizerMetadata?: EntityRecognizerMetadata;

  /**
   * <p> The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your custom entity recognizer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt
   *       trained custom models. The ModelKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ModelKmsKeyId?: string;

  /**
   * <p>The version name you assigned to the entity recognizer.</p>
   */
  VersionName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source model. This model was imported from a
   *       different Amazon Web Services account to create the entity recognizer model in your Amazon Web Services account.</p>
   */
  SourceModelArn?: string;

  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel</p>
   */
  FlywheelArn?: string;

  /**
   * <p>Output data configuration.</p>
   */
  OutputDataConfig?: EntityRecognizerOutputDataConfig;
}

/**
 * @public
 */
export interface DescribeEntityRecognizerResponse {
  /**
   * <p>Describes information associated with an entity recognizer.</p>
   */
  EntityRecognizerProperties?: EntityRecognizerProperties;
}

/**
 * @public
 */
export interface DescribeEventsDetectionJobRequest {
  /**
   * <p>The identifier of the events detection job.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * <p>Provides information about an events detection job.</p>
 */
export interface EventsDetectionJobProperties {
  /**
   * <p>The identifier assigned to the events detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the events detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:events-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:events-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The name you assigned the events detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the events detection job.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description of the status of the events detection job.</p>
   */
  Message?: string;

  /**
   * <p>The time that the events detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the events detection job completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input data configuration that you supplied when you created the events detection
   *       job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The output data configuration that you supplied when you created the events detection
   *       job.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The language code of the input documents.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>The types of events that are detected by the job.</p>
   */
  TargetEventTypes?: string[];
}

/**
 * @public
 */
export interface DescribeEventsDetectionJobResponse {
  /**
   * <p>An object that contains the properties associated with an event detection job.</p>
   */
  EventsDetectionJobProperties?: EventsDetectionJobProperties;
}

/**
 * @public
 */
export interface DescribeFlywheelRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel.</p>
   */
  FlywheelArn: string | undefined;
}

/**
 * @public
 */
export enum FlywheelStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  UPDATING = "UPDATING",
}

/**
 * @public
 * <p>The flywheel properties.</p>
 */
export interface FlywheelProperties {
  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel.</p>
   */
  FlywheelArn?: string;

  /**
   * <p>The Amazon Resource Number (ARN) of the active model version.</p>
   */
  ActiveModelArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend permission to access the flywheel data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>Configuration about the custom classifier associated with the flywheel.</p>
   */
  TaskConfig?: TaskConfig;

  /**
   * <p>Amazon S3 URI of the data lake location. </p>
   */
  DataLakeS3Uri?: string;

  /**
   * <p>Data security configuration.</p>
   */
  DataSecurityConfig?: DataSecurityConfig;

  /**
   * <p>The status of the flywheel.</p>
   */
  Status?: FlywheelStatus | string;

  /**
   * <p>Model type of the flywheel's model.</p>
   */
  ModelType?: ModelType | string;

  /**
   * <p>A description of the status of the flywheel.</p>
   */
  Message?: string;

  /**
   * <p>Creation time of the flywheel.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Last modified time for the flywheel.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The most recent flywheel iteration.</p>
   */
  LatestFlywheelIteration?: string;
}

/**
 * @public
 */
export interface DescribeFlywheelResponse {
  /**
   * <p>The flywheel properties.</p>
   */
  FlywheelProperties?: FlywheelProperties;
}

/**
 * @public
 */
export interface DescribeFlywheelIterationRequest {
  /**
   * <p></p>
   */
  FlywheelArn: string | undefined;

  /**
   * <p></p>
   */
  FlywheelIterationId: string | undefined;
}

/**
 * @public
 * <p>The evaluation metrics associated with the evaluated model.</p>
 */
export interface FlywheelModelEvaluationMetrics {
  /**
   * <p>The average F1 score from the evaluation metrics.</p>
   */
  AverageF1Score?: number;

  /**
   * <p>Average precision metric for the model.</p>
   */
  AveragePrecision?: number;

  /**
   * <p>Average recall metric for the model.</p>
   */
  AverageRecall?: number;

  /**
   * <p>Average accuracy metric for the model.</p>
   */
  AverageAccuracy?: number;
}

/**
 * @public
 */
export enum FlywheelIterationStatus {
  COMPLETED = "COMPLETED",
  EVALUATING = "EVALUATING",
  FAILED = "FAILED",
  STOPPED = "STOPPED",
  STOP_REQUESTED = "STOP_REQUESTED",
  TRAINING = "TRAINING",
}

/**
 * @public
 * <p>The configuration properties of a flywheel iteration.</p>
 */
export interface FlywheelIterationProperties {
  /**
   * <p></p>
   */
  FlywheelArn?: string;

  /**
   * <p></p>
   */
  FlywheelIterationId?: string;

  /**
   * <p>The creation start time of the flywheel iteration.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The completion time of this flywheel iteration.</p>
   */
  EndTime?: Date;

  /**
   * <p>The status of the flywheel iteration.</p>
   */
  Status?: FlywheelIterationStatus | string;

  /**
   * <p>A description of the status of the flywheel iteration.</p>
   */
  Message?: string;

  /**
   * <p>The ARN of the evaluated model associated with this flywheel iteration.</p>
   */
  EvaluatedModelArn?: string;

  /**
   * <p>The evaluation metrics associated with the evaluated model.</p>
   */
  EvaluatedModelMetrics?: FlywheelModelEvaluationMetrics;

  /**
   * <p>The ARN of the trained model associated with this flywheel iteration.</p>
   */
  TrainedModelArn?: string;

  /**
   * <p>The metrics associated with the trained model.</p>
   */
  TrainedModelMetrics?: FlywheelModelEvaluationMetrics;

  /**
   * <p></p>
   */
  EvaluationManifestS3Prefix?: string;
}

/**
 * @public
 */
export interface DescribeFlywheelIterationResponse {
  /**
   * <p>The configuration properties of a flywheel iteration.</p>
   */
  FlywheelIterationProperties?: FlywheelIterationProperties;
}

/**
 * @public
 */
export interface DescribeKeyPhrasesDetectionJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The
   *         <code>StartKeyPhrasesDetectionJob</code> operation returns this identifier in its
   *       response.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * <p>Provides information about a key phrases detection job.</p>
 */
export interface KeyPhrasesDetectionJobProperties {
  /**
   * <p>The identifier assigned to the key phrases detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the key phrases detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:key-phrases-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:key-phrases-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The name that you assigned the key phrases detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the key phrases detection job. If the status is <code>FAILED</code>,
   *       the <code>Message</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description of the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The time that the key phrases detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the key phrases detection job completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input data configuration that you supplied when you created the key phrases detection
   *       job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The output data configuration that you supplied when you created the key phrases detection
   *       job.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The language code of the input documents.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your key phrases detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

/**
 * @public
 */
export interface DescribeKeyPhrasesDetectionJobResponse {
  /**
   * <p>An object that contains the properties associated with a key phrases detection job.
   *     </p>
   */
  KeyPhrasesDetectionJobProperties?: KeyPhrasesDetectionJobProperties;
}

/**
 * @public
 */
export interface DescribePiiEntitiesDetectionJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The  operation returns this identifier in its
   *       response.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export enum PiiEntitiesDetectionMode {
  ONLY_OFFSETS = "ONLY_OFFSETS",
  ONLY_REDACTION = "ONLY_REDACTION",
}

/**
 * @public
 * <p>Provides configuration parameters for the output of PII entity detection jobs.</p>
 */
export interface PiiOutputDataConfig {
  /**
   * <p>When you use the <code>PiiOutputDataConfig</code> object with asynchronous operations,
   *       you specify the Amazon S3 location where you want to write the output data. </p>
   *          <p>
   *       For a PII entity detection job, the output file is plain text, not a compressed archive.
   *       The output file name is the same as the input file, with <code>.out</code> appended at the end.
   *     </p>
   */
  S3Uri: string | undefined;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the
   *       output results from an analysis job.</p>
   */
  KmsKeyId?: string;
}

/**
 * @public
 */
export enum PiiEntitiesDetectionMaskMode {
  MASK = "MASK",
  REPLACE_WITH_PII_ENTITY_TYPE = "REPLACE_WITH_PII_ENTITY_TYPE",
}

/**
 * @public
 * <p>Provides configuration parameters for PII entity redaction.</p>
 */
export interface RedactionConfig {
  /**
   * <p>An array of the types of PII entities that Amazon Comprehend detects in the input text for
   *       your request.</p>
   */
  PiiEntityTypes?: (PiiEntityType | string)[];

  /**
   * <p>Specifies whether the PII entity is redacted with the mask character or the entity
   *       type.</p>
   */
  MaskMode?: PiiEntitiesDetectionMaskMode | string;

  /**
   * <p>A character that replaces each character in the redacted PII entity.</p>
   */
  MaskCharacter?: string;
}

/**
 * @public
 * <p>Provides information about a PII entities detection job.</p>
 */
export interface PiiEntitiesDetectionJobProperties {
  /**
   * <p>The identifier assigned to the PII entities detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the PII entities detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:pii-entities-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:pii-entities-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The name that you assigned the PII entities detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the PII entities detection job. If the status is
   *       <code>FAILED</code>, the <code>Message</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description of the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The time that the PII entities detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the PII entities detection job completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input properties for a PII entities detection job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The output data configuration that you supplied when you created the PII entities
   *       detection job.</p>
   */
  OutputDataConfig?: PiiOutputDataConfig;

  /**
   * <p>Provides configuration parameters for PII entity redaction.</p>
   *          <p>This parameter is required if you set the <code>Mode</code> parameter to
   *         <code>ONLY_REDACTION</code>. In that case, you must provide a <code>RedactionConfig</code>
   *       definition that includes the <code>PiiEntityTypes</code> parameter.</p>
   */
  RedactionConfig?: RedactionConfig;

  /**
   * <p>The language code of the input documents</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>Specifies whether the output provides the locations (offsets) of PII entities or a file in
   *       which PII entities are redacted.</p>
   */
  Mode?: PiiEntitiesDetectionMode | string;
}

/**
 * @public
 */
export interface DescribePiiEntitiesDetectionJobResponse {
  /**
   * <p>Provides information about a PII entities detection job.</p>
   */
  PiiEntitiesDetectionJobProperties?: PiiEntitiesDetectionJobProperties;
}

/**
 * @public
 */
export interface DescribeResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom model version that has the resource policy.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyResponse {
  /**
   * <p>The JSON body of the resource-based policy.</p>
   */
  ResourcePolicy?: string;

  /**
   * <p>The time at which the policy was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time at which the policy was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The revision ID of the policy. Each time you modify a policy, Amazon Comprehend assigns a
   *       new revision ID, and it deletes the prior version of the policy.</p>
   */
  PolicyRevisionId?: string;
}

/**
 * @public
 */
export interface DescribeSentimentDetectionJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The  operation returns this identifier in its
   *       response.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * <p>Provides information about a sentiment detection job.</p>
 */
export interface SentimentDetectionJobProperties {
  /**
   * <p>The identifier assigned to the sentiment detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the sentiment detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:sentiment-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:sentiment-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The name that you assigned to the sentiment detection job</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the sentiment detection job. If the status is <code>FAILED</code>,
   *       the <code>Messages</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description of the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The time that the sentiment detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the sentiment detection job ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input data configuration that you supplied when you created the sentiment detection
   *       job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The output data configuration that you supplied when you created the sentiment detection
   *       job.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The language code of the input documents.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your sentiment detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

/**
 * @public
 */
export interface DescribeSentimentDetectionJobResponse {
  /**
   * <p>An object that contains the properties associated with a sentiment detection job.</p>
   */
  SentimentDetectionJobProperties?: SentimentDetectionJobProperties;
}

/**
 * @public
 */
export interface DescribeTargetedSentimentDetectionJobRequest {
  /**
   * <p>The identifier that Amazon Comprehend generated for the job. The
   *       <code>StartTargetedSentimentDetectionJob</code> operation returns this identifier in its
   *       response.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * <p>Provides information about a targeted sentiment detection job.</p>
 */
export interface TargetedSentimentDetectionJobProperties {
  /**
   * <p>The identifier assigned to the targeted sentiment detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the targeted sentiment detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:targeted-sentiment-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:targeted-sentiment-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The name that you assigned to the targeted sentiment detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the targeted sentiment detection job. If the status is <code>FAILED</code>,
   *       the <code>Messages</code> field shows the reason for the failure.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description of the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The time that the targeted sentiment detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the targeted sentiment detection job ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input properties for an inference job. The document reader config field applies
   *       only to non-text inputs for custom analysis.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>Provides configuration parameters for the output of inference jobs.</p>
   *          <p></p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The language code of the input documents.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt the
   *       data on the storage volume attached to the ML compute instance(s) that process the
   *       targeted sentiment detection job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *           <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

/**
 * @public
 */
export interface DescribeTargetedSentimentDetectionJobResponse {
  /**
   * <p>An object that contains the properties associated with a targeted sentiment detection job.</p>
   */
  TargetedSentimentDetectionJobProperties?: TargetedSentimentDetectionJobProperties;
}

/**
 * @public
 */
export interface DescribeTopicsDetectionJobRequest {
  /**
   * <p>The identifier assigned by the user to the detection job.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * <p>Provides information about a topic detection job.</p>
 */
export interface TopicsDetectionJobProperties {
  /**
   * <p>The identifier assigned to the topic detection job.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the topics detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:topics-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:topics-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The name of the topic detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The current status of the topic detection job. If the status is <code>Failed</code>,
   *       the reason for the failure is shown in the <code>Message</code> field.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>A description for the status of a job.</p>
   */
  Message?: string;

  /**
   * <p>The time that the topic detection job was submitted for processing.</p>
   */
  SubmitTime?: Date;

  /**
   * <p>The time that the topic detection job was completed.</p>
   */
  EndTime?: Date;

  /**
   * <p>The input data configuration supplied when you created the topic detection
   *       job.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The output data configuration supplied when you created the topic detection
   *       job.</p>
   */
  OutputDataConfig?: OutputDataConfig;

  /**
   * <p>The number of topics to detect supplied when you created the topic detection job. The
   *       default is 10. </p>
   */
  NumberOfTopics?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your job data. </p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for a private Virtual Private Cloud (VPC) containing the
   *       resources you are using for your topic detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

/**
 * @public
 */
export interface DescribeTopicsDetectionJobResponse {
  /**
   * <p>The list of properties for the requested job.</p>
   */
  TopicsDetectionJobProperties?: TopicsDetectionJobProperties;
}

/**
 * @public
 */
export interface DetectDominantLanguageRequest {
  /**
   * <p>A UTF-8 text string. The string must contain at least 20 characters. The maximum string size is 100 KB.</p>
   */
  Text: string | undefined;
}

/**
 * @public
 */
export interface DetectDominantLanguageResponse {
  /**
   * <p>Array of languages that Amazon Comprehend detected in the input text.
   *       The array is sorted in descending order of the score
   *       (the dominant language is always the first element in the array).</p>
   *          <p>For each language, the
   *       response returns the RFC 5646 language code and the level of confidence that Amazon Comprehend
   *       has in the accuracy of its inference. For more information about RFC 5646, see <a href="https://tools.ietf.org/html/rfc5646">Tags for Identifying Languages</a> on the
   *         <i>IETF Tools</i> web site.</p>
   */
  Languages?: DominantLanguage[];
}

/**
 * @public
 */
export interface DetectEntitiesRequest {
  /**
   * <p>A UTF-8 text string. The maximum string size is 100 KB. If you enter text using this parameter,
   *     do not use the <code>Bytes</code> parameter.</p>
   */
  Text?: string;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. If your request includes the endpoint for a custom entity recognition model, Amazon
   *       Comprehend uses the language of your custom model, and it ignores any language code that you
   *       specify here.</p>
   *          <p>All input documents must be in the same language.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The Amazon Resource Name of an endpoint that is associated with a custom entity
   *       recognition model. Provide an endpoint if you want to detect entities by using your own custom
   *       model instead of the default model that is used by Amazon Comprehend.</p>
   *          <p>If you specify an endpoint, Amazon Comprehend uses the language of your custom model, and
   *       it ignores any language code that you provide in your request.</p>
   *          <p>For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.</p>
   */
  EndpointArn?: string;

  /**
   * <p>This field applies only when you use a custom entity recognition model that
   *       was trained with PDF annotations. For other cases,
   *       enter your text input in the <code>Text</code> field.</p>
   *          <p>
   *       Use the <code>Bytes</code> parameter to input a text, PDF, Word or image file.
   *       Using a plain-text file in the <code>Bytes</code> parameter is equivelent to using the
   *       <code>Text</code> parameter (the <code>Entities</code> field in the response is identical).</p>
   *          <p>You can also use the <code>Bytes</code> parameter to input an Amazon Textract <code>DetectDocumentText</code>
   *       or <code>AnalyzeDocument</code> output file.</p>
   *          <p>Provide the input document as a sequence of base64-encoded bytes.
   *       If your code uses an Amazon Web Services SDK to detect entities, the SDK may encode
   *       the document file bytes for you. </p>
   *          <p>The maximum length of this field depends on the input document type. For details, see
   *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync.html">
   *         Inputs for real-time custom analysis</a> in the Comprehend Developer Guide. </p>
   *          <p>If you use the <code>Bytes</code> parameter, do not use the <code>Text</code> parameter.</p>
   */
  Bytes?: Uint8Array;

  /**
   * <p>Provides configuration parameters to override the default actions for extracting text
   *       from PDF documents and image files.</p>
   */
  DocumentReaderConfig?: DocumentReaderConfig;
}

/**
 * @public
 */
export interface DetectEntitiesResponse {
  /**
   * <p>A collection of entities identified in the input text. For each entity, the response
   *       provides the entity text, entity type, where the entity text begins and ends, and the level of
   *       confidence that Amazon Comprehend has in the detection. </p>
   *          <p>If your request uses a custom entity recognition model, Amazon Comprehend detects the
   *       entities that the model is trained to recognize. Otherwise, it detects the default entity
   *       types. For a list of default entity types, see
   *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide.
   *     </p>
   */
  Entities?: Entity[];

  /**
   * <p>Information about the document, discovered during text extraction. This field is present
   *       in the response only if your request used the <code>Byte</code> parameter. </p>
   */
  DocumentMetadata?: DocumentMetadata;

  /**
   * <p>The document type for each page in the input document. This field is present
   *       in the response only if your request used the <code>Byte</code> parameter. </p>
   */
  DocumentType?: DocumentTypeListItem[];

  /**
   * <p>Information about each block of text in the input document.
   *       Blocks are nested. A page block contains a block for each line of text,
   *       which contains a block for each word. </p>
   *          <p>The <code>Block</code> content for a Word input document does not include a <code>Geometry</code> field.</p>
   *          <p>The <code>Block</code> field is not present in the response for plain-text inputs.</p>
   */
  Blocks?: Block[];

  /**
   * <p>Page-level errors that the system detected while processing the input document.
   *       The field is empty if the system encountered no errors.</p>
   */
  Errors?: ErrorsListItem[];
}

/**
 * @public
 */
export interface DetectKeyPhrasesRequest {
  /**
   * <p>A UTF-8 text string. The string must contain less than 100 KB of UTF-8 encoded
   *       characters.</p>
   */
  Text: string | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

/**
 * @public
 */
export interface DetectKeyPhrasesResponse {
  /**
   * <p>A collection of key phrases that Amazon Comprehend identified in the input text. For
   *       each key phrase, the response provides the text of the key phrase, where the key phrase begins
   *       and ends, and the level of confidence that Amazon Comprehend has in the accuracy of the
   *       detection. </p>
   */
  KeyPhrases?: KeyPhrase[];
}

/**
 * @public
 */
export interface DetectPiiEntitiesRequest {
  /**
   * <p>A UTF-8 text string. The maximum string size is 100 KB.</p>
   */
  Text: string | undefined;

  /**
   * <p>The language of the input documents. Currently, English is the only valid language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

/**
 * @public
 * <p>Provides information about a PII entity.</p>
 */
export interface PiiEntity {
  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of the
   *       detection.</p>
   */
  Score?: number;

  /**
   * <p>The entity's type.</p>
   */
  Type?: PiiEntityType | string;

  /**
   * <p>The zero-based offset from the beginning of the source text to the first character in the
   *       entity.</p>
   */
  BeginOffset?: number;

  /**
   * <p>The zero-based offset from the beginning of the source text to the last character in the
   *       entity.</p>
   */
  EndOffset?: number;
}

/**
 * @public
 */
export interface DetectPiiEntitiesResponse {
  /**
   * <p>A collection of PII entities identified in the input text. For each entity, the response
   *       provides the entity type, where the entity text begins and ends, and the level of confidence
   *       that Amazon Comprehend has in the detection.</p>
   */
  Entities?: PiiEntity[];
}

/**
 * @public
 */
export interface DetectSentimentRequest {
  /**
   * <p>A UTF-8 text string. The maximum string size is 5 KB.</p>
   */
  Text: string | undefined;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

/**
 * @public
 */
export interface DetectSentimentResponse {
  /**
   * <p>The inferred sentiment that Amazon Comprehend has the highest level of confidence
   *       in.</p>
   */
  Sentiment?: SentimentType | string;

  /**
   * <p>An object that lists the sentiments, and their corresponding confidence
   *       levels.</p>
   */
  SentimentScore?: SentimentScore;
}

/**
 * @public
 */
export interface DetectSyntaxRequest {
  /**
   * <p>A UTF-8 string. The maximum string size is 5 KB.</p>
   */
  Text: string | undefined;

  /**
   * <p>The language code of the input documents. You can specify any of the following languages
   *       supported by Amazon Comprehend: German ("de"), English ("en"), Spanish ("es"), French ("fr"),
   *       Italian ("it"), or Portuguese ("pt").</p>
   */
  LanguageCode: SyntaxLanguageCode | string | undefined;
}

/**
 * @public
 */
export interface DetectSyntaxResponse {
  /**
   * <p>A collection of syntax tokens describing the text. For each token, the response provides
   *       the text, the token type, where the text begins and ends, and the level of confidence that
   *       Amazon Comprehend has that the token is correct. For a list of token types, see
   *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide.
   *     </p>
   */
  SyntaxTokens?: SyntaxToken[];
}

/**
 * @public
 */
export interface DetectTargetedSentimentRequest {
  /**
   * <p>A UTF-8 text string. The maximum string length is 5 KB.</p>
   */
  Text: string | undefined;

  /**
   * <p>The language of the input documents. Currently, English is the only supported language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;
}

/**
 * @public
 */
export interface DetectTargetedSentimentResponse {
  /**
   * <p>Targeted sentiment analysis for each of the entities identified in the input text.</p>
   */
  Entities?: TargetedSentimentEntity[];
}

/**
 * @public
 */
export interface ImportModelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom model to import.</p>
   */
  SourceModelArn: string | undefined;

  /**
   * <p>The name to assign to the custom model that is created in Amazon Comprehend by this
   *       import.</p>
   */
  ModelName?: string;

  /**
   * <p>The version name given to the custom model that is created by this import. Version names
   *       can have a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (_)
   *       are allowed. The version name must be unique among all models with the same classifier name in
   *       the account/Region.</p>
   */
  VersionName?: string;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt
   *       trained custom models. The ModelKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ModelKmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend permission to use Amazon Key Management Service (KMS) to encrypt or decrypt the custom
   *       model.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>Tags to associate with the custom model that is created by this import. A tag is a
   *       key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a
   *       tag with "Sales" as the key might be added to a resource to indicate its use by the sales
   *       department.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ImportModelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom model being imported.</p>
   */
  ModelArn?: string;
}

/**
 * @public
 * <p>The filter specified for the operation is invalid. Specify a different
 *       filter.</p>
 */
export class InvalidFilterException extends __BaseException {
  readonly name: "InvalidFilterException" = "InvalidFilterException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFilterException, __BaseException>) {
    super({
      name: "InvalidFilterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFilterException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Filter the datasets based on creation time or dataset status.</p>
 */
export interface DatasetFilter {
  /**
   * <p>Filter the datasets based on the dataset status.</p>
   */
  Status?: DatasetStatus | string;

  /**
   * <p>Filter the datasets based on the dataset type.</p>
   */
  DatasetType?: DatasetType | string;

  /**
   * <p>Filter the datasets to include datasets created after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Filter the datasets to include datasets created before the specified time.</p>
   */
  CreationTimeBefore?: Date;
}

/**
 * @public
 */
export interface ListDatasetsRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel.</p>
   */
  FlywheelArn?: string;

  /**
   * <p>Filters the datasets to be returned in the response.</p>
   */
  Filter?: DatasetFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of results to return in a response. The default is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDatasetsResponse {
  /**
   * <p>The dataset properties list.</p>
   */
  DatasetPropertiesList?: DatasetProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Provides information for filtering a list of document classification jobs. For more
 *       information, see the  operation. You can
 *       provide only one filter parameter in each request.</p>
 */
export interface DocumentClassificationJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list based on job status. Returns only jobs with the specified status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListDocumentClassificationJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their names, status, or the
   *       date and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: DocumentClassificationJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDocumentClassificationJobsResponse {
  /**
   * <p>A list containing the properties of each job returned.</p>
   */
  DocumentClassificationJobPropertiesList?: DocumentClassificationJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Provides information for filtering a list of document classifiers. You can only specify
 *       one filtering parameter in a request. For more information, see the
 *         <code>ListDocumentClassifiers</code> operation.</p>
 */
export interface DocumentClassifierFilter {
  /**
   * <p>Filters the list of classifiers based on status.</p>
   */
  Status?: ModelStatus | string;

  /**
   * <p>The name that you assigned to the document classifier</p>
   */
  DocumentClassifierName?: string;

  /**
   * <p>Filters the list of classifiers based on the time that the classifier was submitted for
   *       processing. Returns only classifiers submitted before the specified time. Classifiers are
   *       returned in ascending order, oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of classifiers based on the time that the classifier was submitted for
   *       processing. Returns only classifiers submitted after the specified time. Classifiers are
   *       returned in descending order, newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListDocumentClassifiersRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: DocumentClassifierFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDocumentClassifiersResponse {
  /**
   * <p>A list containing the properties of each job returned.</p>
   */
  DocumentClassifierPropertiesList?: DocumentClassifierProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDocumentClassifierSummariesRequest {
  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return on each page. The default is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Describes information about a document classifier and its versions.</p>
 */
export interface DocumentClassifierSummary {
  /**
   * <p>The name that you assigned the document classifier.</p>
   */
  DocumentClassifierName?: string;

  /**
   * <p>The number of versions you created.</p>
   */
  NumberOfVersions?: number;

  /**
   * <p>The time that the latest document classifier version was submitted for processing.</p>
   */
  LatestVersionCreatedAt?: Date;

  /**
   * <p>The version name you assigned to the latest document classifier version.</p>
   */
  LatestVersionName?: string;

  /**
   * <p>Provides the status of the latest document classifier version.</p>
   */
  LatestVersionStatus?: ModelStatus | string;
}

/**
 * @public
 */
export interface ListDocumentClassifierSummariesResponse {
  /**
   * <p>The list of summaries of document classifiers.</p>
   */
  DocumentClassifierSummariesList?: DocumentClassifierSummary[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Provides information for filtering a list of dominant language detection jobs. For more
 *       information, see the
 *       operation.</p>
 */
export interface DominantLanguageDetectionJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListDominantLanguageDetectionJobsRequest {
  /**
   * <p>Filters that jobs that are returned. You can filter jobs on their name, status, or the
   *       date and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: DominantLanguageDetectionJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDominantLanguageDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  DominantLanguageDetectionJobPropertiesList?: DominantLanguageDetectionJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The filter used to determine which endpoints are returned. You can filter jobs on their
 *       name, model, status, or the date and time that they were created. You can only set one filter
 *       at a time. </p>
 */
export interface EndpointFilter {
  /**
   * <p>The Amazon Resource Number (ARN) of the model to which the endpoint is attached.</p>
   */
  ModelArn?: string;

  /**
   * <p>Specifies the status of the endpoint being returned. Possible values are: Creating, Ready,
   *       Updating, Deleting, Failed.</p>
   */
  Status?: EndpointStatus | string;

  /**
   * <p>Specifies a date before which the returned endpoint or endpoints were created.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>Specifies a date after which the returned endpoint or endpoints were created.</p>
   */
  CreationTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListEndpointsRequest {
  /**
   * <p>Filters the endpoints that are returned. You can filter endpoints on their name, model,
   *       status, or the date and time that they were created. You can only set one filter at a time.
   *     </p>
   */
  Filter?: EndpointFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListEndpointsResponse {
  /**
   * <p>Displays a list of endpoint properties being retrieved by the service in response to the
   *       request.</p>
   */
  EndpointPropertiesList?: EndpointProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Provides information for filtering a list of dominant language detection jobs. For more
 *       information, see the  operation.</p>
 */
export interface EntitiesDetectionJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListEntitiesDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: EntitiesDetectionJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListEntitiesDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  EntitiesDetectionJobPropertiesList?: EntitiesDetectionJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Provides information for filtering a list of entity recognizers. You can only specify one
 *       filtering parameter in a request. For more information, see the
 *         <code>ListEntityRecognizers</code> operation./></p>
 */
export interface EntityRecognizerFilter {
  /**
   * <p>The status of an entity recognizer.</p>
   */
  Status?: ModelStatus | string;

  /**
   * <p>The name that you assigned the entity recognizer.</p>
   */
  RecognizerName?: string;

  /**
   * <p>Filters the list of entities based on the time that the list was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of entities based on the time that the list was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListEntityRecognizersRequest {
  /**
   * <p>Filters the list of entities returned. You can filter on <code>Status</code>,
   *         <code>SubmitTimeBefore</code>, or <code>SubmitTimeAfter</code>. You can only set one filter
   *       at a time.</p>
   */
  Filter?: EntityRecognizerFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p> The maximum number of results to return on each page. The default is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListEntityRecognizersResponse {
  /**
   * <p>The list of properties of an entity recognizer.</p>
   */
  EntityRecognizerPropertiesList?: EntityRecognizerProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEntityRecognizerSummariesRequest {
  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return on each page. The default is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p> Describes the information about an entity recognizer and its versions.</p>
 */
export interface EntityRecognizerSummary {
  /**
   * <p> The name that you assigned the entity recognizer.</p>
   */
  RecognizerName?: string;

  /**
   * <p> The number of versions you created.</p>
   */
  NumberOfVersions?: number;

  /**
   * <p> The time that the latest entity recognizer version was submitted for processing.</p>
   */
  LatestVersionCreatedAt?: Date;

  /**
   * <p> The version name you assigned to the latest entity recognizer version.</p>
   */
  LatestVersionName?: string;

  /**
   * <p> Provides the status of the latest entity recognizer version.</p>
   */
  LatestVersionStatus?: ModelStatus | string;
}

/**
 * @public
 */
export interface ListEntityRecognizerSummariesResponse {
  /**
   * <p>The list entity recognizer summaries.</p>
   */
  EntityRecognizerSummariesList?: EntityRecognizerSummary[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Provides information for filtering a list of event detection jobs.</p>
 */
export interface EventsDetectionJobFilter {
  /**
   * <p>Filters on the name of the events detection job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListEventsDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: EventsDetectionJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListEventsDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  EventsDetectionJobPropertiesList?: EventsDetectionJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Filter the flywheel iterations based on creation time.</p>
 */
export interface FlywheelIterationFilter {
  /**
   * <p>Filter the flywheel iterations to include iterations created after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Filter the flywheel iterations to include iterations created before the specified time.</p>
   */
  CreationTimeBefore?: Date;
}

/**
 * @public
 */
export interface ListFlywheelIterationHistoryRequest {
  /**
   * <p>The ARN of the flywheel.</p>
   */
  FlywheelArn: string | undefined;

  /**
   * <p>Filter the flywheel iteration history based on creation time.</p>
   */
  Filter?: FlywheelIterationFilter;

  /**
   * <p>Next token</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of iteration history results to return</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListFlywheelIterationHistoryResponse {
  /**
   * <p>List of flywheel iteration properties</p>
   */
  FlywheelIterationPropertiesList?: FlywheelIterationProperties[];

  /**
   * <p>Next token</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Filter the flywheels based on creation time or flywheel status.</p>
 */
export interface FlywheelFilter {
  /**
   * <p>Filter the flywheels based on the flywheel status.</p>
   */
  Status?: FlywheelStatus | string;

  /**
   * <p>Filter the flywheels to include flywheels created after the specified time.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>Filter the flywheels to include flywheels created before the specified time.</p>
   */
  CreationTimeBefore?: Date;
}

/**
 * @public
 */
export interface ListFlywheelsRequest {
  /**
   * <p>Filters the flywheels that are returned. You can filter flywheels on their status,
   *       or the date and time that they were submitted. You can only set one filter at a time.
   *     </p>
   */
  Filter?: FlywheelFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of results to return in a response. The default is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Flywheel summary information.</p>
 */
export interface FlywheelSummary {
  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel</p>
   */
  FlywheelArn?: string;

  /**
   * <p>ARN of the active model version for the flywheel.</p>
   */
  ActiveModelArn?: string;

  /**
   * <p>Amazon S3 URI of the data lake location. </p>
   */
  DataLakeS3Uri?: string;

  /**
   * <p>The status of the flywheel.</p>
   */
  Status?: FlywheelStatus | string;

  /**
   * <p>Model type of the flywheel's model.</p>
   */
  ModelType?: ModelType | string;

  /**
   * <p>A description of the status of the flywheel.</p>
   */
  Message?: string;

  /**
   * <p>Creation time of the flywheel.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Last modified time for the flywheel.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The most recent flywheel iteration.</p>
   */
  LatestFlywheelIteration?: string;
}

/**
 * @public
 */
export interface ListFlywheelsResponse {
  /**
   * <p>A list of flywheel properties retrieved by the service in response to the request.
   *        </p>
   */
  FlywheelSummaryList?: FlywheelSummary[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Provides information for filtering a list of dominant language detection jobs. For more
 *       information, see the  operation.</p>
 */
export interface KeyPhrasesDetectionJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListKeyPhrasesDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: KeyPhrasesDetectionJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListKeyPhrasesDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  KeyPhrasesDetectionJobPropertiesList?: KeyPhrasesDetectionJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Provides information for filtering a list of PII entity detection jobs.</p>
 */
export interface PiiEntitiesDetectionJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListPiiEntitiesDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: PiiEntitiesDetectionJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListPiiEntitiesDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  PiiEntitiesDetectionJobPropertiesList?: PiiEntitiesDetectionJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Provides information for filtering a list of dominant language detection jobs. For more
 *       information, see the  operation.</p>
 */
export interface SentimentDetectionJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListSentimentDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: SentimentDetectionJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListSentimentDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  SentimentDetectionJobPropertiesList?: SentimentDetectionJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the given Amazon Comprehend resource you are querying.
   *     </p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the given Amazon Comprehend resource you are
   *       querying.</p>
   */
  ResourceArn?: string;

  /**
   * <p>Tags associated with the Amazon Comprehend resource being queried. A tag is a key-value
   *       pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with
   *       "Sales" as the key might be added to a resource to indicate its use by the sales department.
   *     </p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Provides information for filtering a list of dominant language detection jobs. For more
 *       information, see the <code>ListTargetedSentimentDetectionJobs</code> operation.</p>
 */
export interface TargetedSentimentDetectionJobFilter {
  /**
   * <p>Filters on the name of the job.</p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of jobs based on job status. Returns only jobs with the specified
   *       status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted before the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Returns only jobs submitted after the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListTargetedSentimentDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. You can filter jobs on their name, status, or the date
   *       and time that they were submitted. You can only set one filter at a time.</p>
   */
  Filter?: TargetedSentimentDetectionJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListTargetedSentimentDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  TargetedSentimentDetectionJobPropertiesList?: TargetedSentimentDetectionJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Provides information for filtering topic detection jobs. For more information, see
 *         .</p>
 */
export interface TopicsDetectionJobFilter {
  /**
   * <p></p>
   */
  JobName?: string;

  /**
   * <p>Filters the list of topic detection jobs based on job status. Returns only jobs with
   *       the specified status.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Only returns jobs submitted before the specified time. Jobs are returned in descending order,
   *       newest to oldest.</p>
   */
  SubmitTimeBefore?: Date;

  /**
   * <p>Filters the list of jobs based on the time that the job was submitted for processing.
   *       Only returns jobs submitted after the specified time. Jobs are returned in ascending order,
   *       oldest to newest.</p>
   */
  SubmitTimeAfter?: Date;
}

/**
 * @public
 */
export interface ListTopicsDetectionJobsRequest {
  /**
   * <p>Filters the jobs that are returned. Jobs can be filtered on their name, status, or the
   *       date and time that they were submitted. You can set only one filter at a time.</p>
   */
  Filter?: TopicsDetectionJobFilter;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in each page. The default is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListTopicsDetectionJobsResponse {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  TopicsDetectionJobPropertiesList?: TopicsDetectionJobProperties[];

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom model to attach the policy to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The JSON resource-based policy to attach to your custom model. Provide your JSON as a
   *       UTF-8 encoded string without line breaks. To provide valid JSON for your policy, enclose the
   *       attribute names and values in double quotes. If the JSON body is also enclosed in double
   *       quotes, then you must escape the double quotes that are inside the policy:</p>
   *          <p>
   *             <code>"\{\"attribute\": \"value\", \"attribute\": [\"value\"]\}"</code>
   *          </p>
   *          <p>To avoid escaping quotes, you can use single quotes to enclose the policy and double
   *       quotes to enclose the JSON names and values:</p>
   *          <p>
   *             <code>'\{"attribute": "value", "attribute": ["value"]\}'</code>
   *          </p>
   */
  ResourcePolicy: string | undefined;

  /**
   * <p>The revision ID that Amazon Comprehend assigned to the policy that you are updating. If
   *       you are creating a new policy that has no prior version, don't use this parameter. Amazon
   *       Comprehend creates the revision ID for you.</p>
   */
  PolicyRevisionId?: string;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * <p>The revision ID of the policy. Each time you modify a policy, Amazon Comprehend assigns a
   *       new revision ID, and it deletes the prior version of the policy.</p>
   */
  PolicyRevisionId?: string;
}

/**
 * @public
 */
export interface StartDocumentClassificationJobRequest {
  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the document classifier to use to process the
   *       job.</p>
   */
  DocumentClassifierArn?: string;

  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>A unique identifier for the request. If you do not set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your document classification job. For more information, see
   *       <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Tags to associate with the document classification job. A tag is a key-value pair that
   *       adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the
   *       key might be added to a resource to indicate its use by the sales department.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel associated with the model to use.</p>
   */
  FlywheelArn?: string;
}

/**
 * @public
 */
export interface StartDocumentClassificationJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of the job, use this identifier
   *       with the <code>DescribeDocumentClassificationJob</code> operation.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the document classification job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:document-classification-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The status of the job:</p>
   *          <ul>
   *             <li>
   *                <p>SUBMITTED - The job has been received and queued for processing.</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED - The job was successfully completed and the output is available.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The job did not complete. For details, use the
   *           <code>DescribeDocumentClassificationJob</code> operation.</p>
   *             </li>
   *             <li>
   *                <p>STOP_REQUESTED - Amazon Comprehend has received a stop request for the job and is
   *           processing the request.</p>
   *             </li>
   *             <li>
   *                <p>STOPPED - The job was successfully stopped without completing.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>The ARN of the custom classification model.</p>
   */
  DocumentClassifierArn?: string;
}

/**
 * @public
 */
export interface StartDominantLanguageDetectionJobRequest {
  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions">Role-based permissions</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>An identifier for the job.</p>
   */
  JobName?: string;

  /**
   * <p>A unique identifier for the request. If you do not set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your dominant language detection job. For more information,
   *       see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Tags to associate with the dominant language detection job. A tag is a key-value pair
   *       that adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as
   *       the key might be added to a resource to indicate its use by the sales department.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface StartDominantLanguageDetectionJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *       the  operation.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dominant language detection job. It is a unique,
   *       fully qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID.
   *       The format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:dominant-language-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:dominant-language-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The status of the job. </p>
   *          <ul>
   *             <li>
   *                <p>SUBMITTED - The job has been received and is queued for processing.</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED - The job was successfully completed and the output is available.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The job did not complete. To get details, use the  operation.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus | string;
}

/**
 * @public
 */
export interface StartEntitiesDetectionJobRequest {
  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions">Role-based permissions</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the specific entity recognizer to be used
   *       by the <code>StartEntitiesDetectionJob</code>. This ARN is optional and is only used for a
   *       custom entity recognition job.</p>
   */
  EntityRecognizerArn?: string;

  /**
   * <p>The language of the input documents. All documents must be in the same language. You can
   *       specify any of the languages supported by Amazon Comprehend. If custom entities recognition is
   *       used, this parameter is ignored and the language used for training the model is used
   *       instead.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your entity detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Tags to associate with the entities detection job. A tag is a key-value pair that adds
   *       metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key
   *       might be added to a resource to indicate its use by the sales department.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel associated with the model to use.</p>
   */
  FlywheelArn?: string;
}

/**
 * @public
 */
export interface StartEntitiesDetectionJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of job, use this identifier with
   *       the  operation.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the entities detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:entities-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:entities-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The status of the job. </p>
   *          <ul>
   *             <li>
   *                <p>SUBMITTED - The job has been received and is queued for processing.</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED - The job was successfully completed and the output is available.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The job did not complete. To get details, use the  operation.</p>
   *             </li>
   *             <li>
   *                <p>STOP_REQUESTED - Amazon Comprehend has received a stop request for the job and is
   *           processing the request.</p>
   *             </li>
   *             <li>
   *                <p>STOPPED - The job was successfully stopped without completing.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>The ARN of the custom entity recognition model.</p>
   */
  EntityRecognizerArn?: string;
}

/**
 * @public
 */
export interface StartEventsDetectionJobRequest {
  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the events detection job.</p>
   */
  JobName?: string;

  /**
   * <p>The language code of the input documents.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>An unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The types of events to detect in the input documents.</p>
   */
  TargetEventTypes: string[] | undefined;

  /**
   * <p>Tags to associate with the events detection job. A tag is a key-value pair that adds
   *       metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key
   *       might be added to a resource to indicate its use by the sales department.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface StartEventsDetectionJobResponse {
  /**
   * <p>An unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the events detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:events-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:events-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The status of the events detection job.</p>
   */
  JobStatus?: JobStatus | string;
}

/**
 * @public
 */
export interface StartFlywheelIterationRequest {
  /**
   * <p>The ARN of the flywheel.</p>
   */
  FlywheelArn: string | undefined;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface StartFlywheelIterationResponse {
  /**
   * <p></p>
   */
  FlywheelArn?: string;

  /**
   * <p></p>
   */
  FlywheelIterationId?: string;
}

/**
 * @public
 */
export interface StartKeyPhrasesDetectionJobRequest {
  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions">Role-based permissions</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your key phrases detection job. For more information, see
   *       <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Tags to associate with the key phrases detection job. A tag is a key-value pair that
   *       adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the
   *       key might be added to a resource to indicate its use by the sales department.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface StartKeyPhrasesDetectionJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *       the  operation.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the key phrase detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:key-phrases-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:key-phrases-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The status of the job. </p>
   *          <ul>
   *             <li>
   *                <p>SUBMITTED - The job has been received and is queued for processing.</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED - The job was successfully completed and the output is available.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The job did not complete. To get details, use the  operation.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus | string;
}

/**
 * @public
 */
export interface StartPiiEntitiesDetectionJobRequest {
  /**
   * <p>The input properties for a PII entities detection job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Provides conﬁguration parameters for the output of PII entity detection jobs.</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>Specifies whether the output provides the locations (offsets) of PII entities or a file in
   *       which PII entities are redacted.</p>
   */
  Mode: PiiEntitiesDetectionMode | string | undefined;

  /**
   * <p>Provides configuration parameters for PII entity redaction.</p>
   *          <p>This parameter is required if you set the <code>Mode</code> parameter to
   *         <code>ONLY_REDACTION</code>. In that case, you must provide a <code>RedactionConfig</code>
   *       definition that includes the <code>PiiEntityTypes</code> parameter.</p>
   */
  RedactionConfig?: RedactionConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>The language of the input documents. Currently, English is the only valid language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Tags to associate with the PII entities detection job. A tag is a key-value pair that
   *       adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the
   *       key might be added to a resource to indicate its use by the sales department.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface StartPiiEntitiesDetectionJobResponse {
  /**
   * <p>The identifier generated for the job.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the PII entity detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:pii-entities-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:pii-entities-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The status of the job.</p>
   */
  JobStatus?: JobStatus | string;
}

/**
 * @public
 */
export interface StartSentimentDetectionJobRequest {
  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files. </p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions">Role-based permissions</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>The language of the input documents. You can specify any of the primary languages
   *       supported by Amazon Comprehend. All documents must be in the same language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your sentiment detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Tags to associate with the sentiment detection job. A tag is a key-value pair that
   *       adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the
   *       key might be added to a resource to indicate its use by the sales department.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface StartSentimentDetectionJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *       the  operation.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the sentiment detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:sentiment-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:sentiment-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The status of the job. </p>
   *          <ul>
   *             <li>
   *                <p>SUBMITTED - The job has been received and is queued for processing.</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED - The job was successfully completed and the output is available.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The job did not complete. To get details, use the  operation.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus | string;
}

/**
 * @public
 */
export interface StartTargetedSentimentDetectionJobRequest {
  /**
   * <p>The input properties for an inference job. The document reader config field applies
   *       only to non-text inputs for custom analysis.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files. </p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/access-control-managing-permissions.html#auth-role-permissions">Role-based permissions</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>The language of the input documents. Currently, English is the only supported language.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>A unique identifier for the request. If you don't set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *           <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p> Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Tags to associate with the targeted sentiment detection job. A tag is a key-value pair that
   *       adds metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the
   *       key might be added to a resource to indicate its use by the sales department.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface StartTargetedSentimentDetectionJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of a job, use this identifier with
   *       the <code>DescribeTargetedSentimentDetectionJob</code> operation.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the targeted sentiment detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:targeted-sentiment-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:targeted-sentiment-detection-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The status of the job. </p>
   *          <ul>
   *             <li>
   *                <p>SUBMITTED - The job has been received and is queued for processing.</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED - The job was successfully completed and the output is available.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The job did not complete. To get details, use the
   *           <code>DescribeTargetedSentimentDetectionJob</code> operation.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus | string;
}

/**
 * @public
 */
export interface StartTopicsDetectionJobRequest {
  /**
   * <p>Specifies the format and location of the input data for the job.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Specifies where to send the output files. The output is a compressed archive with two
   *       files, <code>topic-terms.csv</code> that lists the terms associated with each topic, and
   *         <code>doc-topics.csv</code> that lists the documents associated with each topic</p>
   */
  OutputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend read access to your input data. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/security_iam_id-based-policy-examples.html#auth-role-permissions">Role-based permissions</a>.</p>
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>The identifier of the job.</p>
   */
  JobName?: string;

  /**
   * <p>The number of topics to detect.</p>
   */
  NumberOfTopics?: number;

  /**
   * <p>A unique identifier for the request. If you do not set the client request token, Amazon
   *       Comprehend generates one.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
   *       data on the storage volume attached to the ML compute instance(s) that process the analysis
   *       job. The VolumeKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  VolumeKmsKeyId?: string;

  /**
   * <p>Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for your topic detection job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Tags to associate with the topics detection job. A tag is a key-value pair that adds
   *       metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key
   *       might be added to a resource to indicate its use by the sales department.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface StartTopicsDetectionJobResponse {
  /**
   * <p>The identifier generated for the job. To get the status of the job, use this identifier
   *       with the <code>DescribeTopicDetectionJob</code> operation.</p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the topics detection job. It is a unique, fully
   *       qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web Services Region, and the job ID. The
   *       format of the ARN is as follows:</p>
   *          <p>
   *             <code>arn:<partition>:comprehend:<region>:<account-id>:topics-detection-job/<job-id></code>
   *          </p>
   *          <p>The following is an example job ARN:</p>
   *          <p>
   *             <code>arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab</code>
   *          </p>
   */
  JobArn?: string;

  /**
   * <p>The status of the job: </p>
   *          <ul>
   *             <li>
   *                <p>SUBMITTED - The job has been received and is queued for processing.</p>
   *             </li>
   *             <li>
   *                <p>IN_PROGRESS - Amazon Comprehend is processing the job.</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED - The job was successfully completed and the output is
   *           available.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The job did not complete. To get details, use the
   *             <code>DescribeTopicDetectionJob</code> operation.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus | string;
}

/**
 * @public
 */
export interface StopDominantLanguageDetectionJobRequest {
  /**
   * <p>The identifier of the dominant language detection job to stop.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopDominantLanguageDetectionJobResponse {
  /**
   * <p>The identifier of the dominant language detection job to stop.</p>
   */
  JobId?: string;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *         <code>STOPPED</code> if the job was previously stopped with the
   *         <code>StopDominantLanguageDetectionJob</code> operation.</p>
   */
  JobStatus?: JobStatus | string;
}

/**
 * @public
 */
export interface StopEntitiesDetectionJobRequest {
  /**
   * <p>The identifier of the entities detection job to stop.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopEntitiesDetectionJobResponse {
  /**
   * <p>The identifier of the entities detection job to stop.</p>
   */
  JobId?: string;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *         <code>STOPPED</code> if the job was previously stopped with the
   *         <code>StopEntitiesDetectionJob</code> operation.</p>
   */
  JobStatus?: JobStatus | string;
}

/**
 * @public
 */
export interface StopEventsDetectionJobRequest {
  /**
   * <p>The identifier of the events detection job to stop.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopEventsDetectionJobResponse {
  /**
   * <p>The identifier of the events detection job to stop.</p>
   */
  JobId?: string;

  /**
   * <p>The status of the events detection job.</p>
   */
  JobStatus?: JobStatus | string;
}

/**
 * @public
 */
export interface StopKeyPhrasesDetectionJobRequest {
  /**
   * <p>The identifier of the key phrases detection job to stop.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopKeyPhrasesDetectionJobResponse {
  /**
   * <p>The identifier of the key phrases detection job to stop.</p>
   */
  JobId?: string;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *         <code>STOPPED</code> if the job was previously stopped with the
   *         <code>StopKeyPhrasesDetectionJob</code> operation.</p>
   */
  JobStatus?: JobStatus | string;
}

/**
 * @public
 */
export interface StopPiiEntitiesDetectionJobRequest {
  /**
   * <p>The identifier of the PII entities detection job to stop.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopPiiEntitiesDetectionJobResponse {
  /**
   * <p>The identifier of the PII entities detection job to stop.</p>
   */
  JobId?: string;

  /**
   * <p>The status of the PII entities detection job.</p>
   */
  JobStatus?: JobStatus | string;
}

/**
 * @public
 */
export interface StopSentimentDetectionJobRequest {
  /**
   * <p>The identifier of the sentiment detection job to stop.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopSentimentDetectionJobResponse {
  /**
   * <p>The identifier of the sentiment detection job to stop.</p>
   */
  JobId?: string;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *         <code>STOPPED</code> if the job was previously stopped with the
   *         <code>StopSentimentDetectionJob</code> operation.</p>
   */
  JobStatus?: JobStatus | string;
}

/**
 * @internal
 */
export const BatchDetectDominantLanguageRequestFilterSensitiveLog = (obj: BatchDetectDominantLanguageRequest): any => ({
  ...obj,
  ...(obj.TextList && { TextList: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchDetectDominantLanguageResponseFilterSensitiveLog = (
  obj: BatchDetectDominantLanguageResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDetectEntitiesRequestFilterSensitiveLog = (obj: BatchDetectEntitiesRequest): any => ({
  ...obj,
  ...(obj.TextList && { TextList: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchDetectEntitiesResponseFilterSensitiveLog = (obj: BatchDetectEntitiesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDetectKeyPhrasesRequestFilterSensitiveLog = (obj: BatchDetectKeyPhrasesRequest): any => ({
  ...obj,
  ...(obj.TextList && { TextList: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchDetectKeyPhrasesResponseFilterSensitiveLog = (obj: BatchDetectKeyPhrasesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDetectSentimentRequestFilterSensitiveLog = (obj: BatchDetectSentimentRequest): any => ({
  ...obj,
  ...(obj.TextList && { TextList: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchDetectSentimentResponseFilterSensitiveLog = (obj: BatchDetectSentimentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDetectSyntaxRequestFilterSensitiveLog = (obj: BatchDetectSyntaxRequest): any => ({
  ...obj,
  ...(obj.TextList && { TextList: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchDetectSyntaxResponseFilterSensitiveLog = (obj: BatchDetectSyntaxResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDetectTargetedSentimentRequestFilterSensitiveLog = (
  obj: BatchDetectTargetedSentimentRequest
): any => ({
  ...obj,
  ...(obj.TextList && { TextList: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchDetectTargetedSentimentResponseFilterSensitiveLog = (
  obj: BatchDetectTargetedSentimentResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClassifierMetadataFilterSensitiveLog = (obj: ClassifierMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClassifyDocumentRequestFilterSensitiveLog = (obj: ClassifyDocumentRequest): any => ({
  ...obj,
  ...(obj.Text && { Text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ClassifyDocumentResponseFilterSensitiveLog = (obj: ClassifyDocumentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DocumentClassifierPropertiesFilterSensitiveLog = (obj: DocumentClassifierProperties): any => ({
  ...obj,
  ...(obj.ClassifierMetadata && { ClassifierMetadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeDocumentClassifierResponseFilterSensitiveLog = (obj: DescribeDocumentClassifierResponse): any => ({
  ...obj,
  ...(obj.DocumentClassifierProperties && {
    DocumentClassifierProperties: DocumentClassifierPropertiesFilterSensitiveLog(obj.DocumentClassifierProperties),
  }),
});

/**
 * @internal
 */
export const EntityRecognizerMetadataFilterSensitiveLog = (obj: EntityRecognizerMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EntityRecognizerPropertiesFilterSensitiveLog = (obj: EntityRecognizerProperties): any => ({
  ...obj,
  ...(obj.RecognizerMetadata && { RecognizerMetadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeEntityRecognizerResponseFilterSensitiveLog = (obj: DescribeEntityRecognizerResponse): any => ({
  ...obj,
  ...(obj.EntityRecognizerProperties && {
    EntityRecognizerProperties: EntityRecognizerPropertiesFilterSensitiveLog(obj.EntityRecognizerProperties),
  }),
});

/**
 * @internal
 */
export const DetectDominantLanguageRequestFilterSensitiveLog = (obj: DetectDominantLanguageRequest): any => ({
  ...obj,
  ...(obj.Text && { Text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DetectDominantLanguageResponseFilterSensitiveLog = (obj: DetectDominantLanguageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectEntitiesRequestFilterSensitiveLog = (obj: DetectEntitiesRequest): any => ({
  ...obj,
  ...(obj.Text && { Text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DetectEntitiesResponseFilterSensitiveLog = (obj: DetectEntitiesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectKeyPhrasesRequestFilterSensitiveLog = (obj: DetectKeyPhrasesRequest): any => ({
  ...obj,
  ...(obj.Text && { Text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DetectKeyPhrasesResponseFilterSensitiveLog = (obj: DetectKeyPhrasesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectSentimentRequestFilterSensitiveLog = (obj: DetectSentimentRequest): any => ({
  ...obj,
  ...(obj.Text && { Text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DetectSentimentResponseFilterSensitiveLog = (obj: DetectSentimentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectSyntaxRequestFilterSensitiveLog = (obj: DetectSyntaxRequest): any => ({
  ...obj,
  ...(obj.Text && { Text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DetectSyntaxResponseFilterSensitiveLog = (obj: DetectSyntaxResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectTargetedSentimentRequestFilterSensitiveLog = (obj: DetectTargetedSentimentRequest): any => ({
  ...obj,
  ...(obj.Text && { Text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DetectTargetedSentimentResponseFilterSensitiveLog = (obj: DetectTargetedSentimentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDocumentClassifiersResponseFilterSensitiveLog = (obj: ListDocumentClassifiersResponse): any => ({
  ...obj,
  ...(obj.DocumentClassifierPropertiesList && {
    DocumentClassifierPropertiesList: obj.DocumentClassifierPropertiesList.map((item) =>
      DocumentClassifierPropertiesFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const ListEntityRecognizersResponseFilterSensitiveLog = (obj: ListEntityRecognizersResponse): any => ({
  ...obj,
  ...(obj.EntityRecognizerPropertiesList && {
    EntityRecognizerPropertiesList: obj.EntityRecognizerPropertiesList.map((item) =>
      EntityRecognizerPropertiesFilterSensitiveLog(item)
    ),
  }),
});
