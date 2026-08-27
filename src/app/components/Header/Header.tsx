import { ReactNode } from "react";
import NavItems from "../NavItems/NavItems";
function Header(): ReactNode {
  return (
    <nav className="m-5 pl-5 pr-5 flex flex-row justify-between font-medium">
      <div>header left content</div>
      <div className="justify-self-end">
        <NavItems />
      </div>
    </nav>
  );
}

export default Header;
