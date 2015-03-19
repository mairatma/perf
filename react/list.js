this.react = {};
this.react.List = React.createClass({
  getInitialState: function () {
    return { items: this.props.items };
  },

  handleClick: function() {
    console.log('react click');
  },

  render: function() {
    var items = [];
    for (var i = 0; i < this.state.items.length; i++) {
      items.push(
        React.createElement('div', { className: 'row', key: 'item' + i, onClick: this.handleClick },
          React.createElement('div', { className: 'col-md-12 test-data' },
            React.createElement('span', {}, this.state.items[i])
          )
        )
      );
    }
    return React.createElement('div', null, items);
  }
});