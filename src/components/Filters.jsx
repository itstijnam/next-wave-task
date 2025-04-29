import React, { useEffect, useState } from 'react'
import './style/Filters.css'

function Filters() {
  const [idealOpen, setIdealOpen] = useState(true)
  const [occasionOpen, setOccasionOpen] = useState(false)
  const [workOpen, setWorkOpen] = useState(false)
  const [fabricOpen, setFabricOpen] = useState(false)
  const [segmentOpen, setSegmentOpen] = useState(false)

  return (
    <div className="filters-container">
      <div className="filter-option">
        <label>
          <input type="checkbox" />
          CUSTOMIZBLE
        </label>
      </div>

      {/* IDEAL FOR */}
      <div className="filter-category">
        <div className="filter-header" onClick={() => setIdealOpen(!idealOpen)}>
          <p>IDEAL FOR</p>
          <span className="dropdown">{idealOpen ? '▾' : '▸'}</span>
        </div>
        <p>All</p>
        {idealOpen && (
          <div className="filter-options">
            <p className="unselect">Unselect all</p>
            <label><input type="checkbox" /> Men</label>
            <label><input type="checkbox" /> Women</label>
            <label><input type="checkbox" /> Baby & Kids</label>
          </div>
        )}
      </div>

      {/* OCCASION */}
      <div className="filter-category">
        <div className="filter-header" onClick={() => setOccasionOpen(!occasionOpen)}>
          <p>OCCASION</p>
          <span className="dropdown">{occasionOpen ? '▾' : '▸'}</span>
        </div>
        <p>All</p>
        {occasionOpen && (
          <div className="filter-options">
            <label><input type="checkbox" /> Party</label>
            <label><input type="checkbox" /> Office</label>
            <label><input type="checkbox" /> Casual</label>
          </div>
        )}
      </div>

      {/* WORK */}
      <div className="filter-category">
        <div className="filter-header" onClick={() => setWorkOpen(!workOpen)}>
          <p>WORK</p>
          <span className="dropdown">{workOpen ? '▾' : '▸'}</span>
        </div>
        <p>All</p>
        {workOpen && (
          <div className="filter-options">
            <label><input type="checkbox" /> Embroidery</label>
            <label><input type="checkbox" /> Printed</label>
            <label><input type="checkbox" /> Solid</label>
          </div>
        )}
      </div>

      {/* FABRIC */}
      <div className="filter-category">
        <div className="filter-header" onClick={() => setFabricOpen(!fabricOpen)}>
          <p>FABRIC</p>
          <span className="dropdown">{fabricOpen ? '▾' : '▸'}</span>
        </div>
        <p>All</p>
        {fabricOpen && (
          <div className="filter-options">
            <label><input type="checkbox" /> Cotton</label>
            <label><input type="checkbox" /> Silk</label>
            <label><input type="checkbox" /> Linen</label>
          </div>
        )}
      </div>

      {/* SEGMENT */}
      <div className="filter-category">
        <div className="filter-header" onClick={() => setSegmentOpen(!segmentOpen)}>
          <p>SEGMENT</p>
          <span className="dropdown">{segmentOpen ? '▾' : '▸'}</span>
        </div>
        <p>All</p>
        {segmentOpen && (
          <div className="filter-options">
            <label><input type="checkbox" /> Premium</label>
            <label><input type="checkbox" /> Budget</label>
          </div>
        )}
      </div>
    </div>
  )
}

export default Filters
