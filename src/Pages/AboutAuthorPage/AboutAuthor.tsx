import style from './AboutAuthor.module.css';
const AboutAuthor = () => {
  return (
    <div className={style.aboutAuthorContainer}>
      <div className="col-4">
        <div className={style.header}>
          <a href="https://git.io/typing-svg">
            <img
              src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&pause=1000&center=true&vCenter=true&repeat=false&random=false&width=435&lines=Hello!+My+name+is+Vlads!"
              alt="Typing SVG"
            />
          </a>
        </div>
        <h6 className={style.smallHeader}>
          At the moment, I am learning the TypeScript programming language and experimenting with React and its features
          in this project. I can't say that everything is going perfectly, but I'm trying. Thank you for dedicating time
          to this project, and all the best to you.
        </h6>
      </div>
    </div>
  );
};

export default AboutAuthor;
