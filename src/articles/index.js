import { mesPremieresLignes } from './1'
import { leCommencement } from './2'
import { zoomSurLagilite } from './3'
import { enEcriture } from './99'
import { imageWidthFix } from '../views/Blog/blog.service'
import { lequipeAgile } from './4'

export const articles = [
  {
    id: 1,
    name: 'Mes premières lignes',
    content: imageWidthFix(mesPremieresLignes),
    image: 'https://www.roubaixtourisme.com/wp-content/uploads/2018/10/IMG_0234.jpg',
    alt: 'Vélodrome de Roubaix',
  },
  {
    id: 2,
    name: 'Le commencement : naissance du mouvement AGILE',
    content: imageWidthFix(leCommencement),
    image: 'https://agile-lounge.com/wp-content/uploads/2019/02/1H1-vhBySa5xcsYtueNIgEw.jpeg',
    alt: "Photo d'un moment d'échange lors de l'écriture du manifeste AGILE.",
  },
  {
    id: 3,
    name: 'Zoom : Les valeurs et principes AGILE',
    content: imageWidthFix(zoomSurLagilite),
    image:
      'https://www.astrofiles.net/sites/default/files/styles/max_width_800px/public/2019-06/jumelles.jpg?itok=AEVgvPwF',
    alt: "Photo d'un homme tenant une paire de jumelles.",
  },
  {
    id: 4,
    name: "L'équipe AGILE",
    content: imageWidthFix(lequipeAgile),
    image: 'https://ed-amphora.fr/wp-content/uploads/2015/10/m--l--e.jpg',
    alt: 'mélée de rugby',
  },
  {
    id: 5,
    name: 'En écriture ... ',
    content: imageWidthFix(enEcriture),
    image: 'https://www.vousnousils.fr/wp-content/uploads/2017/07/writing-1209121_640.jpg',
    alt: 'Ecriture',
  },
]
