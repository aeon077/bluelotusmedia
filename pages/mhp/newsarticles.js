const ARTICLE_DATA = [
  {
    id: 'a1',
    title: 'Tulsa Massacre',
    date: '1921-05-31',
    image:
      'https://blogs.loc.gov/headlinesandheroes/files/2021/05/Tulsa_s-Terrible-Tale-is-Told-The-Chicago-Whip-June-11-1921-768x412.jpg',
    description:
      'Greenwood, a prosperous Black neighborhood in Tulsa, Oklahoma, described as Black Wall Street, was destroyed by white mobs in one of the worst episodes of racial violence in American history.',
  },
  {
    id: 'a2',
    title: 'How the rainbow became a symbol for the LGBTQIA community',
    date: '1978-06-25',
    image:
      'https: //www.rd.com/wp-content/uploads/2018/05/pride-rainbow-flag.jpg?resize=768,508',
    description:
      'Legend says that it all started with a single parade. In 1978, Harvey Milk, a San Francisco city supervisor and the first openly gay politician elected to office in California, asked his friend Gilbert Baker to create a symbol for the LGBTQ+ community. Milk wanted to reveal the new design at the Gay Freedom Pride Parade in San Francisco that year. Baker, a gay rights activist, army veteran, and artist, immediately got to work designing a striped flag with eight colors. According to Baker’s website, each color on the flag had a special meaning: Pink represented sex, red for life, orange for healing, yellow for sunlight, green for nature, turquoise for magic, blue for serenity, and violet represented spirit.',
  },
  {
    id: 'a3',
    title: 'The truth behind the Emancipation Proclamation',
    date: '1863-01-01',
    image:
      'https: //www.rd.com/wp-content/uploads/2017/06/02-emancipation-History-Lies-Your-Teacher-Told-You-5850801ah-The-Art-Archive_REX_Shutterstock.jpg?resize=760,506',
    description:
      'If you thought this historical executive order put the final kibosh on slavery you’d be wrong. “Students think that it ‘freed the slaves,’ but in reality it only applied to those areas still controlled by the Confederacy and so didn’t actually free the slaves directly,” explains William D. Carrigan, chair and professor of history at Rowan University. “What it did was allow the slaves to ‘free themselves’ by running away to Union lines or the North (which between 500,000 and 700,000 did).” Carrigan explains that it was the 13th Amendment that actually put a final end to slavery. However, it wasn’t until December 1865, eight months after Lee surrendered to Grant at the Appomattox Courthouse, that the 13th Amendment was ratified.',
  },
  {
    id: 'a4',
    title: 'Post Civil War Slavery: Sharecropping',
    date: '1865',
    image:
      'https: //www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTc1Nzk0MDcyNTUwNjQ3Njcz/black-codes-gettyimages-640482869.jpg',
    description:
      'However, the system became exploitative to sharecroppers. Farmers with large patches of land, such as old plantation farmers, established a “Plantation Store” on their property. These farmers required all sharecroppers farming on their land to use their store for farming equipment and personal shopping. Prices in these stores were highly inflated. Stores encouraged sharecroppers to buy items with “credit.” In this system, called “crop lien,” the stores charged excessive interest rates on items bought with credit, which could be as high as 15% interest per month. Since many sharecroppers did not have enough disposable income to purchase items during the year, many used this credit extensively. Because of these high interest rates, many did not have disposable income after they paid off their credit line. If the harvest was poor, some sharecroppers remained in debt to the store until the next year. With these exploitative stores, many sharecroppers could not become fully “free” in this system',
  },
];

export function getFeaturedEvents() {
  return ARTICLE_DATA.filter((news) => news.isFeatured);
}

export function getAllEvents() {
  return ARTICLE_DATA;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = ARTICLE_DATA.filter((news) => {
    const eventDate = new Date(news.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return ARTICLE_DATA.find((news) => news.id === id);
}
