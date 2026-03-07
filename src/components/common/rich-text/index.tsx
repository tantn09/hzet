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
    [MARKS.BOLD]: (text) => <strong className="font-semibold text-slate-900">{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.CODE]: (text) => (
      <code className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-[0.875em] text-slate-800">
        {text}
      </code>
    ),
  },

  renderNode: {
    [BLOCKS.HEADING_1]: (_node: Node, children: React.ReactNode) => (
      <h1 className="mt-10 mb-4 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
        {children}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (_node: Node, children: React.ReactNode) => (
      <h2 className="mt-8 mb-3 text-xl font-bold leading-tight tracking-tight text-slate-900 sm:text-2xl">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (_node: Node, children: React.ReactNode) => (
      <h3 className="mt-6 mb-3 text-lg font-semibold leading-snug text-slate-800 sm:text-xl">
        {children}
      </h3>
    ),
    [BLOCKS.PARAGRAPH]: (_node: Node, children: React.ReactNode) => (
      <p className="text-[15px] leading-7 text-slate-600">{children}</p>
    ),
    [BLOCKS.QUOTE]: (_node: Node, children: React.ReactNode) => (
      <blockquote className="my-5 rounded-r-xl border-l-4 border-blue-500 bg-blue-50/70 py-4 pr-4 pl-5 text-[15px] italic text-blue-900">
        {children}
      </blockquote>
    ),
    [BLOCKS.UL_LIST]: (_node: Node, children: React.ReactNode) => (
      <ul className="my-4 space-y-1.5 pl-5 marker:text-slate-400">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_node: Node, children: React.ReactNode) => (
      <ol className="my-4 space-y-1.5 pl-5 list-decimal marker:text-slate-400">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_node: Node, children: React.ReactNode) => (
      <li className="text-[15px] leading-7 text-slate-600 pl-1">{children}</li>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-slate-200" />,
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      return (
        <iframe
          className="my-6 w-full overflow-hidden rounded-2xl shadow-sm"
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
          <figure className="my-6">
            <Image
              width={800}
              height={500}
              src={url}
              alt={title}
              className="h-auto w-full rounded-2xl shadow-sm"
            />
            {title && (
              <figcaption className="mt-2 text-center text-xs text-slate-400">
                {title}
              </figcaption>
            )}
          </figure>
        );
      }

      if (
        asset.file.contentType?.includes("html") &&
        url.includes("youtube")
      ) {
        return (
          <div className="ctf-video my-6 overflow-hidden rounded-2xl shadow-sm">
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
          className="text-blue-600 underline decoration-blue-300/50 underline-offset-[3px] transition-colors hover:text-blue-700 hover:decoration-blue-400"
        >
          {children}
        </a>
      );
    },
  },
};

export default function RichText({ content }: Readonly<Props>) {
  return (
    <div className="space-y-4">
      {documentToReactComponents(content, options)}
    </div>
  );
}
