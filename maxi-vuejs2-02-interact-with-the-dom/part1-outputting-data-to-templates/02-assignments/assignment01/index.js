new Vue ({
    el: '#exercise',
    data: {
        name: 'Zsolti',
        age: 31,
        image: 'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg',
    },

    methods: {
        multiplieAge: function () {
            return this.age*3;
        },

        createRandomFloat: function () {
            return Math.random();
        }
    }
});
