import style from './AboutProject.module.css';
const AboutProject = () => {
  return (
    <div className={style.aboutPageContainer}>
      <div className="col-4">
        You are looking at a project using React Query (TanStack), React Router, and React-i18n. A movie list has been
        added using json-server. You can view each movie and see or add your own comments
      </div>
      <br />
      <img
        src="https://miro.medium.com/v2/resize:fit:1050/1*i3hzpSEiEEMTuWIYviYweQ.png"
        alt="react logo"
        width={400}
        className={style.aboutPageImage}
      />
    </div>
  );
};

export default AboutProject;
