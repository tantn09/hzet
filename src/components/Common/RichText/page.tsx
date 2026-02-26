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
    [MARKS.CODE]: (text) => (
      <code className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-[0.9em]">
        {text}
      </code>
    ),
  },

  renderNode: {
    [BLOCKS.HEADING_1]: (_node: Node, children: React.ReactNode) => (
      <h1 className="typo-h1 mt-8 mb-3">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_node: Node, children: React.ReactNode) => (
      <h2 className="typo-h2 mt-8 mb-3">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_node: Node, children: React.ReactNode) => (
      <h3 className="typo-h3 mt-6 mb-3">{children}</h3>
    ),
    [BLOCKS.PARAGRAPH]: (_node: Node, children: React.ReactNode) => (
      <p className="typo-body my-3">{children}</p>
    ),
    [BLOCKS.QUOTE]: (_node: Node, children: React.ReactNode) => (
      <blockquote className="my-4 border-l-4 border-blue-500 bg-blue-50 py-3 pl-4 italic text-blue-900">
        {children}
      </blockquote>
    ),
    [BLOCKS.UL_LIST]: (_node: Node, children: React.ReactNode) => (
      <ul className="my-3 list-disc pl-6">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_node: Node, children: React.ReactNode) => (
      <ol className="my-3 list-decimal pl-6">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_node: Node, children: React.ReactNode) => (
      <li className="typo-body my-1">{children}</li>
    ),
    [BLOCKS.HR]: () => <hr className="my-5 border-slate-200" />,
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      return (
        <iframe
          className="my-4 w-full overflow-hidden rounded-xl"
          height="400"
          src={node.data.target.fields.videoUrl}
          title={node.data.target.fields.title}
          allowFullScreen={true}
        />
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
      const asset = (node.data as any)?.target?.fields;

      if (!asset?.file?.url) return null;

      const url = asset.file.url.startsWith("//")
        ? `https:${asset.file.url}`
        : asset.file.url;
      const title = asset.title || "";

      if (asset.file.contentType?.includes("image")) {
        return (
          <Image
            width={400}
            height={400}
            src={url}
            alt={title}
            className="my-4 h-auto w-full max-w-full rounded-xl"
          />
        );
      }

      if (
        asset.file.contentType?.includes("html") &&
        url.includes("youtube")
      ) {
        return (
          <div className="ctf-video my-4 overflow-hidden rounded-xl">
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
          className="typo-link"
        >
          {children}
        </a>
      );
    },
  },
};

export default function RichText({ content }: Readonly<Props>) {
  return (
    <div className="typo-prose">
      {documentToReactComponents(content, options)}
    </div>
  );
}
