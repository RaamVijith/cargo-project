import React from "react";
import "../styles/News.css";

const data = [
  {
    id: 1,
    heading: "CURABITUR UISM QISD",
    descr:
      "At our Auto service garage, we are fully appreciate how diffcult occur it is for people to find.",
    Image_name:
      "https://moovlogistics.com/wp-content/uploads/2023/01/022.jpg",
  },
  {
    id: 2,
    heading: "CURABIRUE LOREM UISM QUIS",
    descr:
      "At our Auto service garage, we are fully appreciate how diffcult occur it is for people to find.",
    Image_name:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP0OOIPTys6LMx8GSXgx4vF9DUoYWojFnm0BawAA6tzg&s",
  },
  {
    id: 3,
    heading: "CURABITUR LOREAM IISO",
    descr:
      "At our Auto service garage, we are fully appreciate how diffcult occur it is for people to find.",
    Image_name:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ31-MVo2J0ixEHh3eoZEN7VASYc_LvvFUGBMP2TtykRSKsETk-T_97qqRSw2gJ1GHY0h8&usqp=CAU",
  },
  {
    id: 4,
    heading: "CURABITUR LOREAM IISO",
    descr:
      "At our Auto service garage, we are fully appreciate how diffcult occur it is for people to find.",
    Image_name:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTWArMRpePbSQXKNv0NvmO7VZNRIGawLK9AxUZtqeUrau7HF62Idef7DWXRBWQJrqVc8&usqp=CAU",
  },
];

const News = () => {
  return (
    <section id="news" className="news">
      <div>
        <h1>LATEST NEWS</h1>
      </div>

      <div className="news--box">
        {data.map((item, index) => (
          <div key={index} className="news-content">
          <img src={item.Image_name} alt="ship" />
          <div className="news--right">
          <h3>{item.heading}</h3>
          <p>{item.descr}</p>

          </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
