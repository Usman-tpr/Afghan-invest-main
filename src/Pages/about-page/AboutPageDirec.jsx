import React from 'react'
import AboutDirectorates from '../../Components/about-us-page-components/AboutDirectorates'
import Pagination from '../../Components/Pagination'

const AboutPageDirec = () => {
  return (
    <div>
      <AboutDirectorates/>
      <div className="my-20">
     <Pagination
        totalItems={3} // Total number of items
        itemsPerPage={3} // Number of items per page
        // currentPage={currentPage} // Current active page
        // onPageChange={handlePageChange} // Callback to handle page changes
      />
     </div>
    </div>
  )
}

export default AboutPageDirec
