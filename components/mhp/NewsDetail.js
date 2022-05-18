import classes from './news-detail.module.css';

function NewsContent(props) {
  return <section className={classes.content}>{props.children}</section>;
}

export default NewsContent;
