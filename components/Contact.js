var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: 'https://www.google.pl/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiSk_yo0IjfAhVM1SwKHdqRDNsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.onlinewebfonts.com%2Ficon%2F411575&psig=AOvVaw3Rsyf4e2UHGzk9BDmqLH6J&ust=1544097159109941'
        }),
        React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
        React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
        React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
          this.props.item.email
        )
      )
    )
  },
});