import Content from "./Content";


function allCom() {
  let csContent = [
    {
      id: 1,
      title:
        "FULL STACK DEVELOPEMENT",
      description:
        "Full stack developers can learn a variety of programming languages and frameworks to become a full stack developer.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/01/image-1-768x358.png"
    },
    {
      id: 2,
      title: "CYBER SECURITY",
      description:
        "Cyber security courses can open up career opportunities in cyber security, such as Security Analyst, Security Architect, Penetration Tester, and Incident Response Analyst.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/12/6-2-768x402.png"
    },
    {
      id: 3,
      title:
        "DATA SCIENCE",
      description:
        "Data science can be studied as a stand-alone program or as part of a specialization, such as: AI-ML, Data analytics, Big data.",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/01/Data-Scientist-Zen-Class-Career-Program-768x402.jpeg"
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {csContent.map((content) => {
            return <Content key={content.id} data={content} />;
          })}
        </div>
      </div>
    </>
  );
}

export default allCom;