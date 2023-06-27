import React, { useImperativeHandle, useRef, useState } from "react"

import { Link } from "gatsby"

const Menu = React.forwardRef((props, ref) => {
  const [open, setOpen] = useState(true);
  const menuRef = useRef();

  const close = () => {
    setOpen(false);
  };

  const openMenu = () => {
    setOpen(true);
  };

  useImperativeHandle(ref, () => ({
    open: openMenu,
  }));

  return (
    <div
      role="button"
      tabIndex={0}
      className={`menu`}
      onClick={close}
      onKeyDown={close}
			style={{visibility: open ? 'visible' : 'hidden', opacity: open ? 1 : 0}}
    >
      <Link to="/"><h1>Home</h1></Link>
      <Link to="/#portfolio"><h1>Portfolio</h1></Link>
      <Link to="/#about"><h1>About</h1></Link>
      <Link to="/blog"><h1>Blog</h1></Link>
      <Link to="/#contact"><h1>Contact</h1></Link>
    </div>
  );
});

export default Menu;