import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <hr />
      <div className="footer">
        <Link href="/support">Support</Link>
        <Link href="/tos">Terms of Service</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <div>Copyright © 2024 - All rights reserved</div>
      </div>
    </div>
  );
}
