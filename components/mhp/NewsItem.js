import Card from '../ui/Card';
import classes from './NewsItem.module.css';
import Image from 'next/image';
import Button from '../ui/button';

const NewsItem = (props) => {
  const { title, image, date, description, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={'/' + image} alt={title} />
        </div>
        <div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>Date: {humanReadableDate}</time>
          </div>
          <div className={classes.actions}>
            <Button link={exploreLink}>
              <span>Explore</span>
            </Button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default NewsItem;
