export const state = () => ({
  list: [
    {
      id: 'carnet-du-japon',
      title: 'Carnet du Japon',
      type: 'drawing',
      mainIlluDesktop: require('@/assets/images/projectsImages/carnet-du-japon_mainIllu.jpg'),
      year: 2019,
      tools: [
        {
          name: 'Feutres pinceaux, crayons, papier, aquarelle, feutres, stylos...',
          icon: 'pen',
          category: 'design'
        }
      ],
      description: [
        'Quoi de mieux qu’un carnet de croquis pour immortaliser au mieux <strong class="font-sans--capitalized">mon tout premier voyage au Japon ?</strong>',
        'Ce sont donc ce carnet d’aquarelle de format paysage A5, mes feutres pinceaux, mon aquarelle, ainsi que mes divers crayons, feutres et pinceaux qui ont rejoint mes bagages.',
        'Parcs, musées et autres pauses gourmandes... j’ai fait en sorte de <strong class="font-sans--capitalized">varier les thèmes et les techniques</strong> pour un aspect final diversifié.'
      ],
      imagesGroups: [
        {
          baseImage: require('@/assets/images/projectsImages/carnet-du-japon_imgGroup1.jpg')
        },
        {
          baseImage: require('@/assets/images/projectsImages/carnet-du-japon_imgGroup2.jpg')
        },
        {
          baseImage: require('@/assets/images/projectsImages/carnet-du-japon_imgGroup3.jpg'),
          zoomImages: [
            require('@/assets/images/projectsImages/carnet-du-japon_imgGroup4_zoom1.jpg'),
            require('@/assets/images/projectsImages/carnet-du-japon_imgGroup4_zoom1.jpg')
          ]
        },
        {
          baseImage: require('@/assets/images/projectsImages/carnet-du-japon_imgGroup4.jpg'),
          zoomImages: [
            require('@/assets/images/projectsImages/carnet-du-japon_imgGroup4_zoom1.jpg')
          ]
        },
        {
          baseImage: require('@/assets/images/projectsImages/carnet-du-japon_imgGroup5.jpg')
        }
      ]
    },
    {
      id: 'les-bleuets',
      title: 'Les bleuets',
      type: 'design',
      mainIlluDesktop: require('@/assets/images/projectsImages/les-bleuets_mainIllu.png'),
      mainIlluMobile: '',
      year: 2017,
      tools: [
        {
          name: 'Illustrator',
          icon: 'adobeillustrator',
          category: 'design'
        },
        {
          name: 'Photoshop',
          icon: 'adobephotoshop',
          category: 'design'
        },
        {
          name: 'HTML5',
          icon: 'html5',
          category: 'code'
        },
        {
          name: 'CSS3',
          icon: 'css3',
          category: 'code'
        }
      ],
      description: [
        'Les Bleuets désigne une <strong class="font-sans--capitalized">salle de réception</strong> située dans le Nord de la France.',
        'Ce nom fait évidemment référence à la fleur mais aussi à la couleur bleue de certains mobiliers et éléments architecturaux du lieu.',
        'C’est donc cette <strong class="font-sans--capitalized">couleur qui est au coeur du design</strong> que je propose ici et que je décline en teintes plus claires, pour transmettre au mieux la douceur du lieu.'
      ],
      imagesGroups: [
        {
          baseImage: require('@/assets/images/projectsImages/les-bleuets_imgGroup1.png')
        },
        {
          baseImage: require('@/assets/images/projectsImages/les-bleuets_imgGroup2.png')
        }
      ],
      fonts: [
        require('@/assets/images/projectsImages/les-bleuets_font1.svg'),
        require('@/assets/images/projectsImages/les-bleuets_font2.svg')
      ],
      colors: [
        {
          name: 'Couleur primaire',
          code: '#00265a'
        },
        {
          name: 'Couleur d\'accent',
          code: '#0198d4'
        },
        {
          name: 'Couleur secondaire',
          code: '#9fd7f1'
        }
      ],
      secondaryImages: [
        require('@/assets/images/projectsImages/les-bleuets_imgSecond1.png'),
        require('@/assets/images/projectsImages/les-bleuets_imgSecond2.png')
      ]
    }
  ]
})
