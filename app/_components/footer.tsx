import Link from "next/link";

const supportEmail = "support@email.com";

export default function Footer() {
  return (
    <div className="pt-5">
      <hr />
      <div className="footer">
        <Link href={"mailto:" + supportEmail}>Support</Link>
        <Link href="/tos">Terms of Service</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <div>Copyright © 2024 - All rights reserved</div>
      </div>
    </div>
  );
}
