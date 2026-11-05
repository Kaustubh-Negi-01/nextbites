"use client";

import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="shell state-screen">
      <h1>Something went wrong in the kitchen.</h1>
      <p>We couldn’t load this page. Give it another try or find a different recipe.</p>
      <div className="recovery-actions">
        <button className="recovery-action" onClick={() => reset()}>Try again</button>
        <Link href="/">Back to recipes</Link>
      </div>
    </main>
  );
}
