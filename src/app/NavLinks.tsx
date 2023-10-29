import Link from "next/link";

const links = [
  { label: "Dashboard", href: "/" },
  { label: "Bugs", href: "/bugs/list" },
];

const NavLinks = () => {
  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
