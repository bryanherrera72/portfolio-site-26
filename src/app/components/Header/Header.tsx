import { ReactNode } from "react";
import NavItems from "../NavItems/NavItems";
function Header(): ReactNode {
  return (
    <nav className="m-4 flex flex-row justify-between">
      <div>I am header left content</div>
      <div className="justify-self-end">
        <NavItems />
      </div>
    </nav>
  );
}

export default Header;
