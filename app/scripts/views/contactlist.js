var Backbone = require('backbone');
var template = require('../../templates/contactlist.hbs');
var $ = require('jquery');

var ContactListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'form-results col-md-4 col-md-offset-2',
  initialize: function(){
    this.listenTo(this.collection,'add', this.renderItem);
  },

  render: function(){
    return this;
  },

  renderItem: function(contact){
    var contactItem = new ContactItemView({model: contact});
    this.$el.append(contactItem.render().el);
  }
});

var ContactItemView = Backbone.View.extend({
  tagName: 'li',
  template: template,

  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  }
});


module.exports = {
  'ContactItemView' : ContactItemView,
  'ContactListView' : ContactListView
};
