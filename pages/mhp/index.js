import NewsList from '../../components/mhp/NewsList';
import { getAllEvents } from '../../helpers/api-util';
import mhptitle from './mhptitle.module.css';

const AllNewsPage = (props) => {
  return (
    <div>
      <span className={mhptitle.the}>The</span>
      <br />
      <h1 className={mhptitle.title}>Missing History Project</h1>
      <NewsList news={props.news} />{' '}
    </div>
  );
};

export async function getStaticProps() {
  const articles = await getAllEvents();

  return {
    props: {
      news: articles,
    },
    revalidate: 60,
  };
}

export default AllNewsPage;
