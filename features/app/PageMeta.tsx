import { PropsWithChildren } from 'react';
import Head from 'next/head';

type Props = {
  title: string;
  description?: string;
  postFix?: boolean;
};

export default function PageMeta({ title, description, postFix = true }: PropsWithChildren<Props>) {
  return (
    <Head>
      <title>
        {title}
        {postFix ? ' - Appt' : ''}
      </title>
      {description && <meta name="description" content={description} />}
    </Head>
  );
}
