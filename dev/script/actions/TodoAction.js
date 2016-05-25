var AppDispatcher= require('../appDispatcher');

var TodoAction = module.exports = {
	create: function(text){
		AppDispatcher.handleViewAction({
			actionType: 'TodoCreate',
			text: text
		});
	},

	destroy: function(id){
		AppDispatcher.handleViewAction({
			actionType: 'TodoDestroy',
			id: id
		});
	}
};