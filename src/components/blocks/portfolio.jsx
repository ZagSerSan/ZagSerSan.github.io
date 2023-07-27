import WorkItem from '../workItem'
// images
import activebox_preview from '../../img/works/activebox/preview.png'
import mogo_preview from '../../img/works/mogo/preview.png'
import designerPortfolio_preview from '../../img/works/designer-portfolio/preview.png'
import calculator_preview from '../../img/works/calculator/preview.png'
import todoList_preview from '../../img/works/todoList/preview.png'
import contectsMenu_preview from '../../img/works/contectsMenu/preview.png'
import weatherWidget_preview from '../../img/works/weather-widget/preview.png'
import ticTacToe_preview from '../../img/works/tic-tac-toe/preview.png'
import socialUsersTable_preview from '../../img/works/usersTable/preview.gif'

const works = [
   {
      id: 1,
      name: 'ActiveBox',
      img_src: activebox_preview,
      category: 'Lending',
      date: '2022-11-23'
   },
   {
      id: 2,
      name: 'MoGo',
      img_src: mogo_preview,
      category: 'Lending',
      date: '2022-11-23'
   },
   {
      id: 3,
      name: 'Designer Portfolio',
      img_src: designerPortfolio_preview,
      category: 'Lending',
      date: '2022-11-23'
   },
   {
      id: 4,
      name: 'Custom Calculator',
      img_src: calculator_preview,
      category: 'App',
      date: '2022-11-23'
   },
   {
      id: 5,
      name: 'Todo list',
      img_src: todoList_preview,
      category: 'App',
      date: '2022-11-23'
   },
   {
      id: 6,
      name: 'Contects Menu',
      img_src: contectsMenu_preview,
      category: 'App',
      date: '2022-11-23'
   },
   {
      id: 7,
      name: 'Weather Widget',
      img_src: weatherWidget_preview,
      category: 'App',
      date: '2022-11-23'
   },
   {
      id: 8,
      name: 'Tic-Tac-Toe',
      img_src: ticTacToe_preview,
      category: 'App',
      date: '2022-11-23'
   },
   {
      id: 9,
      name: 'Social Users Table',
      img_src: socialUsersTable_preview,
      category: 'App',
      date: '2022-11-23'
   }
]

const Portfolio = () => {
  return (
    <div className="work" id="work">
        <div className="container">
           <div className="filter">
              <a href="" data-filter className="filter__link active">All</a>
              <a href="" data-filter className="filter__link">Lending</a>
              <a href="" data-filter className="filter__link">App</a>
           </div>
           
           <div className="portfolio">
              {Object.keys(works).map(work => (
                 <WorkItem workItem={works[work]}/>
              ))}
           </div>
           {/* <button type="button" id="loadmoreworks" className="work__btn btn-black">LOAD MORE WORK</button> */}
        </div>
     </div>
  )
}

export default Portfolio
