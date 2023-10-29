import Link from "next/link";

const NavAuth = () => {
  return (
    <Link
      href="/api/auth/signin"
      className="text-zinc-500 hover:text-zinc-800 transition-colors"
    >
      Login
    </Link>
  );
};

export default NavAuth;
