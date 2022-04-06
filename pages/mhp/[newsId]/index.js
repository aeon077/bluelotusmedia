import { useRouter } from 'next/router';

//our-domain.com/news/detailspage
// brackets make dynamic page/folder
const DetailPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  console.log('newsId', router.query.newsId);

  //send a request to the backend API
  //to fetch the news item with newsId

  return (
    <div>
      {/* <Meta title='About' /> */}
      <h1>Missing History Detail Page</h1>
    </div>
  );
};

export default DetailPage;
