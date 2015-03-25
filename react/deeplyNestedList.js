this.react = {};

this.react.DeeplyNestedList = React.createClass({
  getInitialState: function () {
    return { items: this.props.items };
  },

  render: function() {
    var items = [];
    for (var i = 0; i < this.state.items.length; i++) {
      items.push(React.createElement(react.DeeplyNestedListItem, {key: 'item' + i}, [
          React.createElement(
            react.DeeplyNestedListItemContent,
            {text: 'Item #', key: 'itemPrefix' + i}
          ),
          React.createElement(
            react.DeeplyNestedListItemContent,
            {text: this.state.items[i], key: 'itemLabel' + i}
          )
      ]));
    }
    return React.createElement('div', null, items);
  }
});

this.react.DeeplyNestedListItem = React.createClass({
  render: function() {
    return React.createElement('div', {className: 'row'},
      React.createElement('div', {className: 'col-md-12' }, this.props.children)
    );
  }
});

this.react.DeeplyNestedListItemContent = React.createClass({
  render: function() {
    return React.createElement('span', {}, this.props.text);
  }
});