import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLinks = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={`${pathname === href ? "font-bold text-[#005eb8]" : ""} font-medium`}
      >
        {children}
      </Link>
    </li>
  );
};

export default MyNavLinks;
