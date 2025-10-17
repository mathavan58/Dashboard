import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const segmentToLabel = (segment) => {
  if (!segment) return 'Home'
  const map = {
    rms: 'RMS',
    spa: 'My SPA',
    sales: 'Sales',
    project: 'Project',
    pmes: 'PMES'
  }
  return map[segment.toLowerCase()] || segment
}

const Breadcrumbs = () => {
  const location = useLocation()
  const segments = location.pathname.split('/').filter(Boolean)

  // build accumulated paths
  const paths = segments.map((seg, idx) => ({
    name: segmentToLabel(seg),
    to: '/' + segments.slice(0, idx + 1).join('/')
  }))

  return (
    <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb" className='bg-secondary-subtle width-100'>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {paths.map((p) => (
          <li key={p.to} className={`breadcrumb-item ${p.to === location.pathname ? 'active' : ''}`} aria-current={p.to === location.pathname ? 'page' : undefined}>
            {p.to === location.pathname ? (
              p.name
            ) : (
              <Link to={p.to}>{p.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
