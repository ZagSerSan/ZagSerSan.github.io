import WorkItem from '../workItem'
// slides
import { activebox_preview, activebox_slides } from '../../img/works/activebox'
import { mogo_preview, mogo_slides } from '../../img/works/mogo'
import { designerPortfolio_preview, designerPortfolio_slides } from '../../img/works/designer-portfolio'
import { calculator_preview, calculator_slide } from '../../img/works/calculator'
import todoList_preview from '../../img/works/todoList/preview.png'
import contectsMenu_preview from '../../img/works/contectsMenu/preview.png'
import weatherWidget_preview from '../../img/works/weather-widget/preview.png'
import ticTacToe_preview from '../../img/works/tic-tac-toe/preview.png'
import socialUsersTable_preview from '../../img/works/usersTable/preview.gif'

const works = [
  {
    id: 1,
    name: 'ActiveBox',
    category: 'Lending',
    date: '2022-11-23',
    website_link: '../../src/portfolio/lending/activebox/index.html',
    img_src: activebox_preview,
    modal_images: activebox_slides,
    description: {
      en: 'This site was my first project. At that time, I was just starting to learn the basics of layout using a design template. But then, after consolidating the old and gaining new knowledge, I decided to redo it again with better practice. After finishing the course, I want to change it to react.js',
      ru: 'Данный сайт был моим первым проектом. В это время я только начинал изучать основы вёрстки по шаблону дизайна. Но потом, после закрепления старых и получения новых знаний, я решил переделать его снова с более лучшей практикой. После окончания курса хочу переделать его на react.js',
      pl: 'pl version is none now..'
    }
  },
  {
    id: 2,
    name: 'MoGo',
    category: 'Lending',
    date: '2022-11-23',
    website_link: '../../src/portfolio/lending/mogo/index.html',
    img_src: mogo_preview,
    modal_images: mogo_slides,
    description: {
      en: 'This site was the second project after ActiveBox. At this time, I continued to study and consolidate the basics of layout according to the design template. Here I learned more about using scss and jquery preprocessors. Later, after consolidating the old and gaining new knowledge, I decided to redo it again with better practice. After finishing the course, I want to change it to react.js',
      ru: 'Данный сайт был вторым проектом после ActiveBox. В это время я продолжал изучать и закреплять основы вёрстки по шаблону дизайна. Тут я больше учился пользоваться препроцессорами scss и jquery. Позже, после закрепления старых и получения новых знаний, я решил переделать его снова с более лучшей практикой. После окончания курса хочу переделать его на react.js',
      pl: 'pl version is none now..'
    }
  },
  {
    id: 3,
    name: 'Designer Portfolio',
    category: 'Lending',
    date: '2022-11-23',
    website_link: '../../src/portfolio/lending/designer-portfolio/index.html',
    img_src: designerPortfolio_preview,
    modal_images: designerPortfolio_slides,
    description: {
      en: 'This site was the third of the same series of lessons on layout. At this time, I was perfecting old skills and trying to learn something new. Here I learned more to program logic, functionality and animations in JavaScript and css. Later, also after consolidating the old and gaining new knowledge, I decided to redo it again with better practice. After finishing the course, I want to change it to react.js . This site is a template for my portfolio, which I plan to release in a new version through new technologies such as react, libraries, new skills and abilities.',
      ru: 'Данный сайт был третьим из той самой серии уроков по вёрстке. В это время я совершенствовал старые навыки и пробовал изучать что-то новое. Тут я больше учился программировать логику, функционал и анимации на JavaScript и css. Позже, так же после закрепления старых и получения новых знаний, я решил переделать его снова с более лучшей практикой. После окончания курса хочу переделать его на react.js. Данный сайт является шаблоном для моего портфолио, которое планирую выпустить в новой версии посредством новых технологий, таких как react, библиотек, новых навыков и умений.',
      pl: 'pl version is none now..'
    }
  },
  {
    id: 4,
    name: 'Custom Calculator',
    category: 'App',
    date: '2022-11-23',
    website_link: '../../src/portfolio/app/calculator/index.html',
    img_src: calculator_preview,
    modal_images: calculator_slide,
    description: {
      en: 'I must say right away that this calculator is written very scary, because it was my first platform for learning JavaScript. But despite this, it turned out to implement some of the conceived functions and they work, but there are also bugs. In the future, after further training, I want to redo it.',
      ru: 'Сразу скажу, что данный калькулятор написан очень страшно, потому что это было моей первой площадкой для изучения JavaScript. Но несмотря на это, всё же некоторые задуманные функции получилось реализовать и они работают, но также присутствуют баги. В дальнейшем, после повышения квалификации, я хочу переделать его.',
      pl: 'pl version is none now..'
    }
  },
  {
    id: 5,
    name: 'Todo list',
    category: 'App',
    date: '2022-11-23',
    website_link: '../../src/portfolio/app/todoList/index.html',
    img_src: todoList_preview,
    modal_images: [todoList_preview],
    description: {
      en: 'The project was created in the process of studying at the Junior Frontend course from Vladilen Minima at the Result School. Gained new and valuable work experience and development skills.',
      ru: 'Проект был создан в процессе обучения на курсе "Junior Frontend" от Владилена Минима в Result School. Получил новый и ценный опыт работы и навыки разработки.',
      pl: 'pl version is none now..'
    }
  },
  {
    id: 6,
    name: 'Contects Menu',
    category: 'App',
    date: '2022-11-23',
    website_link: '../../src/portfolio/app/contectsMenu/index.html',
    img_src: contectsMenu_preview,
    modal_images: [contectsMenu_preview],
    description: {
      en: 'The project was created by our team of students on a course from Vladilen Minima at Result School. There was a team competition (hackathon) and the task was to create a context menu, which we coped with perfectly and took first place among the other participating teams. Gained valuable team experience and other development skills.',
      ru: 'Проект был создан нашей командой учеников на курсе от Владилена Минима в Result School. Было соревнование команд (хакатон) и заданием было создать контекстное меню, с чем мы справились отлично и заняли первое место среди других команд участников. Получил ценный опыт работы в команде и другие навыки разработки.',
      pl: 'pl version is none now..'
    }
  },
  {
    id: 7,
    name: 'Weather Widget',
    category: 'App',
    date: '2022-11-23',
    website_link: '../../src/portfolio/app/weather-widget/',
    img_src: weatherWidget_preview,
    modal_images: [
      weatherWidget_preview
    ],
    description: {
      en: 'I improved his skills independently developed a small project proposed during the course.',
      ru: 'Я повышал свои навыки самостоятельно разрабатывал небольшой проект, предложенный на курсе..',
      pl: 'pl version is none now..'
    }
  },
  {
    id: 8,
    name: 'Tic-Tac-Toe',
    category: 'App',
    date: '2022-11-23',
    img_src: ticTacToe_preview,
    modal_images: [

    ],
    description: {
      en: 'I improved his skills independently developed a small project proposed during the course.',
      ru: 'Я повышал свои навыки самостоятельно разрабатывал небольшой проект, предложенный на курсе..',
      pl: 'pl version is none now..'
    }
  },
  {
    id: 9,
    name: 'Social Users Table',
    category: 'App',
    date: '2022-11-23',
    img_src: socialUsersTable_preview,
    modal_images: [

    ],
    description: {
      en: 'The project was created in the process of studying at the Junior Frontend course from Vladilen Minima at the Result School. The creation process is relevant at the current time. At work, I learn react technology, webpack, eslint and libraries like Lodash, router. This is a new and valuable experience of working and gaining development skills. There will also be a production version.',
      ru: 'Проект был создан в процессе обучения на курсе "Junior Frontend" от Владилена Минима в Result School. Процесс создания актуален на текущий момент времени. При работе я учу технологию react, webpack, eslint и библиотеки типа lodash, router. Это новый и ценный опыт работы и получения навыков разработки. Также будет продакшн версия.',
      pl: 'pl version is none now..'
    }
  }
]

const Portfolio = () => {
  return (
    <div className="work" id="work">
      <div className="container">
        <div className="filter">
          <a href="" data-filter className="filter__link active">
            All
          </a>
          <a href="" data-filter className="filter__link">
            Lending
          </a>
          <a href="" data-filter className="filter__link">
            App
          </a>
        </div>

        <div className="portfolio">
          {Object.keys(works).map((work) => (
            <WorkItem key={works[work].id} workItem={works[work]} />
          ))}
        </div>
        {/* <button type="button" id="loadmoreworks" className="work__btn btn-black">LOAD MORE WORK</button> */}
      </div>
    </div>
  )
}

export default Portfolio
