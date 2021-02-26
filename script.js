'use strict'
//
// поверхностное клониронание объекта с помощью SPRED оператора
//
const userGarry = {
    nikname: 'Garry',
    group: 'Dev',
    access: 5,
    admin: false,
}

const userDenis = {...userGarry};
userDenis.nikname = 'Denis'; // объект userDenis = {nikname: "Denis", group: "Dev", access: 5, admin: false}
                             // объект userGarry без изменения