import { useState } from "react"
import Modal from "./modal"

const WorkItem = ({workItem}) => {
  const [state, setState] = useState(false)
  const test = (modalId) => {
    setState(true)
  }

  return (<>
    {state && <Modal {...{state}}/>}
    <div onClick={()=>test(workItem.id)} className="portfolio-item" id="lending" data-filter="#lending" data-modal="modal_1">
      <img className="portfolio-item__image" src={workItem.img_src} alt={workItem.name}/>
      <div className="portfolio-item__suptitle">CATEGORY: {workItem.category}</div>
      <div className="portfolio-item__title">
        {workItem.name}
        <time dateTime="2022-11-23">{workItem.date}</time>
      </div>
    </div>
  </>)
}

export default WorkItem
