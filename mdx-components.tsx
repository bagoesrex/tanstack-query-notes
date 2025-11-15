import { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import { highlight } from 'sugar-high';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;
type TableProps = ComponentPropsWithoutRef<'table'>;

const components = {
    h1: (props: HeadingProps) => (
        <h1 className="font-bold text-xl tracking-tighter capitalize mb-5" {...props} >
            - {props.children} -
        </h1 >
    ),
    h2: (props: HeadingProps) => (
        <h2
            className="font-semibold text-xl tracking-tighter capitalize mt-4 mb-2"
            {...props}
        >
            -- {props.children} --
        </h2>
    ),
    h3: (props: HeadingProps) => (
        <h3
            className="font-medium mt-8 mb-3"
            {...props}
        />
    ),
    h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
    p: (props: ParagraphProps) => (
        <p className="" {...props} />
    ),
    ol: (props: ListProps) => (
        <ol
            className="list-decimal pl-5 space-y-2"
            {...props}
        />
    ),
    ul: (props: ListProps) => (
        <ul
            className="list-disc pl-5 space-y-1"
            {...props}
        />
    ),
    li: (props: ListItemProps) => <li className="pl-1" {...props} />,
    em: (props: ComponentPropsWithoutRef<'em'>) => (
        <em className="font-medium" {...props} />
    ),
    strong: (props: ComponentPropsWithoutRef<'strong'>) => (
        <strong className="font-medium" {...props} />
    ),
    a: ({ href, children, ...props }: AnchorProps) => {
        const className =
            'text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800';
        if (href?.startsWith('/')) {
            return (
                <Link href={href} className={className} {...props}>
                    {children}
                </Link>
            );
        }
        if (href?.startsWith('#')) {
            return (
                <a href={href} className={className} {...props}>
                    {children}
                </a>
            );
        }
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                {...props}
            >
                {children}
            </a>
        );
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
        const codeHTML = highlight(children as string);
        return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
    },
    table: ({ children, ...props }: TableProps) => (
        <div className="overflow-x-auto w-full mt-2 mb-3">
            <table
                className="w-full border-collapse rounded-xl overflow-hidden text-sm"
                {...props}
            >
                {children}
            </table>
        </div>
    ),
    blockquote: (props: BlockquoteProps) => (
        <blockquote
            className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700 dark:border-zinc-600 dark:text-zinc-300"
            {...props}
        />
    ),
};

declare global {
    type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
    return components;
}