import NewsItem from './NewsItem.js';
import classes from './NewsList.module.css';

const NewsList = (props) => {
  const { news } = props;

  return (
    <ul className={classes.list}>
      {news.map((articles) => (
        <NewsItem
          key={articles.id}
          id={articles.id}
          image={articles.image}
          title={articles.title}
          date={articles.date}
        />
      ))}
    </ul>
  );
};

export default NewsList;
