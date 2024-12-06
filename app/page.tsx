"use client";

import { button as buttonStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/react";
import Link from "next/link";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ color: "violet" })}>
          Intelligent Career Guidance&nbsp;
        </span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          AI-powered platform that helps students identify potential career
          paths based on their skills, interests, and preferences.
        </div>
      </div>

      <Link href={"/questions"}>
        <Button
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Let&apos;s Begin
        </Button>
      </Link>
    </section>
  );
}
