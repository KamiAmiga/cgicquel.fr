export const state = () => ({
  list: [
    {
      id: 'test-1',
      title: 'Test 1',
      type: 'drawing',
      mainIlluDesktop: '',
      year: 2020,
      tools: [
        {
          name: 'Pen',
          icon: 'pen',
          category: 'design'
        }
      ],
      description: [
        'Description text part 1',
        'Description text part 2'
      ],
      imagesGroups: []
    },
    {
      id: 'test-2',
      title: 'Test 2',
      type: 'design',
      mainIlluDesktop: '',
      mainIlluMobile: '',
      year: 2020,
      tools: [
        {
          name: 'Pen',
          icon: 'pen',
          category: 'design'
        },
        {
          name: 'HTML5',
          icon: 'html5',
          category: 'code'
        }
      ],
      description: [
        'Description text part 1',
        'Description text part 2'
      ],
      imagesGroups: [],
      fonts: [],
      colors: [
        {
          name: 'Color 1',
          code: '#ffffff'
        },
        {
          name: 'Color 2',
          code: '#000000'
        }
      ],
      secondaryImages: []
    }
  ]
})
