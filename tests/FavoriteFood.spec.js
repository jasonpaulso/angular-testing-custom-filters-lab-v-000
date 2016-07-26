describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));
 
    it('should filter the favorite food', function () {
      var foodList = [{
      name: 'Test',
      favoriteFood: 'Potatoes'
    }, {
      name: 'Test 2',
      favoriteFood: 'Bourbon'
    }, {
      name: 'Test 3',
      favoriteFood: 'Oysters'
    }];
    
    var results = $filter('favoriteFood')(foodList, 'Bourbon');

    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Test 2');

    });

	
});
