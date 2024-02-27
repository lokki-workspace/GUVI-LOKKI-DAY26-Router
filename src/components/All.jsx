import Card from "./Card";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function allCom() {

  const [activeTab, setActiveTab] = useState('/allCom');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  let csContent = [

    {
    id: 1,
    title:
      "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
    description:
      "Are you someone who’s not interested in coding, but wants to get placed in tech",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
    date: '28 November 2023',
    comment : 'No Comments'
  },
  {
    id: 2,
    title: "10 Best Data Science Frameworks in 2024",
    description:
      "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks-1536x804.webp",
    date: '5 August 2023',
    comment : 'No Comments'
  },
  {
    id: 3,
    title: "Top Product-Based Companies for Data Science Freshers",
    description:
      "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
    date: '10 November 2023',
    comment : 'No Comments'
  },
  {
    id: 4,
    title:
      "What is the Difference between Data Science and Data Engineering?",
    description:
      "India has been making some serious waves in the world of data. Just like the",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
    date: '8 November 2023 ',
    comment : 'No Comments'
  },
  {
    id: 5,
    title:
      "7 Must-Watch Data Science Focused YouTube Channels for Effective Learning",
    description:
      "Data science has become one of the most sought-after skills in the current job market.",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/must-watch-data-science-focused-youtube-channels-1536x804.webp",
    date: '5 August 2023',
    comment : 'No Comments'
  },
  {
    id: 6,
    title:
      "Best Data Science Books to Learn in 2024",
    description:
      "Today, we’re going to talk about something really cool: data science. It’s all about using",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
    date: '26 October 2023',
    comment : 'No Comments'
  },
  {
    id: 7,
    title: "Top Product-Based Companies for Data Scientists in 2024",
    description:
      "We all know about the kind of buzz surrounding data science right now, it is",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
    date: '5 October 2023',
    comment : 'No Comments'
  },
  {
    id: 8,
    title:
      "Useful Python Libraries & Tools for Data Science Beginners",
    description:
      "In a world filled with information, knowing how to understand and use data is super",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp",
    date: '29 September 2023 ',
    comment : 'No Comments'
  },
  {
    id: 9,
    title: "Extraordinary Data Science Projects for Beginners As Well as Veterans",
    description:
      "As the demand for data and the people that can conquer it, i.e. Data Scientists",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
    date: '28 August 2023',
    comment : 'No Comments'
  },
  {
    id: 10,
    title: "Future of Data Science and How You Can Thrive With It",
    description:
      "Data Science has emerged as a revolutionary field in the technology world, transforming the",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Future-of-Data-Science.webp",
    date: '28 August 2023',
    comment : 'No Comments'
  },
  {
    id: 11,
    title: "10 Best Data Science Online Courses for Beginners | 2024",
    description:
      "In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
    date: '14 August 2023',
    comment : 'No Comments'
  },
  {
    id: 12,
    title: "Data Science Webinars and Workshops",
    description:
      "In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops-1536x804.webp",
    date: '9 August 2023',
    comment : 'No Comments'
  },
  {
  id: 13,
  title:
    "Web Components: A Deep Dive into Reusable and Custom Elements [2024]",
  description:
    "As a full-stack developer, have you ever got bored of using the same HTML, CSS,",
  image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp",
  date: '22 January 2024',
  comment : 'No Comments'
},
{
  id: 14,
  title: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
  description:
    "When you’re hiring a full-stack developer, what are the most important things you look for?",
  image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
  date: '15 November 2023',
  comment : 'No Comments'
},
{
  id: 15,
  title: "Top Differences: Full Stack Developer vs Software Engineer 2024",
  description:
    "A Full Stack Developer is a tech all-rounder. They work on both the front and",
  image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
  date: '15 November 2023',
  comment : 'No Comments'
},
{
  id: 16,
  title:
    "Horizontal vs Vertical Scaling for Efficient System Design",
  description:
    "In the world of system design, envision a digital skyscraper – a multifaceted structure built",
  image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
  date: '10 November 2023',
  comment : 'No Comments'
},
{
  id: 17,
  title:
    "Best Books to Learn Full-Stack Development",
  description:
    "Are you interested in becoming a full-stack developer but not sure where to start? In",
  image: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
  date: '9 November 2023',
  comment : 'No Comments'
},
{
  id: 18,
  title:
    "Top 10 Product-Based Companies for Full-Stack Developers [2024]",
  description:
    "In the dynamic landscape of technology, full-stack developers are the architects of the digital world,",
  image: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
  date: '8 November 2023',
  comment : 'No Comments'
},
{
  id: 19,
  title: "7 Best Full-Stack Development Online Courses [2024]",
  description:
    "Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand",
  image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
  date: '31 August 2023',
  comment : 'No Comments'
},
{
  id: 20,
  title:
    "Roles & Responsibilities of Full Stack Developers in 2024",
  description:
    "Do you want to become a full stack developer? If yes, you must definitely know",
  image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/roles_and_responsibilities_of_full_stack_developer_1x.webp",
  date: '12 July 2023',
  comment : 'No Comments'
},
{
  id: 21,
  title: "Best Ways to Learn Full Stack Development in 2024",
  description:
    "Full stack development is and will be a promising and in-demand career in the upcoming",
  image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-1536x804.webp",
  date: '4 August 2023',
  comment : 'No Comments'
},
{
  id: 22,
  title: "How Long Would It Take to Be a Full Stack Developer?",
  description:
    "Have you ever wondered how much time it would take to become a skilled Full",
  image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
  date: '4 August 2023',
  comment : 'No Comments'
},
{
  id: 23,
  title:
    "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
  description:
    "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
  image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
  date: '4 December 2023',
  comment : 'No Comments'
},
{
  id: 24,
  title: "What Is Hacking? Types of Hacking & More",
  description:
    "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
  image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
  date: '25 September 2023',
  comment : 'No Comments'
},

  ];
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link
          to={'/allCom'}
          className={`navbar-brand ps-4 ${activeTab === '/allCom' ? 'active' : ''}`}
          onClick={() => handleTabClick('/allCom')}
        >
          <img width="70" height="15" src="/Images/router.png" className="img-fluid" alt="Guvi-blog-logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-lg-center pe-lg-5 me-lg-5" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to={'/allCom'} className={`nav-link ${activeTab === '/allCom' ? 'active' : ''}`} onClick={() => handleTabClick('/allCom')}>
              All
            </Link>
            <Link to={'/fullStackDevelopment'} className={`nav-link ${activeTab === '/fullStackDevelopment' ? 'active' : ''}`} onClick={() => handleTabClick('/fullStackDevelopment')}>
              Full Stack Development
            </Link>
            <Link to={'/dataScience'} className={`nav-link ${activeTab === '/dataScience' ? 'active' : ''}`} onClick={() => handleTabClick('/dataScience')}>
              Data Science
            </Link>
            <Link to={'/cyberSecurity'} className={`nav-link ${activeTab === '/cyberSecurity' ? 'active' : ''}`} onClick={() => handleTabClick('/cyberSecurity')}>
              Cyber Security
            </Link>
            <Link to={'/career'} className={`nav-link ${activeTab === '/career' ? 'active' : ''}`} onClick={() => handleTabClick('/career')}>
              Career
            </Link>
          </div>
        </div>
      </div>
    </nav>
    <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {csContent.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
      </div>
    </div>

  );
}

export default allCom;