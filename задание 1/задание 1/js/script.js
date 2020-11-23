ymaps.ready(init);

//Создаем карту с центром в Москве
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.754880, 37.620663],
        zoom: 13
    }, {
        balloonMaxWidth: 200,
        searchControlProvider: 'yandex#search'
    });
    // Выводим информацию о клике 
    myMap.events.add('click', function (e) {
        if (!myMap.balloon.isOpen()) {
            var coords = e.get('coords');
            myMap.balloon.open(coords, {
                contentBody: '<p>Координаты щелчка: ' + [
                    coords[0].toPrecision(6),
                    coords[1].toPrecision(6)
                    ].join(', ') + '</p>',
                contentFooter:'<sup>Чтобы убрать окно, щелкните еще раз</sup>'
            });
        }
        else {
            myMap.balloon.close();
        }
    });
}