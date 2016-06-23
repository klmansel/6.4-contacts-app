var Backbone = require('backbone');
var template = require('../../templates/contactform.hbs');
var $ = require('jquery');

var ContactFormView = Backbone.View.extend({
  tagName: 'form',
  className: 'contact-form col-md-4',
  template: template,
  events: {
    'submit': 'addContact'
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },
  addContact: function(event){
    event.preventDefault();
    this.collection.create({
      email: $('#email').val(),
      name: $('#name').val()
    });
  }
});



module.exports = {
  'ContactFormView': ContactFormView
};
