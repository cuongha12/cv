import React from 'react'
import {Link, useMatch, useResolvedPath} from "react-router-dom";
function CsLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
        className={match ?'especially':'active'}
        to={to}
        {...props}
    >
        {children}
    </Link>
    )
}

export default CsLink