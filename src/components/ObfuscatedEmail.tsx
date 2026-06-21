import { useEffect, useState } from "react";

interface ObfuscatedEmailProps {
  user: string;
  domain: string;
  className?: string;
  "data-testid"?: string;
}

/**
 * Renders an email address that only assembles into a real mailto: link
 * after JavaScript runs. Static HTML scrapers (the kind that harvest
 * addresses straight from page source) only ever see the de-obfuscated
 * placeholder text below, not a usable address.
 */
export default function ObfuscatedEmail({ user, domain, className, ...rest }: ObfuscatedEmailProps) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setRevealed(true);
  }, []);

  if (!revealed) {
    return (
      <span className={className} {...rest}>
        {user} [at] {domain.replace(".", " [dot] ")}
      </span>
    );
  }

  const email = `${user}@${domain}`;
  return (
    <a href={`mailto:${email}`} className={className} {...rest}>
      {email}
    </a>
  );
}
