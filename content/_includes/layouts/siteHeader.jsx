import React from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/consulting/what-we-do", label: "What We Do" },
  { href: "/consulting/how-we-do-it", label: "How We Do It" },
  { href: "/consulting/who-we-are", label: "Who We Are" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

const isActive = (pageUrl, href) => {
  if (!pageUrl) return false
  if (href === "/") return pageUrl === "/"
  return pageUrl.startsWith(href)
}

const SiteHeader = ({ page }) => {
  const pageUrl = page ? page.url : ""
  return (
    <header className="pb-3 mb-5 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center text-dark text-decoration-none mb-3"
      >
        <img
          src="/images/quill_pen_feather-rose.svg"
          width="40"
          height="32"
          className="me-2"
        />

        <h1 className="fs-4">Ping Poet Products</h1>
      </a>
      <ul className="nav nav-pills flex-wrap">
        {navLinks.map((link) => (
          <li className="nav-item" key={link.href}>
            <a
              href={link.href}
              className={`nav-link${
                isActive(pageUrl, link.href) ? " active" : ""
              }`}
              aria-current={isActive(pageUrl, link.href) ? "page" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default SiteHeader
