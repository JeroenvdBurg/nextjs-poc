/* eslint-disable */ // THIS IS A GENERATED FILE. Do not edit manually.
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  readonly __typename?: 'Asset';
  readonly contentType: Maybe<Scalars['String']>;
  readonly contentfulMetadata: ContentfulMetadata;
  readonly description: Maybe<Scalars['String']>;
  readonly fileName: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly linkedFrom: Maybe<AssetLinkingCollections>;
  readonly size: Maybe<Scalars['Int']>;
  readonly sys: Sys;
  readonly title: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform: InputMaybe<ImageTransformOptions>;
};

export type AssetCollection = {
  readonly __typename?: 'AssetCollection';
  readonly items: ReadonlyArray<Maybe<Asset>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type AssetFilter = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<AssetFilter>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<AssetFilter>>>;
  readonly contentType: InputMaybe<Scalars['String']>;
  readonly contentType_contains: InputMaybe<Scalars['String']>;
  readonly contentType_exists: InputMaybe<Scalars['Boolean']>;
  readonly contentType_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly contentType_not: InputMaybe<Scalars['String']>;
  readonly contentType_not_contains: InputMaybe<Scalars['String']>;
  readonly contentType_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  readonly description: InputMaybe<Scalars['String']>;
  readonly description_contains: InputMaybe<Scalars['String']>;
  readonly description_exists: InputMaybe<Scalars['Boolean']>;
  readonly description_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly description_not: InputMaybe<Scalars['String']>;
  readonly description_not_contains: InputMaybe<Scalars['String']>;
  readonly description_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly fileName: InputMaybe<Scalars['String']>;
  readonly fileName_contains: InputMaybe<Scalars['String']>;
  readonly fileName_exists: InputMaybe<Scalars['Boolean']>;
  readonly fileName_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly fileName_not: InputMaybe<Scalars['String']>;
  readonly fileName_not_contains: InputMaybe<Scalars['String']>;
  readonly fileName_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly height: InputMaybe<Scalars['Int']>;
  readonly height_exists: InputMaybe<Scalars['Boolean']>;
  readonly height_gt: InputMaybe<Scalars['Int']>;
  readonly height_gte: InputMaybe<Scalars['Int']>;
  readonly height_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly height_lt: InputMaybe<Scalars['Int']>;
  readonly height_lte: InputMaybe<Scalars['Int']>;
  readonly height_not: InputMaybe<Scalars['Int']>;
  readonly height_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly size: InputMaybe<Scalars['Int']>;
  readonly size_exists: InputMaybe<Scalars['Boolean']>;
  readonly size_gt: InputMaybe<Scalars['Int']>;
  readonly size_gte: InputMaybe<Scalars['Int']>;
  readonly size_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly size_lt: InputMaybe<Scalars['Int']>;
  readonly size_lte: InputMaybe<Scalars['Int']>;
  readonly size_not: InputMaybe<Scalars['Int']>;
  readonly size_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly sys: InputMaybe<SysFilter>;
  readonly title: InputMaybe<Scalars['String']>;
  readonly title_contains: InputMaybe<Scalars['String']>;
  readonly title_exists: InputMaybe<Scalars['Boolean']>;
  readonly title_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly title_not: InputMaybe<Scalars['String']>;
  readonly title_not_contains: InputMaybe<Scalars['String']>;
  readonly title_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly url: InputMaybe<Scalars['String']>;
  readonly url_contains: InputMaybe<Scalars['String']>;
  readonly url_exists: InputMaybe<Scalars['Boolean']>;
  readonly url_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly url_not: InputMaybe<Scalars['String']>;
  readonly url_not_contains: InputMaybe<Scalars['String']>;
  readonly url_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly width: InputMaybe<Scalars['Int']>;
  readonly width_exists: InputMaybe<Scalars['Boolean']>;
  readonly width_gt: InputMaybe<Scalars['Int']>;
  readonly width_gte: InputMaybe<Scalars['Int']>;
  readonly width_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly width_lt: InputMaybe<Scalars['Int']>;
  readonly width_lte: InputMaybe<Scalars['Int']>;
  readonly width_not: InputMaybe<Scalars['Int']>;
  readonly width_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  readonly __typename?: 'AssetLinkingCollections';
  readonly contentBlockCollection: Maybe<ContentBlockCollection>;
  readonly entryCollection: Maybe<EntryCollection>;
};

export type AssetLinkingCollectionsContentBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type AssetOrder =
  | 'contentType_ASC'
  | 'contentType_DESC'
  | 'fileName_ASC'
  | 'fileName_DESC'
  | 'height_ASC'
  | 'height_DESC'
  | 'size_ASC'
  | 'size_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'url_ASC'
  | 'url_DESC'
  | 'width_ASC'
  | 'width_DESC';

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/contentBlock) */
export type ContentBlock = Entry & {
  readonly __typename?: 'ContentBlock';
  readonly alignLeft: Maybe<Scalars['Boolean']>;
  readonly contentfulMetadata: ContentfulMetadata;
  readonly image: Maybe<Asset>;
  readonly link: Maybe<Link>;
  readonly linkedFrom: Maybe<ContentBlockLinkingCollections>;
  readonly sys: Sys;
  readonly text: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/contentBlock) */
export type ContentBlockAlignLeftArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/contentBlock) */
export type ContentBlockImageArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/contentBlock) */
export type ContentBlockLinkArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/contentBlock) */
export type ContentBlockLinkedFromArgs = {
  allowedLocales: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/contentBlock) */
export type ContentBlockTextArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/contentBlock) */
export type ContentBlockTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type ContentBlockCollection = {
  readonly __typename?: 'ContentBlockCollection';
  readonly items: ReadonlyArray<Maybe<ContentBlock>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type ContentBlockFilter = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<ContentBlockFilter>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<ContentBlockFilter>>>;
  readonly alignLeft: InputMaybe<Scalars['Boolean']>;
  readonly alignLeft_exists: InputMaybe<Scalars['Boolean']>;
  readonly alignLeft_not: InputMaybe<Scalars['Boolean']>;
  readonly contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  readonly image_exists: InputMaybe<Scalars['Boolean']>;
  readonly link: InputMaybe<CfLinkNestedFilter>;
  readonly link_exists: InputMaybe<Scalars['Boolean']>;
  readonly sys: InputMaybe<SysFilter>;
  readonly text: InputMaybe<Scalars['String']>;
  readonly text_contains: InputMaybe<Scalars['String']>;
  readonly text_exists: InputMaybe<Scalars['Boolean']>;
  readonly text_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly text_not: InputMaybe<Scalars['String']>;
  readonly text_not_contains: InputMaybe<Scalars['String']>;
  readonly text_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly title: InputMaybe<Scalars['String']>;
  readonly title_contains: InputMaybe<Scalars['String']>;
  readonly title_exists: InputMaybe<Scalars['Boolean']>;
  readonly title_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly title_not: InputMaybe<Scalars['String']>;
  readonly title_not_contains: InputMaybe<Scalars['String']>;
  readonly title_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type ContentBlockLinkingCollections = {
  readonly __typename?: 'ContentBlockLinkingCollections';
  readonly entryCollection: Maybe<EntryCollection>;
  readonly homePageCollection: Maybe<HomePageCollection>;
  readonly pageCollection: Maybe<PageCollection>;
};

export type ContentBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ContentBlockLinkingCollectionsHomePageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ContentBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ContentBlockOrder =
  | 'alignLeft_ASC'
  | 'alignLeft_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'title_ASC'
  | 'title_DESC';

export type ContentfulMetadata = {
  readonly __typename?: 'ContentfulMetadata';
  readonly tags: ReadonlyArray<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  readonly tags: InputMaybe<ContentfulMetadataTagsFilter>;
  readonly tags_exists: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  readonly id_contains_all: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly id_contains_none: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly id_contains_some: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  readonly __typename?: 'ContentfulTag';
  readonly id: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
};

export type Entry = {
  readonly contentfulMetadata: ContentfulMetadata;
  readonly sys: Sys;
};

export type EntryCollection = {
  readonly __typename?: 'EntryCollection';
  readonly items: ReadonlyArray<Maybe<Entry>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type EntryFilter = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<EntryFilter>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<EntryFilter>>>;
  readonly contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  readonly sys: InputMaybe<SysFilter>;
};

export type EntryOrder =
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC';

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/homePage) */
export type HomePage = Entry & {
  readonly __typename?: 'HomePage';
  readonly contentBlocksCollection: Maybe<HomePageContentBlocksCollection>;
  readonly contentfulMetadata: ContentfulMetadata;
  readonly description: Maybe<Scalars['String']>;
  readonly linkedFrom: Maybe<HomePageLinkingCollections>;
  readonly sys: Sys;
  readonly title: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/homePage) */
export type HomePageContentBlocksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/homePage) */
export type HomePageDescriptionArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/homePage) */
export type HomePageLinkedFromArgs = {
  allowedLocales: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/homePage) */
export type HomePageTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type HomePageCollection = {
  readonly __typename?: 'HomePageCollection';
  readonly items: ReadonlyArray<Maybe<HomePage>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type HomePageContentBlocksCollection = {
  readonly __typename?: 'HomePageContentBlocksCollection';
  readonly items: ReadonlyArray<Maybe<ContentBlock>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type HomePageFilter = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<HomePageFilter>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<HomePageFilter>>>;
  readonly contentBlocksCollection_exists: InputMaybe<Scalars['Boolean']>;
  readonly contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  readonly description: InputMaybe<Scalars['String']>;
  readonly description_contains: InputMaybe<Scalars['String']>;
  readonly description_exists: InputMaybe<Scalars['Boolean']>;
  readonly description_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly description_not: InputMaybe<Scalars['String']>;
  readonly description_not_contains: InputMaybe<Scalars['String']>;
  readonly description_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly sys: InputMaybe<SysFilter>;
  readonly title: InputMaybe<Scalars['String']>;
  readonly title_contains: InputMaybe<Scalars['String']>;
  readonly title_exists: InputMaybe<Scalars['Boolean']>;
  readonly title_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly title_not: InputMaybe<Scalars['String']>;
  readonly title_not_contains: InputMaybe<Scalars['String']>;
  readonly title_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type HomePageLinkingCollections = {
  readonly __typename?: 'HomePageLinkingCollections';
  readonly entryCollection: Maybe<EntryCollection>;
  readonly linkCollection: Maybe<LinkCollection>;
};

export type HomePageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type HomePageLinkingCollectionsLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type HomePageOrder =
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'title_ASC'
  | 'title_DESC';

export type ImageFormat =
  | 'AVIF'
  /** JPG image format. */
  | 'JPG'
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  | 'JPG_PROGRESSIVE'
  /** PNG image format */
  | 'PNG'
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  | 'PNG8'
  /** WebP image format. */
  | 'WEBP';

export type ImageResizeFocus =
  /** Focus the resizing on the bottom. */
  | 'BOTTOM'
  /** Focus the resizing on the bottom left. */
  | 'BOTTOM_LEFT'
  /** Focus the resizing on the bottom right. */
  | 'BOTTOM_RIGHT'
  /** Focus the resizing on the center. */
  | 'CENTER'
  /** Focus the resizing on the largest face. */
  | 'FACE'
  /** Focus the resizing on the area containing all the faces. */
  | 'FACES'
  /** Focus the resizing on the left. */
  | 'LEFT'
  /** Focus the resizing on the right. */
  | 'RIGHT'
  /** Focus the resizing on the top. */
  | 'TOP'
  /** Focus the resizing on the top left. */
  | 'TOP_LEFT'
  /** Focus the resizing on the top right. */
  | 'TOP_RIGHT';

export type ImageResizeStrategy =
  /** Crops a part of the original image to fit into the specified dimensions. */
  | 'CROP'
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  | 'FILL'
  /** Resizes the image to fit into the specified dimensions. */
  | 'FIT'
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  | 'PAD'
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  | 'SCALE'
  /** Creates a thumbnail from the image. */
  | 'THUMB';

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  readonly backgroundColor: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  readonly cornerRadius: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  readonly format: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  readonly height: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  readonly quality: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  readonly resizeFocus: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  readonly resizeStrategy: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  readonly width: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/link) */
export type Link = Entry & {
  readonly __typename?: 'Link';
  readonly contentfulMetadata: ContentfulMetadata;
  readonly linkedFrom: Maybe<LinkLinkingCollections>;
  readonly page: Maybe<LinkPage>;
  readonly sys: Sys;
  readonly title: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/link) */
export type LinkLinkedFromArgs = {
  allowedLocales: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/link) */
export type LinkPageArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/link) */
export type LinkTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type LinkCollection = {
  readonly __typename?: 'LinkCollection';
  readonly items: ReadonlyArray<Maybe<Link>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type LinkFilter = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<LinkFilter>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<LinkFilter>>>;
  readonly contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  readonly page_exists: InputMaybe<Scalars['Boolean']>;
  readonly sys: InputMaybe<SysFilter>;
  readonly title: InputMaybe<Scalars['String']>;
  readonly title_contains: InputMaybe<Scalars['String']>;
  readonly title_exists: InputMaybe<Scalars['Boolean']>;
  readonly title_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly title_not: InputMaybe<Scalars['String']>;
  readonly title_not_contains: InputMaybe<Scalars['String']>;
  readonly title_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type LinkLinkingCollections = {
  readonly __typename?: 'LinkLinkingCollections';
  readonly contentBlockCollection: Maybe<ContentBlockCollection>;
  readonly entryCollection: Maybe<EntryCollection>;
};

export type LinkLinkingCollectionsContentBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type LinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type LinkOrder =
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'title_ASC'
  | 'title_DESC';

export type LinkPage = HomePage | Page;

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/page) */
export type Page = Entry & {
  readonly __typename?: 'Page';
  readonly contentBlocksCollection: Maybe<PageContentBlocksCollection>;
  readonly contentfulMetadata: ContentfulMetadata;
  readonly description: Maybe<Scalars['String']>;
  readonly linkedFrom: Maybe<PageLinkingCollections>;
  readonly slug: Maybe<Scalars['String']>;
  readonly sys: Sys;
  readonly title: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/page) */
export type PageContentBlocksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/page) */
export type PageDescriptionArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/page) */
export type PageSlugArgs = {
  locale: InputMaybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/y2g51lame0ix/content_types/page) */
export type PageTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type PageCollection = {
  readonly __typename?: 'PageCollection';
  readonly items: ReadonlyArray<Maybe<Page>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type PageContentBlocksCollection = {
  readonly __typename?: 'PageContentBlocksCollection';
  readonly items: ReadonlyArray<Maybe<ContentBlock>>;
  readonly limit: Scalars['Int'];
  readonly skip: Scalars['Int'];
  readonly total: Scalars['Int'];
};

export type PageFilter = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<PageFilter>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<PageFilter>>>;
  readonly contentBlocksCollection_exists: InputMaybe<Scalars['Boolean']>;
  readonly contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  readonly description: InputMaybe<Scalars['String']>;
  readonly description_contains: InputMaybe<Scalars['String']>;
  readonly description_exists: InputMaybe<Scalars['Boolean']>;
  readonly description_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly description_not: InputMaybe<Scalars['String']>;
  readonly description_not_contains: InputMaybe<Scalars['String']>;
  readonly description_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly slug: InputMaybe<Scalars['String']>;
  readonly slug_contains: InputMaybe<Scalars['String']>;
  readonly slug_exists: InputMaybe<Scalars['Boolean']>;
  readonly slug_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly slug_not: InputMaybe<Scalars['String']>;
  readonly slug_not_contains: InputMaybe<Scalars['String']>;
  readonly slug_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly sys: InputMaybe<SysFilter>;
  readonly title: InputMaybe<Scalars['String']>;
  readonly title_contains: InputMaybe<Scalars['String']>;
  readonly title_exists: InputMaybe<Scalars['Boolean']>;
  readonly title_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly title_not: InputMaybe<Scalars['String']>;
  readonly title_not_contains: InputMaybe<Scalars['String']>;
  readonly title_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type PageLinkingCollections = {
  readonly __typename?: 'PageLinkingCollections';
  readonly entryCollection: Maybe<EntryCollection>;
  readonly linkCollection: Maybe<LinkCollection>;
};

export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PageLinkingCollectionsLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PageOrder =
  | 'slug_ASC'
  | 'slug_DESC'
  | 'sys_firstPublishedAt_ASC'
  | 'sys_firstPublishedAt_DESC'
  | 'sys_id_ASC'
  | 'sys_id_DESC'
  | 'sys_publishedAt_ASC'
  | 'sys_publishedAt_DESC'
  | 'sys_publishedVersion_ASC'
  | 'sys_publishedVersion_DESC'
  | 'title_ASC'
  | 'title_DESC';

export type Query = {
  readonly __typename?: 'Query';
  readonly asset: Maybe<Asset>;
  readonly assetCollection: Maybe<AssetCollection>;
  readonly contentBlock: Maybe<ContentBlock>;
  readonly contentBlockCollection: Maybe<ContentBlockCollection>;
  readonly entryCollection: Maybe<EntryCollection>;
  readonly homePage: Maybe<HomePage>;
  readonly homePageCollection: Maybe<HomePageCollection>;
  readonly link: Maybe<Link>;
  readonly linkCollection: Maybe<LinkCollection>;
  readonly page: Maybe<Page>;
  readonly pageCollection: Maybe<PageCollection>;
};

export type QueryAssetArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<ReadonlyArray<InputMaybe<AssetOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<AssetFilter>;
};

export type QueryContentBlockArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

export type QueryContentBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<ReadonlyArray<InputMaybe<ContentBlockOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ContentBlockFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<ReadonlyArray<InputMaybe<EntryOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<EntryFilter>;
};

export type QueryHomePageArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

export type QueryHomePageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<ReadonlyArray<InputMaybe<HomePageOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<HomePageFilter>;
};

export type QueryLinkArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

export type QueryLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<ReadonlyArray<InputMaybe<LinkOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<LinkFilter>;
};

export type QueryPageArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};

export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<ReadonlyArray<InputMaybe<PageOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<PageFilter>;
};

export type Sys = {
  readonly __typename?: 'Sys';
  readonly environmentId: Scalars['String'];
  readonly firstPublishedAt: Maybe<Scalars['DateTime']>;
  readonly id: Scalars['String'];
  readonly publishedAt: Maybe<Scalars['DateTime']>;
  readonly publishedVersion: Maybe<Scalars['Int']>;
  readonly spaceId: Scalars['String'];
};

export type SysFilter = {
  readonly firstPublishedAt: InputMaybe<Scalars['DateTime']>;
  readonly firstPublishedAt_exists: InputMaybe<Scalars['Boolean']>;
  readonly firstPublishedAt_gt: InputMaybe<Scalars['DateTime']>;
  readonly firstPublishedAt_gte: InputMaybe<Scalars['DateTime']>;
  readonly firstPublishedAt_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly firstPublishedAt_lt: InputMaybe<Scalars['DateTime']>;
  readonly firstPublishedAt_lte: InputMaybe<Scalars['DateTime']>;
  readonly firstPublishedAt_not: InputMaybe<Scalars['DateTime']>;
  readonly firstPublishedAt_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly id: InputMaybe<Scalars['String']>;
  readonly id_contains: InputMaybe<Scalars['String']>;
  readonly id_exists: InputMaybe<Scalars['Boolean']>;
  readonly id_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly id_not: InputMaybe<Scalars['String']>;
  readonly id_not_contains: InputMaybe<Scalars['String']>;
  readonly id_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']>;
  readonly publishedAt_exists: InputMaybe<Scalars['Boolean']>;
  readonly publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  readonly publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  readonly publishedAt_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  readonly publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  readonly publishedAt_not: InputMaybe<Scalars['DateTime']>;
  readonly publishedAt_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedVersion: InputMaybe<Scalars['Float']>;
  readonly publishedVersion_exists: InputMaybe<Scalars['Boolean']>;
  readonly publishedVersion_gt: InputMaybe<Scalars['Float']>;
  readonly publishedVersion_gte: InputMaybe<Scalars['Float']>;
  readonly publishedVersion_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly publishedVersion_lt: InputMaybe<Scalars['Float']>;
  readonly publishedVersion_lte: InputMaybe<Scalars['Float']>;
  readonly publishedVersion_not: InputMaybe<Scalars['Float']>;
  readonly publishedVersion_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
};

export type CfLinkNestedFilter = {
  readonly AND: InputMaybe<ReadonlyArray<InputMaybe<CfLinkNestedFilter>>>;
  readonly OR: InputMaybe<ReadonlyArray<InputMaybe<CfLinkNestedFilter>>>;
  readonly contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  readonly page_exists: InputMaybe<Scalars['Boolean']>;
  readonly sys: InputMaybe<SysFilter>;
  readonly title: InputMaybe<Scalars['String']>;
  readonly title_contains: InputMaybe<Scalars['String']>;
  readonly title_exists: InputMaybe<Scalars['Boolean']>;
  readonly title_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly title_not: InputMaybe<Scalars['String']>;
  readonly title_not_contains: InputMaybe<Scalars['String']>;
  readonly title_not_in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type ContentBlockFieldsFragment = {
  readonly __typename?: 'ContentBlock';
  readonly title: string | null | undefined;
  readonly text: string | null | undefined;
  readonly alignLeft: boolean | null | undefined;
  readonly link: { readonly __typename?: 'Link'; readonly title: string | null | undefined } | null | undefined;
  readonly image: { readonly __typename?: 'Asset'; readonly url: string | null | undefined } | null | undefined;
};

export type GetHomePageQueryVariables = Exact<{ [key: string]: never }>;

export type GetHomePageQuery = {
  readonly __typename?: 'Query';
  readonly homePageCollection:
    | {
        readonly __typename?: 'HomePageCollection';
        readonly items: ReadonlyArray<
          | {
              readonly __typename?: 'HomePage';
              readonly title: string | null | undefined;
              readonly description: string | null | undefined;
              readonly contentBlocksCollection:
                | {
                    readonly __typename?: 'HomePageContentBlocksCollection';
                    readonly items: ReadonlyArray<
                      | {
                          readonly __typename?: 'ContentBlock';
                          readonly title: string | null | undefined;
                          readonly text: string | null | undefined;
                          readonly alignLeft: boolean | null | undefined;
                          readonly link:
                            | { readonly __typename?: 'Link'; readonly title: string | null | undefined }
                            | null
                            | undefined;
                          readonly image:
                            | { readonly __typename?: 'Asset'; readonly url: string | null | undefined }
                            | null
                            | undefined;
                        }
                      | null
                      | undefined
                    >;
                  }
                | null
                | undefined;
            }
          | null
          | undefined
        >;
      }
    | null
    | undefined;
};
