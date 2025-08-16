"use client";

import {
  BLOCKS,
  INLINES,
  MARKS,
  Node,
  Document,
} from "@contentful/rich-text-types";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import React from "react";
import "./richtext.css";
import Image from "next/image";

type Props = {
  content: Document;
};

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.CODE]: (text) => <code className="inline-code">{text}</code>,
  },

  renderNode: {
    [BLOCKS.HEADING_1]: (_node: Node, children: React.ReactNode) => (
      <h1 className="heading-1">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_node: Node, children: React.ReactNode) => (
      <h2 className="heading-2">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_node: Node, children: React.ReactNode) => (
      <h3 className="heading-3">{children}</h3>
    ),
    [BLOCKS.PARAGRAPH]: (_node: Node, children: React.ReactNode) => (
      <p className="paragraph">{children}</p>
    ),
    [BLOCKS.QUOTE]: (_node: Node, children: React.ReactNode) => (
      <blockquote className="quote">{children}</blockquote>
    ),
    [BLOCKS.UL_LIST]: (_node: Node, children: React.ReactNode) => (
      <ul className="ul-list">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_node: Node, children: React.ReactNode) => (
      <ol className="ol-list">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_node: Node, children: React.ReactNode) => (
      <li className="list-item">{children}</li>
    ),
    [BLOCKS.HR]: () => <hr className="divider" />,
    [BLOCKS.EMBEDDED_ENTRY]: node => {
        return (
          <iframe
            height='400'
            width='100%'
            src={node.data.target.fields.videoUrl}
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        )
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
      const asset = (node.data as any)?.target?.fields;

      if (!asset?.file?.url) return null;

      const url = asset.file.url.startsWith("//")
        ? `https:${asset.file.url}`
        : asset.file.url;
      const title = asset.title || "";

      if (asset.file.contentType?.includes("image")) {
        return <Image width={400} height={400} src={url} alt={title} className="content-image" />;
      }

      if (asset.file.contentType?.includes("html") && url.includes("youtube")) {
        return (
          <div className="video-wrapper">
            <iframe
              src={url}
              title={title}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        );
      }

      return null;
    },

    [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => {
      const url = (node.data as any)?.uri;
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          {children}
        </a>
      );
    },
  },
};

export default function RichText({ content }: Props) {
  return (
    <div className="richtext-container">
      {documentToReactComponents(content, options)}
    </div>
  );
}
