var AppDispatcher 	= require('../appDispatcher'),
	EventEmitter	= require('events').EventEmitter,
	//TodoConstant	= require('../constants'),
	assign 			= require('object-assign');

var CHANGE_EVENT = 'change';

var _todos = {};

function create(text){
	var id = Date.now();
	_todos[id] = {
		id: id,
		complete: false,
		text: text
	};
};

function destroy(id){
	delete _todos[id];
};

var TodoStore = assign({}, EventEmitter.prototype, {
	getAll: function(){
		return _todos;
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback);
	},
	dispatcherIndex: AppDispatcher.register(function(payload){
		var action = payload.action,
			text;

		switch(action.actionType){
			case 'TodoCreate':
				text = action.text.trim();
				if(text != ''){
					create(text);
					TodoStore.emitChange();
				}
				break;
			case 'TodoDestroy':
				destroy(action.id);
				TodoStore.emitChange();
				break;
		}

		return true;
	})
});

module.exports = TodoStore;