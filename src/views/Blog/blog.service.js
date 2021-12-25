import { mesPremieresLignes } from '../../articles/1'
import { leCommencement } from '../../articles/2'
import { agiliteAujourdhui } from '../../articles/3'
import { enEcriture } from '../../articles/99'

export const articles = [
  {
    id: 1,
    name: 'Mes premières lignes',
    content: mesPremieresLignes,
    image: 'https://www.roubaixtourisme.com/wp-content/uploads/2018/10/IMG_0234.jpg',
    alt: 'Vélodrome de Roubaix',
  },
  {
    id: 2,
    name: 'Le commencement : naissance du mouvement AGILE',
    content: leCommencement,
    image: 'https://agile-lounge.com/wp-content/uploads/2019/02/1H1-vhBySa5xcsYtueNIgEw.jpeg',
    alt: "Photo d'un moment d'échange lors de l'écriture du manifeste AGILE.",
  },
  {
    id: 3,
    name: 'En écriture',
    content: enEcriture,
    image: 'https://www.vousnousils.fr/wp-content/uploads/2017/07/writing-1209121_640.jpg',
    alt: 'Ecriture',
  },
]
