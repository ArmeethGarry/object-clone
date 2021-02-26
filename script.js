'use strict'
// -|- КЛОНИРОВАНИЕ ОБЪЕКТА -|-

const userGarry = {
    nikname: 'Garry',
    group: 'Dev',
    access: 5,
    admin: false,
}

//            ПОВЕРХНОСТНОЕ КЛОНИРОВАНИЕ ОБЪЕКТА
// поверхностное клониронание объекта с помощью SPRED оператора

const userDenis = {...userGarry};
userDenis.nikname = 'Denis'; // объект userDenis = {nikname: "Denis", group: "Dev", access: 5, admin: false}
                             // объект userGarry без изменения

// поверхностное клониронание объекта с помощью Object.assign

const userNataly = Object.assign( {}, userGarry );
userNataly.nikname = 'Nataly'; // объект userNataly = {nikname: "Nataly", group: "Test", access: 5, admin: false}
userNataly.group = 'Test';     // объект userGarry остается без изменения

//       ГЛУБОКОЕ КЛОНИРОВАНИЕ ОБЪЕКТА
// глубокое клонирование объекта с помощью JSON

const user = {
    class: '10a',
    teacher: 'Jhon Lenon',
    parents: {
        mom: 'Joan',
        dad: 'Peter',
    }
}

const userAlex = JSON.parse( JSON.stringify( user ) );
userAlex.parents.mom = 'Victoria'; // объект parents примет значение: {mom: "Victoria", dad: "Peter"}
                                   // тогда как исходный останется без изменения