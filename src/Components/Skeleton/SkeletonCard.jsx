import React from 'react'
import  './SkeletonCard.css'
const SkeletonCard = () => {
  return (
    <div class="row">
    <div class="container">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-4 cards">
          <div class="card_image loading "></div>
          <div >
          <div class="card_title loading"></div>
          <div class="card_title loading"></div>
          <div class="card_description loading"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SkeletonCard