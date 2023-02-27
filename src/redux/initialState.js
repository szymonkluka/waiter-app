const initialState = {
  posts: [
    {
      id: '1',
      title: 'Table 1',
      title2: '2',
      author: '1',
      publishedDate: new Date('02-07-2023'),
      category: 'Free',
      description: '45',
      mainContent: 'Main content of the article1',
    },
    {
      id: '2',
      title: 'Table 2',
      title2: '2',
      author: '1',
      publishedDate: new Date('02-07-2023'),
      category: 'Reserved',
      description: '66',
      mainContent: 'Main content of the article2',
    },
    {
      id: '3',
      title: 'Table 3',
      title2: '5',
      author: '4',
      publishedDate: new Date('02-07-2023'),
      category: 'Busy',
      description: '88',
      mainContent: 'Main content of the article3',
    },
    {
      id: '4',
      title: 'Table 4',
      title2: '4',
      author: '4',
      publishedDate: new Date('26-02-2023'),
      category: 'Cleaning',
      description: '100',
      mainContent: 'Main content of the article3',
    },

  ],

  categories: [
    'Free', 'Reserved', 'Busy', 'Cleaning',
  ],

};

export default initialState;