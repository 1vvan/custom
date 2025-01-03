const cardColors = ['#E5EEEF', '#EFEAE5', '#FEFBB7', '#C4BCF4'];

// const cardIcons = [
//     { id: 1, src: '../images/card_icon_1.svg', alt: 'Icon 1', categoryId: 1  },
//     { id: 2, src: '../images/card_icon_2.svg', alt: 'Icon 2', categoryId: 2  },
//     { id: 3, src: '../images/card_icon_3.svg', alt: 'Icon 3', categoryId: 3  },
//     { id: 4, src: '../images/card_icon_4.svg', alt: 'Icon 4', categoryId: 4  },
//     { id: 5, src: '../images/card_icon_1.svg', alt: 'Icon 5', categoryId: 1  },
//     { id: 6, src: '../images/card_icon_2.svg', alt: 'Icon 6', categoryId: 2  },
//     { id: 7, src: '../images/card_icon_3.svg', alt: 'Icon 7', categoryId: 3  },
//     { id: 8, src: '../images/card_icon_4.svg', alt: 'Icon 8', categoryId: 4  },
//     { id: 9, src: '../images/card_icon_1.svg', alt: 'Icon 9', categoryId: 1  },
//     { id: 10, src: '../images/card_icon_2.svg', alt: 'Icon 10', categoryId: 2  },
//     { id: 11, src: '../images/card_icon_3.svg', alt: 'Icon 11', categoryId: 3  },
//     { id: 12, src: '../images/card_icon_4.svg', alt: 'Icon 12', categoryId: 4  },
//     { id: 13, src: '../images/card_icon_1.svg', alt: 'Icon 13', categoryId: 1  },
//     { id: 14, src: '../images/card_icon_2.svg', alt: 'Icon 14', categoryId: 2  },
//     { id: 15, src: '../images/card_icon_3.svg', alt: 'Icon 15', categoryId: 3  },
//     { id: 16, src: '../images/card_icon_4.svg', alt: 'Icon 16', categoryId: 4  },
//     { id: 17, src: '../images/card_icon_3.svg', alt: 'Icon 15', categoryId: 3  },
//     { id: 18, src: '../images/card_icon_4.svg', alt: 'Icon 16', categoryId: 4  },
// ];

// const categories = [
//     { id: 0, name: 'Всі' },
//     { id: 1, name: 'Бізнес' },
//     { id: 2, name: 'Аніме' },
//     { id: 3, name: 'Авто' },
//     { id: 4, name: 'Бізнес' },
//     { id: 5, name: 'Бізнес' },
//     { id: 6, name: 'Бізнес' },
// ];

const cardIcons = [
    { id: 1, src: '../images/guitar-01.svg', alt: 'Icon 1', categoryId: 1  },
    { id: 2, src: '../images/mythical1.svg', alt: 'Icon 2', categoryId: 2  },
    { id: 3, src: '../images/mythical2.svg', alt: 'Icon 2', categoryId: 2  },
    { id: 4, src: '../images/mythical3.svg', alt: 'Icon 2', categoryId: 2  },
    { id: 5, src: '../images/mythical4.svg', alt: 'Icon 2', categoryId: 2  },
    { id: 6, src: '../images/mythical5.svg', alt: 'Icon 2', categoryId: 2  },
    { id: 7, src: '../images/mythical6.svg', alt: 'Icon 2', categoryId: 2  },
    { id: 8, src: '../images/mythical7.svg', alt: 'Icon 2', categoryId: 2  },
    { id: 9, src: '../images/mythical8.svg', alt: 'Icon 2', categoryId: 2  },
    { id: 10, src: '../images/mythical9.svg', alt: 'Icon 2', categoryId: 2  },
    { id: 11, src: '../images/mythical10.svg', alt: 'Icon 2', categoryId: 2  },
    { id: 12, src: '../images/mythical11.svg', alt: 'Icon 2', categoryId: 2  },
    { id: 13, src: '../images/mythical12.svg', alt: 'Icon 2', categoryId: 2  },
    { id: 14, src: '../images/mythical13.svg', alt: 'Icon 2', categoryId: 2  },
    { id: 15, src: '../images/mythical14.svg', alt: 'Icon 2', categoryId: 2  },
    { id: 16, src: '../images/mythical15.svg', alt: 'Icon 2', categoryId: 2  },
    { id: 17, src: '../images/mythical16.svg', alt: 'Icon 2', categoryId: 2  },
    { id: 18, src: '../images/mythical17.svg', alt: 'Icon 2', categoryId: 2  },
    { id: 19, src: '../images/mythical18.svg', alt: 'Icon 2', categoryId: 2  },
    { id: 20, src: '../images/mythical19.svg', alt: 'Icon 2', categoryId: 2  },
    { id: 21, src: '../images/mythical20.svg', alt: 'Icon 2', categoryId: 2  },
    { id: 22, src: '../images/art1.svg', alt: 'Icon 3', categoryId: 3  },
    { id: 23, src: '../images/art2.svg', alt: 'Icon 4', categoryId: 3  },
    { id: 24, src: '../images/art3.svg', alt: 'Icon 5', categoryId: 3  },
    { id: 25, src: '../images/art4.svg', alt: 'Icon 6', categoryId: 3  },
    { id: 26, src: '../images/art5.svg', alt: 'Icon 7', categoryId: 3  },
    { id: 27, src: '../images/art6.svg', alt: 'Icon 8', categoryId: 3  },
    { id: 28, src: '../images/art7.svg', alt: 'Icon 9', categoryId: 3  },
    { id: 29, src: '../images/tarot1.svg', alt: 'Icon 16', categoryId: 4  },
    { id: 30, src: '../images/tarot2.svg', alt: 'Icon 16', categoryId: 4  },
    { id: 31, src: '../images/tarot3.svg', alt: 'Icon 16', categoryId: 4  },
    { id: 32, src: '../images/tarot4.svg', alt: 'Icon 16', categoryId: 4  },
    { id: 33, src: '../images/tarot5.svg', alt: 'Icon 16', categoryId: 4  },
    { id: 34, src: '../images/tarot6.svg', alt: 'Icon 16', categoryId: 4  },
    { id: 35, src: '../images/tarot7.svg', alt: 'Icon 16', categoryId: 4  },
    { id: 36, src: '../images/tarot8.svg', alt: 'Icon 16', categoryId: 4  },
    { id: 37, src: '../images/moto1.svg', alt: 'Icon 10', categoryId: 5  },
    { id: 38, src: '../images/moto2.svg', alt: 'Icon 11', categoryId: 5  },
    { id: 39, src: '../images/moto3.svg', alt: 'Icon 12', categoryId: 5  },
    { id: 40, src: '../images/moto4.svg', alt: 'Icon 13', categoryId: 5  },
    { id: 41, src: '../images/moto5.svg', alt: 'Icon 14', categoryId: 5  },
    { id: 42, src: '../images/moto6.svg', alt: 'Icon 15', categoryId: 5  },
    { id: 43, src: '../images/moto7.svg', alt: 'Icon 16', categoryId: 5  },
    { id: 44, src: '../images/nature1.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 45, src: '../images/nature2.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 46, src: '../images/nature3.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 47, src: '../images/nature4.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 48, src: '../images/nature5.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 49, src: '../images/nature6.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 50, src: '../images/nature7.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 51, src: '../images/nature8.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 52, src: '../images/nature9.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 53, src: '../images/nature10.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 54, src: '../images/nature11.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 55, src: '../images/nature12.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 56, src: '../images/nature13.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 57, src: '../images/nature14.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 58, src: '../images/nature15.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 59, src: '../images/nature16.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 60, src: '../images/nature17.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 61, src: '../images/nature18.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 62, src: '../images/nature19.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 63, src: '../images/nature20.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 64, src: '../images/nature21.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 65, src: '../images/nature22.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 66, src: '../images/nature23.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 67, src: '../images/nature24.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 68, src: '../images/nature25.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 69, src: '../images/nature26.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 70, src: '../images/nature27.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 71, src: '../images/nature28.svg', alt: 'Icon 15', categoryId: 6  },
    { id: 72, src: '../images/dragons1.svg', alt: 'Icon 15', categoryId: 7  },
    { id: 73, src: '../images/dragons2.svg', alt: 'Icon 15', categoryId: 7  },
    { id: 74, src: '../images/dragons3.svg', alt: 'Icon 15', categoryId: 7  },
    { id: 75, src: '../images/anime1.svg', alt: 'Icon 15', categoryId: 8  },
    { id: 76, src: '../images/anime2.svg', alt: 'Icon 15', categoryId: 8  },
    { id: 77, src: '../images/anime3.svg', alt: 'Icon 15', categoryId: 8  },
    { id: 78, src: '../images/anime4.svg', alt: 'Icon 15', categoryId: 8  },
    { id: 79, src: '../images/anime5.svg', alt: 'Icon 15', categoryId: 8  },
    { id: 80, src: '../images/anime6.svg', alt: 'Icon 15', categoryId: 8  },
    { id: 81, src: '../images/anime7.svg', alt: 'Icon 15', categoryId: 8  },
    { id: 82, src: '../images/anime8.svg', alt: 'Icon 15', categoryId: 8  },
    { id: 83, src: '../images/anime9.svg', alt: 'Icon 15', categoryId: 8  },
    { id: 84, src: '../images/varia1.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 85, src: '../images/varia2.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 86, src: '../images/varia3.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 87, src: '../images/varia4.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 88, src: '../images/varia5.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 89, src: '../images/varia6.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 90, src: '../images/varia7.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 91, src: '../images/varia8.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 92, src: '../images/varia9.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 93, src: '../images/varia10.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 94, src: '../images/varia11.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 95, src: '../images/varia12.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 96, src: '../images/varia13.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 97, src: '../images/varia14.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 98, src: '../images/varia15.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 99, src: '../images/varia16.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 100, src: '../images/varia17.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 101, src: '../images/varia18.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 102, src: '../images/varia19.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 103, src: '../images/varia20.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 104, src: '../images/varia21.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 105, src: '../images/varia22.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 106, src: '../images/varia23.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 107, src: '../images/varia24.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 108, src: '../images/varia25.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 109, src: '../images/varia26.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 110, src: '../images/varia27.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 111, src: '../images/varia28.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 112, src: '../images/varia29.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 113, src: '../images/varia30.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 114, src: '../images/varia31.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 115, src: '../images/varia32.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 116, src: '../images/varia33.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 117, src: '../images/varia34.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 118, src: '../images/varia35.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 119, src: '../images/varia36.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 120, src: '../images/varia37.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 121, src: '../images/varia38.svg', alt: 'Icon 15', categoryId: 9  },
    { id: 122, src: '../images/shopping1.svg', alt: 'Icon 15', categoryId: 10  },
    { id: 123, src: '../images/shopping2.svg', alt: 'Icon 15', categoryId: 10  },
    { id: 124, src: '../images/citation1.svg', alt: 'Icon 15', categoryId: 11  },
    { id: 125, src: '../images/citation2.svg', alt: 'Icon 15', categoryId: 11  },
    { id: 126, src: '../images/citation3.svg', alt: 'Icon 15', categoryId: 11  },
    { id: 127, src: '../images/citation4.svg', alt: 'Icon 15', categoryId: 11  },
    { id: 128, src: '../images/citation5.svg', alt: 'Icon 15', categoryId: 11  },
    { id: 129, src: '../images/citation6.svg', alt: 'Icon 15', categoryId: 11  },
    { id: 130, src: '../images/citation7.svg', alt: 'Icon 15', categoryId: 11  },
    { id: 131, src: '../images/citation8.svg', alt: 'Icon 15', categoryId: 11  },
    { id: 132, src: '../images/games1.svg', alt: 'Icon 15', categoryId: 12  },
    { id: 133, src: '../images/games2.svg', alt: 'Icon 15', categoryId: 12  },
    { id: 134, src: '../images/games3.svg', alt: 'Icon 15', categoryId: 12  },
    { id: 135, src: '../images/games4.svg', alt: 'Icon 15', categoryId: 12  },
    { id: 136, src: '../images/games5.svg', alt: 'Icon 15', categoryId: 12  },
    { id: 137, src: '../images/games6.svg', alt: 'Icon 15', categoryId: 12  },
    { id: 138, src: '../images/games7.svg', alt: 'Icon 15', categoryId: 12  },
    { id: 139, src: '../images/games8.svg', alt: 'Icon 15', categoryId: 12  },
    { id: 140, src: '../images/space1.svg', alt: 'Icon 15', categoryId: 13  },
    { id: 141, src: '../images/space2.svg', alt: 'Icon 15', categoryId: 13  },
    { id: 142, src: '../images/space3.svg', alt: 'Icon 15', categoryId: 13  },
    { id: 143, src: '../images/space4.svg', alt: 'Icon 15', categoryId: 13  },
    { id: 144, src: '../images/space5.svg', alt: 'Icon 15', categoryId: 13  },
    { id: 145, src: '../images/space6.svg', alt: 'Icon 15', categoryId: 13  },
    { id: 146, src: '../images/space7.svg', alt: 'Icon 15', categoryId: 13  },
    { id: 147, src: '../images/space8.svg', alt: 'Icon 15', categoryId: 13  },
    { id: 148, src: '../images/space9.svg', alt: 'Icon 15', categoryId: 13  },
    { id: 151, src: '../images/space12.svg', alt: 'Icon 15', categoryId: 13  },
    { id: 152, src: '../images/space13.svg', alt: 'Icon 15', categoryId: 13  },
    { id: 153, src: '../images/space14.svg', alt: 'Icon 15', categoryId: 13  },
    { id: 155, src: '../images/space16.svg', alt: 'Icon 15', categoryId: 13  },
    { id: 156, src: '../images/animals1.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 157, src: '../images/animals2.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 158, src: '../images/animals3.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 159, src: '../images/animals4.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 160, src: '../images/animals5.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 161, src: '../images/animals6.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 162, src: '../images/animals7.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 163, src: '../images/animals8.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 164, src: '../images/animals9.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 165, src: '../images/animals10.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 166, src: '../images/animals11.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 167, src: '../images/animals12.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 168, src: '../images/animals13.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 169, src: '../images/animals14.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 170, src: '../images/animals15.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 171, src: '../images/animals16.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 172, src: '../images/animals17.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 173, src: '../images/animals18.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 174, src: '../images/animals19.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 175, src: '../images/animals20.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 176, src: '../images/animals21.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 177, src: '../images/animals22.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 178, src: '../images/animals23.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 179, src: '../images/animals24.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 180, src: '../images/animals25.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 181, src: '../images/animals26.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 182, src: '../images/animals27.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 183, src: '../images/animals28.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 184, src: '../images/animals29.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 185, src: '../images/animals30.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 186, src: '../images/animals31.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 187, src: '../images/animals32.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 188, src: '../images/animals33.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 189, src: '../images/animals34.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 190, src: '../images/animals35.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 191, src: '../images/animals36.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 192, src: '../images/animals37.svg', alt: 'Icon 15', categoryId: 14  },
    { id: 193, src: '../images/brands1.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 194, src: '../images/brands2.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 195, src: '../images/brands3.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 196, src: '../images/brands4.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 197, src: '../images/brands5.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 198, src: '../images/brands6.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 199, src: '../images/brands7.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 200, src: '../images/brands8.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 201, src: '../images/brands9.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 202, src: '../images/brands10.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 203, src: '../images/brands11.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 204, src: '../images/brands12.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 205, src: '../images/brands13.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 206, src: '../images/brands14.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 207, src: '../images/brands15.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 208, src: '../images/brands16.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 209, src: '../images/brands17.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 210, src: '../images/brands18.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 211, src: '../images/brands19.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 212, src: '../images/brands20.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 213, src: '../images/brands21.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 214, src: '../images/brands22.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 215, src: '../images/brands23.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 216, src: '../images/brands24.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 217, src: '../images/brands25.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 218, src: '../images/brands26.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 219, src: '../images/brands27.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 220, src: '../images/brands28.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 221, src: '../images/brands29.svg', alt: 'Icon 15', categoryId: 15  },
    { id: 222, src: '../images/horoscope1.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 223, src: '../images/horoscope2.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 224, src: '../images/horoscope3.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 225, src: '../images/horoscope4.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 226, src: '../images/horoscope5.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 227, src: '../images/horoscope6.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 228, src: '../images/horoscope7.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 229, src: '../images/horoscope8.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 230, src: '../images/horoscope9.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 231, src: '../images/horoscope10.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 232, src: '../images/horoscope11.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 233, src: '../images/horoscope12.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 234, src: '../images/horoscope13.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 235, src: '../images/horoscope14.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 236, src: '../images/horoscope15.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 237, src: '../images/horoscope16.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 238, src: '../images/horoscope17.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 239, src: '../images/horoscope18.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 240, src: '../images/horoscope19.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 241, src: '../images/horoscope20.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 242, src: '../images/horoscope21.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 243, src: '../images/horoscope22.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 244, src: '../images/horoscope23.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 245, src: '../images/horoscope24.svg', alt: 'Icon 15', categoryId: 16  },
    { id: 247, src: '../images/cities2.svg', alt: 'Icon 15', categoryId: 17  },
    { id: 249, src: '../images/cities4.svg', alt: 'Icon 15', categoryId: 17  },
    { id: 250, src: '../images/cities5.svg', alt: 'Icon 15', categoryId: 17  },
    { id: 251, src: '../images/cities6.svg', alt: 'Icon 15', categoryId: 17  },
    { id: 252, src: '../images/cities7.svg', alt: 'Icon 15', categoryId: 17  },
    { id: 253, src: '../images/cities8.svg', alt: 'Icon 15', categoryId: 17  },
    { id: 254, src: '../images/cities9.svg', alt: 'Icon 15', categoryId: 17  },
    { id: 255, src: '../images/cities10.svg', alt: 'Icon 15', categoryId: 17  },
    { id: 256, src: '../images/cities11.svg', alt: 'Icon 15', categoryId: 17  },
    { id: 258, src: '../images/cities13.svg', alt: 'Icon 15', categoryId: 17  },
    { id: 259, src: '../images/cities14.svg', alt: 'Icon 15', categoryId: 17  },
    { id: 260, src: '../images/cities15.svg', alt: 'Icon 15', categoryId: 17  },
    { id: 261, src: '../images/cities16.svg', alt: 'Icon 15', categoryId: 17  },
    { id: 265, src: '../images/money1.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 266, src: '../images/money2.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 267, src: '../images/money3.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 268, src: '../images/money4.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 269, src: '../images/money5.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 270, src: '../images/money6.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 271, src: '../images/money7.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 272, src: '../images/money8.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 273, src: '../images/money9.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 274, src: '../images/money10.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 275, src: '../images/money11.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 276, src: '../images/money12.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 277, src: '../images/money13.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 278, src: '../images/money14.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 279, src: '../images/money15.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 280, src: '../images/money16.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 281, src: '../images/money17.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 282, src: '../images/money18.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 283, src: '../images/money19.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 284, src: '../images/money20.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 285, src: '../images/money21.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 286, src: '../images/money22.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 287, src: '../images/money23.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 288, src: '../images/money24.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 289, src: '../images/money25.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 290, src: '../images/money26.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 291, src: '../images/money27.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 292, src: '../images/money28.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 293, src: '../images/money29.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 294, src: '../images/money30.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 295, src: '../images/money31.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 296, src: '../images/money32.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 297, src: '../images/money33.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 298, src: '../images/money34.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 299, src: '../images/money35.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 300, src: '../images/money36.svg', alt: 'Icon 15', categoryId: 18  },
    { id: 301, src: '../images/abstract1.svg', alt: 'Icon 15', categoryId: 19  },
    { id: 302, src: '../images/abstract2.svg', alt: 'Icon 15', categoryId: 19  },
    { id: 303, src: '../images/abstract3.svg', alt: 'Icon 15', categoryId: 19  },
    { id: 304, src: '../images/abstract4.svg', alt: 'Icon 15', categoryId: 19  },
    { id: 305, src: '../images/abstract5.svg', alt: 'Icon 15', categoryId: 19  },
    { id: 306, src: '../images/abstract6.svg', alt: 'Icon 15', categoryId: 19  },
    { id: 307, src: '../images/abstract7.svg', alt: 'Icon 15', categoryId: 19  },
    { id: 308, src: '../images/abstract8.svg', alt: 'Icon 15', categoryId: 19  },
    { id: 309, src: '../images/abstract9.svg', alt: 'Icon 15', categoryId: 19  },
    { id: 310, src: '../images/abstract10.svg', alt: 'Icon 15', categoryId: 19  },
    { id: 311, src: '../images/abstract11.svg', alt: 'Icon 15', categoryId: 19  },
    { id: 312, src: '../images/abstract12.svg', alt: 'Icon 15', categoryId: 19  },
    { id: 313, src: '../images/abstract13.svg', alt: 'Icon 15', categoryId: 19  },
    { id: 314, src: '../images/abstract14.svg', alt: 'Icon 15', categoryId: 19  },
    { id: 315, src: '../images/abstract15.svg', alt: 'Icon 15', categoryId: 19  },
    { id: 316, src: '../images/sport1.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 317, src: '../images/sport2.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 318, src: '../images/sport3.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 319, src: '../images/sport4.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 320, src: '../images/sport5.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 321, src: '../images/sport6.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 322, src: '../images/sport7.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 323, src: '../images/sport8.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 324, src: '../images/sport9.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 325, src: '../images/sport10.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 326, src: '../images/sport11.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 327, src: '../images/sport12.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 328, src: '../images/sport13.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 329, src: '../images/sport14.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 330, src: '../images/sport15.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 331, src: '../images/sport16.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 332, src: '../images/sport17.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 333, src: '../images/sport18.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 334, src: '../images/sport19.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 335, src: '../images/sport20.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 336, src: '../images/sport21.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 337, src: '../images/sport22.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 338, src: '../images/sport23.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 339, src: '../images/sport24.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 340, src: '../images/sport25.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 341, src: '../images/sport26.svg', alt: 'Icon 15', categoryId: 20  },
    { id: 342, src: '../images/IT1.svg', alt: 'Icon 15', categoryId: 21  },
    { id: 343, src: '../images/IT2.svg', alt: 'Icon 15', categoryId: 21  },
    { id: 344, src: '../images/IT3.svg', alt: 'Icon 15', categoryId: 21  },
    { id: 345, src: '../images/IT4.svg', alt: 'Icon 15', categoryId: 21  },
    { id: 346, src: '../images/IT5.svg', alt: 'Icon 15', categoryId: 21  },
    { id: 347, src: '../images/IT6.svg', alt: 'Icon 15', categoryId: 21  },
    { id: 248, src: '../images/IT7.svg', alt: 'Icon 15', categoryId: 21  },
    { id: 349, src: '../images/movie1.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 350, src: '../images/movie2.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 351, src: '../images/movie3.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 352, src: '../images/movie4.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 353, src: '../images/movie5.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 354, src: '../images/movie6.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 355, src: '../images/movie7.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 356, src: '../images/movie8.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 357, src: '../images/movie9.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 358, src: '../images/movie10.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 359, src: '../images/movie11.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 360, src: '../images/movie12.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 361, src: '../images/movie13.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 362, src: '../images/movie14.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 363, src: '../images/movie15.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 364, src: '../images/movie16.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 365, src: '../images/movie17.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 366, src: '../images/movie18.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 367, src: '../images/movie19.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 368, src: '../images/movie20.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 369, src: '../images/movie21.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 370, src: '../images/movie22.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 371, src: '../images/movie23.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 372, src: '../images/movie24.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 373, src: '../images/movie25.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 374, src: '../images/movie26.svg', alt: 'Icon 15', categoryId: 22  },
    { id: 375, src: '../images/cars1.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 376, src: '../images/cars2.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 377, src: '../images/cars3.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 378, src: '../images/cars4.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 379, src: '../images/cars5.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 380, src: '../images/cars6.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 381, src: '../images/cars7.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 382, src: '../images/cars8.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 383, src: '../images/cars9.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 384, src: '../images/cars10.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 385, src: '../images/cars11.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 386, src: '../images/cars12.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 387, src: '../images/cars13.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 388, src: '../images/cars14.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 389, src: '../images/cars15.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 390, src: '../images/cars16.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 391, src: '../images/cars17.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 392, src: '../images/cars18.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 393, src: '../images/cars19.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 394, src: '../images/cars20.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 395, src: '../images/cars21.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 396, src: '../images/cars22.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 397, src: '../images/cars23.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 398, src: '../images/cars24.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 399, src: '../images/cars25.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 400, src: '../images/cars26.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 401, src: '../images/cars27.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 402, src: '../images/cars28.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 403, src: '../images/cars29.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 404, src: '../images/cars30.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 405, src: '../images/cars31.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 406, src: '../images/cars32.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 407, src: '../images/cars33.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 408, src: '../images/cars34.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 409, src: '../images/cars35.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 410, src: '../images/cars36.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 411, src: '../images/cars37.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 412, src: '../images/cars38.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 413, src: '../images/cars39.svg', alt: 'Icon 15', categoryId: 23  },
    { id: 414, src: '../images/cars40.svg', alt: 'Icon 15', categoryId: 23  },


];

const categories = [
    { id: 0, name: 'Всі' },
    { id: 1, name: 'Музика' },
    { id: 2, name: 'Містика' },
    { id: 3, name: 'Мистецтво' },
    { id: 4, name: 'Таро' },
    { id: 5, name: 'Мото' },
    { id: 6, name: 'Природа' },
    { id: 7, name: 'Дракон' },
    { id: 8, name: 'Аніме' },
    { id: 9, name: 'Різне' },
    { id: 10, name: 'Шопінг' },
    { id: 11, name: 'Написи' },
    { id: 12, name: 'Ігри' },
    { id: 13, name: 'Космос' },
    { id: 14, name: 'Тварини' },
    { id: 15, name: 'Бренди' },
    { id: 16, name: 'Гороскопи' },
    { id: 17, name: 'Міста' },
    { id: 18, name: 'Гроші' },
    { id: 19, name: 'Абстракія' },
    { id: 20, name: 'Спорт' },
    { id: 21, name: 'IT' },
    { id: 22, name: 'Фільми' },
    { id: 23, name: 'Машини' },
];

const promocodes = [
    { code: 'EXAMPLE', discount: 0.20 },
    { code: 'TEST', discount: 0.15 }
];


export default {
    colors: cardColors,
    icons: cardIcons,
    categories: categories,
    promocodes: promocodes
};
