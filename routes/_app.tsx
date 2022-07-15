// routes/_app.tsx
/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head, asset } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function (props: AppProps) {
  return (
    <>
      <Head>
        <link href={asset('/main.css')} rel="stylesheet"/>
      </Head>
      <props.Component />
    </>
  );
}