var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'contactItem, box'},
        React.createElement('img', {
          className: 'contactImage, image',
          src: 'http://www.stickpng.com/assets/images/585e4beacb11b227491c3399.png'
        }),
        React.createElement('p', {className: 'contactLabel, name'}, 'Imię: ' + this.props.item.firstName),
        React.createElement('p', {className: 'contactLabel, name'}, 'Nazwisko: ' + this.props.item.lastName),
        React.createElement('a', {className: 'contactEmail, name', href: 'mailto:' + this.props.item.email},
          this.props.item.email
        )
      )
    )
  },
});