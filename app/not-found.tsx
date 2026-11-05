import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell state-screen">
      <h1>This recipe is off the menu.</h1>
      <p>We couldn’t find that page. There’s still something delicious to cook.</p>
      <Link className="recovery-action" href="/">Back to recipes</Link>
    </main>
  );
}
