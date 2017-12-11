(function() {
    app.factory('storageFactory', function() {
        return {
            allCosts: [
                {
                    who: 'муж',
                    from: 'Налиные',
                    to: 'Ремонт',
                    sum: 5000,
                    date: '20.12.2017',
                    comment:'',
                },
                {
                    who: 'муж',
                    from: 'Карта Приват',
                    to: 'Машина',
                    sum: 5000,
                    date: '20.12.2017',
                    comment:'',
                },
                {
                    who: 'муж',
                    from: 'Налиные',
                    to: 'Ремонт',
                    sum: 5000,
                    date: '20.12.2017',
                    comment:'',
                },
                {
                    who: 'муж',
                    from: 'Карта Приват',
                    to: 'Машина',
                    sum: 5000,
                    date: '20.12.2017',
                    comment:'',
                },
                {
                    who: 'муж',
                    from: 'Карта Приват',
                    to: 'Машина',
                    sum: 5000,
                    date: '20.12.2017',
                    comment:'',
                },

            ],
            ExpenditureCategory: [
                    {
                        title: 'Ремонт',
                        limitPayment:100,
                        regularPayment: false,
                        sumPayment : 0 ,
                        refillRate: '',
                        datePayment: '',
                        income : ''
                    },
                    {
                        title: 'Питание',
                        limitPayment: 0,
                        regularPayment: false,
                        sumPayment : 0 ,
                        refillRate: '',
                        datePayment: '',
                        income : ''
                    },{
                        title: 'Комуналка',
                        limitPayment: 0,
                        regularPayment: false,
                        sumPayment : 0 ,
                        refillRate: '',
                        datePayment: '',
                        income : ''
                    },
            ],
            income: [
                {
                    title: 'Наличка'
                },
                {
                    title: 'Карта1'
                },
                {
                    title: 'Карта2'
                },
            ],
            templateCosts: [
                {
                    title: 'Сигареты',
                    who: 'муж',
                    from: 'Налиные',
                    to: 'пох',
                    sum: 1000,
                    date: '',
                    comment:'',
                },
                {
                    title: 'Проезд',
                    who: 'муж',
                    from: 'Налиные',
                    to: 'Транспорт',
                    sum: 30,
                    date: '',
                    comment:'',
                },
                {
                    title: 'Наркотики',
                    who: 'муж',
                    from: 'Налиные',
                    to: 'пох',
                    sum: 10000,
                    date: '',
                    comment:'',
                },
                {
                    title: 'Коты',
                    who: 'жена',
                    from: 'Налиные',
                    to: 'пох',
                    sum: 1000000,
                    date: '',
                    comment:'',
                },
            ]
        };
    })
})();

