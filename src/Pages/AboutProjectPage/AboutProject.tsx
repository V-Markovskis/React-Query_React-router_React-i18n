import style from './AboutProject.module.css';
import { Trans, useTranslation } from 'react-i18next';
import i18n from 'i18next';

const language = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
};
const AboutProject = () => {
  const { t } = useTranslation();
  return (
    <div className={style.aboutPageContainer}>
      <div>
        {Object.keys(language).map((lng) => (
          <button
            className="btn btn-primary"
            key={lng}
            style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {language[lng].nativeName}
          </button>
        ))}
      </div>
      <div className="col-4">
        <Trans i18nKey="description.part1">
          You are looking at a project using React Query (TanStack), React Router, and React-i18n. A movie list has been
          added using json-server. You can view each movie and see or add your own comments.
        </Trans>
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
